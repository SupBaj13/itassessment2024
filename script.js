// script.js

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", function (e) { 
      const name = form["name"].value.trim();
      const email = form["email"].value.trim();
      const message = form["message"].value.trim();
  
      if (!name || !email || !message) {
        alert("Please fill in all required fields.");
        e.preventDefault(); // Stop form submission
      } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
      }
    });
  
    function validateEmail(email) {
      // Basic email format check
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email.toLowerCase());
    }
  });
  
  