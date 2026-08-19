const form = document.getElementById("lets-talk_form");

function submitForm() {
    const formData = new FormData(form);
    console.log(Object.fromEntries(formData));
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    submitForm();
});

