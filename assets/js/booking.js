'use strict';
document.getElementById("myForm").addEventListener("submit", function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();
  
    // Redirect to payment.html
    window.location.href = "payment.html";
  });