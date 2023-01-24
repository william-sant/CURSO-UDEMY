/*
Funções -> bloco de sódigo com um objetivo definido, que vai ser execultado quando ocorrer um evento

o nome da função deve fazer referencia clara ao seu objetivo, geralmente com duas palavras combinadas como, abrirComentarios, calcularJogo.

tipos de funções:
void --> realizam o processamento mas não da retorno quando chamada
retorno --> retornam um parametro quando chamada
*/

/*
//void:
function calcularAreaTerreno ( largura, comprimento ) {
    //lógica
    var area = largura * comprimento
    document.write('O terrreno possui ' + area + ' metros quadrados' )
}
//chamar função
calcularAreaTerreno(15, 25)


//retorno:
function calcularAreaTerreno (largura, comprimento) {
    //lógica
    var area = largura * comprimento
    return area
}
//chamar função
var area = calcularAreaTerreno(15, 25)
document.write('O terreno possui' + area + ' metros quadrados')*/

function calcularAreaTerreno (largura, comprimento) {
    //lógica
    var area = largura * comprimento
    return area
}
//chamar função
var largura = prompt('Digite a largura do terreno em metros')
var comprimento = prompt('Digite o comprimento do terreno em metros')
var area = calcularAreaTerreno(largura, comprimento)
document.write('O terreno possui ' + area + ' metros quadrados')


