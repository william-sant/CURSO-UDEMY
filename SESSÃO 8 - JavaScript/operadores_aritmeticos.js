
var num1 = prompt('digite o valor de num1')
var num2 = prompt('digite o valor de num2')

num1 = parseInt(num1)
num2 = parseInt(num2)

document.write( 'A soma entre ' +  num1 + ' e ' + num2 +  ' é: ' + (num1 + num2) + '<br/>')
document.write( 'A subtração entre ' +  num1 + ' e ' + num2 +  ' é: ' + (num1 - num2) + '<br/>')
document.write( 'A multiplicação entre ' +  num1 + ' e ' + num2 +  ' é: ' + (num1 * num2) + '<br/>')
document.write( 'A divisão entre ' +  num1 + ' e ' + num2 +  ' é: ' + (num1 / num2) + '<br/>')
document.write( 'O módulo entre ' +  num1 + ' e ' + num2 +  ' é: ' + (num1 % num2) + '<br/>') // retorna apenas a parte inteira do resto da divisão
document.write( 'O incremento de ' +  num1 + ' é: ' + (++num1) + '<br/>')
document.write( 'O decremento de ' +  num1 + ' é: ' + (--num1) + '<br/>' + '<br/>')

//ATRIBUIÇÃO DE VALORES NAS OPERAÇÕES ARITIMETICAS

var teste = 10

//teste = teste + 5
//teste += 5
//teste -= 5
//teste *= 5
//teste /= 2
teste %= 3
document.write(teste)

//PRECEDÊNCIA DE EXECUÇÃO DAS OPERAÇÕES ARITMÉTICAS

/*

() -> APLICAR PRECEDÊNCIA 

1° MULTIPLICAÇÃO E SUBTRAÇÃO
2° DIVSÃO
3° SOMA E SUBTRAÇÃO

*/

