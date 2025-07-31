document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('.header__switcher-checkbox');
    const body = document.body;

    // 1. Загрузка сохранённой темы из localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        checkbox.checked = savedTheme === 'dark';
    }

    // 2. Слушатель изменения темы
    checkbox.addEventListener('change', function () {
        const newTheme = checkbox.checked ? 'dark' : 'light';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});
