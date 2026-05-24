/* ============================================
   Enquiry Form Handler
   Sends form data to the provided API endpoint
   ============================================ */

function initEnquiryForm() {
  const form = document.getElementById('enquiryForm');
  if (!form) return;

  const phoneInput = form.querySelector('#formPhone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function() {
      this.value = this.value.replace(/[^0-9]/g, '');
      if (this.value.length > 10) this.value = this.value.slice(0, 10);
    });
    phoneInput.addEventListener('keypress', function(e) {
      if (!/[0-9]/.test(e.key)) e.preventDefault();
    });
    phoneInput.addEventListener('paste', function(e) {
      e.preventDefault();
      var paste = (e.clipboardData || window.clipboardData).getData('text');
      var digits = paste.replace(/[^0-9]/g, '').slice(0, 10);
      this.value = digits;
    });
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    const statusEl = document.getElementById('formStatus');

    const name = form.querySelector('#formName').value.trim();
    const email = form.querySelector('#formEmail') ? form.querySelector('#formEmail').value.trim() : '';
    const phone = form.querySelector('#formPhone').value.trim();
    const countryCodeEl = form.querySelector('#formCountryCode');
    const countryCode = countryCodeEl ? countryCodeEl.value : '+91';
    const service = form.querySelector('#formService').value;
    const message = form.querySelector('#formMessage').value.trim();

    if (!name) {
      showStatus(statusEl, 'Please enter your full name.', 'error');
      return;
    }

    if (!phone) {
      showStatus(statusEl, 'Please enter your phone number.', 'error');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      showStatus(statusEl, 'Please enter a valid 10-digit phone number.', 'error');
      return;
    }

    if (!service) {
      showStatus(statusEl, 'Please select a product or service.', 'error');
      return;
    }

    if (!message) {
      showStatus(statusEl, 'Please enter your message.', 'error');
      return;
    }

    if (email && !isValidEmail(email)) {
      showStatus(statusEl, 'Please enter a valid email address.', 'error');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
      </svg>
      Sending...
    `;

    try {
      const fullPhone = countryCode + ' ' + phone;
      const fields = {
        'Name': name,
        'Phone': fullPhone,
        'Service': service,
        'Message': message
      };
      if (email) fields['Email'] = email;

      const response = await fetch('https://piwebtechnology.com/send-form-mail?company=viradiyaassociates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'info@viradiyaassociates.co.in',
          subject: `Contact Form - ${service}`,
          fields: fields
        })
      });

      if (response.ok) {
        showStatus(statusEl, 'Thank you! Your enquiry has been sent successfully. We\'ll get back to you soon.', 'success');
        form.reset();
      } else {
        throw new Error('Server returned an error');
      }
    } catch (err) {
      showStatus(statusEl, 'Something went wrong. Please try again or contact us directly at info@viradiyaassociates.co.in', 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  });
}

function showStatus(el, message, type) {
  if (!el) return;
  
  el.className = `mt-4 p-4 rounded-xl text-sm font-medium transition-all duration-300 ${
    type === 'success'
      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
      : 'bg-red-50 text-red-700 border border-red-200'
  }`;
  el.textContent = message;
  el.style.display = 'block';

  if (type === 'success') {
    setTimeout(() => {
      el.style.display = 'none';
    }, 5000);
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document.addEventListener('DOMContentLoaded', initEnquiryForm);
