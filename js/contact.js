/**
 * CHOCO. — CONTACT FORM INTERACTIVE VALIDATION LOGIC
 * Seamless validation, interactive feedback, loading state,
 * and custom ticket confirmation matching Framer specifications.
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
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');

  const groupName = document.getElementById('group-name');
  const groupEmail = document.getElementById('group-email');
  const groupSubject = document.getElementById('group-subject');
  const groupMessage = document.getElementById('group-message');

  // Pre-fill message or service from query parameter if present
  const urlParams = new URLSearchParams(window.location.search);
  const serviceParam = urlParams.get('service');
  if (serviceParam) {
    const formattedService = serviceParam.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    if (subjectInput) {
      subjectInput.value = `Enquiry: ${formattedService}`;
    }
    if (messageInput) {
      messageInput.value = `Hello Choco team,\n\nI am interested in your ${formattedService} service for an upcoming occasion. Here are our initial details:\n\n- Date/Timeline: \n- Estimated Guests/Quantity: \n- Flavour Preferences: `;
    }
    updateSubmitButtonState();
  }

  // Real-time button text update based on input
  function updateSubmitButtonState() {
    const hasName = nameInput && nameInput.value.trim().length > 0;
    const hasEmail = emailInput && emailInput.value.trim().length > 0;
    const hasSubject = subjectInput && subjectInput.value.trim().length > 0;
    const hasMessage = messageInput && messageInput.value.trim().length > 0;

    if (submitBtnText) {
      if (hasName && hasEmail && hasSubject && hasMessage) {
        submitBtnText.textContent = 'Send Enquiry';
      } else {
        submitBtnText.textContent = 'Check Required Fields';
      }
    }
  }

  [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
    if (!input) return;
    input.addEventListener('input', () => {
      updateSubmitButtonState();
      const group = input.closest('.form-group');
      if (group && group.classList.contains('has-error')) {
        validateField(input);
      }
    });

    input.addEventListener('blur', () => {
      validateField(input);
    });
  });

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
      isValid = val.length >= 3;
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

    // Pending Loading State
    submitBtn.disabled = true;
    submitBtnText.textContent = 'Submitting Enquiry...';

    setTimeout(() => {
      // Generate unique ticket number
      const randomTicket = Math.floor(10000 + Math.random() * 90000);
      const ticketIdElem = document.getElementById('receipt-ticket-id');
      if (ticketIdElem) {
        ticketIdElem.textContent = `TICKET #CH-${randomTicket}`;
      }

      const summaryElem = document.getElementById('receipt-summary-text');
      if (summaryElem) {
        summaryElem.textContent = `Thank you, ${nameInput.value.trim()}. Your enquiry regarding "${subjectInput.value.trim()}" has been recorded. Our concierge team will reach out to ${emailInput.value.trim()} within 24 hours.`;
      }

      // Hide form, show receipt
      form.style.display = 'none';
      if (successBanner) {
        successBanner.style.display = 'block';
        successBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Reset button state
      submitBtn.disabled = false;
      submitBtnText.textContent = 'Check Required Fields';
    }, 800);
  });

  // Handle New Enquiry / Reset
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
      updateSubmitButtonState();
      nameInput.focus();
    });
  }
}
