const myCV_español = "assets/docs/CV_español.pdf";
const myCV_english = "assets/docs/CV_english.pdf";
const mail = "laracastrouriel@gmail.com";

function CopyText() { 
    navigator.clipboard.writeText(mail).then(() => { 
        showText(); 
    }).catch(err => { 
        console.error("Error al copiar el texto: ", err); }); 
}

function showText() {
        const text = document.getElementById("hide-text");
        text.classList.remove("hide");
        
        setTimeout(() => {
            text.classList.add("hide");
        }, 2000);
 }

function downloadDocument(name) { 
  const link = document.createElement('a'); 

  switch(document.documentElement.lang){
    case 'es': 
      link.href = myCV_español;
      break;
    case 'en': 
      link.href = myCV_english;
      break;
      default:
        console.log("Documento no encontrado.")
        break;
  }
    link.download = name; 
    link.target = '_blank';
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link); 
}

function scrollToElement(elementId, offset = 0) {
    const currentPosition = window.scrollY;
    const element = document.getElementById(elementId);
    
    if (element) {
      const elementPosition = element.offsetTop;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
      return currentPosition;
    } else {
      console.error('El elemento con ID "${elementId}" no existe.');
      return null;
    }
  }

function OpenBlank(url) { 
    window.open(url, '_blank');
  }