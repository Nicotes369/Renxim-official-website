// assets/js/language.js

// Define RTL languages
const rtlLanguages = ['ar', 'he'];

// Language Selection and Content Loading
const languageSelect = document.getElementById('language-select');
let currentLanguage = 'en'; // Default language

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
            setDirection(lang);
        })
        .catch(error => {
            console.error(`Error loading language file: ${lang}.json`, error);
        });
}

function setDirection(lang) {
    if (rtlLanguages.includes(lang)) {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', lang);
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', lang);
    }
}

languageSelect.addEventListener('change', function() {
    const selectedLanguage = this.value;
    if (selectedLanguage === 'qc') {
        document.body.classList.add('quantum-mode');
        // Dynamically load binary.css if not already loaded
        if (!document.querySelector('link[href="assets/css/binary.css"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'assets/css/binary.css';
            document.head.appendChild(link);
        }
        // Dynamically load binary.js if not already loaded
        if (!document.querySelector('script[src="assets/js/binary.js"]')) {
            const script = document.createElement('script');
            script.src = 'assets/js/binary.js';
            document.body.appendChild(script);
        }
    } else {
        document.body.classList.remove('quantum-mode');
        loadLanguage(selectedLanguage);
    }
});

// Initial language load
document.addEventListener('DOMContentLoaded', () => {
    loadLanguage(currentLanguage);
});
