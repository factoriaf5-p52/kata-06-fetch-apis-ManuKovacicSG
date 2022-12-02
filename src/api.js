const print = document.querySelector("p")
const button = document.querySelector("button")


function wtf(){
fetch('https://uselessfacts.jsph.pl/random.json?language=en')
.then((response) => response.json())
.then((data) => print.textContent = (data.text));

}

button.addEventListener("click", wtf)