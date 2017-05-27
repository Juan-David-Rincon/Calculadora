var Cuadro1 = document.getElementById("Cuadro1");
var Cuadro2 = document.getElementById("Cuadro2");
var RSuma = document.getElementById("suma");
var RResta = document.getElementById("resta");
var RMultiplicacion = document.getElementById("multiplica");
var RDivision = document.getElementById("divide");
var r = document.getElementById("mostrar");

RSuma.addEventListener("click", sumar);
RResta.addEventListener("click", restar);
RMultiplicacion.addEventListener("click", multiplicar);
RDivision.addEventListener("click", dividir);

function dividir()
{
  var a = parseFloat(Cuadro1.value);
  var b = parseFloat(Cuadro2.value);
  var z = a / b;

  r.innerHTML = z;
}

function multiplicar()
{
  var a = parseFloat(Cuadro1.value);
  var b = parseFloat(Cuadro2.value);
  var z = a * b;

  r.innerHTML = z;
}

function restar()
{
  var a = parseFloat(Cuadro1.value);
  var b = parseFloat(Cuadro2.value);
  var z = a - b;

  r.innerHTML = z;
}

function sumar()
{
  var a = parseFloat(Cuadro1.value);
  var b = parseFloat(Cuadro2.value);
  var z = a + b;

  r.innerHTML = z;
}
