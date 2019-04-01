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
  
xhttp.open("GET","../XML/ElementsHistorias.xml",false);
xhttp.send();
xmlDoc=xhttp.responseXML;

var band=false;
var band2=false;
var quitarHidden=false;

general();
autor();
caracteristicas();
//archivos();



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
	
	if (name == 'genero'){
		comboBox.multiple =true;
		comboBox.classList.add("relacion");
		comboBox.classList.add("multiple");
		
	}else{
		if(!band){
			comboBox.classList.add("comboBox");
			comboBox.classList.add(place);
		}
	}
	
	
	for (i = 0; i < items.length; i++) { 
	 	txtNode[i]= item.getElementsByTagName("option")[i].childNodes[0].nodeValue;  
	 	option[i] = document.createElement('option');
		option[i].text = txtNode[i];
		comboBox.add(option[i],comboBox[i]);
	}

	label1.appendChild(comboBox);
	
	document.getElementById(place).appendChild(label1);

		
	}

function inputGeneral(indexInput){
	
	var input= xmlDoc.getElementsByTagName("input")[indexInput];
	var items =input.getElementsByTagName("item");
	
	
	for (i = 0; i < items.length; i++) { 
		var label1 = document.createElement('label');	
		var textbox1 = document.createElement('input');
		
		var name= input.getElementsByTagName("item")[i].getAttribute("name");
		var label =input.getElementsByTagName("item")[i].textContent;
		
		label1.appendChild(document.createTextNode(label));
		textbox1.type = 'text';
		textbox1.id = name;
		textbox1.name = name;
		textbox1.classList.add("general");
		
		label1.appendChild(textbox1);
		document.getElementById('general').appendChild(label1);
		
	}	


}


function inputAtribCoord(indexInput, nomSelec, place){
	
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
		
		

		if (place == "coordenadasDerecha" || place == "coordenadasIzquierda"){
			textbox1.classList.add("coordenadas");
		}else{
			textbox1.classList.add(place);
		}
		
		label1.appendChild(textbox1);
		document.getElementById(place).appendChild(label1);

	}	

}

function textAreaAtribCoord(indexInput, nomSelec, place){
	
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



function archivos(){
	band2=true;
	
	inputs = document.getElementsByTagName('input');
	for (index = 0; index < inputs.length; ++index) {
	    inputs[index].required=true;
	}
	
}



function general(){	
	inputGeneral(0);
	comboBox(0, "general");
}

function autor(){
	inputAtribCoord(1, "autor","autor");
	
	var label2 = document.createElement('label');	
	label2.appendChild(document.createTextNode("Fecha de nacimiento: "));
	label2.className="autor1";
	document.getElementById("autor").appendChild(label2);
	
	comboBox(1,"autor");
	comboBox(2,"autor");
	
	inputAtribCoord(2, "autor","autor");

}
function caracteristicas(){
	inputAtribCoord(3, "caracteristicas1",'coordenadasIzquierda');
	inputAtribCoord(3, "caracteristicas2",'coordenadasDerecha');
	textAreaAtribCoord(3, "caracteristicas3",'coordenadasDerecha');
	
	
	comboBox(3,'coordenadasIzquierda');
	comboBox(4,'coordenadasIzquierda');
	
	
}

function submitForm() {
	
	var empty=true;	
	
	 $('input').each(function() {
        if ($(this).val() == '') {
            empty = false;
            return false; // we've found a non-empty one, so stop iterating
        }
    });
    
    $('select').each(function() {
    	var value = $(this).find("option:selected").text();	
        if (value == 'Seleccione' || value == "Seleccione la parte del cuerpo: ") {
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
			location.href = '../PHP/uploadHistorias.php';
		};
	
		
	}else{
		alert("Por favor llene todos los campos");
	}
	
	 
}



function guardarJSON() {
	var i=0;	
	var jsonObjGeneral ={};
	
	var jsonObjGeneral = {};
	var jsonObjInputGeneral = {};
	var jsonObjComboGeneral = {};
	
	var jsonObjAtributos = {};
	var jsonObjInputAtributos = {};
	var jsonObjComboAtributos = {};
	
	var jsonObjMultiple = {};
	
	var jsonObjCoordenadas = {};
	var jsonObjInputCoordenadas = {};
	var jsonObjComboCoordenadas = {};	

		
	$("input").each(function() {
		
		var clase = $(this).attr("class");
        var id = $(this).attr("id");
        var value = $(this).val();
        
        if(clase=="general"){

        	jsonObjInputGeneral[id]= value;
        }
        if(clase=="atributos"){

        	jsonObjInputAtributos[id]= value;
        }
        if(clase=="coordenadas"){

        	jsonObjInputCoordenadas[id]= value;
        }                              
    	
    });
    
    $(".comboBox").each(function() {
    	
    	var clase = $(this).attr("class");
        var name = $(this).attr("id");
        var value = $(this).find("option:selected").text();		

		if(clase=="comboBox general"){

        	jsonObjComboGeneral[name]=value;
        }
        if(clase=="comboBox atributos"){

        	jsonObjComboAtributos[name]=value;
        }
        if(clase=="comboBox coordenadas"){

        	jsonObjComboCoordenadas[name]=value;
        }     
    });
    
    
    $(".multiple").each(function() {
    	
    	var clase = $(this).attr("class");
        var name = $(this).attr("id");
        var value = $(this).find("option:selected").text();		
	
			
    	jsonObjMultiple[name]=value;
        			
    });  
   

    
  $.extend( true, jsonObjGeneral, jsonObjInputGeneral, jsonObjComboGeneral);
  $.extend( true, jsonObjAtributos, jsonObjInputAtributos, jsonObjComboAtributos);
  $.extend( true, jsonObjCoordenadas, jsonObjInputCoordenadas, jsonObjComboCoordenadas);
   

   
  jsonObj={
  	general:jsonObjGeneral,
  	atributos: jsonObjAtributos,
  	asociado_con:jsonObjMultiple,
  	coordenadas:jsonObjCoordenadas 	
  };
  	
  	
	
  	console.log(jsonObj);

	
parteSelect =document.getElementById("partes_cuerpo");

console.log(parteSelect.value);

	$.ajax
    ({
        type: "GET",
        dataType : 'json',
        url: '../PHP/scriptHistorias.php',
        data: { 
        		data: JSON.stringify(jsonObj), selection:parteSelect.value 
        	},        
        failure: function() {alert("Error!");}
    });



}