const container = document.getElementById('container');

const container = document.getElementById('container');

container.addEventListener('mouseenter', () => {
    // Add the move-center class when the mouse enters the container
    container.querySelectorAll('div').forEach(box => box.classList.add('move-center'));
});

container.addEventListener('mouseleave', () => {
    // Remove the move-center class when the mouse leaves the container
    container.querySelectorAll('div').forEach(box => box.classList.remove('move-center'));
});