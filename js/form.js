const form = document.getElementById("lets-talk_form");

function parseFormData(formData) {
    return {
        name: formData.get("name").trim(),
        email: formData.get("email").trim().toLowerCase(),
        phone: formData.get("phone").trim(),
        agreesToWhatsApp: formData.has("agreesToWhatsApp"),
        message: formData.get("message").trim(),
    }
}

function submitForm() {
    const formData = new FormData(form);
    const parsedFormData = parseFormData(formData);
    console.log(parsedFormData);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    submitForm();
});

