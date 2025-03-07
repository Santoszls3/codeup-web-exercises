document.addEventListener("mouseenter", function () {
    const elements = document.querySelectorAll(".letsWork, .creatSomething");

    elements.forEach(element => {
        element.style.animation = "fadeIn 2.5s ease-in-out forwards";
    });
}, { once: true }); // Ensures it runs only once
