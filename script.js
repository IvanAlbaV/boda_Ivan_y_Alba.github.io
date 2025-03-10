const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

// Selecciona todos los elementos con la clase 'arrowButton'
document.querySelectorAll('.arrowButton').forEach(button => {
    // Añade un evento 'click' a cada botón
    button.addEventListener('click', function() {
        // Obtén el ID del objetivo desde el atributo 'data-target'
        const targetId = this.getAttribute('data-target');
        // Busca el elemento objetivo usando el ID
        const targetElement = document.getElementById(targetId);

        // Si el elemento objetivo existe
        if (targetElement) {
            // Obtén la posición del elemento objetivo
            const elementPosition = targetElement.getBoundingClientRect().top;
            // Calcula la posición de desplazamiento sumando la posición actual de desplazamiento vertical
            const offsetPosition = elementPosition + window.pageYOffset;

            // Desplázate suavemente hasta la posición calculada
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth' // Desplazamiento suave
            });
        }
    });
});


function scrollToSection(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
}

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// Selecciona todas las tarjetas
const cards = document.querySelectorAll('.card');

// Agrega un evento de clic a cada tarjeta
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped'); // Alterna la clase 'flipped' solo en la tarjeta clicada
  });
});

// Selecciona todas las tarjetas
const cardsFacts = document.querySelectorAll('.cardFacts');

// Agrega un evento de clic a cada tarjeta
cardsFacts.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped'); // Alterna la clase 'flipped' solo en la tarjeta clicada
  });
});

// Selecciona todas las tarjetas
const albaFacts = document.querySelectorAll('.alba');

// Agrega un evento de clic a cada tarjeta
albaFacts.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped'); // Alterna la clase 'flipped' solo en la tarjeta clicada
  });
});

// Selecciona todas las tarjetas
const ivanFacts = document.querySelectorAll('.ivan');

// Agrega un evento de clic a cada tarjeta
ivanFacts.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped'); // Alterna la clase 'flipped' solo en la tarjeta clicada
  });
});
