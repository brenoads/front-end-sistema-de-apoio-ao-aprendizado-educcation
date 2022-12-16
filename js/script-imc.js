const form = document.querySelector('#form-imc');
const resultado = document.querySelector('.result-calculo-imc');

function resultadoFormulario(event) {

  event.preventDefault();
  
  const inputPeso = document.querySelector('#peso').value;
  const inputAltura = document.querySelector('#altura').value;

  const imcTotal = (inputPeso / (inputAltura * inputAltura)).toFixed(2);
  
  //IMC menor que 18,49
   if (imcTotal >= 0.00 && imcTotal <= 18.49){
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Isso significa que você é muito magro.  </p>`
  }
  //IMC entre 18,5 e 24,9
   else if (imcTotal >= 18.50 && imcTotal <= 24.99) {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Seu IMC é considerado "Normal".  </p>`
  }
  //IMC entre 25,00 e 29,9
   else if (imcTotal >= 25.00 && imcTotal <= 29.99) {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Isso significa que sua classificação é "Sobrepeso".  </p>`
  }
  //IMC entre 30,00 e 39,9 
   else if (imcTotal >= 30.00 && imcTotal <= 39.99) {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Você é considerado "Obeso".  </p>`
  } 
  // IMC do maior que 40,00
   else if (imcTotal >= 40.00) {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Sua classificação é "Obesidade grave", 
    em um terceiro grau de obesidade.  </p>`
  }
  // IMC não é nem um anterior
   else {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> 0 </strong> - Erro algo não está certo...</p>`
  }
} 

// Resultado
form.addEventListener('submit', resultadoFormulario)
