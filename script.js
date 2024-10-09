// script.js
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const service = document.getElementById('service').value;
    const pickup = document.getElementById('pickup').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;

    // Simulate a confirmation message
    const confirmationMessage = `
        Booking Confirmed! 
        Service: ${service} 
        From: ${pickup} 
        To: ${destination} 
        Date: ${date}
    `;

    document.getElementById('confirmationMessage').textContent = confirmationMessage;
});
