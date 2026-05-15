// Seleccionando visor 3D contenedor
const viewer = document.querySelector('#avatar-niko');

// Esperar carga
viewer.addEventListener('load', () => {
    
    // cargar materiales (texturas)
    const materials = viewer.model.materials;

    // --- Correccion textura ---
    // Recorremos los materiales y forzamos la opacidad total
    for (let material of materials) {
        
        // setAlphaMode('OPAQUE') apaga la transparencia
        // Es el equivalente exacto a child.material.transparent = false en Three.js
        material.setAlphaMode('OPAQUE');
    }

    console.log("¡Avatar cargado con el motor de Google y físicas perfectas!");
});

  document.addEventListener("DOMContentLoaded", () => {
    // Buscamos tu botón por su ID
    const miBoton = document.getElementById("mi-boton-coffee");
    
    miBoton.addEventListener("click", (event) => {
      // Prevenimos cualquier acción extraña del botón
      event.preventDefault(); 
      
      // Buscamos el botón flotante original de BMC
      const botonBMC = document.getElementById("bmc-wbtn");
      
      if (botonBMC) {
        // Disparamos el clic
        botonBMC.click();
      } else {
        console.warn("No se encontró el widget de BMC. Revisa si el ID original cambió.");
      }
    });
  });


const scriptURL = 'https://script.google.com/macros/s/AKfycbxVdjLIHnjMDu7KRwo1QzhdDfqfkAAMsL30TZqwEmvU1sBsBKbOvcVvBiECmWmnB-Tfuw/exec';

const form = document.getElementById('mensajeAnonimo');
const mensajeExito = document.getElementById('mensajeExito');

form.addEventListener('submit', e => {
    e.preventDefault(); 
    
    fetch(scriptURL, { 
        method: 'POST', 
        body: new URLSearchParams(new FormData(form))
    })
    .then(response => {
    // Activamos los estilos CSS
    document.body.classList.add('formulario-enviado');
    
    // 1. Intentamos la limpieza normal primero
    form.reset(); 

    // 2. Limpieza exacta y forzada por ID (AQUÍ ESTÁ EL CAMBIO)
    const miTextArea = document.getElementById('mensaje');
    if (miTextArea) {
        miTextArea.value = ''; 
    }
    
    })
    .catch(error => console.error('Error en el envío:', error));
});


$(document).ready(function() {
    $('#buttonForm').on('click', function() {
        // Guardamos el botón en una variable para no perder la referencia
        let $boton = $(this);

        // 1. Añadimos la clase que creamos en CSS
        $boton.addClass('mainGrid__message--sendpulsado');
        $('#buttonLoading').addClass('buttonLoading');
        $('#textbutton').addClass('none');
    });
});
// --------------------------------------------------------------------------- light-dark section

// 1. Seleccionamos el botón, el elemento raíz (HTML) y el VIDEO (NUEVO)
const themeBtn = document.querySelector("#themeButton");
const rootElement = document.documentElement;
const bgVideo = document.querySelector("#bgVideo"); // Seleccionamos el video

// 2. Función para aplicar el tema y guardar la preferencia
const applyTheme = (theme) => {
    // Aplicamos el atributo al root (esto cambia las variables CSS)
    rootElement.setAttribute("data-theme", theme);
    
    // Guardamos la elección en el localStorage
    localStorage.setItem("theme", theme);

    // Se cambia el icono visual (puedes usar emojis o innerHTML para SVGs)
    themeBtn.textContent = theme === "light" ? "nightlight" : "sunny";
};

// 3. Lógica de inicio (Se ejecuta al cargar la página)
const initTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Si hay algo guardado, lo usamos. Si no, usamos lo que diga el sistema.
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme(systemPrefersDark ? "dark" : "light");
    }
};

// 4. Evento de click para alternar
themeBtn.addEventListener("click", () => {
    const currentTheme = rootElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    
    applyTheme(newTheme);
});

// Ejecutamos la inicialización
initTheme();

// ------------------------------------------------------------------------- light-dark end.