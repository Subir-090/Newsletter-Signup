const perfEntries = performance.getEntriesByType("navigation");
if (perfEntries[0].type === "back_forward") {
    location.reload();
}

const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
    const emailInput = e.target.email.value.trim();
    if(emailInput.lastIndexOf('@') === -1) {
        e.preventDefault();
        e.target.email.setAttribute('id','error');
        document.querySelector('.validate').style.display = 'inline-block';
    }
})
