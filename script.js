
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


document.querySelector(".newsletter-form")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const email = this.querySelector("input").value;

        alert("Thanks for subscribing: " + email);

        this.reset();

    });
