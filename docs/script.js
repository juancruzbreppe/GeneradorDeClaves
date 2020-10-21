var boton = document.getElementById("b");
var texto = document.getElementById("t");
var guardar = document.getElementById("save");


function randomClave(){
  guardar.style.visibility= "visible";
  
  texto.innerHTML = '';
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var c = document.getElementById("numC");
    valor = c.value;
    function clave(){
      var numeros = '1234567890'
      var minu = 'abcdefghijklmnopqrstuvwxyz';
      var mayu = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var caract ='-+*¿?!@#$&/(){}';
      var k ='';
        do {
          var x ='';
          for(var i =0;i<valor;i++){

            num = Math.floor (Math.random() * 10);
            minus = minu.charAt(Math.floor(Math.random()*minu.length));
            mayus = mayu.charAt(Math.floor(Math.random()*mayu.length));
            car = caract.charAt(Math.floor(Math.random()*caract.length));

            ran = [num,minus,mayus,car];
            var y='';
            var z=0;
            
            z=Math.floor(Math.random() * (3-0 + 1));
            
            y= ran[z];

            
            x=x+y;
            
        }
      } while( !strongRegex.test(x) );

        return x;
    }

    
    var k=0;
    var txt = clave();
    var container = document.getElementById("t");

    boton.disabled = true;
    setTimeout(function(){boton.disabled = false;},(100*txt.length));
    
    function animacion(){
      if(k< txt.length){
        container.innerHTML += txt.charAt(k);
        k++;
        setTimeout(animacion,100);
      }
    }
    
    animacion();
    var fileName = 'Clave segura(CAMBIAR NOMBRE).txt';
var fileContent = "Tu nueva clave segura es: "+txt+"\n\nGuardala bien, segui las recomendaciones de la pagina.\n\nSaludos!";
var myFile = new Blob([fileContent], {type: 'text/plain'});
    window.URL = window.URL || window.webkitURL;

    document.getElementById('download').setAttribute('href', window.URL.createObjectURL(myFile));
    document.getElementById('download').setAttribute('download', fileName);

    
      
    
}

function submitPoll(){
  boton.disabled = true;
  setTimeout(function(){boton.disabled = false;},2700);
}
submitPoll();


const text = baffle('.claveSeg');
    text.set({
      characters : 'qwertyuiopasdfghjklzxcvbnm1234567890!"#$%&/()=?¡¿/*-+',
      speed: 100
    });
    text.start();
    text.reveal(2700);





