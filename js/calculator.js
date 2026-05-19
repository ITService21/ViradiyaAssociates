/* ============================================
   Realtime Loan EMI Calculator
   Computes EMI, total interest, total payment
   with live updates via range sliders + inputs
   ============================================ */

function initCalculator() {
  const loanAmountRange = document.getElementById('loanAmountRange');
  const loanAmountInput = document.getElementById('loanAmountInput');
  const interestRateRange = document.getElementById('interestRateRange');
  const interestRateInput = document.getElementById('interestRateInput');
  const loanTenureRange = document.getElementById('loanTenureRange');
  const loanTenureInput = document.getElementById('loanTenureInput');

  if (!loanAmountRange) return;

  /* Sync range and input field bidirectionally */
  function syncInputs(range, input) {
    range.addEventListener('input', () => {
      input.value = range.value;
      calculateEMI();
    });

    input.addEventListener('input', () => {
      let val = parseFloat(input.value);
      const min = parseFloat(range.min);
      const max = parseFloat(range.max);

      if (isNaN(val)) return;
      if (val < min) val = min;
      if (val > max) val = max;

      range.value = val;
      input.value = val;
      calculateEMI();
    });

    input.addEventListener('blur', () => {
      let val = parseFloat(input.value);
      if (isNaN(val)) val = parseFloat(range.min);
      const min = parseFloat(range.min);
      const max = parseFloat(range.max);
      val = Math.max(min, Math.min(max, val));
      input.value = val;
      range.value = val;
      calculateEMI();
    });
  }

  syncInputs(loanAmountRange, loanAmountInput);
  syncInputs(interestRateRange, interestRateInput);
  syncInputs(loanTenureRange, loanTenureInput);

  function calculateEMI() {
    const P = parseFloat(loanAmountRange.value);
    const annualRate = parseFloat(interestRateRange.value);
    const tenureYears = parseFloat(loanTenureRange.value);
    const N = tenureYears * 12;
    const R = annualRate / 12 / 100;

    let emi, totalPayment, totalInterest;

    if (R === 0) {
      emi = P / N;
      totalPayment = P;
      totalInterest = 0;
    } else {
      emi = P * R * Math.pow(1 + R, N) / (Math.pow(1 + R, N) - 1);
      totalPayment = emi * N;
      totalInterest = totalPayment - P;
    }

    // Update display values
    const emiEl = document.getElementById('emiResult');
    const principalEl = document.getElementById('principalResult');
    const interestEl = document.getElementById('interestResult');
    const totalEl = document.getElementById('totalResult');

    if (emiEl) emiEl.textContent = formatCurrency(emi);
    if (principalEl) principalEl.textContent = formatCurrency(P);
    if (interestEl) interestEl.textContent = formatCurrency(totalInterest);
    if (totalEl) totalEl.textContent = formatCurrency(totalPayment);

    updatePieChart(P, totalInterest);
    updateAmortizationPreview(P, annualRate, tenureYears);
  }

  function formatCurrency(amount) {
    return '₹ ' + Math.round(amount).toLocaleString('en-IN');
  }

  /* SVG-based donut chart showing principal vs interest ratio */
  function updatePieChart(principal, interest) {
    const total = principal + interest;
    if (total === 0) return;

    const principalPercent = (principal / total) * 100;
    const interestPercent = (interest / total) * 100;

    const circle1 = document.getElementById('pieSlice1');
    const circle2 = document.getElementById('pieSlice2');
    const centerText = document.getElementById('pieCenterText');

    if (!circle1 || !circle2) return;

    const circumference = 2 * Math.PI * 70;
    const principalLen = (principalPercent / 100) * circumference;
    const interestLen = (interestPercent / 100) * circumference;

    circle1.style.strokeDasharray = `${principalLen} ${circumference}`;
    circle1.style.strokeDashoffset = '0';

    circle2.style.strokeDasharray = `${interestLen} ${circumference}`;
    circle2.style.strokeDashoffset = `-${principalLen}`;

    if (centerText) {
      centerText.textContent = `${Math.round(principalPercent)}%`;
    }

    const legendPrincipal = document.getElementById('legendPrincipal');
    const legendInterest = document.getElementById('legendInterest');
    if (legendPrincipal) legendPrincipal.textContent = `${principalPercent.toFixed(1)}%`;
    if (legendInterest) legendInterest.textContent = `${interestPercent.toFixed(1)}%`;
  }

  /* Shows a brief amortization schedule (first 3 + last year) */
  function updateAmortizationPreview(principal, annualRate, tenureYears) {
    const container = document.getElementById('amortizationPreview');
    if (!container) return;

    const N = tenureYears * 12;
    const R = annualRate / 12 / 100;

    let emi;
    if (R === 0) {
      emi = principal / N;
    } else {
      emi = principal * R * Math.pow(1 + R, N) / (Math.pow(1 + R, N) - 1);
    }

    let balance = principal;
    const yearlyData = [];

    for (let month = 1; month <= N; month++) {
      const interestPart = balance * R;
      const principalPart = emi - interestPart;
      balance -= principalPart;

      if (month % 12 === 0 || month === N) {
        yearlyData.push({
          year: Math.ceil(month / 12),
          balance: Math.max(0, balance),
          principalPaid: principal - Math.max(0, balance),
        });
      }
    }

    let html = '';
    const displayYears = yearlyData.length <= 5 ? yearlyData : [
      ...yearlyData.slice(0, 3),
      { year: '...', balance: null, principalPaid: null },
      yearlyData[yearlyData.length - 1]
    ];

    displayYears.forEach(item => {
      if (item.balance === null) {
        html += `<div class="text-center text-slate-400 py-2">...</div>`;
      } else {
        const paidPercent = (item.principalPaid / principal * 100).toFixed(0);
        html += `
          <div class="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
            <span class="text-sm font-medium text-slate-600">Year ${item.year}</span>
            <div class="flex-1 mx-4">
              <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full transition-all duration-500" style="width: ${paidPercent}%"></div>
              </div>
            </div>
            <span class="text-sm font-semibold text-slate-800">${formatCurrency(item.balance)}</span>
          </div>
        `;
      }
    });

    container.innerHTML = html;
  }

  // Initial calculation
  calculateEMI();
}

document.addEventListener('DOMContentLoaded', initCalculator);
