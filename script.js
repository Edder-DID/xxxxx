
// ======================================
// 1. MENÚ DE NAVEGACIÓN
// ======================================

const menuToggle = document.getElementById("menu-toggle");

const navbar = document.getElementById("navbar");


menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("open");

    const abierto = navbar.classList.contains("open");

    menuToggle.textContent = abierto ? "✕" : "☰";

    menuToggle.setAttribute("aria-expanded", abierto);

});


// Cerrar menú al seleccionar una sección

const enlaces = document.querySelectorAll(".navbar a");


enlaces.forEach(enlace => {

    enlace.addEventListener("click", () => {

        navbar.classList.remove("open");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// ======================================
// 2. ANIMACIONES AL DESPLAZARSE
// ======================================

const elementos = document.querySelectorAll(".reveal");


const observador = new IntersectionObserver((entradas) => {

    entradas.forEach(entrada => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("active");

            observador.unobserve(entrada.target);

        }

    });

}, {

    threshold: 0.12

});


elementos.forEach(elemento => {

    observador.observe(elemento);

});


// ======================================
// 3. AÑO AUTOMÁTICO DEL FOOTER
// ======================================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// ======================================
// 4. FORMULARIO DE CONTACTO
// ======================================

const formulario = document.getElementById("contact-form");

const estadoFormulario = document.getElementById("form-status");


formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();


    // Obtener los valores

    const nombre = document.getElementById("name").value.trim();

    const correo = document.getElementById("email").value.trim();

    const mensaje = document.getElementById("message").value.trim();


    // Validar los campos

    if (!nombre || !correo || !mensaje) {

        estadoFormulario.textContent =
            "Completa todos los campos.";

        return;

    }


    // Validar correo electrónico

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!formatoCorreo.test(correo)) {

        estadoFormulario.textContent =
            "Ingresa un correo electrónico válido.";

        return;

    }


    // Confirmación

    estadoFormulario.textContent =
        "Datos validados correctamente. Gracias por contactar a NEXUS Technologies.";


    // Limpiar formulario

    formulario.reset();

});


// ======================================
// 5. EFECTO DE CARGA INICIAL
// ======================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
