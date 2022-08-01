       /*
        
 Modifica la función para que reciba el elemento clickeado de forma de no
tener que seleccionarlo nuevamente dentro de la función
    function pintar(){
            ele = document.getElementById("ele1")
            ele.style.backgroundColor = 'yellow'
         }
        ele = document.getElementById("ele1")
        ele.addEventListener("click", pintar);

/////////SOLUCION//////////////////////////
       /* ele = document.getElementById("ele1")

        ele.addEventListener("click", function () {
            ele.style.backgroundColor = 'yellow'
        });*/
///////////////////////////////////////////

       /* Modifica el código anterior para poder pasarle un color como argumento a la
función pintar. El color debe ser verde (green) por defecto, al hacer clic en el
párrafo se debe pasar amarillo como color. (1 Punto).*/

/////////SOLUCION///////////////////////////
function pintar(color="green"){
    ele = document.getElementById("ele1")
    ele.style.backgroundColor = color
}

ele = document.getElementById("ele1")
ele.addEventListener("click", function(){
    pintar("yellow")
})
/////////////////////////////////////////
