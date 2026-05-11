const themeToggle = document.getElementById('themeToggle');

function enableDarkTheme() {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
    if (themeToggle) {
        themeToggle.textContent = '☀️ Светлая тема';
    }
}

function enableLightTheme() {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
    if (themeToggle) {
        themeToggle.textContent = '🌙 Тёмная тема';
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-theme');
        if (isDark) {
            enableLightTheme();
        } else {
            enableDarkTheme();
        }
    });
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    enableDarkTheme();
} else {
    enableLightTheme();
}

const form = document.getElementById('contactForm');
const statusDiv = document.getElementById('formStatus');

if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        statusDiv.innerHTML = 'Спасибо! Заявка принята. Мы свяжемся с вами.';
        statusDiv.style.color = '#4eb382';
        
        form.reset();
        
        setTimeout(() => {
            statusDiv.innerHTML = '';
        }, 5000);
    });
}