function sendMessage(event){

    event.preventDefault();

    const message = {

        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        phone:document.getElementById("phone").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value

    };

    let messages = JSON.parse(localStorage.getItem("contactMessages")) || [];

    messages.push(message);

    localStorage.setItem("contactMessages", JSON.stringify(messages));

    alert("Message sent successfully!");

    document.getElementById("contactForm").reset();

} 
