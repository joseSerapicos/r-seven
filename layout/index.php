<?php require_once (dirname(__FILE__)."/../php/general/top1_conf.php"); ?>
<?php require_once (DIR_ROOT."php/general/top2_session.php"); ?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>My Gest</title>
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<link href="<?= PATH_LAYOUT ?>general/css/bootstrap.min.css"
	rel="stylesheet">
<link href="<?= PATH_LAYOUT ?>general/css/bootstrap-responsive.min.css"
	rel="stylesheet">
<link
	href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600"
	rel="stylesheet">
<link href="<?= PATH_LAYOUT ?>general/css/font-awesome.min.css"
	rel="stylesheet">
<link
	href="<?= PATH_LAYOUT ?>general/css/ui-lightness/jquery-ui-1.10.0.custom.min.css"
	rel="stylesheet">
<link href="<?= PATH_LAYOUT ?>general/css/base-admin-3.css"
	rel="stylesheet">
<link href="<?= PATH_LAYOUT ?>general/css/base-admin-3-responsive.css"
	rel="stylesheet">
<link href="<?= PATH_LAYOUT ?>general/css/custom.css" rel="stylesheet">

<!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->

<!--[if lt IE 9]>

<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>

<![endif]-->


<?php require_once (DIR_ROOT."php/general/top3_includes.php"); ?>
<?php require_once (DIR_ROOT."php/general/top4_connections.php"); ?>
<?php
// Ficheiro com o idioma do user
include_once (DIR_LANGS . "general/"./*$obj_user->get_fk_mygest_languages().*/"pt.inc.php");
include_once (DIR_LANGS . "errors/"./*$obj_user->get_fk_mygest_languages().*/"pt.inc.php");
?>
</head>


