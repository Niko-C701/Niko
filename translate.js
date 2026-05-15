//traducciones section
const translations = {
    en: {
        
    },
    es: {
        
    },
    ru: {
        
    }
};

// 2. Configuración de idiomas
const supportedLangs = ['en', 'es', 'ru'];
const defaultLang = 'en';

// 3. Función principal para cambiar el idioma
function setLanguage(lang) {
    // Actualizar la etiqueta <html> para SEO y accesibilidad
    document.documentElement.lang = lang;

    // Actualizar el valor visual del menú desplegable
    document.getElementById('language-selector').value = lang;

    // Guardar la preferencia del usuario en su navegador
    localStorage.setItem('userLang', lang);

    // Buscar todos los elementos que tengan el atributo data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    
    // Reemplazar el texto de cada elemento
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n'); // Ejemplo: 'title'
        
        // Verificamos que la traducción exista para evitar errores
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// 4. Lógica de inicio (Se ejecuta al cargar la página)
document.addEventListener('DOMContentLoaded', () => {
    // A. Revisar si el usuario ya había elegido un idioma antes
    let savedLang = localStorage.getItem('userLang');
    let langToSet = defaultLang;

    if (savedLang && supportedLangs.includes(savedLang)) {
        // Si hay un idioma guardado y lo soportamos, usamos ese
        langToSet = savedLang;
    } else {
        // B. Si es su primera vez, detectamos el idioma del navegador
        // navigator.language devuelve cosas como 'es-MX' o 'en-US'. 
        // Usamos .slice(0, 2) para quedarnos solo con 'es' o 'en'.
        const browserLang = navigator.language.slice(0, 2);
        
        if (supportedLangs.includes(browserLang)) {
            langToSet = browserLang; // Usamos su idioma (es, ru, en)
        } else {
            langToSet = defaultLang; // Si habla francés (fr) u otro, le damos inglés
        }
    }

    // Aplicar el idioma decidido
    setLanguage(langToSet);

    // C. Escuchar cuando el usuario use el menú desplegable
    document.getElementById('language-selector').addEventListener('change', (evento) => {
        setLanguage(evento.target.value);
    });
});
