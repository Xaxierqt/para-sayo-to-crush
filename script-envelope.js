document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.getElementById("small-envelope");
    const nextButton = document.querySelector(".next-button");

    // Trigger petals fall when the envelope is tapped
    envelope.addEventListener("click", function () {
        envelope.classList.add("open-envelope"); // Trigger envelope opening animation
        setTimeout(() => {
            nextButton.style.opacity = "1"; // Reveal the "Next" button after envelope opens
        }, 1000); // Delay for smooth transition

        // Trigger continuous falling petals
        triggerFallingPetals();
    });

    // Function to trigger falling petals effect continuously
    function triggerFallingPetals() {
        setInterval(() => {
            createFallingPetal();
        }, 200); // New petal created every 200ms
    }

    // Function to create a single petal and make it fall
    function createFallingPetal() {
        const petal = document.createElement("div");
        petal.classList.add("petal");

        // Randomize position of the petal at the top of the screen
        const randomX = Math.floor(Math.random() * window.innerWidth);
        petal.style.left = randomX + "px";

        // Randomize size of the petal
        const size = Math.random() * (30 - 15) + 15;  // Random size between 15px and 30px
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;

        // Rainbow colors for the petals
        const rainbowColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3']; // Red, Orange, Yellow, Green, Blue, Indigo, Violet
        petal.style.backgroundColor = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];

        // Add the petal to the body
        document.body.appendChild(petal);

        // Animate the petal to fall down
        setTimeout(() => {
            petal.style.animation = "fallingPetals 5s ease-in forwards";
        }, 0);

        // Remove the petal after animation completes
        setTimeout(() => {
            petal.remove();
        }, 5000); // Petal disappears after falling
    }
});
