document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.background-container img');
    const floatingText = document.getElementById('floatingText');
    const texts = [
        "Welcome to Bon Appétit",
        "Discover the Best Food",
        "Quality and Delicious",
        "Crafted with Passion & Care"
    ];
    let currentIndex = 0;

    function swapBackground() {
        images[currentIndex].classList.remove('active');
        floatingText.classList.remove('active');

        currentIndex = (currentIndex + 1) % images.length;

        images[currentIndex].classList.add('active');
        floatingText.textContent = texts[currentIndex];
        floatingText.classList.add('active');
    }

    setInterval(swapBackground, 3000);
});
