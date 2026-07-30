function handlePayment(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const username = document.getElementById('username').value;
    const upiId = document.getElementById('upiId').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const amount = document.getElementById('amount').value;

    // Redirect to confirmation page with payment details
    const confirmationUrl = `confirmation.html?username=${encodeURIComponent(username)}&upiId=${encodeURIComponent(upiId)}&cardNumber=${encodeURIComponent(cardNumber)}&expiryDate=${encodeURIComponent(expiryDate)}&cvv=${encodeURIComponent(cvv)}&amount=${encodeURIComponent(amount)}`;

    window.location.href = confirmationUrl; // Redirect to confirmation page
}