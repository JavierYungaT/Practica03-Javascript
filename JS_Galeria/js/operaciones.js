
var actual = 0;
function puntos(n){
    var ptn = document.getElementsByClassName("punto");
    for(i = 0; i<ptn.length; i++){
        if(ptn[i].className.includes("activo")){
            ptn[i].className = ptn[i].className.replace("activo", "");
            break;
        }
    }
    ptn[n].className += " activo";
}

function mostrar(n){
    var imagenes = document.getElementsByClassName("imagen");
    for(i = 0; i< imagenes.length; i++){
        if(imagenes[i].className.includes("actual")){
            imagenes[i].className = imagenes[i].className.replace("actual", "");
            break;
        }
    }
    actual = n;
    imagenes[n].className += " actual";
    puntos(n);
}

function siguiente(){
    actual++;
    if(actual > 4){
        actual = 0;
    }
    mostrar(actual);
    var i;
	var x = document.getElementsByClassName("mySlides");
	if (n == x.length)
		document.getElementById('right').disabled = true;
	else
		document.getElementById('right').disabled = false;

	if (n == 1) 
		document.getElementById('left').disabled = true;
	else
		document.getElementById('left').disabled = false

	for (i = 0; i < x.length; i++)
		x[i].style.display = "none";
}
function anterior(){
    actual--;
    if(actual < 0){
        actual = 4;
    }
    mostrar(actual);
}

/*
var velocidad = 2000;
var play = setInterval("siguiente()", velocidad);

function playpause(){
    var boton = document.getElementById("btn");
    if(play == null){
        boton.src = "images/pause.png";
        play = setInterval("siguiente()", velocidad);
    } else {
        clearInterval(play);
        play = null;
        boton.src = "images/play.png";
    }
}
*/
var slideIndex = 1;
showDivs(slideIndex);

window.onload = function() {
	iniciar();
}

function iniciar() {
	slideIndex = 1;
	showDivs(1);
	array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	var val;
	for(i = 0; i < 5; i++) 
		array.splice(Math.floor(Math.random() * array.length), 1);

	shuffle(array);

	for(i = 0; i < 5; i++) 
		document.getElementById(i).src = "img/"+ array[i] +".jpg"+".png";
}

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	if (n == x.length)
		document.getElementById('right').disabled = true;
	else
		document.getElementById('right').disabled = false;

	if (n == 1) 
		document.getElementById('left').disabled = true;
	else
		document.getElementById('left').disabled = false

	for (i = 0; i < x.length; i++)
		x[i].style.display = "none";

	x[slideIndex-1].style.display = "block"; 
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}