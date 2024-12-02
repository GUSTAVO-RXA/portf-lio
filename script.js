// Selecionar o botão e o corpo
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verificar tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme); // Adicionar classe salva (se existir)
}

// Alternar tema ao clicar no botão
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light')) {
        body.classList.remove('light'); // Remover Light Mode
        localStorage.setItem('theme', ''); // Salvar preferência no localStorage
    } else {
        body.classList.add('light'); // Adicionar Light Mode
        localStorage.setItem('theme', 'light'); // Salvar preferência no localStorage
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const audios = [
        { element: document.getElementById("audio1"), progress: document.getElementById("progress1") },
        { element: document.getElementById("audio2"), progress: document.getElementById("progress2") }
    ];

    // Alternar tema
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    });

    // Persistência de tema
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

   

  


    // Função para mostrar a mensagem ao passar o mouse
    wishYouWereHereImg.addEventListener("mouseenter", () => {
        imageCaption.textContent = "Uma obra-prima intemporal dos Pink Floyd!";
        imageCaption.style.color = "var(--hover-highlight-color)";
        imageCaption.style.fontWeight = "bold";
    });

    // Função para restaurar a legenda ao sair do mouse
    wishYouWereHereImg.addEventListener("mouseleave", () => {
        imageCaption.textContent = 'Capa do álbum "Wish You Were Here" - Pink Floyd. Um dos meus favoritos de sempre.';
        imageCaption.style.color = "var(--text-color)";
        imageCaption.style.fontWeight = "normal";
    });
});
// Adicionar um efeito sonoro ao passar o mouse sobre as imagens
document.addEventListener("DOMContentLoaded", () => {
    const videoImages = document.querySelectorAll('.hover-image');
    const soundEffect = new Audio('hover-sound.mp3'); // Adicione um arquivo de som leve

    videoImages.forEach(image => {
        image.addEventListener("mouseenter", () => {
            soundEffect.currentTime = 0; // Reinicia o som
            soundEffect.play();
        });
        image.addEventListener("mouseleave", () => {
            soundEffect.pause(); // Pausa ao sair
        });
    });
});
// Alternar Tema
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    });

    // Salvar tema no LocalStorage
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
});

// Animação na Página
window.addEventListener("load", () => {
    const introText = document.querySelector('.intro-text');
    introText.style.opacity = "0";
    introText.style.transition = "opacity 2s ease";
    setTimeout(() => (introText.style.opacity = "1"), 500);
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Carregar o tema inicial
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    // Alternar Tema
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const newTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const sportsItems = document.querySelectorAll('.sports-item');

    sportsItems.forEach((item, index) => {
        // Adiciona um delay na animação de cada item
        item.style.opacity = 0;
        item.style.transform = 'translateY(30px)';
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease-in-out';
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        }, index * 200); // O delay aumenta conforme o índice
    });

    // Alternar Tema
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const photos = document.querySelectorAll('.photo-item img');
    photos.forEach((photo, index) => {
        photo.style.opacity = 0;
        photo.style.transform = 'translateY(30px)';
        setTimeout(() => {
            photo.style.transition = 'all 0.5s ease-in-out';
            photo.style.opacity = 1;
            photo.style.transform = 'translateY(0)';
        }, index * 200); // O delay aumenta conforme o índice
    });

    // Alternar Tema
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });
});

