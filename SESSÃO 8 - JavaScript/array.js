
//var lista_frutas = Array()
var lista_frutas = [] //outra forma usando colchetes
    lista_frutas[1] = 'Banana'
    lista_frutas[2] = 'Maçã'
    lista_frutas[3] = 'Morango'
    lista_frutas[4] = 'Uva'

    document.write(lista_frutas[4])

    console.log(lista_frutas)


var lista_compras = Array ('Banana', 'Maçã', 'Morango', 'Uva')
//desta forma o Js se encarrega de criar o indice e associa ao elemento, começando de 0
// 0-banana, 1-maçã...
console.log(lista_compras)


//outra forma
// var lista_compras = ['Banana', 'Maçã', 'Morango', 'Uva'] <-- usando colchetes

//Array Multidimensional ou Bidimensional

var lista_coisas = Array()

lista_coisas['frutas'] = Array('Manga', 'Tangerina', 'Laranja', 'Abacaxi')

lista_coisas['pessoas'] = ['Anna', 'Pedro', 'Bartolomeu', 'Absalão']

console.log(lista_coisas)
document.write(lista_coisas['frutas'][2])

//Incluir e Remover intens

var lista_carros = Array()
lista_carros[0] = 'BMW'
lista_carros[1] = 'Mercedes'
//inclir elemento no final do array
lista_carros.push('Honda')
//incluir elemento no início do array
lista_carros.unshift('Ford')
//excluir elemento no final do array
lista_carros.pop()
//excluir elemento no início do array
lista_carros.shift()
console.log(lista_carros)

//Pesquisar elementos dentro do array

var lista_times = []

lista_times[0] = 'Flamengo'
lista_times[1] = 'Palmeiras'
lista_times[2] = 'Grêmio'
lista_times[3] = 'São Paulo'
lista_times[4] = 'Fluminence'
lista_times[5] = 'Vasco'
lista_times[6] = 'Bahia'
lista_times[7] = 'Inter'

if(lista_times.indexOf('Inter') === -1) {
    console.log('elemento não existe')
} else {
    console.log('O elemento está na posição ' + lista_times.indexOf('Flamengo'))
}

//ordenação de array

var lista_bebidas = []
lista_bebidas[0] = 'Chá'
lista_bebidas[1] = 'Café'
lista_bebidas[2] = 'Suco'
lista_bebidas[3] = 'Iogurte'
//sort() organiza de forma alfanumerica
console.log(lista_bebidas.sort())

var lista_idade = []
lista_idade[0] = 58 
lista_idade[1] = 3
lista_idade[2] = 95
lista_idade[3] = 16
lista_idade[4] = 8
lista_idade[5] = 25
lista_idade[6] = 42
//organiza de a cordo com o primeiro digito e ignora o resto
console.log(lista_idade.sort(ordenaNumeros))
//função para considerar todos os digitos e organizar os numeros da maneira correta
function ordenaNumeros(a, b) {
    return a - b
    // valor menor que 0 = ordenado antes de b
    // valor maior que 0 = ordenado antes de a
    // valores iguais = ordem mantida
}
