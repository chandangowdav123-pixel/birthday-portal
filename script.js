function generateWish() {
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("wishMessage");
    const music = document.getElementById("birthdayMusic");

    if (name === "") {
        alert("Please enter a name!");
        return;
    }

    // Clear previous message
    message.innerHTML = "";

    // Start typewriter animation
    typeWriter("🎉 Happy Birthday " + name + "! 🎉");

    // Play music (allowed because button was clicked)
    if (music) {
        music.play();
    }

    // Launch confetti
    launchConfetti();
}

/* 🎀 Typewriter Effect */
function typeWriter(text) {
    const message = document.getElementById("wishMessage");
    let i = 0;
    const speed = 60;

    function typing() {
        if (i < text.length) {
            message.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}

/* 🎆 Real Confetti Celebration */
function launchConfetti() {

    var duration = 5 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 6,
            angle: 60,
            spread: 70,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 6,
            angle: 120,
            spread: 70,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());

    // Big burst in center
    setTimeout(() => {
        confetti({
            particleCount: 150,
            spread: 120,
            origin: { y: 0.6 }
        });
    }, 2000);
}
