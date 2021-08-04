

const str = 'Hi there, my name is {name}, I am {age} years old, and I work in the field of {profession}.';
const matches = str.match(/(?<=\{).+?(?=\})/g);

for(let i = 0; i<=matches.length-1; i++){
	matches[i] = matches[i].charAt(0).toUpperCase()+matches[i].slice(1);
}

document.getElementById("solucion").innerHTML = "Cadena de entrada: "+str+
"</br>El array solución es: "+"["+matches+"]";

console.log(matches);