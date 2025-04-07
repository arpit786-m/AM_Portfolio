// ===================
// Toggle Dark Mode
// ===================
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));

    // Change icon
    const toggleBtn = document.querySelector('.dark-toggle');
    toggleBtn.textContent = document.body.classList.contains("dark-mode") ? '🌞' : '🌓';
};


// =============================
// Load Dark Mode on Page Load
// =============================
window.addEventListener('DOMContentLoaded', () => {
    // Check if dark mode was previously enabled
    const toggleBtn = document.querySelector('.dark-toggle');
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "🌞";
    } else {
        toggleBtn.textContent = "🌓";
    }
    

    // =======================
    // Smooth Scrolling
    // =======================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

const toggleMenu = () => {
    document.querySelector('nav ul').classList.toggle('active');
};


// ==============================
// EmailJS Integration (Contact)
// ==============================

console.log(service);
console.log(template);
console.log(API_KEY);

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    emailjs.init(API_KEY); // Replace with your user ID from EmailJS
    const status = document.getElementById("status");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Collect form data
        const formData = {
            from_name: document.getElementById("name").value,
            reply_to: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        // Send using EmailJS
        emailjs.send("service", "template", formData)
            .then(() => {
                status.textContent = "Message sent successfully!";
                status.style.color = "green";
                contactForm.reset();
            })
            .catch((error) => {
                status.textContent = "Error sending message.";
                status.style.color = "red";
                console.error("EmailJS Error:", error);
            });
    });
}
