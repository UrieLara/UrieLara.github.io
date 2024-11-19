const myCV = "assets/docs/CV.pdf";
const totalCertificates = 9; 
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

  function OpenBlank(url) { 
    window.open(url, '_blank');
  }


  //#region certificates

let currentSlide = 0;

const containerCertificates = document.getElementById('certificate-container');

function generateCertificates() {
    for (let i = 0; i < totalCertificates; i++) {
      const img = document.createElement('img');
      img.src = `./assets/certificates/diploma${i+1}.jpg`;
      img.alt = `Certificado ${i+1}`;
      img.onclick = function() { OpenBlank(this.src) };

      containerCertificates.appendChild(img);

      }
}

function moveSlide(step) { 
  const slides = document.querySelectorAll('.certificate-slides img'); 
  const totalSlides = slides.length; 
  const visibleSlides = 2 ;
   
  currentSlide += step * visibleSlides; 
  if (currentSlide >= totalSlides) currentSlide = 0; 
  if (currentSlide < 0) currentSlide = totalSlides - visibleSlides; 
  
  slides.forEach((slide, index) => { 
    if (index >= currentSlide && index < currentSlide + visibleSlides) { 
    slide.style.display = 'block'; 
    slide.style.margin = '0 10px'; 
    } 
    else { 
      slide.style.display = 'none'; 
        } 
  });  
}

function zoomImage(img) {
    const modal = document.getElementById('zoomModal');
    const modalImg = document.getElementById('zoomedImage');
    modal.style.display = 'block';
    modal.style.width = '50%';
    modal.style.height = 'auto';
    modalImg.src = img.src;
}

function closeZoom() {
    document.getElementById('zoomModal').style.display = 'none';
}

generateCertificates();
moveSlide(0); 

  //#endregion
