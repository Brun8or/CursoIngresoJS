/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	/*las var no pueden empezar con numeros
	no pueden tener espacio. Ej: 1Alumno=Mal, un Alumno=Mal,
	unAlumno=Bien
	*/


	var primerNumero;
	var segundoNumero;
	var resultadoDeLaSuma;

	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primerNumero);
	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	resultadoDeLaSuma=primerNumero+segundoNumero;


	console.log(resultadoDeLaSuma);
}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resultadoDeLaResta;


	primerNumero=document.getElementById('numeroUno').value;
	segundoNumero=document.getElementById('numeroDos').value;

	resultadoDeLaResta=primerNumero-segundoNumero;


	console.log(resultadoDeLaResta);

}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var producto;


	primerNumero=document.getElementById('numeroUno').value;
	segundoNumero=document.getElementById('numeroDos').value;

	producto=primerNumero*segundoNumero;

	console.log(producto);



}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var cociente;

	primerNumero=document.getElementById('numeroUno').value;
	segundoNumero=document.getElementById('numeroDos').value;

	cociente=primerNumero/segundoNumero;

	console.log(cociente);
	
}

