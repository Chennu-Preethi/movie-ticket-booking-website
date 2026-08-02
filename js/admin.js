// Get messages from Local Storage
let messages = JSON.parse(localStorage.getItem("contactMessages")) || [];

const tableBody = document.getElementById("messageBody");
const emptyMessage = document.getElementById("emptyMessage");

// Display all messages
function loadMessages() {

    tableBody.innerHTML = "";

    if (messages.length === 0) {
        emptyMessage.innerHTML = "No Contact Messages Available";
        return;
    }

    emptyMessage.innerHTML = "";

    messages.forEach((msg, index) => {

        let row = `
        <tr>
            <td>${msg.name}</td>
            <td>${msg.email}</td>
            <td>${msg.phone}</td>
            <td>${msg.subject}</td>
            <td>${msg.message}</td>
            <td>
                <button class="delete-btn" onclick="deleteMessage(${index})">
                    Delete
                </button>
            </td>
        </tr>
        `;

        tableBody.innerHTML += row;
    });

}

// Delete one message
function deleteMessage(index) {

    if (confirm("Delete this message?")) {

        messages.splice(index, 1);

        localStorage.setItem(
            "contactMessages",
            JSON.stringify(messages)
        );

        loadMessages();
    }
}

// Delete all messages
function clearMessages() {

    if (confirm("Delete all messages?")) {

        localStorage.removeItem("contactMessages");

        messages = [];

        loadMessages();
    }
}

// Load messages when page opens
window.onload = loadMessages;