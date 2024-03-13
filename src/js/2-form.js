const form = document.querySelector('.feedback-form');
try {
  const savedState = JSON.parse(localStorage.getItem('feedback-form-state'));
  form.email.value = (savedState && savedState.email) ?? '';
  form.message.value = (savedState && savedState.message) ?? '';
} catch (error) {
  console.log('Error parsing saved state:');
}

form.addEventListener('input', () => {
  try {
    const formData = {
      email: form.email.value.trim(),
      message: form.message.value.trim()
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  } catch (error) {
    console.log('Error saving form data to localStorage:');
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if (email && message) {
    console.log({ email, message });
    try {
      localStorage.removeItem('feedback-form-state');
      form.reset();
    } catch (error) {
      console.log('Error removing saved state from localStorage:');
    }
  } else {
    alert('Please fill out both email and message fields.');
  }
});
