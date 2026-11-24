
// Highlight the active navigation link
const menuLinks = document.querySelectorAll(".sidebar a");

menuLinks.forEach(link => {
    link.addEventListener("click", function () {
        menuLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});

// Welcome message
console.log("Welcome to Pravallika's College Student Dashboard!");

// Display a message when the dashboard loads
window.addEventListener("load", () => {
    console.log("Dashboard loaded successfully!");
});
