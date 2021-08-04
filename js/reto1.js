function solution(){

	let number = parseInt(prompt("Por favor introduzca un número mayor o igual a 4"));

	while(isNaN(number) || number<4){
		number = parseInt(prompt("Por favor introduzca un número válido (mayor o igual a 4)"));
	}

	document.getElementById("solution").innerHTML += '<p id="add">Los múltiplos de 4 desde 4 a '+number+' son: </p>';

	for(let i = 4; i<=number;i++){
		if(i%4==0){
			document.getElementById("solution").innerHTML += i+"</br>";
		}
	}

}

