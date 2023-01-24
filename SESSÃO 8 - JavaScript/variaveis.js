//string -> cadeia de caracteres/texto
var texto = 'Cuso de JavaScript' //pode ser usado com "" ou ''

//number -> valores numericos, positivos, negativos e fracionados
var numenoInteiro = -15
var numeroFracionado = 8.75 //fração separada por ponto

//bloolean -> estados, true & false
var teste = true //true -> verdadeiro / false -> falso

//alert(numeroFracionado) //abrir um dialogo
//document.write(texto)
console.log(numenoInteiro)


//CONCATENAÇÃO

var name = prompt('Digite o seu nome:') // o prompt sempre recebe o valor como uma string  / usar console.log para fazer o teste
var age = prompt('Olá ' + name + ' Qual a sua idade:');

document.write ('<h1>O seu nome é '+ name + ' e você tem '+ age +' anos</h1>');


//NULL & UNDEFINED

//null -> representa a ausência intencional de um valor
var teste = null

//undefined -> a pesar de declarada a variavel não possui nenhum valor 
var teste2
