 //Permitira redondear hacia abajo y mostrara un entero, aparate que sera un numero ramdon
 // del uno al 100
 // se le sumara uno porque porque el conteo es de 0 a 99 y no de 1 a 100
 // y lo que pretendemos es que sea de 1 a 100
 let numeroAzar = Math.floor(Math.random()*100) + 1


// input //creamos un variable nombrada igual que el id de la etiqueta del html
 let numeroEntrada = document.getElementById('numeroEntrada')



// mensaje //creamos una varaible nombre igual que el id de la etiqueta del html
let  mensaje = document.getElementById('mensaje') 
// Funcion al pulsar boton
function chequearResultado(){
    
    //primero haremos un parseo ya que lo imput devuleven un string
    let numeroIgresado = parseInt(numeroEntrada.value)

    //luego verificamos los datos entruducido y mandamos mensajes de error | isNaN verifica que si el numero
    //ingresado es una simbolo u otra cosa, si cumple cualquiera de esas cosas retornara y se detendre la funcion
    if (numeroIgresado < 1 ||  numeroIgresado > 100 || isNaN(numeroIgresado)){
        mensaje.textContent = 'Porfavor intruce un numero valido entre 1 y 100'
        // numeroEntrada.textContent = ''
        return  
    }

    if(numeroIgresado === numeroAzar){
        mensaje.textContent = '¡Felicitaciones! ¡Haz adivinado el numero!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true; //desabilitara el inmput una vez adivinado
        return
    } else if(numeroIgresado < numeroAzar){
        mensaje.textContent = '¡Mas alto! El numero es mayor al que dijistes'
    } else{
        mensaje.textContent = '¡Mas bajo! El numero es mas bajo'
    }


}