const myCV = "assets/docs/CV prueba.pdf";

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
