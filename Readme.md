# Curious facts

API DOC:
https://uselessfacts.jsph.pl/

ENDPOINT:
https://uselessfacts.jsph.pl/random.json?language=en


## TASK

1. Crear una carpeta 'src' que contenga archivos index.html y api.js
2. Llamar con FetchAPI a la api de useless facts, obtener hechos aleatorios e imprimirlos en pantalla, a través de un botón.
4. Poner el estilo que desees.


const printArea = document.querySelector("p");
const button = document.querySelector("button")


function wtf (){
let data = fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then((result)=> result.json())
    .then((data)=> printArea.textContent = (data.text))
}
  
 button.addEventListener ("click", wtf)