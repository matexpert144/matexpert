$(document).ready(function() 
{
	//alert("karla del angel");




	$(".panel").hide();
	$(".algebra").hide();
	$(".titu").hide();
	$(".desarrolladores").hide();

	$(".ini").on("click", function()
		{
			$(".inicio").show();
			$(".comentarios").show();
			$(".topmenu").show();
			$(".bajo").show();
			$(".desarrolladores").hide();
			$(".face").show();


			$(".panel").hide();
			$(".algebra").hide();
			$(".IN").hide();
			$(".todocalculadora").hide();
			$(".titu").hide();
	});

	$(".autores").on("click", function()
		{
			$(".desarrolladores").show();
			$(".topmenu").hide();
			$(".bajo").hide();
			$(".inicio").hide();
			$(".face").hide();

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
			$(".RE").show();

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
			$(".RE").show();

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
			$(".RE").show();

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
			$(".RE").show();

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
			alert("Bienvenido a las multiplicaciones en algebra");
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

	$(".conceptos").on("click", function()
		{
			$(".Geo").show();
			$(".todocalculadora").hide();
		});

	$(".teorema").on("click", function()
		{
			$(".IN").hide();
			$(".todocalculadora").hide();
			$(".infoplano").show();
		});

		///calculo///
		$(".lim").on("click", function()
		{
			$(".IN").hide();
			$(".todocalculadora").hide();
			$(".infolim").show();
		});

		$(".fun").on("click", function()
		{
			$(".IN").hide();
			$(".todocalculadora").hide();
			$(".infofun").show();
		});

		$(".der").on("click", function()
		{
			$(".IN").hide();
			$(".todocalculadora").hide();
			$(".infoderi").show();
		});

		$(".fac").on("click", function()
		{
			$(".IN").hide();
			$(".todocalculadora").hide();
			$(".infofac").show();
		});


		////conversiones
		$(".IN").hide();

		$(".conceptosconver").on("click", function()
		{
			$(".Conver").show();
			$(".todocalculadora").hide();
			$(".curiosidades").show();
		});

		
		$(".convertir").on("click", function()
		{
			$(".todocalculadora").hide();
			$(".Conver").hide();
		});



	////modo oscuro//// y claro
	$(".bum").on("click",function()
	{

				var txt = $(this).text();
				//////alert(txt);
				if(txt==="Modo oscuro")
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
				$(".inicio").css("background","#4A4848")
				$(".inicio").css("color","white")
				$(".comentarios").css("background","#4A4848")
				$(".comentarios").css("color","white")
				$(".desarrolladores").css("background","#889098")
				$(".desarrolladores").css("color","white")
				$(this).text("Modo claro");
			}
			 else
			{
			 	
			 	//$("body").css("color","white");
			 	$(".topmenu").css("background","white");
				$(".AMG").css("background","#BDC3C7");
				$(".AMG").css("color","black");
				$(".ATM").css("background","#BDC3C7");
				$(".ATM").css("color","black");
				$(".circulo").css("background","#21618C");
				$(".bajo").css("background","#2874A6");
				$(".titu").css("background","#2874A6");
				$(".titu").css("color","black");
				$(".inicio").css("background","#2874A6")
				$(".inicio").css("color","black")
				$(".comentarios").css("background","#2874A6")
				$(".comentarios").css("color","black")
				$(".desarrolladores").css("background","#2874A6")
				$(".desarrolladores").css("color","black")
				$(this).text("Modo oscuro");
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
  uno.onclick = function(e){
      resultado.textContent = resultado.textContent  + "1";
  }
  dos.onclick = function(e){
      resultado.textContent = resultado.textContent  + "2";
  }
  tres.onclick = function(e){
      resultado.textContent = resultado.textContent  + "3";
  }
  cuatro.onclick = function(e){
      resultado.textContent = resultado.textContent  + "4";
  }
  cinco.onclick = function(e){
      resultado.textContent = resultado.textContent  + "5";
  }
  seis.onclick = function(e){
      resultado.textContent = resultado.textContent  + "6";
  }
  siete.onclick = function(e){
      resultado.textContent = resultado.textContent  + "7";
  }
  ocho.onclick = function(e){
      resultado.textContent = resultado.textContent  + "8";
  }
  nueve.onclick = function(e){
      resultado.textContent = resultado.textContent  + "9";
  }
  cero.onclick = function(e){
      resultado.textContent = resultado.textContent  + "0";
  }
  reset.onclick = function(e){
      resetear();
  }
  suma.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "+";
      limpiar();
  }
  resta.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "-";
      limpiar();
  }
  multiplicacion.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "*";
      limpiar();
  }
  division.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "/";
      limpiar();
  }
  igual.onclick = function(e){
      operandob = resultado.textContent;
      resolver();
  }

function limpiar(){
resultado.textContent = "";
}

function resetear(){
  resultado.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}

function resolver(){
  var res = 0;
  switch(operacion){
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
	///termina ejercicios de division 

	//inicia teorema de pitagoras 
function CatetoOpuesto(){
		do{
			hipotenusa=prompt("Introduce la Hipotenusa");
		}while((isNaN(hipotenusa)==true)||(hipotenusa<=0));
		hipotenusafloat=parseFloat(hipotenusa);

		do{
		catetoAdyacente=prompt("Introduce el valor del Cateto Adyacente");
		}while((isNaN(catetoAdyacente)==true)||(hipotenusafloat<=catetoAdyacente)||(catetoAdyacente<=0));

		catetopu=((hipotenusa*hipotenusa)-(catetoAdyacente*catetoAdyacente));
		alert("El Cateto Opuesto es "+Math.sqrt(catetopu));
	}

	function CatetoAdyacente()
	{
		do{
			hipotenusa=prompt("Introduce la Hipotenusa");
		}while((isNaN(hipotenusa)==true)||(hipotenusa<=0));
		hipotenusafloat=parseFloat(hipotenusa);

		do{
			catetoOpuesto=prompt("Introduce el valor del Cateto Opuesto");
		}while((isNaN(catetoOpuesto)==true)||(hipotenusafloat<=catetoOpuesto)||(catetoOpuesto<=0));

		catetoadya=((hipotenusa*hipotenusa)-(catetoOpuesto*catetoOpuesto));
		alert("El cateto Adyacente es "+Math.sqrt(catetoadya))
	}
	function Hipotenusa()
	{
		do{
			catetoOpuesto=prompt("Introduce el valor del Cateto Opuesto");
		}while((isNaN(catetoOpuesto)==true)||(catetoOpuesto<=0));

		do{
			catetoAdyacente=prompt("Introduce el valor del Cateto Adyacente");
		}while((isNaN(catetoAdyacente)==true)||(catetoAdyacente<=0));

		hipo=((catetoOpuesto*catetoOpuesto)+(catetoAdyacente*catetoAdyacente));
		alert("El valor de la Hipotenusa es "+Math.sqrt(hipo));
	}

	///inicia conversiones///

principal();
    $selectPrimerGrupo.val('metro');

var $inputPrincipal = $('input#principal'),
    $resultado = $('div#resultado'),
    $selectGrupoUnidades = $('select#grupoUnidades'),
    $selectPrimerGrupo = $('select#primeraUnidad'),
    $selectSegundoGrupo = $('select#segundaUnidad'),
    $inputPrimerGrupo = $('input#inputPrimeraUnidad'),
    $inputSegundoGrupo = $('input#inputSegundaUnidad'),
    $btnEjemplo = $('button#mostrarEjemplo'),
    $ventanaAcercaDe = $('div#acercaDe'),
    $btnAcercaDe = $('button#btn-about'),
    contador = 0,
    segundosCambiaPlaceholder = 1,
    limiteLongitudNumeros = 16,
    palabrasPermitidas = ["en", "a"],
    sugerencias = [
        "20 hercios a kilohertz",
        "1 milimetro en pies",
        "14.6 miligramos en onzas",
        "256 bits a megabytes",
        "15 mes a horas",
        "256 bits a megabytes"
    ];
function aLetraCapital(palabra) {
    return palabra[0].toUpperCase() + palabra.slice(1, palabra.length);
}

function cambiaPlaceholder() {
    if (contador < sugerencias.length) {
        $inputPrincipal.attr('placeholder', sugerencias[contador]);
        contador++;
    } else {
        contador = 0;
    }
}

function compruebaValores(oracion) {
    if (oracion) {
        var oracionCortada = cortaOracion(oracion);
        if (isNaN(oracionCortada)) {
            var numero = oracionCortada.numero,
                unidad1 = oracionCortada.u1.toLowerCase(),
                unidad2 = oracionCortada.u2.toLowerCase();
            if (!isNaN(numero)) {
                if (numero.length <= limiteLongitudNumeros - 1) {
                    if (dameGrupo(unidad1) === false) {
                        unidad1 = unidad1.slice(0, -1);
                    }
                    if (dameGrupo(unidad2) === false) {
                        unidad2 = unidad2.slice(0, -1);
                    }
                    var grupoUnidad1 = dameGrupo(unidad1),
                        grupoUnidad2 = dameGrupo(unidad2);
                    if (grupoUnidad1 !== false) {
                        if (grupoUnidad2 !== false) {
                            if (grupoUnidad1 === grupoUnidad2) {
                                convierte(grupoUnidad1, grupoUnidad2, numero, unidad1, unidad2, false);
                            } else {
                                escribeError('Los grupos de unidades no son compatibles: <strong>' + unidad1 + ' y ' + unidad2 + '</strong>');
                            }
                        } else {
                            escribeError('La segunda unidad no existe: <strong>' + unidad2 + '</strong>');
                        }
                    } else {
                        escribeError('La primera unidad no existe: <strong>' + unidad1 + '</strong>');
                    }
                } else {
                    escribeError('Lo siento, solamente se permiten números de <strong>16 cifras</strong> sin incluir el punto decimal');
                }
            } else {
                escribeError('La primera parte de la oración no es un número: <strong>' + numero + '</strong>');
            }

        } else {
            switch (oracionCortada) {
                case 0:
                    escribeError('No entiendo lo que quieres. Recuerda que debes unir con "en" o "a", por ejemplo "1 milla <strong>a</strong> metros"');
                    break;
                case 1:
                    escribeError('No entiendo lo que quieres. Recuerda que no debes <strong>incluir espacios</strong> al inicio');
                    break;
            }
        }
    } else {
        $('.ocultable').hide();
    }
}

function convierte(grupo, grupo2, numero, u1, u2, esDelSegundoInput) {
    var resultado = dameEquivalencia(grupo, u1, u2) * numero;
    if (grupo === "Temperatura") {
        resultado = grados(grupo, u1, u2, numero);
    }
    llenaPrimerGrupo($selectPrimerGrupo, grupo);
    llenaSegundoGrupo($selectSegundoGrupo, grupo2);
    $selectGrupoUnidades.val(grupo);
    if (esDelSegundoInput) {

        $inputPrimerGrupo.val(resultado);
        $inputSegundoGrupo.val(numero);
        $selectPrimerGrupo.val(u2);
        $selectSegundoGrupo.val(u1);
    } else {

        $inputPrimerGrupo.val(numero);
        $inputSegundoGrupo.val(resultado);
        $selectPrimerGrupo.val(u1);
        $selectSegundoGrupo.val(u2);
    }
    escribeResultado(numero, u1, u2, resultado);
}

function cortaOracion(o) {
    var posicionPrimerNumero = o.indexOf(" ");
    if (posicionPrimerNumero > 0) {
        var primerNumero = o.slice(0, posicionPrimerNumero);
        var posicionNexo;
        var nexo;
        var x;
        for (x in palabrasPermitidas) {
            posicionNexo = o.indexOf(" " + palabrasPermitidas[x] + " ", posicionPrimerNumero + 1);
            if (posicionNexo !== -1) {
                break;
            }
        }
        if (posicionNexo !== -1) {
            nexo = palabrasPermitidas[x];
            var unidad1 = o.slice(posicionPrimerNumero + 1, posicionNexo);
            var unidad2 = o.slice(posicionNexo + 2 + nexo.length, o.length);
            return {
                'numero': primerNumero,
                'u1': unidad1,
                'u2': unidad2
            };
        } else {
            return 0;
        }
    } else {
        return 1;
    }

}

function dameEquivalencia(grupo, u1, u2) {

    return unidades[grupo].equivalencias[u1][u2];
}

function dameGrupo(unidad) {
    for (var x in unidades) {
        if (unidades[x].unidades.indexOf(unidad) !== -1) {
            return unidades[x].grupo;
        }
    }
    return false;
}

function escribeError(mensaje) {
    $('.ocultable').hide();
    $resultado
        .removeClass('alert-success')
        .addClass('alert-danger');
    $resultado.html('<h5>' + mensaje + '</h5>');
}

function escribeResultado(numero, u1, u2, resultado) {
    var primeraUnidadFinal = (numero === 1) ? u1 : u1 + 's';
    var cadenaSegundaUnidad = (resultado === 1) ? u2 : u2 + 's';
    var cadenaEquivalencia = (numero === 1) ? " equivale " : " equivalen ";
    var mensaje = '<h5>'
        + '<strong>' + numero + '</strong>'
        + ' '
        + primeraUnidadFinal
        + cadenaEquivalencia + 'a '
        + '<strong>' + resultado + '</strong>'
        + ' '
        + cadenaSegundaUnidad
        + '</h5>';
    $resultado
        .removeClass('alert-danger')
        .addClass('alert-success');
    $resultado.html(mensaje);
    $('.ocultable').show();
}

function escuchaElementos() {
    $selectGrupoUnidades.change(function () {
        llenaPrimerGrupo($selectPrimerGrupo, $(this).val());
        llenaSegundoGrupo($selectSegundoGrupo, $(this).val());
        $inputPrimerGrupo.val(1);
        $inputPrimerGrupo.keyup();
        convierte(
            $(this).val(),
            $(this).val(),
            $inputPrimerGrupo.val(),
            $selectPrimerGrupo.val(),
            $selectSegundoGrupo.val(), false);
    });
    $selectPrimerGrupo.change(function () {
        convierte(
            $selectGrupoUnidades.val(),
            $selectGrupoUnidades.val(),
            $inputPrimerGrupo.val(),
            $(this).val(),
            $selectSegundoGrupo.val(), false);
    });
    $selectSegundoGrupo.change(function () {
        convierte(
            $selectGrupoUnidades.val(),
            $selectGrupoUnidades.val(),
            $inputPrimerGrupo.val(),
            $selectPrimerGrupo.val(),
            $(this).val(), false);
    });
    $inputPrimerGrupo.keyup(function () {
        if (!isNaN($(this).val())) {
            if ($(this).val()) {
                if ($(this).val().length <= limiteLongitudNumeros - 1) {
                    convierte(
                        $selectGrupoUnidades.val(),
                        $selectGrupoUnidades.val(),
                        $(this).val(),
                        $selectPrimerGrupo.val(),
                        $selectSegundoGrupo.val(), false);
                } else {
                    escribeError('Lo siento, solamente se permiten números de <strong>16 cifras</strong> sin incluir el punto decimal');

                    $('.ocultable').show();
                }
            }
        } else {
            escribeError('Ingresa un número en la caja de texto número 1');
            $('.ocultable').show();
        }

    });
    $inputSegundoGrupo.keyup(function () {
        if (!isNaN($(this).val())) {
            if ($(this).val()) {
                if ($(this).val().length <= limiteLongitudNumeros - 1) {
                    convierte(
                        $selectGrupoUnidades.val(),
                        $selectGrupoUnidades.val(),
                        $(this).val(),
                        $selectSegundoGrupo.val(),
                        $selectPrimerGrupo.val(), true);
                } else {
                    escribeError('Lo siento, solamente se permiten números de <strong>16 cifras</strong> sin incluir el punto decimal');
                    $('.ocultable').show();
                }
            }
        } else {
            escribeError('Ingresa un número en la caja de texto número 2');
            $('.ocultable').show();
        }

    });
    $btnAcercaDe.click(function () {
        $ventanaAcercaDe.modal('show');
    });
    $inputPrincipal.keyup(function () {
        compruebaValores($(this).val());
    });
    $btnEjemplo.click(function () {

        $('div#manual').modal('show');
    });
}

function grados(grupo, u1, u2, numero) {
    if (grupo === "Temperatura") {
        switch (u1) {
            case "grado fahrenheit":
                switch (u2) {
                    case "grado fahrenheit":
                        return numero;
                        break;
                    case "grado celsius":
                        return (numero - 32) * (5 / 9);
                        break;
                    case "kelvin":
                        return ((5 * (numero - 32)) / 9) + 273.15;
                        break;
                }
                break;
            case "grado celsius":
                switch (u2) {
                    case "grado fahrenheit":
                        return 32 + ((9 / 5) * numero );
                        break;
                    case "grado celsius":
                        return numero;
                        break;
                    case "kelvin":
                        return numero + 273.15;
                        break;
                }
                break;
            case "kelvin":
                switch (u2) {
                    case "grado fahrenheit":
                        return ((9 * (numero - 273.15)) / 5) + 32;
                        break;
                    case "grado celsius":
                        return numero - 273.15;
                        break;
                    case "kelvin":
                        return numero;
                        break;
                }
                break;
        }
    }
}

function llenaPrimerGrupo(selector, grupo) {
    selector.empty();
    for (var x in unidades[grupo].unidades) {
        selector.append($('<option>', {
            value: unidades[grupo].unidades[x],
            text: aLetraCapital(unidades[grupo].unidades[x])
        }));
    }
}

function llenaSegundoGrupo(selector, grupo) {
    selector.empty();
    for (var x in unidades[grupo].unidades) {
        selector.append($('<option>', {
            value: unidades[grupo].unidades[x],
            text: aLetraCapital(unidades[grupo].unidades[x])
        }));
    }
}

function llenaSelectUnidades(selector) {
    for (var opcion in unidades) {
        selector.append($('<option>', {
            value: opcion,
            text: opcion
        }));
    }
}

function principal() {
    $inputPrincipal.focus();
    setInterval(cambiaPlaceholder, segundosCambiaPlaceholder * 1000);
    llenaSelectUnidades($selectGrupoUnidades);
    escuchaElementos();
    $('.ocultable').hide();
}