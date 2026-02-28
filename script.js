function generateWish() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("wishMessage");

    if (name === "") {
        alert("Please enter a name!");
        return;
    }

    message.innerHTML = "🎉 Happy Birthday " + name + "! 🎉";
    launchConfetti();
}

function launchConfetti() {
    alert("🎊 Celebrate! 🎊");
}