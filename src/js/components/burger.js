document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const headerRight = document.querySelector('.header__right');

    // Открытие/закрытие меню и переключение иконки
    burger.addEventListener('click', (e) => {
        e.stopPropagation(); // чтобы клик по бургеру не «просочился» в document
        headerRight.classList.toggle('is-open');
        burger.classList.toggle('burger--active');
    });

    // Закрытие меню при клике по ссылке
    document.querySelectorAll('.nav__link').forEach((link) => {
        link.addEventListener('click', () => {
            headerRight.classList.remove('is-open');
            burger.classList.remove('burger--active');
        });
    });

    // Закрытие меню при клике вне его и вне бургера
    document.addEventListener('click', (e) => {
        if (
            headerRight.classList.contains('is-open') &&
            !headerRight.contains(e.target) &&
            !burger.contains(e.target)
        ) {
            headerRight.classList.remove('is-open');
            burger.classList.remove('burger--active');
        }
    });
});
