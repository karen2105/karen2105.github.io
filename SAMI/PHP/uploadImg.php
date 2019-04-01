<?php
$fileToUploadPNG	= $_POST['fileToUploadPNG'];
$fileToUploadAI	= $_POST['fileToUploadAI'];
$fileToUploadTXT	= $_POST['fileToUploadTXT'];

$random= uniqid('',true);

$target_dir = '../Uploads/';
$target_filePNG = $target_dir . "PNG". $random. basename($_FILES["fileToUploadPNG"]["name"]);
$target_fileAI = $target_dir . "AI".$random.basename($_FILES["fileToUploadAI"]["name"]);
$target_fileTXT = $target_dir ."TXT".$random. basename($_FILES["fileToUploadTXT"]["name"]);

$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);


// Check if file already exists
/*if (file_exists($target_filePNG)||file_exists($target_fileAI)|| file_exists($target_fileTXT) ) {
    echo "El archivo ya existe.";
    $uploadOk = 0;
}*/

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "El archivo no fue subido.";
// if everything is ok, try to upload file 
} else {
    if (move_uploaded_file($_FILES["fileToUploadPNG"]["tmp_name"], $target_filePNG)) {

		
        $mensaje1 ="<br>El archivo ".$fin. basename( $_FILES["fileToUploadPNG"]["name"]). " ha sido subido." 	. $_FILES["fileToUploadPNG"]["tmp_name"];
    }else {
        $mensaje1 = "<br>Hubo un problema, vuelvelo a intentar.".$_FILES["fileToUploadPNG"]["tmp_name"];		
    }
    
    if (move_uploaded_file($_FILES["fileToUploadAI"]["tmp_name"], $target_fileAI)) {
        
        $mensaje2 ="<br>El archivo ". basename( $_FILES["fileToUploadAI"]["name"]). " ha sido subido." 	. $target_file;
    } else {
        $mensaje2 = "<br>Hubo un problema, vuelvelo a intentar." . $_FILES["fileToUploadAI"]['error'];		
    }
    if (move_uploaded_file($_FILES["fileToUploadTXT"]["tmp_name"], $target_fileTXT)) {
        $mensaje3 = "<br>El archivo ". basename( $_FILES["fileToUploadTXT"]["name"]). " ha sido subido." 	. $target_file;
    } else {
        $mensaje3 = "<br>Hubo un problema, vuelvelo a intentar.";		
    }
}



?>



<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>SAMI</title>

<link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,700' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="../CSS/estilo.css">

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="//code.jquery.com/jquery-latest.js"></script>


</head>

<body id="bodyControl">

<header id="headerControl">
	<nav>
		<a href="#">Salir</a> 
	</nav>
	
</header>
<section id="sectionControl">
	<div id="titleFormularioControl"> 
		<p style="font-size: 30px; font-weight:400 !important; ">BASE DE DATOS - SAMI</p>
		<p style="font-size: 15px ">Imágenes</p>			
	</div>
	<div id="cuerpoFormularioControl" >
		<p style="text-align: center;"><?php echo $mensaje1; ?></p>
		<p style="text-align: center;"><?php echo $mensaje2; ?></p>
		<p style="text-align: center;"><?php echo $mensaje3; ?></p>
		
		<div id="btn"><a href="../HTML/control.html" style="text-decoration:none;color: white;">Volver</a></div>
		
	</div>
</section>

<footer id="FooterControl">
				<div id="logosFooterControl">
					<img id="logoSAMI" src="../Images/Logo-SAMI.png" width="auto" height=70 class="tint"/>
					<img id="logoUMNG" src="../Images/LOGO_UMNG.png" width="auto" height=70 class="tint"/>
					<p>
						&copy; Copyright by SAMI - Universidad Militar Nueva Granada<br />
						Grupo de Investigación en Multimedia - Semillero de Aplicaciones Multimedia Interactiva<br />
						sami.umng@gmail.com
					</p>
				</div>
			</footer>

<script type="text/javascript" src="../JS/script.js"></script>

</body>
</html>
