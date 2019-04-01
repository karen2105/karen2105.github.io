<?php
if ( isset( $_POST['ingresar'] ) ) {
			 
		$username = $_POST['user'];
		$password = $_POST['password'];

		
	if ($username == 'estudiante' && $password == 'Multimedia2015'){		
		header('Location: HTML/seleccion.html');
	}else{
		echo '<script language="javascript">alert("Usuario y/o clave incorrectos");</script>'; 
	}
	
	
}
?>


<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8">

		<!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame
		Remove this if you use the .htaccess -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

		<title>Base de datos SAMI</title>
		<meta name="description" content="Base de datos del Grupo de Investigación GIM - Proyecto de Procesamiento de Lenguaje Natural">
		<meta name="author" content="SAMI">
		<meta name="developer" content="Karen Lorena Alonso Zarate">
		<meta name="viewport" content="width=device-width; initial-scale=1.0">

		<!-- Replace favicon.ico & apple-touch-icon.png in the root of your domain and delete these references -->
		<link rel="shortcut icon" href="/favicon.ico">
		<link rel="apple-touch-icon" href="/apple-touch-icon.png">
		
		<link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,700' rel='stylesheet' type='text/css'>
		<link href="CSS/estilo.css" rel="stylesheet" type="text/css">		
	</head>

	<body>


			
			<section id="cuerpo">
				<div id="formulario_registro"> 
					<div id="titleForm">
						<h2>REGISTRO </h2>
					</div>
			        <form method="post" id="signin">  
			            <label>Ingrese los datos de acceso: </label>
			            <div class="inputClass">
				            <img src="Images/User.png" width="30px" height="auto" />			        	
				            <input id="username" name="user" value="" type="text" placeholder="Usuario" required>
				        </div>
				        
				        <div class="inputClass">	
				        	<img src="Images/Pass.png" width="30px" height="auto" />			        	
				            <input id="password" name="password" value="" type="password" placeholder="Contrase&ntilde;a" required>
				        </div>				            
				        
				        <input id="btnIngresar" type="submit" name="ingresar" value="Ingresar >>"> 
				     
			        </form> 
			     </div>
			</section>
			
			
			<footer>
				<div id="logosFooter">
					<img id="logoSAMI" src="Images/Logo-SAMI.png" width="auto" height=90 class="tint"/>
					<img id="logoUMNG" src="Images/LOGO_UMNG.png" width="auto" height=90 class="tint"/>
				</div>
				<div id="textoFooter">
					<p>
						&copy; Copyright by SAMI - Universidad Militar Nueva Granada<br />
						Grupo de Investigación en Multimedia - Semillero de Aplicaciones Multimedia Interactiva<br />
						sami.umng@gmail.com
					</p>
				</div>
			</footer>
	</body>
</html>