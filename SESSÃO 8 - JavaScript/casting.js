
var variavel1 = prompt('Digite algum número:')
var variavel2 = prompt('Digite outro número:')

variavel1 = parseInt(variavel1) // remove a fração, preserva apenas o numero inteiro 1, 10, 154
variavel2 = parseFloat(variavel2) //preserva a fração do numero 1.65, 2.6, 45.8974, 0.6

document.write(variavel1 + variavel2)