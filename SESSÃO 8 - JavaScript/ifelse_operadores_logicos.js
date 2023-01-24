
//true && true && false = false
if ( 2 == 2 && 3 >= 1 && 'a' == 'b') { //'&&' verdadeiro se todas as expressçoes forem verdadeiras 
    document.write('Teste && = Verdadeiro' + '<br/>')
} else {
    document.write('Teste && = Falso' + '<br/>')
}

//true && true && false = true
if ( 2 == 2 || 3 >= 1 || 'a' == 'b') { // '||' verdadeiro se pelo menos uma das expressões for verdadeira
    document.write(' Teste || = Verdadeiro' + '<br/>')
} else {
    document.write(' Teste || = Falso' + '<br/>')
}

//true = false
if ( !(5 >= 2)) { //'!' inverte o resultado da expressão de comparação
    document.write(' Teste ! = Verdadeiro ' + '<br/>')
} else {
    document.write(' Teste ! = Falso ' + '<br/>')
}
