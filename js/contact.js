/**
 * CHOCO. — CONTACT FORM CLIENT SCRIPT & VALIDATION
 * Pure client-side validation and feedback for Choco Atelier.
 * 
 * BACKEND INTEGRATION NOTE:
 * To connect a real form backend service (such as Formspree, EmailJS, Web3Forms,
 * or your custom Node/Python backend API), replace the simulated submission timeout
 * in the form 'submit' listener below with a fetch() POST request to your endpoint.
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
});

function initContactForm() {
  const form = document.getElementById('choco-contact-form');
  const successBanner = document.getElementById('contact-success-banner');
  const resetBtn = document.getElementById('btn-new-enquiry');
  const submitBtn = document.getElementById('btn-submit-enquiry');
  const submitBtnText = document.getElementById('submit-btn-text');

  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const phoneInput = document.getElementById('contact-phone');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');

  const groupName = document.getElementById('group-name');
  const groupEmail = document.getElementById('group-email');
  const groupSubject = document.getElementById('group-subject');
  const groupMessage = document.getElementById('group-message');

  // Pre-fill subject and message from URL query parameters (e.g. ?service=corporate-gifting)
  const urlParams = new URLSearchParams(window.location.search);
  const serviceParam = urlParams.get('service');
  const packageParam = urlParams.get('package');

  if (serviceParam && subjectInput) {
    const formatted = serviceParam.replace(/-/g, ' ').toLowerCase();
    if (formatted.includes('corporate')) {
      subjectInput.value = 'Corporate order';
    } else if (formatted.includes('wedding') || formatted.includes('event')) {
      subjectInput.value = 'Wedding or event';
    } else if (formatted.includes('workshop') || formatted.includes('tasting')) {
      subjectInput.value = 'Workshop or tasting';
    } else if (formatted.includes('box') || formatted.includes('hamper')) {
      subjectInput.value = 'Gift box order';
    } else {
      subjectInput.value = 'General enquiry';
    }
  }

  if (packageParam && subjectInput) {
    subjectInput.value = 'Gift box order';
    if (messageInput) {
      messageInput.value = `Hello Choco team,\n\nI would like to order the ${packageParam.replace(/-/g, ' ')} package. Please provide details on delivery timelines and availability.`;
    }
  }

  function validateField(input) {
    const group = input.closest('.form-group');
    if (!group) return false;

    let isValid = false;
    const val = input.value.trim();

    if (input === nameInput) {
      isValid = val.length >= 2;
    } else if (input === emailInput) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(val);
    } else if (input === subjectInput) {
      isValid = val.length > 0;
    } else if (input === messageInput) {
      isValid = val.length >= 5;
    }

    if (isValid) {
      group.classList.remove('has-error');
      group.classList.add('is-valid');
      input.setAttribute('aria-invalid', 'false');
    } else {
      group.classList.add('has-error');
      group.classList.remove('is-valid');
      input.setAttribute('aria-invalid', 'true');
    }

    return isValid;
  }

  [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
    if (!input) return;
    input.addEventListener('input', () => {
      const group = input.closest('.form-group');
      if (group && group.classList.contains('has-error')) {
        validateField(input);
      }
    });

    input.addEventListener('blur', () => {
      validateField(input);
    });
  });

  // Handle Form Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateField(nameInput);
    const isEmailValid = validateField(emailInput);
    const isSubjectValid = validateField(subjectInput);
    const isMessageValid = validateField(messageInput);

    if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
      // Focus first invalid input
      if (!isNameValid) nameInput.focus();
      else if (!isEmailValid) emailInput.focus();
      else if (!isSubjectValid) subjectInput.focus();
      else if (!isMessageValid) messageInput.focus();
      return;
    }

    // Pending UI State
    submitBtn.disabled = true;
    if (submitBtnText) submitBtnText.textContent = 'Sending Message...';

    /*
     * REAL BACKEND SERVICE INTEGRATION:
     * ----------------------------------------------------
     * Example with fetch() to Formspree or EmailJS endpoint:
     * 
     * fetch("https://formspree.io/f/YOUR_FORM_ID", {
     *   method: "POST",
     *   body: new FormData(form),
     *   headers: { 'Accept': 'application/json' }
     * }).then(response => { ... })
     */
    setTimeout(() => {
      // Hide form, show friendly success feedback
      form.style.display = 'none';
      if (successBanner) {
        successBanner.style.display = 'block';
        successBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Reset button
      submitBtn.disabled = false;
      if (submitBtnText) submitBtnText.textContent = 'Send Message';
    }, 700);
  });

  // Handle Send Another Message / Reset
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      [groupName, groupEmail, groupSubject, groupMessage].forEach(group => {
        if (group) {
          group.classList.remove('has-error', 'is-valid');
        }
      });
      [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
        if (input) {
          input.removeAttribute('aria-invalid');
        }
      });
      if (successBanner) successBanner.style.display = 'none';
      form.style.display = 'block';
      nameInput.focus();
    });
  }
}
