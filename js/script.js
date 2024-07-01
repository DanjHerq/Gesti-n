document.addEventListener('DOMContentLoaded', function () {
    const lightModeButton = document.querySelector('.navbar-item.light');
    const darkModeButton = document.querySelector('.navbar-item.dark');
    const systemModeButton = document.querySelector('.navbar-item.system');

    lightModeButton.addEventListener('click', () => {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    });

    darkModeButton.addEventListener('click', () => {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    });

    systemModeButton.addEventListener('click', () => {
        document.body.classList.remove('dark-mode');
        localStorage.removeItem('theme');
    });

    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (theme === 'light') {
        document.body.classList.remove('dark-mode');
    } else {
        // Default to system preference if available
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
        }
    }
});
