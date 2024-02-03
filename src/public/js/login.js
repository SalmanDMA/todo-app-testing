const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const error = document.getElementById('error');
const success = document.getElementById('success');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const login = {
    email: email.value,
    password: password.value,
  };
  const res = await fetch('/api/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(login),
  });
  const data = await res.json();
  console.log(data);

  if (data.status !== 'success') {
    success.style.display = 'none';
    error.style.display = 'block';
    error.innerText = data.message;
  } else {
    error.style.display = 'none';
    success.style.display = 'block';
    success.innerText = data.message;
    window.location.href = '/';
  }
});
