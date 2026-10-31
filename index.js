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

const closeBtn = document.getElementById('close-btn');

function zamknijZdjecie() {
    const powiekszoneZdjecie = document.querySelector('.card img.fullscreen');
    if (powiekszoneZdjecie) {
        powiekszoneZdjecie.classList.remove('fullscreen');
    }
    closeBtn.classList.remove('active');
}

document.querySelectorAll('.card img').forEach(function(img) {
    img.addEventListener('click', function() {
        if (img.classList.contains('fullscreen')) {
            zamknijZdjecie();
        } else {
            img.classList.add('fullscreen');
            closeBtn.classList.add('active');
        }
    });
});

closeBtn.addEventListener('click', zamknijZdjecie);