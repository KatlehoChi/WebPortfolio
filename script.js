document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Simulate email sending using Formspree
    fetch(this.action, {
        method: this.method,
        body: new FormData(this),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            document.getElementById("success-message").style.display = "block"; // Show success message
            this.reset(); // Clear form fields
        } else {
            alert("Something went wrong, please try again!");
        }
    });
});
