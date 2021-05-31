let p1=document.getElementById('ope');
let p2=document.getElementById('Res');
let calculadora=document.getElementById('back');
let botonC=document.getElementById('botonC');

function add(numero){
	p1.innerHTML+=numero;
	cal();
}

function cal(){
	p2.innerHTML=eval(p1.innerHTML);
}

function borrar(){
	p1.innerHTML="";
	p2.innerHTML="";
}

function resultado(){
	p1.innerHTML=p2.innerHTML;
	p2.innerHTML="";	
}
function claro(){
	calculadora.classList.remove('oscuro');
	calculadora.classList.add('claro');

	let punto=document.getElementById('boton-espacio2');
	let boton=document.querySelectorAll('.centro');
	let t=boton.length;
	for(i=t-1; i>=0; i--){
		boton[i].classList.remove('toscuro');
		boton[i].classList.add('tclaro');
	}
	punto.classList.remove('toscuro');
	punto.classList.add('tclaro');
	p1.classList.remove('toscuro');
	p1.classList.add('tclaro');
}

function oscuro(){
	calculadora.classList.remove('claro');
	calculadora.classList.add('oscuro');

	let punto=document.getElementById('boton-espacio2');
	let boton=document.querySelectorAll('.centro');
	let t=boton.length;
	for(i=t-1; i>=0; i--){
		boton[i].classList.remove('tclaro');
		boton[i].classList.add('toscuro');
	}
	punto.classList.remove('tclaro');
	punto.classList.add('toscuro');
	p1.classList.remove('tclaro');
	p1.classList.add('toscuro');
}