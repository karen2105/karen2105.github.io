<?php



	$namef = uniqid('Cuerpo', true);
	$ext = ".json";
 	$filename = $namef.$ext;
	
	
	$decoded = $_POST['json'];
	//$decoded = base64_decode($_POST['json']);
	$jsonFile = fopen($filename,'w+');
	fwrite($jsonFile,$decoded);
	fclose($jsonFile);
	
?> 