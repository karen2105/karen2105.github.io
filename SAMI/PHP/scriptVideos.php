<?php
require 'D:/xampp/php/vendor/autoload.php';

 
$inputs = $_POST['jsonObjInput'];
$combos = $_POST['jsonObjInput'];
echo "karen" . $variable1[Autor];



$cliente = new MongoDB\Client("mongodb://localhost:27017");


$collection = $cliente->karen->prueba;

$documento =

        array(
            'titulo' => $inputs.titulo,
            'id_metadato'=> $inputs.id,
            
            'atributos_videos' =>
            array(
                array(
                    'descripcion' => $inputs[Descripcion],
                    'duracion' => $inputs[Duracion],
                    'tamaño' => $inputs[Tamano],
					'dispositivo_captura' => $inputs[DispositivoCaptura],
                    'iluminacion' => $inputs[Iluminacion],
                    'cobertura' => $inputs[Cobertura], 
					
					'angulo_plano' => $combos[anguloPlan],
					'formato' => $combos[Formato],
					'idioma' => $combos[Idioma],
                    'calidad_salida' => $combos[CalidadSalida]
					
                   
				    /*'consecutivo' => 8,
                    'fecha_creacion' => 'Magento and PHP developer',
                     'angulo_camara' => 'hola',                     
                    'codec' => 8,                     
                    'fps' => 'Magento and PHP developer',*/
                    
                    )
                    
        	),
			
			'atributos_actor' =>
            array(
                array(
                    'actor' => 'Magento and PHP developer',
                    'nivel_experiencia' => 8, 
                    'tipo_somatico' => 'Magento and PHP developer',
                    'genero' => 8, 
                    'poblacion' => 'Magento and PHP developer'
					)
                    
        	),
        	
        	'atributos_accion' =>
            array(
                array(
                    'secuencia_accion' => 8,                    
                    'movimiento' => 'Magento and PHP developer',
                    'grupo' => 8, 
                    'accion' => 'Magento and PHP developer',
                    
                    
					)
                    
        	),
        	'atributos_intelectual' =>
            array(
                array(
                    'autor' => 'Magento and PHP developer',
                    'publicado_por' => 8, 
                    'derechos' => 'Magento and PHP developer',
                    'colaboradores' => 8, 
                    'palabras_clave' => 'Magento and PHP developer',
                    'licencia' => 8                    
					)
                    
                  
        	),
			'url' =>
            array(
                array(
                    'url_video' => 'Magento and PHP developer',
                    'url_metadato' => 8, 
              		)
                    
        	)
		
		
		);


$resultado1 = $collection->insertOne($documento);


echo "Inserted with Object ID '{$resultado1->getInsertedId()}'";

?>

