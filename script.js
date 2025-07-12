document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Elements
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");
      const successMsg = document.getElementById("successMsg");

      let valid = true;

      // Reset messages
      document.getElementById("nameError").innerText = "";
      document.getElementById("emailError").innerText = "";
      document.getElementById("messageError").innerText = "";
      successMsg.innerText = "";

      if (name.value.trim() === "") {
        document.getElementById("nameError").innerText = "Name is required.";
        valid = false;
      }

      if (email.value.trim() === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        valid = false;
      } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        document.getElementById("emailError").innerText = "Invalid email format.";
        valid = false;
      }

      if (message.value.trim() === "") {
        document.getElementById("messageError").innerText = "Message is required.";
        valid = false;
      }

      if (valid) {
        successMsg.innerText = "Form submitted successfully!";
        form.reset();
      }
    });
  }

  // Scroll to Top Button
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}