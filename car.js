const themeToggle = document.getElementById('themeToggle');
const body = document.body;
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.replace('theme', 'theme-1');
    } else {
        body.classList.replace('theme-1', 'theme');

    }
})