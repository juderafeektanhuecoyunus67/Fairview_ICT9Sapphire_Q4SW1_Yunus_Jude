// JavaScript for Login Authentication

// 1. Data Types and Variables
const correctUsername = "mrbeast67"; // You can change this
const correctPassword = "password123";

// 2. Event Listener for Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevents page from refreshing
    event.preventDefault();

    // Getting values from the inputs
    let userInp = document.getElementById('username').value;
    let passInp = document.getElementById('password').value;

    // 3. Conditional Statements for Authentication
    if (userInp === correctUsername && passInp === correctPassword) {
        // 4. Success
        window.alert("✅ Access granted. \nWelcome mrbeast67!");
        console.log("Status: Login Successful");
    } else {
        // 4. Failed
        window.alert("ⓧ Access denied. \nReason: Incorrect username and/or password.");
        console.log("Status: Login Failed");
    }
});

// 5. Requirement: Use ontoggle logic (via JS or HTML)
const instructions = document.getElementById('instructionToggle');
instructions.addEventListener('toggle', () => {
    if (instructions.open) {
        console.log("User is reading instructions.");
    }
});
