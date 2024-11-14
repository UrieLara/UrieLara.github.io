const myCV = "assets/docs/CV.pdf";

function CopyText() { 
    const text = "laracastrouriel@gmail.com"; 

    navigator.clipboard.writeText(text).then(() => { 
        showText(); 
    }).catch(err => { 
        console.error("Error al copiar el texto: ", err); }); 
}

function showText() {
        const text = document.getElementById("hide-text");
        text.classList.remove("hide");
        
        setTimeout(() => {
            text.classList.add("hide");
        }, 2000); // 5000 milisegundos = 5 segundos
 }

 function downloadDocument(name, url=myCV) { 
    const link = document.createElement('a'); 
    link.href = url; 
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
