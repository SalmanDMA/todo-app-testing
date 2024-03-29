const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const error = document.getElementById('error');
const success = document.getElementById('success');

form.addEventListerner('submit', async (event) => {
  event.preventDefault();
  const register = {
    name: name.value,
    email: email.value,
    password: password.value,
  };
  const res = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(register),
  });
  const data = await res.json();

  if (data.status !== 'success') {
    success.style.display = 'none';
    error.style.display = 'block';
    error.innerText = data.message;
  } else {
    error.style.display = 'none';
    success.style.display = 'block';
    success.innerText = data.message;
  }
});
