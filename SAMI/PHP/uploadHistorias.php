<?php
	
        $mensaje1 ="<br>Los archivos fueron adicionados.";



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


</body>
</html>