<body>

	<!-- Nota: Nao colocar rigorosamente nada antes de incluir este ficheiro, incluindo comentarios, caso contrario havera problemas no Internet Explorer -->    

	<nav class="navbar navbar-inverse" role="navigation">


		<div class="container">

			<!-- Brand and toggle get grouped for better mobile display -->

			<div class="navbar-header">

				<button type="button" class="navbar-toggle" data-toggle="collapse"
					data-target=".navbar-ex1-collapse">

					<span class="sr-only">Toggle navigation</span> <i class="icon-cog"></i>

				</button>

				<a class="navbar-brand" href="<?= PATH_LAYOUT ?>index.php"><img
					src="./general/img/logo_mygest.png"></a>

			</div>



			<!-- Collect the nav links, forms, and other content for toggling -->

			<div class="collapse navbar-collapse navbar-ex1-collapse">

				<ul class="nav navbar-nav navbar-right">

					<li class="dropdown"><a href="javscript:;" class="dropdown-toggle"
						data-toggle="dropdown_index_page"> <i class="icon-cog"></i> Settings <b
							class="caret"></b>

					</a>



						<ul class="dropdown-menu">

							<li><a href="./account.html">Account Settings</a></li>

							<li><a href="javascript:;">Privacy Settings</a></li>

							<li class="divider"></li>

							<li><a href="javascript:;">Help</a></li>

						</ul></li>



					<li class="dropdown"><a href="javscript:;" class="dropdown-toggle"
						data-toggle="dropdown_index_page"> <i class="icon-user"></i> <?=$obj_user->get_name ()?> <b
							class="caret"></b>

					</a>



						<ul class="dropdown-menu">

							<li><a href="javascript:;">My Profile</a></li>

							<li><a href="javascript:;">My Groups</a></li>

							<li class="divider"></li>

							<li><a href="<?= PATH_ROOT ?>php/general/logout.php">Logout</a></li>

						</ul></li>



					<!-- Stores -->
					<?php

					

					// Obter array de stores

					

					$obj_stores = $obj_general->get_stores ( $db_system );

					

					$obj_store = (($store_id > 0) ? $obj_general->get_store ( $store_id ) : false);

					

					if ($obj_stores) {

						

						?>
					<li class="dropdown"><a href="javascript:;" class="dropdown-toggle"
						data-toggle="dropdown_index_page"> <i class="icon-cog"></i> Store (<?= ($obj_store?$obj_store->get_name():"All") ?>) <b
							class="caret"></b>

					</a>



						<ul class="dropdown-menu">
							<?php if (count ( $obj_stores ) > 1) { ?>
	                        	<li><a
								href='javascript: set_store_begin(<?= json_encode(0) ?>);'>All</a></li>

							<li class="divider"></li>
	                        	<?php

						}

						

						if (is_array ( $obj_stores ))

							

							foreach ( $obj_stores as $store ) {

								

								?>
									<li><a
								href='javascript: set_store_begin(<?= json_encode($store->get_id()) ?>);'><?= $store->get_name(); ?></a></li>
								<?php } ?>
						</ul></li>
					<?php } // Stores : END // ?>
				</ul>



			</div>

			<!-- /.navbar-collapse -->

		</div>

		<!-- /.container -->

	</nav>

	<?php // echo("<pre>");print_r($user_strores);?>

	<div class="subnavbar">



		<div class="subnavbar-inner">



			<div class="container">



				<a href="javascript:;" class="subnav-toggle" data-toggle="collapse"
					data-target=".subnav-collapse"> <span class="sr-only">Toggle

						navigation</span> <i class="icon-reorder"></i>

				</a>



				<div class="collapse subnav-collapse">

					<ul class="mainnav">

						<?php

						

						$obj_modules = false;

						

						$obj_modules = (($store_id > 0) ? $obj_store->get_modules () : $obj_general->get_modules ( $store_id, $db_system ));

						

						// echo("<pre>");print_r($obj_modules);

						

						if (is_array ( $obj_modules ))

							$first_module = true; // Controla o menu default (o primeiro)

							foreach ( $obj_modules as $module ) {

								

								$module_link = $module->get_link (); // Link do modulo caso nao tenha menus

								

								if (empty ( $module_link )) {

									

									?>
								<li id="menu_<?= $module->get_id() ?>" class="dropdown"><a href="javascript:;"
							class="dropdown-toggle" data-toggle="dropdown_index_page"> <i
								class="<?= $module->get_icon($db_main) ?>"></i> <span><?= $module->get_name() ?></span>

								<b class="caret"></b>

						</a>
		
								<?php

									

									$obj_menus = $module->get_menus ();

									

									// echo("<pre>");print_r($obj_modules);

									

									if (is_array ( $obj_menus )) {

										

										?>
									<ul class="dropdown-menu">
									<?php foreach ( $obj_menus as $menu ) { ?>
										<li><a
									href='javascript: call_script_with_loading_menu("<?= PATH_ROOT.$menu->get_link() ?>", <?= json_encode(array('module' => $module->get_id(), 'menu' => $menu->get_id())) ?>, "tag", "#main_load_menus", "#menu_<?= $module->get_id() ?>");'><?= $menu->get_name() ?></a></li>
									<?php } ?>
									</ul>
								<?php } ?>
								
								</li>
							<?php

								} else {

									

									?>
								<li id="menu_<?= $module->get_id() ?>" <?= ($first_module?'class="active"':'') ?>><a href='javascript: call_script_with_loading_menu("<?= PATH_ROOT.$module_link ?>", <?= json_encode(array('module' => $module->get_id())) ?>, "tag", "#main_load_menus", "#menu_<?= $module->get_id() ?>");'> <i class="<?= $module->get_icon($db_main) ?>"></i> <span><?= $module->get_name() ?></span>

						</a></li>
							<?php }
							$first_module = false;
						} ?>
						
						
						<!-- Second level example
						<li class="dropdown"><a href="javascript:;"
							class="dropdown-toggle" data-toggle="dropdown_index_page"> <i
								class="icon-list-alt"></i> <span>Modulos</span> <b class="caret"></b>
						</a>

							<ul class="dropdown-menu">
								<li><a href="./login.html">Login</a></li>
								<li><a href="./signup.html">Signup</a></li>
								<li><a href="./error.html">Error</a></li>
								<li class="dropdown-submenu"><a tabindex="-1" href="#">More
										options</a>
									<ul class="dropdown-menu">
										<li><a tabindex="-1" href="#">Second level</a></li>

										<li><a href="#">Second level</a></li>
										<li><a href="#">Second level</a></li>
									</ul></li>
							</ul></li>
							-->



					</ul>

				</div>

				<!-- /.subnav-collapse -->



			</div>

			<!-- /container -->



		</div>

		<!-- /subnavbar-inner -->



	</div>

	<!-- /subnavbar -->


	<!-- loading skin: div com mascara de loading -->
	<div id="loading_skin_content">
		<div id="loading_skin"><img src="<?= PATH_LAYOUT ?>general/img/loading/loading7.gif" /></div>
	</div>
	<!-- loading skin: div com mascara de loading -->


	<!-- /main: Contem todo o conteudo da pagina. Este conteudo e substituido pelo conteudo da pagina de cada menu. -->
	<div id="main_load_menus" class="">
    <?php
	// Modulo default
	include_once(DIR_ROOT."layout/general/home.php");
	?>
	</div>
	<!-- /main -->



	<div class="footer">



		<div class="container">



			<div class="row">



				<div id="footer-copyright" class="col-md-6">MyGest.pt &copy; Todos

					os direitos reservados</div>

				<!-- /span6 -->



				<div id="footer-terms" class="col-md-6">Vers&atilde;o: 0.1a</div>

				<!-- /.span6 -->



			</div>

			<!-- /row -->



		</div>

		<!-- /container -->



	</div>

	<!-- /footer -->


	<!-- Javascript -->
	<!-- Placed at the end of the document so the pages load faster -->
	<!-- Ficheiros independentes para esta pagina. Para os conteudos que nao sao carregados
em cada load como o menu principal, caso contrario usando ficheiros comuns e classes comuns,
cada load voltaria a instanciar os conteudos ja instanciados como o menu principal, o que
faz com que entre em confto -->
	<script src="<?= PATH_LAYOUT ?>general/js/libs/bootstrap_index_page.min.js"></script>
    
        
	<script type="text/javascript">
	function call_script_with_loading_menu(var_script, var_json_post, var_return_type, var_return_name, var_module_name)
	{
		// Seleccionar o menu
		$("li.active").removeClass("active");
		$(var_module_name).addClass("active");
		
		// Chamar script principal
		call_script_with_loading(var_script, var_json_post, var_return_type, var_return_name)
	}
	
	
	function call_script_with_loading(var_script, var_json_post, var_return_type, var_return_name)
	{
		// Iniciar loading
		$("#loading_skin_content").html('<div id="loading_skin"><img src="<?= PATH_LAYOUT ?>general/img/loading/loading7.gif" /></div>');
		
		// Chamar script principal
		call_script(var_script, var_json_post, var_return_type, var_return_name);	
	}
	
	
	function set_store_begin(var_json_post)
	{
		call_script("<?= PATH_ROOT ?>php/general/set_store.php", var_json_post, "function", "set_store_finish");
	}

	
	function set_store_finish(var_data)
	{
		// Fazer refresh da pagina para carregar de acordo com nova store
		location.reload();
	}
	</script>


</body>

</html>