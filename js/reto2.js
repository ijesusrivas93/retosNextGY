function readFile(e) {
  let file = e.target.files[0];
  if (!file) {
    return;
  }
  let reader = new FileReader();
  reader.onload = function(e) {
    let content = e.target.result;
    let total = calculate(content);
    showContent(content,total);
  };
  reader.readAsText(file);
}

function showContent(content, total) {
  let element = document.getElementById('content-file');
  element.innerHTML = "La suma de números pares y primos es "+total+"</br>"+
  "El contenido del archivo es: </br>"+content;
}

function calculate(content){
  let lines = content.split('\n');
  let total = 0;
  for(let line = 0; line < lines.length; line++){

    let countPrimeNumber = 0;
    let lineInt = parseInt(lines[line]);

    for(let i = lineInt; i > 0; i--){
      if(lineInt % i == 0 ){
          countPrimeNumber++;
      }
    }

    if(lineInt%2==0 || countPrimeNumber==2){
      total = total+lineInt;
    }
  }
  console.log(total);
  return total;
}

document.getElementById('file-input').addEventListener('change', readFile, false);
