
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("open");

        const abierto = navbar.classList.contains("open");

        menuToggle.textContent = abierto ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", abierto);
    });

    document.querySelectorAll(".navbar a").forEach(enlace => {
        enlace.addEventListener("click", () => {
            navbar.classList.remove("open");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}
