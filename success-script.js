var urlParams = new URLSearchParams(window.location.search);
const emailInput = urlParams.get("email");
let email = document.querySelector('#email');
email.innerText = emailInput