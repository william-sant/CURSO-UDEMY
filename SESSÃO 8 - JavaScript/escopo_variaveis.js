/* TIPOS DE ESCOPO

GLOBAL --> todo o script

FUNÇÃO --> conteúdo inserido dentro de um bloco de função -'function'
BLOCO --> instruções dentro de comandos como, if ou switch

escopo da function faz com que as funções declaradas dentro dela fique somente disponivéis dentro de seu respectivo escopo

o escopo da função tem acesso a variaveis globais, mas o inverso não é verdade

escopo de função e escopo de bloco visualizam variaveis de escopo global
variaveis declaradas dentro de um escopo de bloco, sofrem elevação 

*/

var serie = 'Friends'

if(true){
  var serie2 = 'Game of Thrones'
  document.write(serie)
}

document.write(serie2)

document.write('<br />')

function x(){
  var serie3 = 'The Walking Dead'
  document.write(serie)
  document.write(serie2)
}

x() 

document.write('<br />')
document.write(serie3) //não renderiza