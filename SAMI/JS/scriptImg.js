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
  
xhttp.open("GET","../XML/ElementsImg.xml",false);
xhttp.send();
xmlDoc=xhttp.responseXML;

var band=true;
var band2=false;
var quitarHidden=false;


fieldset('hidden');
comboBox(0, 'comboInit');


function fieldset(clase){
	field1 = document.getElementById("general");
	field1.classList.add(clase);
			
	field2 = document.getElementById("atributos");
	field2.classList.add(clase);

	field3 = document.getElementById("relacion");
	field3.classList.add(clase);

	field4 = document.getElementById("coordenadas");
	field4.classList.add(clase);

	field5 = document.getElementById("archivos");
	field5.classList.add(clase);
	
	field6 = document.getElementById("submitButton");
	field6.classList.add(clase);
	
	if(quitarHidden == true){

		field1.classList.remove("hidden");
		field2.classList.remove("hidden");
		field3.classList.remove("hidden");
		field4.classList.remove("hidden");
		field5.classList.remove("hidden");
		field6.classList.remove("hidden");
	}
	
	
}
function formulario(obj){
  switch(obj){
    	case 'Antebrazo':
			general();
			atributosAntebrazo();
			padres();
			hijos();
			coordenadas();
			archivos();
		break;
		case 'Biceps':
			general();
			atributosBiceps();
			padres();
			hijos();
			coordenadas();
			archivos();
		break;
		case 'Boca':
			general();
			atributosBoca();
			padres();
			hijos();
			coordenadas();
			archivos();
		break;
		case 'Ceja':
			general();
			atributosCeja();
			padres();
			hijos();
			coordenadas();
			archivos();
		break;
		case 'Cuello':
			general();
			atributosCuello();
			padres();
			hijos();
			coordenadas();
			archivos();
		break;
		case 'Mano':
			general();
			atributosMano();
			padres();
			hijos();
			coordenadas();
			archivos();
		break;
		case 'Muslo':
			general();
			atributosMuslo();
			padres();
			hijos();
			coordenadas();
			archivos();
		break;
		case 'Nariz':
			general();
			atributosNariz();
			padres();
			hijos();
			coordenadas();
			archivos();
		break;
		case 'Ojos':
			general();
			atributosOjos();
			padres();
			hijos();
			coordenadas();
			archivos();
		break;
		case 'Orejas':
			general();
			atributosOrejas();
			padres();
			hijos();
			coordenadas();
			archivos();
		break;
		case 'Pantorrilla':
			general();
			atributosPantorrilla();
			padres();
			hijos();
			coordenadas();
			archivos();
		break;
		case 'Pelo':
			general();
			atributosPelo();
			padres();
			hijos();
			coordenadas();
			archivos();
		break;
		case 'Pie':
			general();
			atributosPie();
			padres();
			hijos();
			coordenadas();
			archivos();
		break;
		case 'Torso':
			general();
			atributosTorso();
			padres();
			hijos();
			coordenadas();
			archivos();
		break;	
		default: alert("Error!");	
    	
    }
       
       
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
	if (name == 'padre'|| name == 'hijo'){
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
	
	if(band){
		
		comboBox.onchange = function() {
			quitarHidden = true; 
			fieldset('show');
			
			formulario(comboBox.value);
		};
		band=false;
	}
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

function coordenadas(){
	eraseElements(document.getElementById("coordenadas"));
	coordenadas2();
}

function coordenadas2(){
	var label1 = document.createElement('label');	
	label1.appendChild(document.createTextNode("Tamaño Lienzo: "));
	label1.className="coordenadasLabel";
	document.getElementById("coordenadasIzquierda").appendChild(label1);
	inputAtribCoord(2, "tamLienzo", 'coordenadasIzquierda');
		
	var label2 = document.createElement('label');	
	label2.appendChild(document.createTextNode("Área activa: "));
	label2.className="coordenadasLabel";
	document.getElementById("coordenadasIzquierda").appendChild(label2);
	inputAtribCoord(2, "areaActiva", 'coordenadasIzquierda');
	
	var label3 = document.createElement('label');	
	label3.appendChild(document.createTextNode("Punto de Anclaje: "));
	label3.className="coordenadasLabel";
	document.getElementById("coordenadasDerecha").appendChild(label3);
	inputAtribCoord(2, "ptoAnclaje", 'coordenadasDerecha');
}

function archivos(){
	band2=true;
	
	inputs = document.getElementsByTagName('input');
	for (index = 0; index < inputs.length; ++index) {
	    inputs[index].required=true;
	}
	
}

function eraseElements(elemento){
	
	
	var nodos = elemento.getElementsByTagName("label");
	var CantNodos = elemento.childElementCount;
	var cicloFor= nodos.length;	
	
	//alert("Cantidad de nodos: " + CantNodos);
	//alert("Cantidad Labels: " + nodos.length);
	
	
	if(band2){	
		
		for(i=0; i<cicloFor; i++){			
			nodos[0].remove();
		}		
	}
	
}

function general(){
	eraseElements(document.getElementById("general"));
	
	inputGeneral(0);
	comboBox(2, "general");
}

function padres(){
	eraseElements(document.getElementById("relacion"));
	comboBox(6,"relacion");
}

function hijos(){
	comboBox(7,"relacion");	
}

function atributosAntebrazo(){
	eraseElements(document.getElementById("atributos"));
	
	comboBox(1,"atributos");
	comboBox(3,"atributos");
	comboBox(4,"atributos");
	inputAtribCoord(1,"atributosAntebrazo", "atributos");

}
function atributosBiceps(){

	eraseElements(document.getElementById("atributos"));
	
	comboBox(1,"atributos");
	comboBox(3,"atributos");
	comboBox(4,"atributos");
	inputAtribCoord(1,"atributosBiceps", "atributos");
}
function atributosBoca(){
	eraseElements(document.getElementById("atributos"));
	
	comboBox(3,"atributos");
	comboBox(5,"atributos");	
	inputAtribCoord(1,"atributosBoca", "atributos");
	
}
function atributosCeja(){
	eraseElements(document.getElementById("atributos"));
	
	comboBox(3,"atributos");
	comboBox(5,"atributos");
	inputAtribCoord(1,"atributosCeja", "atributos");
	
}
function atributosCuello(){
	eraseElements(document.getElementById("atributos"));
	
	comboBox(3,"atributos");
	comboBox(4,"atributos");
	inputAtribCoord(1,"atributosCuello", "atributos");
	
}
function atributosMano(){
	eraseElements(document.getElementById("atributos"));
	
	comboBox(1,"atributos");
	comboBox(8,"atributos");
	comboBox(3,"atributos");
	comboBox(4,"atributos");
	inputAtribCoord(1,"atributosMano", "atributos");
	
}
function atributosMuslo(){
	eraseElements(document.getElementById("atributos"));
	
	comboBox(1,"atributos");
	comboBox(3,"atributos");
	comboBox(4,"atributos");
	inputAtribCoord(1,"atributosMuslo", "atributos");
	
}
function atributosNariz(){
	eraseElements(document.getElementById("atributos"));
	
	comboBox(3,"atributos");	
	comboBox(4,"atributos");
	comboBox(9,"atributos");
	comboBox(10,"atributos");
	inputAtribCoord(1,"atributosNariz", "atributos");
	
}
function atributosOjos(){
	eraseElements(document.getElementById("atributos"));
	
	comboBox(3,"atributos");	
	comboBox(5,"atributos");
	inputAtribCoord(1,"atributosOjos", "atributos");
	
}
function atributosOrejas(){
	eraseElements(document.getElementById("atributos"));
	
	comboBox(3,"atributos");	
	comboBox(4,"atributos");
	inputAtribCoord(1,"atributosOrejas", "atributos");
	
}
function atributosPantorrilla(){
	eraseElements(document.getElementById("atributos"));
	
	comboBox(1,"atributos");	
	comboBox(3,"atributos");
	comboBox(4,"atributos");
	inputAtribCoord(1,"atributosPantorrilla", "atributos");
	
}
function atributosPelo(){
	eraseElements(document.getElementById("atributos"));
	
	comboBox(3,"atributos");	
	comboBox(5,"atributos");
	inputAtribCoord(1,"atributosPelo", "atributos");
	
}
function atributosPie(){
	eraseElements(document.getElementById("atributos"));
	
	comboBox(1,"atributos");	
	comboBox(3,"atributos");
	comboBox(4,"atributos");
	inputAtribCoord(1,"atributosPie", "atributos");
	
}
function atributosTorso(){
	eraseElements(document.getElementById("atributos"));
	
	comboBox(1,"atributos");	
	comboBox(8,"atributos");
	comboBox(3,"atributos");
	comboBox(4,"atributos");
	inputAtribCoord(1,"atributosTorso", "atributos");
	
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
		guardarJSON();
		$('#formArchivos').prop('action', '../PHP/uploadImg.php');
		document.forms["formularios"].submit();
		document.forms["formArchivos"].submit();
		
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
   
   stringGeneral = JSON.stringify(jsonObjGeneral);
   stringAtributos = JSON.stringify(jsonObjAtributos);
   stringMultiple = JSON.stringify(jsonObjMultiple);
   stringCoordenadas = JSON.stringify(jsonObjCoordenadas);
   
   
  jsonObj={
  	general:stringGeneral,
  	atributos: stringAtributos,
  	asociado_con:stringMultiple,
  	coordenadas:stringCoordenadas 	
  };
  	

  	console.log(jsonObj);
  		
  	
  	var json = JSON.stringify(jsonObj, null, '\t');
  	console.log(json);
	//var encoded = btoa(json);

  	
	var xhr = new XMLHttpRequest();
	xhr.open('POST','../PHP/scriptImg.php',true);
	xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	xhr.send('json=' + json);



}

