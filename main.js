const passwordInput = document.getElementById("passwordInput");
const loginBtn = document.getElementById("loginBtn");

const password = "05102024"


function append(numVal) {
  if (passwordInput.value.length < 8) {
    passwordInput.value += numVal;
  }
}

function removeVal() {
  passwordInput.value = passwordInput.value.slice(0, -1);
}

loginBtn.addEventListener('click', () => {
  if (passwordInput.value == password) {
    window.open('card.html', '_self');
    passwordInput.style.borderColor = 'black';

  } else {
    passwordInput.value = "";
    passwordInput.style.borderColor = 'red';
  }
});