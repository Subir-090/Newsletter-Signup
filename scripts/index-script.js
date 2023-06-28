const form = document.querySelector('form');
// window.onload

form.addEventListener('submit', (e) => {
    const emailInput = e.target.email.value.trim();
    if(emailInput.lastIndexOf('@') === -1) {
        e.preventDefault();
        e.target.email.setAttribute('id','error');
        document.querySelector('.validate').style.display = 'inline-block';
    }
})
