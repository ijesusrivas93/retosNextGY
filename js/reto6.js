const array = [
	{
		ciudad: "Neiva",
    	mes: "Septiembre",
    	totalVentas: "10000",
	},
	{
		ciudad: "Medellin",
    	mes: "Marzo",
    	totalVentas: "20000",
	},
	{
		ciudad: "Neiva",
    	mes: "Enero",
    	totalVentas: "5000",
	},
	{
		ciudad: "Medellin",
    	mes: "Marzo",
    	totalVentas: "15000",
	},
	{
		ciudad: "Neiva",
    	mes: "Febrero",
    	totalVentas: "25000",
	},
	{
		ciudad: "Bogota",
    	mes: "Abril",
    	totalVentas: "20000",
	},
	{
		ciudad: "Bogota",
    	mes: "Enero",
    	totalVentas: "30000",
	},
	{
		ciudad: "Bogota",
    	mes: "Junio",
    	totalVentas: "30000",
	},
	{
		ciudad: "Neiva",
    	mes: "Abril",
    	totalVentas: "5000",
	},
	{
		ciudad: "Neiva",
    	mes: "Abril",
    	totalVentas: "10000",
	},
	{
		ciudad: "Bogota",
    	mes: "Mayo",
    	totalVentas: "30000",
	},
	{
		ciudad: "Medellin",
    	mes: "Abril",
    	totalVentas: "15000",
	},
	{
		ciudad: "Neiva",
    	mes: "Septiembre",
    	totalVentas: "60000",
	},
	{
		ciudad: "Bogota",
    	mes: "Junio",
    	totalVentas: "10000",
	},
	{
		ciudad: "Medellin",
    	mes: "Marzo",
    	totalVentas: "20000",
	},
	{
		ciudad: "Neiva",
    	mes: "Agosto",
    	totalVentas: "30000",
	},
];

let monthNames = {
  "Enero": 1,
  "Febrero": 2,
  "Marzo": 3,
  "Abril": 4,
  "Mayo": 5,
  "Junio": 6,
  "Julio": 7,
  "Agosto": 8,
  "Septiembre": 9,
  "Octubre": 10,
  "Noviembre": 11,
  "Diciembre": 12
};

let cities = [];
let months = [];
const element = document.getElementById("solution");
element.innerHTML += "El arreglo de entrada es: </br>"+JSON.stringify(array)+"</br>";

for(let i = 0; i<=array.length-1 ;i++){
 	cities.push(array[i].ciudad);
 	months.push(array[i].mes);
}

let uniqueCities = cities.filter(onlyUnique);
let uniqueMonths = months.filter(onlyUnique).sort(sortByMonth);

for(let x = 0; x<=uniqueCities.length-1;x++){
	element.innerHTML += "<h3>Ventas para la ciudad de "+uniqueCities[x]+"</h3> Total por meses: <ul>";
	for (let y = 0; y<=uniqueMonths.length-1; y++) {
		let acu = 0;
		for(let i = 0; i<=array.length-1 ;i++){
			if(uniqueCities[x]==array[i].ciudad && uniqueMonths[y]==array[i].mes){
				acu = acu + parseInt(array[i].totalVentas);
			}
		}
		if(acu!=0){
			element.innerHTML += "<li>"+uniqueMonths[y]+": "+acu+"</li>";
			console.log("El total de ventas para la ciudad de "+uniqueCities[x]+" en el mes de "+
			uniqueMonths[y]+" fue de "+acu);
		}
	}
	element.innerHTML += "</ul>";
}

console.log(uniqueCities);
console.log(uniqueMonths);

function onlyUnique(value,index,self){
	return self.indexOf(value) === index;
}

function sortByMonth(a,b){
	return monthNames[a]-monthNames[b];
}