
var idade = prompt('informe a sua idade')

if(idade <15) {
   document.write('Você tem ' + idade + ' anos, portanto é considerado uma criaça')
}

if(idade >=15 && idade <30) {
    document.write('Você tem ' + idade + ' anos, portanto é considerado jovem')
}

if(idade >=30 && idade <60) {
    document.write('você tem ' + idade + ' por tanto é considerado adulto')
}

if(idade >=60) {
    document.write('você tem ' + idade + ' por tanto é considerado idoso')
}