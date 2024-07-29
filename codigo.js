// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtén el botón y agrega un listener para el evento 'click'
    var boton = document.getElementById('encriptador');
    var boton2 = document.getElementById('desencriptador');
    var copiador = document.getElementById('copiador');
    
    boton.addEventListener('click', function() {
        // Obtén el valor del <textarea> usando su ID
        var textoInput = document.getElementById('texto1').value;
        var outputText=document.getElementById('texto2');
        
        // Muestra el texto en la consola
        console.log(textoInput);

        var textoEncriptado = textoInput
            .replace(/a/g, 'ai')
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/o/g,'ober')
            .replace(/u/g,'ufat');

        document.getElementById('texto2').innerHTML=textoEncriptado;
        var placeholderImage = document.getElementById('placeholderImage');
        var copiador = document.getElementById('copiador');

        if (textoInput==""){
          outputText.style.display='none';
          placeholderImage.style.display='block';
          copiador.style.display='none';

        }   else {
            outputText.style.display='block';
            placeholderImage.style.display='none';
            copiador.style='block'
        }
    });

    boton2.addEventListener('click', function(){
        
        var textoIn = document.getElementById('texto1').value;
        textoDes=textoIn
        .replace(/ufat/g, 'u')
        .replace(/ober/g, 'o')
        .replace(/imes/g, 'i')
        .replace(/enter/g, 'e')
        .replace(/ai/g, 'a');

         document.getElementById('texto2').value = textoDes
    })
   
    copiador.addEventListener('click',function(){
        var textarea=document.getElementById('texto2')
        textarea.select();
        textarea.setSelectionRange(0, 99999);
        document.execCommand("copy");
    })
});
