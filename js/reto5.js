
let expression = prompt("Introduzca las operaciones a realizar");
const originalExpression = expression;
//const expression = "3^2*4*8-2*5/7";
let result = 0;

if(expression.includes("^")){
	let new_str = "";
	do{
		const indexOfPow = expression.indexOf("^");

		const bfr = expression.substr(0,indexOfPow-1);
		const pow = expression.slice(indexOfPow-1,indexOfPow+2);
		const afr = expression.slice(indexOfPow+2)

		let powResult = (Math.pow(parseInt(pow[0]),parseInt(pow[2]))).toString();
		console.log(powResult, typeof powResult);

		new_str = bfr+powResult+afr;
		expression = new_str;

	}while(expression.includes("^"));

	result = eval(new_str);

}else{
	result = eval(expression);
}

console.log(result);

document.getElementById("solucion").innerHTML = "La expresión introducida fue: "+originalExpression+"<br>"+
"El resultado es: "+result;

