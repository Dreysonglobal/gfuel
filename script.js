// Countdown Effect (0-426 in 10 seconds)
document.addEventListener("DOMContentLoaded", function () {
    let counter = 0;
    const countdownElement = document.getElementById("countdown");

    const interval = setInterval(() => {
        counter++;
        countdownElement.textContent = counter;
        
        if (counter >= 426) {
            countdownElement.textContent = 426;
            clearInterval(interval);
        }
    }, 23.5); // Adjusted timing for a smooth 10-second countdown
});

// Handle Form Submission
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("infoForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get Form Data
            const fullName = document.getElementById("fullName").value;
            const age = document.getElementById("age").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const sponsor = document.getElementById("sponsor").value;
            const country = document.getElementById("country").value;

            // Send Email via mailto (Replace with your email)
            const mailtoLink = `mailto:greenfueltrading@gmail.com?subject=Request%20for%20More%20Info&body=
                Full Name: ${fullName}%0A
                company: ${company}%0A
                Email: ${email}%0A
                Phone: ${phone}%0A
                Query: ${sponsor}%0A
                Country: ${country}`;

            window.location.href = mailtoLink;
        });
    }
});
