// Language Selection and Content Loading
const languageSelect = document.getElementById('language-select');
let currentLanguage = 'en';

function loadLanguage(lang) {
    fetch(`assets/languages/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (data[key]) {
                    element.innerHTML = data[key];
                }
            });
        });
}

languageSelect.addEventListener('change', function() {
    const selectedLanguage = this.value;
    if (selectedLanguage === 'qc') {
        document.body.classList.add('quantum-mode');
        document.head.innerHTML += '<link rel="stylesheet" href="assets/css/binary.css">';
        const script = document.createElement('script');
        script.src = 'assets/js/binary.js';
        document.body.appendChild(script);
    } else {
        document.body.classList.remove('quantum-mode');
        loadLanguage(selectedLanguage);
    }
});
