var contador=1
var imagenes=new Array()
var Simagenes=new Array()
for (var i=1;i<=10;i++) {
    imagenes[i] = "imagenes/img"+i.toString()+'.jpg';
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function init(){
    contador=1
    var ant = document.getElementById("anterior")
    ant.disabled=true;
    var sig = document.getElementById("siguiente")
    sig.disabled=false;
    var azar=new Array()
    for(var i=1;i<=5;i++){
        azar[i]=random(1,11)
    }


    for(var i=1;i<=azar.length;i++){
        for(var j=azar.length;j>=i+1;j--){
            if(azar[i]==azar[j]){
                azar[i]=random(1,11)
            }
        }
    }

    for (var i=1;i<=5;i++) {
        Simagenes[i] = "imagenes/img"+azar[i].toString()+'.jpg';

    }
    var foto=document.getElementById("img")
    foto.src=Simagenes[contador]
}

function adelante(){
    contador++
    if(contador==5){
        var foto=document.getElementById("img")
        foto.src=Simagenes[contador]
        var sig = document.getElementById("siguiente")
        sig.disabled=true;
    }else{
        var sig = document.getElementById("siguiente")
        sig.disabled=false;
        var ant = document.getElementById("anterior")
        ant.disabled=false;
        var foto=document.getElementById("img")
        foto.src=Simagenes[contador]
    }
    
}

function atras(){
    contador--
    if(contador==1){
        var foto=document.getElementById("img")
        foto.src=Simagenes[contador]
        var ant = document.getElementById("anterior")
        ant.disabled=true;
    }else{
        var ant = document.getElementById("anterior")
        ant.disabled=false;
        var sig = document.getElementById("siguiente")
        sig.disabled=false;
        var foto=document.getElementById("img")
        foto.src=Simagenes[contador]
    }
}