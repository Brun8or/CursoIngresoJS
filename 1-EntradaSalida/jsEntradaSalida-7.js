/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	/*las var no pueden empezar con numeros
	no pueden tener espacio. Ej: 1Alumno=Mal, un Alumno=Mal,
	unAlumno=Bien
	*/
	var segundoNumero;

	var resultadoDeLaSuma;
	
	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primerNumero);
	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero);
	resultadoDeLaSuma=primerNumero+segundoNumero;


	console.log(resultadoDeLaSuma);


	/*3 formas de mostrar mensajes:1-Alert(Obsoleta, molesta)
	                               2-ID(No sirve para desarrollo pero si para el final, intesteable)
	                               3-Console.Log("")(Hay otros puntos investigables)
*/

}

function restar()
{
	
}

function multiplicar()
{ 
	
}

function dividir()
{
	
}

