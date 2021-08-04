
const expression = prompt("Introduzca las operaciones a realizar");
//const expression = "3^2*4*8-2*5/7";
const indexOfPow = expression.indexOf("^");

const bfr = expression.substr(0,indexOfPow-1);
const pow = expression.slice(indexOfPow-1,indexOfPow+2);
const afr = expression.slice(indexOfPow+2)

let powResult = (Math.pow(parseInt(pow[0]),parseInt(pow[2]))).toString();
console.log(powResult, typeof powResult);

const new_str = bfr+powResult+afr;
const result = eval(new_str);
console.log(result);

document.getElementById("solucion").innerHTML = "La expresión introducida fue: "+expression+"<br>"+
"El resultado es: "+result;

