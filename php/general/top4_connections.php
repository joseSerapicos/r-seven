<?php

// Variaveis gerais e de sessao
$system_id = $_SESSION ['system'];
$user_id = $_SESSION ['user'];

// Acesso a base de dados principal (main)
$db_main = new mysql_db ( DB_HOST, DB_NAME, DB_USER, DB_PASS );
$db_main->connect_db ();
// Confiurar base de dados para log de erros
$db_main->set_db_error_log_obj($db_main);

// Instanciar classe system
$obj_system = new system ( $system_id );
if (! $obj_system->load ( $db_main )) {
	session_destroy ();
	header ( "location: ".PATH_LAYOUT."/general/login.php" );
	exit ();
}

// Acesso a base de dados do sistema
$db_system = new mysql_db ( $obj_system->get_db_host (), $obj_system->get_db_name (), $obj_system->get_db_username (), $obj_system->get_db_password () );
$db_system->connect_db ();
// Confiurar base de dados para log de erros
$db_system->set_db_error_log_obj($db_main);

// Instanciar classe user
$obj_user = new user ( $user_id );
if (! $obj_user->load ( $db_system )) {
	session_destroy ();
	header ( "location: ".PATH_LAYOUT."/general/login.php" );
	exit ();
}

// Instanciar classe user_stores
$obj_general = new general ( $user_id );
$obj_general->load ( $db_system );

// Variaveis gerais e de sessao
$store_id = (isset($_SESSION ['store'])?$_SESSION ['store']:false);
// Set a default store
if($store_id === false)
{
	$store_id = $obj_general->get_default_store();
}
else // Valida se tem permissoes para usar store. Evita tentativa de acesso nao permitido
{
	//$store_id = $obj_general->check_store_permissions();
}


/* Actualiza variavel de sessao */
$_SESSION ['store'] = $store_id;
/* /Actualiza variavel de sessao */


/* Objectos principais do menu */
$module = false;
$menu = false;
$obj_module = false;
$obj_menu = false;

if(isset($_POST['json_post']))
{
	$post = json_decode(str_replace("\\", "",$_POST['json_post']));
	
	$module = (empty($post->module)?false:$post->module);
	$menu = (empty($post->menu)?false:$post->menu);

	if($module) $obj_module = $obj_general->get_module($module, $_SESSION['store'], $db_system);
	if($module && $menu) $obj_menu = $obj_general->get_menu($menu, $db_system);
}
/* /Objectos principais do menu */
?>