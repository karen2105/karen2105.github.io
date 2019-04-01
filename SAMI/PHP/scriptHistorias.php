<?php

	$myfile1 = fopen("consecutivo.txt", "r");
	$line = fgets($myfile1);
	fclose($myfile1);

	$parte= $_GET["selection"];
	$myFile = "../Uploads/". $line ."-".$parte.".json"; 
	


	$fh = fopen($myFile, 'w');
	$stringData = $_GET["data"];
	fwrite($fh, $stringData);
	fclose($fh);
	
	
?>