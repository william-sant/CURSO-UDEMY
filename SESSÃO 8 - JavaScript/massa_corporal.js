//recebe os parâmetros
var nome = prompt('Informe o seu nome')
var altura = prompt('informe a sua altura em centímetros')
var peso = prompt('informe o seu peso')

//converte os caracteres para dados float
altura = parseFloat(altura);
peso = parseFloat(peso);

//conversão de centímetros para metros
altura = altura/100

//cálculo de imc
var imc = peso / (altura * altura);

//testes condicionais para identificar a classificação do peso com base no imc 
var classificacao = ''; 

if (imc < 16){
    classificacao = 'Baixo peso, muito grave';
} else if (imc >= 16 && imc <= 16.99){
    classificacao = 'Baixo peso, grave';
} else if (imc >= 17 && imc <= 18,49){
    classificacao = 'Baixo peso';
} else if (imc >= 18,50 && imc <= 24,99){
    classificacao = 'Peso normal';
} else if (imc >= 25 && imc <= 29,99){
    classificacao = 'Sobrepeso';
} else if (imc >=30 && imc <= 34,99){
    classificacao = 'Obesidade grau I';
} else if (imc >=35 && imc <= 39,99){
    classificacao = 'Obesidade grau II'
} else {
    classificacao = 'Obesidade grau III'
}

document.write( nome + ' possuí o indice de passa corporal igual a ' + imc + ' sendo classificado como: ' + classificacao);