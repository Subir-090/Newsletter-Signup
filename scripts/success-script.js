var urlParams = new URLSearchParams(window.location.search);
const emailInput = urlParams.get("email");

if(emailInput === null) {
    location.href = '/';
}

let email = document.querySelector('#email');
email.innerText = emailInput;

const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
    location.href = '/';
})
