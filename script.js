var fechaObjetivo = new Date('2025-07-05T19:00:00');

function actualizarContador() {
    var ahora = new Date();
    var tiempoRestante = fechaObjetivo - ahora;

    var dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24)).toString();
    var horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
    var minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60)).toString();
    var segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000).toString();

    // Agregamos ceros a la izquierda si es necesario
    dias = padLeft(dias, 2);
    horas = padLeft(horas, 2);
    minutos = padLeft(minutos, 2);
    segundos = padLeft(segundos, 2);

    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

// Función para añadir ceros a la izquierda
function padLeft(value, length) {
    return String(value).padStart(length, '0');
}

window.addEventListener('scroll', function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

function listenerHamburger(){
    var hamburger = document.querySelector(".hamburger");
    hamburger.onclick = function() {
        var navigator = document.querySelector(".navigator");
        var header = document.querySelector("header");
        navigator.classList.toggle("active");
        header.classList.toggle("active");
    }
}

setInterval(actualizarContador, 1000);

actualizarContador();

listenerHamburger();
