// Open modal
function openEditModal() {
    document.getElementById("editModal").style.display = "block";
}

function openChangePasswordModal() {
    document.getElementById("changePasswordModal").style.display = "block";
}

// Close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Save profile details (this is a placeholder for real functionality)
function saveProfile() {
    const newName = document.getElementById("editName").value;
    const newPhone = document.getElementById("editPhone").value;

    if (newName) document.getElementById("userName").textContent = newName;
    if (newPhone) document.getElementById("userPhone").textContent = newPhone;

    closeModal("editModal");
    alert("Profile updated successfully!");
}

// Save new password (this is a placeholder for real functionality)
function saveNewPassword() {
    const currentPassword = document.getElementById("currentPassword").value;
    const newPassword = document.getElementById("newPassword").value;

    if (currentPassword && newPassword) {
        alert("Password changed successfully!");
        closeModal("changePasswordModal");
    } else {
        alert("Please enter all fields.");
    }
}

// Confirm account deletion
function confirmDeleteAccount() {
    const confirmDelete = confirm("Are you sure you want to delete your account?");
    if (confirmDelete) {
        alert("Your account has been deleted.");
        // Redirect to home or login page
    }
}
