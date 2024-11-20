let translations = {};

fetch('translations.json')
  .then(response => response.json())
  .then(data => {
    translations = data;
    setLanguage('es');
  });

function setLanguage(language) {
  document.documentElement.lang = language;
  const elements = document.querySelectorAll('[id]');
  elements.forEach(element => {
    const key = element.id;
    if (translations[language] && translations[language][key]) {
      element.textContent = translations[language][key];
      element.innerHTML = translations[language][key]
      .replace(/<ul>/g, '<ul>') 
      .replace(/<\/ul>/g, '</ul>') 
      .replace(/<li>/g, '<li>') 
      .replace(/<\/li>/g, '</li>');
    }
  });
}

