/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var resultadoDeLaSuma;

	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primerNumero);
	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero);


	resultadoDeLaSuma=primerNumero+segundoNumero;


	alert(resultadoDeLaSuma);



}

