<?php
/* Objecto principal para manupulacao de todos os objectos principais //////////////////////////////////////////////////////////////*/
$masterMainObj = new main_master();
/* /Objecto principal para manupulacao de todos os objectos principais //////////////////////////////////////////////////////////////*/




/* Variaveis de sessao ///////////////////////////////////*/
$masterSystem = (empty($_SESSION ['masterSystem'])?false:$_SESSION ['masterSystem']);
$masterMainObj->set_system($masterSystem);
$masterUser = (empty($_SESSION ['masterUser'])?false:$_SESSION ['masterUser']);
$masterMainObj->set_user($masterUser);
$masterStore = (isset($_SESSION ['masterStore'])?$_SESSION ['masterStore']:false); // Pode ser 0 (todas as stores)
$masterMainObj->set_store($masterStore);
$masterModule = (empty($_SESSION ['masterModule'])?1:$_SESSION ['masterModule']); // Module default = Modulo activo com prioridade mais baixa
$masterMainObj->set_module($masterModule);
$masterMenu = (empty($_SESSION ['masterMenu'])?10:$_SESSION ['masterMenu']); // Menu do modulo activo com prioridade mais baixa
$masterMainObj->set_menu($masterMenu);
/* /Variaveis de sessao ///////////////////////////////////*/




/* Base de dados principal (main) /////////////////////////////////////////////////////////////////////////*/
$masterMainDb = new mysql_db ( DB_HOST, DB_NAME, DB_USER, DB_PASS );
$masterMainDb->connect_db();
// Confiurar base de dados para log de erros
$masterMainDb->set_db_error_log_obj($masterMainDb);
$masterMainObj->set_mainDb($masterMainDb);
/* /Base de dados principal (main) ////////////////////////////////////////////////////////////////////*/




/* Sistema do utilizador /////////////////////////////////////////////////////////////////////////*/
$masterSystemObj = new system($masterSystem);
if (! $masterSystemObj->load($masterMainDb)) {
	session_destroy ();
	header ( "location: ".PATH_ROOT."/master/layout/login.php" );
	exit();
}
$masterMainObj->set_systemObj($masterSystemObj);
/* /Sistema do utilizador /////////////////////////////////////////////////////////////////////////*/




/* Base de dados do sistema do utilizador /////////////////////////////////////////////////////////////////////////*/
$masterSystemDb = new mysql_db($masterSystemObj->get_db_host(), $masterSystemObj->get_db_name(), $masterSystemObj->get_db_username(), $masterSystemObj->get_db_password());
$masterSystemDb->connect_db();
// Confiurar base de dados para log de erros
$masterSystemDb->set_db_error_log_obj($masterMainDb);
$masterMainObj->set_systemDb($masterSystemDb);
/* /Base de dados do sistema do utilizador /////////////////////////////////////////////////////////////////////////*/




/* Utilizador (user) /////////////////////////////////////////////////////////////////////////*/
$masterUserObj = new user($masterUser);
if (! $masterUserObj->load ( $masterSystemDb )) {
	session_destroy ();
	header ( "location: ".PATH_ROOT."/master/layout/login.php" );
	exit ();
}
$masterMainObj->set_userObj($masterUserObj);
/* /Utilizador (user) /////////////////////////////////////////////////////////////////////////*/




/* Balcao (store) do utilizador /////////////////////////////////////////////////////////////////////////*/
// Set a default store
if($masterStore === false) {
	$masterStore = $masterMainObj->get_defaultStore();
}
else { // Valida se tem permissoes para usar store. Evita tentativa de acesso nao permitido
	//$store_id = $masterMainObj->check_store_permissions();
}

if($masterStore != $_SESSION ['masterStore'])
{
	// Actualiza info de acordo com nova store
	$_SESSION ['masterStore'] = $masterStore;
	$masterMainObj->set_store($masterStore);
}

$masterStoreObj = false;
if($masterStore > 0) {
	$masterStoreObj = new store($masterStore);
	$masterStoreObj->load($masterSystemDb);
}
$masterMainObj->set_storeObj($masterStoreObj);
/* /Balcao (store) do utilizador /////////////////////////////////////////////////////////////////////////*/




/* Modulo e menu /////////////////////////////////////////////////////////////////////////*/
$masterModuleObj = false;
$masterMenuObj = false;
if($masterModule) {
	$masterModuleObj = new module($masterModule);
	$masterModuleObj->load($masterSystemDb);
}
if($masterModule && $masterMenu) {
	$masterMenuObj = new module_menu($masterMenu);
	$masterMenuObj->load($masterSystemDb);
}
$masterMainObj->set_moduleObj($masterModuleObj);
$masterMainObj->set_menuObj($masterMenuObj);
/* /Modulo e menu /////////////////////////////////////////////////////////////////////////*/
?>