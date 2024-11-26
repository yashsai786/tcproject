// Dynamically calculate the number of dots
const numDotsX = Math.floor(window.innerWidth / 10); // Number of dots per row
const numDotsY = Math.floor(window.innerHeight / 10); // Number of dots per column

// Generate the dots in a grid layout
for (let row = 0; row < numDotsY; row++) {
    for (let col = 0; col < numDotsX; col++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        document.body.appendChild(dot);
    }
}

// Add hover effect on mouse move
document.body.addEventListener('mousemove', function (e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const dots = document.querySelectorAll('.dot');

    dots.forEach(dot => {
        const dotRect = dot.getBoundingClientRect();
        const dotCenterX = dotRect.left + dotRect.width / 2;
        const dotCenterY = dotRect.top + dotRect.height / 2;

        // Calculate the distance from the mouse to the dot
        const distance = Math.sqrt(Math.pow(mouseX - dotCenterX, 2) + Math.pow(mouseY - dotCenterY, 2));

        // Change dot color if within a certain distance
        if (distance < 60) { // Adjust distance for the effect
            dot.style.backgroundColor = 'cyan';
        } else {
            dot.style.backgroundColor = 'gray';
        }
    });
});
