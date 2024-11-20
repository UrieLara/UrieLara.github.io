let currentSlide = 0;
const totalCertificates = 9; 

const containerCertificates = document.getElementById('certificate-container');

function generateCertificates() {
    for (let i = 0; i < totalCertificates; i++) {
      const img = document.createElement('img');
      img.src = `assets/certificates/diploma${i+1}.jpg`;
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

generateCertificates();
moveSlide(0); 


