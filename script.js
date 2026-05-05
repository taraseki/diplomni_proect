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
        themeToggle.textContent = '🌙 Темная тема';
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