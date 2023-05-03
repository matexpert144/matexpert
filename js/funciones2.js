$(document).ready(function() 
{
	//alert("karla del angel");




	$(".panel").hide();
	$(".algebra").hide();
	$(".titu").hide();

	$(".ini").on("click", function()
		{
			$(".inicio").show();
			$(".comentarios").show();

			$(".panel").hide();
			$(".algebra").hide();
			$(".IN").hide();
			$(".todocalculadora").hide();
			$(".titu").hide();
	});

	$(".pgalgebra").on("click", function()
		{
			$(".inicio").hide();
			$(".comentarios").hide();

			$(".panel").hide();
			$(".algebra").show();
			$(".IN").hide();
			$(".todocalculadora").hide();

			$(".titu").show();

			var textmenu=$(this).text();
			$(".producto").text(textmenu);
		});


	$(".pggeometria").on("click", function()
		{
			$(".inicio").hide();
			$(".comentarios").hide();

			$(".panel").hide();
			$(".geometria").show();
			$(".todocalculadora").hide();
			$(".IN").hide();

			$(".titu").show();

			var textmenu=$(this).text();
			$(".producto").text(textmenu);
		});

	$(".pgcalculo").on("click", function()
		{
			$(".inicio").hide();
			$(".comentarios").hide();

			$(".calculo").show();
			$(".algebra").hide();
			$(".geometria").hide();
			$(".conversiones").hide();
			$(".todocalculadora").hide();
			$(".IN").hide();

			$(".titu").show();

			var textmenu=$(this).text();
			$(".producto").text(textmenu);
		});

	$(".pgconver").on("click", function()
		{
			$(".inicio").hide();
			$(".comentarios").hide();

			$(".conversiones").show();
			$(".algebra").hide();
			$(".calculo").hide();
			$(".geometria").hide();
			$(".todocalculadora").hide();
			$(".IN").hide();

			$(".titu").show();

			var textmenu=$(this).text();
			$(".producto").text(textmenu);
		});

	$(".pgcalculadora").on("click", function()
		{
			$(".inicio").hide();
			$(".comentarios").hide();

			$(".IN").hide();
			$(".panel").hide();
			$(".todocalculadora").show();

			$(".titu").show();

			var textmenu=$(this).text();
			$(".producto").text(textmenu);
		});

///algebra////
	$(".IN").hide();

	$(".suma").on("click", function()
		{
			$(".IN").hide();
			$(".todocalculadora").hide();
			$(".infosuma").show();
		});

	$(".resta").on("click", function()
		{
			$(".IN").hide();
			$(".todocalculadora").hide();
			$(".inforesta").show();
		});

	$(".multi").on("click", function()
		{
			$(".IN").hide();
			$(".todocalculadora").hide();
			$(".infomulti").show();
		});

	$(".division").on("click", function()
		{
			$(".IN").hide();
			$(".todocalculadora").hide();
			$(".infodivision").show();
		});

	$(".orden").on("click", function()
		{
			$(".IN").hide();
			$(".todocalculadora").hide();
			$(".infoorden").show();
		});


/////geometria/////
	$(".IN").hide();

	$(".punto").on("click", function()
		{
			$(".IN").hide();
			$(".todocalculadora").hide();
			$(".infopunto").show();
		});

	$(".recta").on("click", function()
		{
			$(".IN").hide();
			$(".todocalculadora").hide();
			$(".inforecta").show();
		});

	$(".semirecta").on("click", function()
		{
			$(".IN").hide();
			$(".todocalculadora").hide();
			$(".infosemirecta").show();
		});

	$(".seg").on("click", function()
		{
			$(".IN").hide();
			$(".todocalculadora").hide();
			$(".infoseg").show();
		});

	$(".plano").on("click", function()
		{
			$(".IN").hide();
			$(".todocalculadora").hide();
			$(".infoplano").show();
		});

	////modo oscuro//// y claro
	$(".bum").on("click",function()
	{

				var txt = $(this).text();
				alert(txt);
				if(txt==="modo oscuro")
		  	{
				$("body").css("color","black");
				$(".AMG").css("background","#4A4848");
				$(".topmenu").css("background","#4A4848");
				$(".ATM").css("background","#424141");
				$(".ATM").css("color","white");
				$(".circulo").css("background","#889098");
				$(".rosa").css("background","#312F2F");
				$(".rosaR").css("background","#312F2F");
				$(".blanco").css("background","#312F2F");
				$(".bajo").css("background","#889098");
				$(".titu").css("background","#3A4B5B");
				$(".titu").css("color","white");
				$(".KAR").css("background","#4A4848");
				$(".GEO").css("background","#424141");
				$(".GEO").css("color","white");
				$(".ALG").css("background","#424141");
				$(".ALG").css("color","white");
				$(".CAL").css("background","#424141");
				$(".CAL").css("color","white");
				$(".CON").css("background","#424141");
				$(".CON").css("color","white");
				$(this).text("Modo claro");
			}
			 else
			{
			 	
			 	//$("body").css("color","white");
			 	$(".topmenu").css("background","white");
				$(".AMG").css("background","#C9FFFC");
				$(".AMG").css("color","black");
				$(".ATM").css("background","#87EDFF");
				$(".ATM").css("color","black");
				$(".circulo").css("background","#C8FFFC");
				$(".rosaR").css("background","#FC3269");
				$(".blanco").css("background","white");
				$(".bajo").css("background","#C8FFFC");
				$(".titu").css("background","#87EDFF");
				$(".titu").css("color","black");
				$(".KAR").css("background","white");
				$(".GEO").css("background","#87EDFF");
				$(".GEO").css("color","black");
				$(".ALG").css("background","#87EDFF");
				$(".ALG").css("color","black");
				$(".CAL").css("background","#87EDFF");
				$(".CAL").css("color","black");
				$(".CON").css("background","#87EDFF");
				$(".CON").css("color","black");
				$(this).text("modo oscuro");
			}
	});
	
	//Calculadora//
	//Declaramos variables
var operandoa;
var operandob;
var operacion;


function init()
	{
  //variables
  var resultado = document.getElementById('resultado');
  var reset = document.getElementById('reset');
  var suma = document.getElementById('suma');
  var resta = document.getElementById('resta');
  var multiplicacion = document.getElementById('multiplicacion');
  var division = document.getElementById('division');
  var igual = document.getElementById('igual');
  var uno = document.getElementById('uno');
  var dos = document.getElementById('dos');
  var tres = document.getElementById('tres');
  var cuatro = document.getElementById('cuatro');
  var cinco = document.getElementById('cinco');
  var seis = document.getElementById('seis');
  var siete = document.getElementById('siete');
  var ocho = document.getElementById('ocho');
  var nueve = document.getElementById('nueve');
  var cero = document.getElementById('cero');
	}

//Eventos de click
  uno.onclick = function(e)
  {
      resultado.textContent = resultado.textContent  + "1";
  }
  dos.onclick = function(e)
  {
      resultado.textContent = resultado.textContent  + "2";
  }
  tres.onclick = function(e)
  {
      resultado.textContent = resultado.textContent  + "3";
  }
  cuatro.onclick = function(e)
  {
      resultado.textContent = resultado.textContent  + "4";
  }
  cinco.onclick = function(e)
  {
      resultado.textContent = resultado.textContent  + "5";
  }
  seis.onclick = function(e)
  {
      resultado.textContent = resultado.textContent  + "6";
  }
  siete.onclick = function(e)
  {
      resultado.textContent = resultado.textContent  + "7";
  }
  ocho.onclick = function(e)
  {
      resultado.textContent = resultado.textContent  + "8";
  }
  nueve.onclick = function(e)
  {
      resultado.textContent = resultado.textContent  + "9";
  }
  cero.onclick = function(e)
  {
      resultado.textContent = resultado.textContent  + "0";
  }
  reset.onclick = function(e)
  {
      resetear();
  }
  suma.onclick = function(e)
  {
      operandoa = resultado.textContent;
      operacion = "+";
      limpiar();
  }
  resta.onclick = function(e)
  {
      operandoa = resultado.textContent;
      operacion = "-";
      limpiar();
  }
  multiplicacion.onclick = function(e)
  {
      operandoa = resultado.textContent;
      operacion = "*";
      limpiar();
  }
  division.onclick = function(e)
  {
      operandoa = resultado.textContent;
      operacion = "/";
      limpiar();
  }
  igual.onclick = function(e)
  {
      operandob = resultado.textContent;
      resolver();
  }

  function limpiar()
  {
  resultado.textContent = "";
}

function resetear()
{
  resultado.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}

function resolver()
{
  var res = 0;
  switch(operacion)
  {
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;

    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;

    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;

    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  resetear();
  resultado.textContent = res;
}
});
///Fin calculadora///

///Inicio comentario////
const submitButton = document.getElementById("submit-button");
const commentInput = document.getElementById("comment-input");
const commentsContainer = document.getElementById("comments-container");

submitButton.addEventListener("click", function() 
{
  const comment = commentInput.value;
  const commentElement = document.createElement("div");
  commentElement.innerHTML = comment;
  commentsContainer.appendChild(commentElement);
  commentInput.value = "";
});

function commentBox()
{
	var name=document.getElementById('name').value;
	var comment=document.getElementById('comment').value;
 
	if(name =="" || comment =="")
	{
		alert("Porfavor introduce la informacion requerida!");
	}
	else
	{
		var parent=document.createElement('div');
		var el_name=document.createElement('h5');
		var el_message=document.createElement('h5');
		var el_line=document.createElement('hr');
		var txt_name=document.createTextNode("De: "+name);
		var txt_message=document.createTextNode("Comentario: "+comment);
		el_name.appendChild(txt_name);
		el_message.appendChild(txt_message);
		el_line.style.border='1px solid #000';
		parent.appendChild(el_name);
		parent.appendChild(el_message);
		parent.appendChild(el_line);
		parent.setAttribute('class', 'pane');
		document.getElementById('result').appendChild(parent);
 
		document.getElementById('name').value="";
		document.getElementById('comment').value="";
	}
}
///Fin comentario///


///ejercicios suma///
function mysuma()
 { 
   var x,y,suma,text;  
   x = document.getElementById("num1").value;  
   y = document.getElementById("num2").value;  
   if (isNaN(x) || isNaN(y)) 
   {  
     text = "Es necesarios introducir dos números válidos";  
   } else {  
       
     suma=parseFloat(x)+parseFloat(y);  
     text= suma;  
   }  
   document.getElementById("sumando").innerHTML = text;  
 } 

///termina ejercicios suma///

///inicia ejercicios resta///

function myFunction() {
	var x,y,resta,text;
	x = document.getElementById("num3").value;
	y = document.getElementById("num4").value;
	if (isNaN(x) || isNaN(y)) 
	{
		text = "Introduce dos números validos";
	}
	else
	{
		resta=parseFloat(x)-parseFloat(y);
		text= resta;
	}
	document.getElementById("resta").innerHTML = text;
}
///termina ejercicios resta///

 ///inicia ejercicios multiplicar///
function multiplicar(){
	m5 = document.getElementById("multiplicando").value;
	m6 = document.getElementById("multiplicador").value;
	r = m5*m6;
	document.getElementById("resultado").value = r;
	}
	///termina ejercicios multiplicar

	///inicia ejercicios de division
	function dividir(){
	m7 = document.getElementById("dividiendo").value;
	m8 = document.getElementById("divisor").value;
	r = m7/m8;
	document.getElementById("resultadodiv").value = r;
	}
	
