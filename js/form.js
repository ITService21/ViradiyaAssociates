/* ============================================
   Enquiry Form Handler
   Sends form data to the provided API endpoint
   ============================================ */

function initEnquiryForm() {
  const form = document.getElementById('enquiryForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    const statusEl = document.getElementById('formStatus');

    // Gather form values
    const name = form.querySelector('#formName').value.trim();
    const email = form.querySelector('#formEmail').value.trim();
    const phone = form.querySelector('#formPhone').value.trim();
    const service = form.querySelector('#formService').value;
    const message = form.querySelector('#formMessage').value.trim();

    // Basic validation
    if (!name || !email || !phone || !service || !message) {
      showStatus(statusEl, 'Please fill in all fields.', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showStatus(statusEl, 'Please enter a valid email address.', 'error');
      return;
    }

    if (!isValidPhone(phone)) {
      showStatus(statusEl, 'Please enter a valid phone number.', 'error');
      return;
    }

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
      </svg>
      Sending...
    `;

    try {
      const response = await fetch('https://piwebtechnology.com/send-form-mail?company=viradiyaassociates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'info@viradiyaassociates.co.in',
          subject: `Enquiry Form - ${service}`,
          fields: {
            'Name': name,
            'Email': email,
            'Phone': phone,
            'Service': service,
            'Message': message
          }
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

function isValidPhone(phone) {
  return /^[+]?[\d\s-]{8,15}$/.test(phone);
}

document.addEventListener('DOMContentLoaded', initEnquiryForm);
