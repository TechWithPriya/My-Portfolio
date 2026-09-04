// Dark / Light Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

});


// Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();

});
 