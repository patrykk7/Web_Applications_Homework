const themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        themeBtn.textContent = 'Tryb jasny';
    } else {
        themeBtn.textContent = 'Tryb ciemny';
    }
});

const scrollTopBtn = document.getElementById('scroll-top-btn');

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.querySelectorAll('.card img').forEach(function(img) {
    img.addEventListener('click', function() {
        img.classList.toggle('fullscreen');
    });
});