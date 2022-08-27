

var valor = 0

console.log(check())

function check(){
    valor = prompt("Digite um valor inteiro")

    if(valor > 0){
        return 1
    }

    if(valor == 0){
        return 0
    }

    if(valor < 0){
        return -1
    }
}