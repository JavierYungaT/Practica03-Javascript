function operar(operacion){
    var resultado = eval(operacion)
    document.getElementById("pantalla").value=resultado
}

function potencia(numero){
    var resultado = Math.pow(numero,2)
    document.getElementById("pantalla").value=resultado
}

function raiz(numero){
    var resultado = Math.sqrt(numero)
    document.getElementById("pantalla").value=resultado
}

function porcentaje(numero){
    var resultado = numero/100
    document.getElementById("pantalla").value=resultado
}

function regresar(operacion){
    var operacion = document.getElementById("pantalla").value
    document.getElementById("pantalla").value = operacion.substring(0,operacion.length-1)
}