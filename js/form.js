const URL = "https://formspree.io/f/mbgrqlwj";

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

async function sendFormData(formData) {
    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error();  
        }

        alert("¡Gracias por contactar! En nada te responderemos :)");
        form.reset();
        
    } catch(_) {
        alert("Ha ocurrido un error (quizás porque usamos una versión de prueba y hemos llegado al límite jeje). Contáctanos a seisbravas@gmail.com o por Instagram y te contestaremos rapidísimo.");
    }
}

async function submitForm() {
    const formData = new FormData(form);
    const parsedFormData = parseFormData(formData);
    await sendFormData(parsedFormData);
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    submitForm();
});

