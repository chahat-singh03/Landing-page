// Button click event

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Welcome to our Landing Page!");
    });
});