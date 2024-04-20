let menuVisible = false;
//Ocultar o mostrar el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    //Se oculta el menu cuando se selecciona una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skill = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skill >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("phpframe");
        habilidades[3].classList.add("ajaxjquery");
        habilidades[4].classList.add("mysql");
        habilidades[5].classList.add("java");
        habilidades[6].classList.add("bootstrap");
        habilidades[7].classList.add("git");
        habilidades[8].classList.add("comunicacion");
        habilidades[9].classList.add("trabajo");
        habilidades[10].classList.add("creatividad");
        habilidades[11].classList.add("redaccion");
        habilidades[12].classList.add("dedicacion");
        habilidades[13].classList.add("puntualidad");
    }
}

//detecto el scroll para hacer la animacion
window.onscroll = function() {
    efectoHabilidades();
}


function updateMobileHref() {
    // Obtiene el ancho de la pantalla
    var windowWidth = window.innerWidth;

    // Codifica el texto del mensaje
    var mensaje = 'Buen día Juan';
    var mensajeCodificado = encodeURIComponent(mensaje);

    // Establece el nuevo href según el ancho de la pantalla
    var whatsappLink = document.getElementById('whatsapp-link');
    var whatsappLinkf = document.getElementById('whatsapp-linkf');

    if (windowWidth <= 767) {
        // Para dispositivos móviles
        whatsappLink.href = 'whatsapp://send?phone=573194301372&text=' + mensajeCodificado;
        whatsappLinkf.href = 'whatsapp://send?phone=573194301372&text=' + mensajeCodificado;
    } else if (windowWidth >= 768) {
        // Para versiones de escritorio
        whatsappLink.href = 'https://web.whatsapp.com/send?phone=573194301372&text=' + mensajeCodificado;
        whatsappLinkf.href = 'https://web.whatsapp.com/send?phone=573194301372&text=' + mensajeCodificado;
    }
}

// Llama a la función al cargar la página y en cada cambio de tamaño de ventana
document.addEventListener('DOMContentLoaded', function() {
    updateMobileHref(); // Llama a la función al cargar la página
    window.addEventListener('resize', updateMobileHref); // Llama a la función en cada cambio de tamaño de ventana
});