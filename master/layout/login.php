<?php require_once (dirname(__FILE__)."/../../top1_conf.php");
include_once (DIR_ROOT."master/classes/mysql_db.class.php");
// Acesso a base de dados principal (main)
$db_main = new mysql_db ( DB_HOST, DB_NAME, DB_USER, DB_PASS );
$db_main->connect_db ();
// Confiurar base de dados para log de erros
$db_main->set_db_error_log_obj($db_main);


/* Lang file */
include_once (DIR_ROOT."master/classes/countries.class.php");
$countries = new countries();
$countries->load_from_ip($db_main,$_SERVER['REMOTE_ADDR']);
$language = $countries->get_default_lang();

// Ficheiro com o idioma do user
$lang = strtolower($language);
if( (!empty($lang)) ) {
	$include_file = (DIR_LANGS.$lang.".inc.php");
	if(is_file($include_file)) {
		include_once($include_file);
	}
}
/* /Lang file */ ?>


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Login :: Base Admin</title>

<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes">

<link href="./css/bootstrap.min.css" rel="stylesheet" type="text/css" />
<link href="./css/bootstrap-responsive.min.css" rel="stylesheet"
	type="text/css" />

<link href="./css/font-awesome.min.css" rel="stylesheet">
<link
	href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600"
	rel="stylesheet">

<link href="./css/ui-lightness/jquery-ui-1.10.0.custom.min.css"
	rel="stylesheet">

<link href="./css/base-admin-3.css" rel="stylesheet">
<link href="./css/base-admin-3-responsive.css" rel="stylesheet">

<link href="./css/pages/signin.css" rel="stylesheet" type="text/css">

<link href="./css/custom.css" rel="stylesheet">

</head>

<body>

	<nav class="navbar navbar-inverse" role="navigation">

		<div class="container">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse"
					data-target=".navbar-ex1-collapse">
					<span class="sr-only">Toggle navigation</span> <i class="icon-cog"></i>
				</button>
			  <a class="navbar-brand"><img
					src="./img/logo_mygest.png"></a>
			</div>
			<!-- /.navbar-collapse -->
		</div>
		<!-- /.container -->
	</nav>



	<div class="account-container stacked">

		<div class="content clearfix">

			<form id="frm_login" action="">

				<h1><?=LOGIN_IN?></h1>

				<div class="login-fields">

					<p><?=LOGIN_TXT?></p>

					<div class="field">
						<label for="system"><?=SYSTEM?>:</label> <input type="text"
							id="system" name="system" value="" placeholder="<?=SYSTEM?>"
							class="form-control input-lg id-field" required />
					</div>
					<!-- /system -->
					
					<div class="field">
						<label for="username">
						  <?=USERNAME?>
					    :</label> <input type="text"
							id="username" name="username" value="" placeholder="<?=USERNAME?>"
							class="form-control input-lg username-field has-error" required />
					</div>
					<!-- /field -->

					<div class="field">
						<label for="password">
						  <?=PASSWORD?>
					    :</label> <input type="password"
							id="password" name="password" value="" placeholder="<?=PASSWORD?>"
							class="form-control input-lg password-field" required />
					</div>
					<!-- /password -->

				</div>
				<!-- /login-fields -->

				<div class="login-actions">
					
					<!--
					<span class="login-checkbox"> <input id="Field" name="Field"
						type="checkbox" class="field login-checkbox" value="First Choice"
						tabindex="4" /> <label class="choice" for="Field">Keep me signed
							in</label>
					</span>
					-->

					<button class="login-action btn btn-primary"><?=BTN_SIGN_IN?></button>

				</div>
				<!-- .actions -->

				<!--
				<div class="login-social">
					<p>Sign in using social network:</p>

					<div class="twitter">
						<a href="#" class="btn_1">Login with Twitter</a>
					</div>

					<div class="fb">
						<a href="#" class="btn_2">Login with Facebook</a>
					</div>
				</div>
				-->

			</form>

		</div>
		<!-- /content -->

	</div>
	<!-- /account-container -->


	<!-- Text Under Box -->
	<div class="login-extra">
		<?=REMIND?> <a href="rec_password.php"><?=PASSWORD?></a>
	</div>
	<!-- /login-extra -->



	<!-- Le javascript
================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<script src="./js/libs/jquery-1.9.1.min.js"></script>
	<script src="./js/libs/jquery-ui-1.10.0.custom.min.js"></script>
	<script src="./js/libs/bootstrap.min.js"></script>
	<script src="./js/Application.js"></script>

	<script src="./js/demo/signin.js"></script>
    
    <script src="<?= PATH_ROOT ?>lib/functions.js"></script>
    
    
    <script>
	$("#frm_login").submit( function() {
		
		submitForm("<?= PATH_ROOT ?>master/scripts/set_login.php", "#frm_login", "frm_login_return");
		
		return(false);
	}); 
    
	// Processa o retorno do submit do formulario
	function frm_login_return(var_data)
	{
		// Sem erros
		if($.isEmptyObject(var_data['errors'])) {
			window.location.replace("<?= PATH_ROOT ?>index.php");
		}
		else { // Com erros (assinalar os mesmos)
			processReturnForm(var_data);
		}
	}
    </script>

</body>
</html>