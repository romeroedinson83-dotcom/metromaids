// Metro Maids Cleaning Services — site interactions

document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Lead form submission (Formspree-compatible AJAX submit)
const leadForm = document.getElementById('leadForm');
const formStatus = document.getElementById('formStatus');
const submitBtn = document.getElementById('formSubmitBtn');

if (leadForm) {
  leadForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    formStatus.textContent = '';
    formStatus.className = 'form-status';

    if (!leadForm.checkValidity()) {
      leadForm.reportValidity();
      return;
    }

    // Honeypot: if a bot filled this hidden field, silently pretend success
    const honeypot = leadForm.querySelector('input[name="_gotcha"]');
    if (honeypot && honeypot.value) {
      formStatus.textContent = "Thanks! We'll be in touch shortly.";
      formStatus.className = 'form-status success';
      leadForm.reset();
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      const formData = new FormData(leadForm);
      const response = await fetch(leadForm.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        formStatus.textContent = "Thanks! Your request was sent — we'll reply within one business day.";
        formStatus.className = 'form-status success';
        leadForm.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      formStatus.textContent =
        'Something went wrong sending your request. Please call (801) 856-6403 or email contact@metromaidscleaning.com directly.';
      formStatus.className = 'form-status error';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Request Free Quote';
    }
  });
}
