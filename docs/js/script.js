var boton = document.getElementById("btn");
var texto = document.getElementById("textoClave");
var guardar = document.getElementById("save");
var descargar = document.getElementById("download");

function obtenerClave(){

  guardar.style.visibility= "visible";
  texto.innerHTML = '';
  var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  var caracteres = document.getElementById("numeroCaracteres");
  var valor = caracteres.value;

  function generarClave(){

    var caracteresMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    var caracteresMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var caracteresEspeciales ='-+*¿?!@#$&/(){}';
    
    do {

      var textoFinal ='';
      for(var i =0;i<valor;i++){

        numeros = Math.floor (Math.random() * 10);
        minusculas = caracteresMinusculas.charAt(Math.floor(Math.random()*caracteresMinusculas.length));
        mayusculas = caracteresMayusculas.charAt(Math.floor(Math.random()*caracteresMayusculas.length));
        caractEspeciales = caracteresEspeciales.charAt(Math.floor(Math.random()*caracteresEspeciales.length));
        caracterSorteado = [numeros,minusculas,mayusculas,caractEspeciales];
        var caracterRandom='';
        var numEntre0y3=0;
        numEntre0y3=Math.floor(Math.random() * (3-0 + 1));
        caracterRandom= caracterSorteado[numEntre0y3];
        textoFinal=textoFinal+caracterRandom;
        
      } 

    } while( !strongRegex.test(textoFinal) );

    /* Ciclo do while que va a generar una contraseña hasta que tenga todos los caracteres (numeros,mayusculas,minusculas y caracteres especiales).
      A do while cycle that will generate a password until it contains all the characters (numbers,uppercase,lowercase and special characters). */
    
    return textoFinal;

  }

  var i=0;
  var contrasenia = generarClave();

  /* Desactivo el boton mientras se escribe la contraseña - I deactivate the button while the password is being typed */
  boton.disabled = true;
  setTimeout(function(){boton.disabled = false;},(100*contrasenia.length));

  function animacion(){

    if(i< contrasenia.length){

      texto.innerHTML += contrasenia.charAt(i);
      i++;
      setTimeout(animacion,100);

    }
    
  }
  animacion(); /* Animacion cuando se escribe la contraseña - Animation of typewritting of password */

  /* Codigo para poder guardar la contraseña - Code to download the new password */
  var nombreArchivo = 'Clave segura(CAMBIAR NOMBRE).txt';
  var contenido = "Tu nueva clave segura es: "+contrasenia+"\n\nGuardala bien, segui las recomendaciones de la pagina.\n\nSaludos!";
  var archivo = new Blob([contenido], {type: 'text/plain'});
  window.URL = window.URL || window.webkitURL;
  descargar.setAttribute('href', window.URL.createObjectURL(archivo));
  descargar.setAttribute('download', nombreArchivo);
    
}

function desactivarBoton(){

  boton.disabled = true;
  setTimeout(function(){boton.disabled = false;},2700);

}
desactivarBoton(); /* Codigo para desactivar el boton mientras una contraseña se esta escribiendo - Code to deactivate the button while a password is writting */


/* Codigo (No es mio) que genera la animacion al cargar la pagina - Code (It's not mine) that generate the animation when the page loads */
/* Uso el archivo "glitch.js" para esta animacion - I use "glitch.js" file for this animation */

const text = baffle('.claveSeg');
text.set({
  characters : 'qwertyuiopasdfghjklzxcvbnm1234567890!"#$%&/()=?¡¿/*-+',
  speed: 100
});
text.start();
text.reveal(2700);

