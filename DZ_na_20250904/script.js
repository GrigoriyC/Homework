const savedTheme = localStorage.getItem('theme') || 'light-theme';
document.body.className = savedTheme;

const switchThemeBthElement = document.getElementById("switchThemeBtn");

switchThemeBthElement.addEventListener("click", () => {
    const currentTheme = document.body.className;

    const newTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';

    document.body.className = newTheme;

    localStorage.setItem('theme', newTheme);
})