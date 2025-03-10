AOS.init({ duration: 1000, once: true });

// Przełączanie trybu ciemnego/jasnego
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeToggle.querySelector('i').className = isDark ? 'fas fa-moon' : 'fas fa-sun';
    themeToggle.querySelector('span').textContent = isDark ? 'Tryb ciemny' : 'Tryb jasny';
});

// Interaktywny timeline - kliknięcie na element pokazuje dodatkowe szczegóły
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
        const details = item.getAttribute('data-details');
        if(details) {
            // Można zastąpić to modalem lub rozwijalnym panelem
            alert(details);
        }
    });
});




document.querySelector('.download-cv').addEventListener('click', function(event) {
    event.preventDefault();  // Zapobiega domyślnemu działaniu linku
    window.location.href = 'https://patrykkul.github.io/CV/cv.pdf';  // Przekierowuje do pliku PDF
  });
  
