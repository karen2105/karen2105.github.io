/**
 * @author Karen
 */



if (window.XMLHttpRequest)
  {
  xhttp=new XMLHttpRequest();
  }
else // for IE 5/6
  {
  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
xhttp.open("GET","../XML/ElementsVideos.xml",false);
xhttp.send();
xmlDoc=xhttp.responseXML;

var band=false;
var band2=false;
var quitarHidden=false;

general();
datosvideo();
datosactor();
datosaccion();
datosPI();

function general(){		
	
	inputFields(0, "general","general");	
}


function datosvideo(){
	inputFields(1, "datosvideo","datosvideo");	
	comboBox(1,"datosvideo");	
	comboBox(8,"datosvideo");
	comboBox(9,"datosvideo");
	comboBox(10,"datosvideo");
}

function datosactor(){
	inputFields(2, "datosactor","datosactor");	
	comboBox(2,"datosactor");
	comboBox(3,"datosactor");
	comboBox(4,"datosactor");
	comboBox(5,"datosactor");

}

function datosaccion(){
	inputFields(3, "datosaccion","datosaccion");	
	comboBox(6,"datosaccion");
	comboBox(7,"datosaccion");
}

function datosPI(){
	inputFields(4, "datosPI","datosPI");	
}



function comboBox(index, place){
	var label1 = document.createElement('label');
	var txt = xmlDoc.getElementsByTagName("comboBox")[index].getAttribute("label"); 

	var item = xmlDoc.getElementsByTagName("comboBox")[index];
	var items = item.getElementsByTagName("option");
	var name = xmlDoc.getElementsByTagName("comboBox")[index].getAttribute("name"); 
	
	var i=0;
	var txtNode = [];
	var option = [];
	
	
	label1.appendChild(document.createTextNode(txt));
	var comboBox = document.createElement('select');
	comboBox.id = name;
	comboBox.name = name;
	
	
	for (i = 0; i < items.length; i++) { 
	 	txtNode[i]= item.getElementsByTagName("option")[i].childNodes[0].nodeValue;  
	 	option[i] = document.createElement('option');
		option[i].text = txtNode[i];
		comboBox.add(option[i],comboBox[i]);
	}

	label1.appendChild(comboBox);
	
	document.getElementById(place).appendChild(label1);

		
	}


function inputFields(indexInput, nomSelec, place){
	
	var input= xmlDoc.getElementsByTagName("input")[indexInput].getElementsByTagName(nomSelec)[0];
	var items =input.getElementsByTagName("item");
	
	for (i = 0; i < items.length; i++) { 
		var label1 = document.createElement('label');	
		var textbox1 = document.createElement('input');
		
		var name= input.getElementsByTagName("item")[i].getAttribute("value");
		var label =input.getElementsByTagName("item")[i].textContent;

		label1.appendChild(document.createTextNode(label));
		textbox1.type = 'text';
		textbox1.id = name;
		
		
		label1.appendChild(textbox1);
		document.getElementById(place).appendChild(label1);

	}	

}

function textArea(indexInput, nomSelec, place){
	
	
	
	var input= xmlDoc.getElementsByTagName("input")[indexInput].getElementsByTagName(nomSelec)[0];
	var items =input.getElementsByTagName("item");
	
	for (i = 0; i < items.length; i++) { 
		var label1 = document.createElement('label');	
		var textbox1 = document.createElement('textarea');
		
		var name= input.getElementsByTagName("item")[i].getAttribute("value");
		var label =input.getElementsByTagName("item")[i].textContent;

		label1.appendChild(document.createTextNode(label));
		textbox1.type = 'text';
		textbox1.id = name;
		
		

		if (place == "coordenadasDerecha" || place == "coordenadasIzquierda"){
			textbox1.classList.add("coordenadas");
		}else{
			textbox1.classList.add(place);
		}
		
		label1.appendChild(textbox1);
		document.getElementById(place).appendChild(label1);

	}	

}

function submitForm() {
	
	/*var empty=true;	
	
	 $('input').each(function() {
        if ($(this).val() == '') {
            empty = false;
            return false; // we've found a non-empty one, so stop iterating
        }
    });
       
	
	if(empty){
		//guardarJSON();	
		alert("Gracias");
		//$('#formArchivos').prop('action', '../PHP/upload.php');
		//document.forms["formularios"].submit();
		//document.forms["formArchivos"].submit(); 
		document.getElementById("btnGuardar").onclick = function () {
			location.href = '../PHP/upload.php';
		};
	
		
	}else{
		alert("Por favor llene todos los campos");
	}*/
	
	linkDB();
}

function linkDB() {
	alert("Gracias");

		var jsonObjInput ={};
		var jsonObjCombo = {};
		
       
        
        
        
        $("input").each(function() {
		
		var clase = $(this).attr("class");
        var id = $(this).attr("id");
        var value = $(this).val();       
       
        	jsonObjInput[id]= value;
      
    	
    });
     $(".comboBox").each(function() {
    	
    	var clase = $(this).attr("class");
        var name = $(this).attr("id");
        var value = $(this).find("option:selected").text();		

		
        	jsonObjCombo[name]=value;
     });
     
      var parametros = {          
      			jsonObjInput : jsonObjInput,
                jsonObjCombo : jsonObjCombo
        };
        
        $.ajax({
                data:  parametros,
                url:   '../PHP/scriptVideos.php',
                type:  'post',
                beforeSend: function () {
                        alert ("Procesando, espere por favor...");
                },
                success:  function (response) {
                        alert(response);
                }
        });


	
}