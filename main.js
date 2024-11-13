//EFECTO TYPE//
var typed = new Typed(".text", {
    strings: ["Ingeniería", "Programación", "Análisis de datos", "E-Commerce", "Diseño"],
    typeSpeed: 45,
    backSpeed: 45,
    backDelay: 1000,
    loop: true
});

// MENÚ MÓVIL
var propMenu = {
    burger_menu: document.getElementById('burger_menu'),
    slideMenu: document.getElementById('slideMenu'),
    overlay: document.querySelector('.overlay'),
    menu_activo: false,
    elem_menu: document.querySelectorAll('#slideMenu .navbar-movil a')
}

var metMenu = {
    inicio: function () {
        propMenu.burger_menu.addEventListener('click', metMenu.toggleMenu);
        
        for (var i = 0; i < propMenu.elem_menu.length; i++) {
            propMenu.elem_menu[i].addEventListener('click', metMenu.ocultarMenu);
        }

        propMenu.overlay.addEventListener('click', metMenu.ocultarMenu);
    },
    toggleMenu: function () {
        if (propMenu.menu_activo == false) {
            propMenu.menu_activo = true;
            propMenu.slideMenu.className += ' active';
            propMenu.overlay.className += ' active'; 
        } else {
            propMenu.menu_activo = false;
            propMenu.slideMenu.className = propMenu.slideMenu.className.replace(' active', '');
            propMenu.overlay.className = propMenu.overlay.className.replace(' active', ''); 
        }
    },
    ocultarMenu: function () {
        propMenu.menu_activo = false;
        propMenu.slideMenu.className = propMenu.slideMenu.className.replace(' active', '');
        propMenu.overlay.className = propMenu.overlay.className.replace(' active', '');
    }
}
metMenu.inicio();

//COPIAR AL PORTAPAPELES//
document.querySelectorAll('.contact-list li i').forEach(icon => {
    icon.addEventListener('click', function() {
        const li = this.parentElement;
        const texto = li.textContent.trim();
        
        navigator.clipboard.writeText(texto).then(() => {
            alert('Texto copiado al portapapeles: ' + texto);
        }).catch(err => {
            console.error('Error al copiar: ', err);
        });
    });
});

//CONFIRMACIÓN DE ENVÍO DE FORMULARIO//
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const customAlert = document.getElementById('customAlert');
    const closeAlert = document.getElementById('closeAlert');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        customAlert.parentElement.classList.remove('hidden');
    });

    closeAlert.addEventListener('click', () => {
        form.submit();
    });
});

//EFECTO MOUSE//
document.addEventListener('mousemove', (e) => {

    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        document.body.appendChild(particle);

        particle.style.left = `${e.pageX - 2.5}px`;
        particle.style.top = `${e.pageY - 2.5}px`;

        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * 50 + 20;

        particle.style.setProperty('--x', `${Math.cos(angle) * radius}px`);
        particle.style.setProperty('--y', `${Math.sin(angle) * radius}px`);

        setTimeout(() => {
            particle.remove();
        }, 700);
    }
});