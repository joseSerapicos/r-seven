<?php

/* Variaveis de sessao ///////////////////////////////////*/
$masterSystem = (isset($_SESSION ['masterSystem'])?$_SESSION ['masterSystem']:false);
$masterUser = (isset($_SESSION ['masterUser'])?$_SESSION ['masterUser']:false);
$masterStore = (isset($_SESSION ['masterStore'])?$_SESSION ['masterStore']:false);
$masterModule = (isset($_SESSION ['masterModule'])?$_SESSION ['masterModule']:2); // Module default = Modulo activo com prioridade mais baixa
$masterMenu = (isset($_SESSION ['masterMenu'])?$_SESSION ['masterMenu']:false);
/* /Variaveis de sessao ///////////////////////////////////*/




/* Base de dados principal (main) /////////////////////////////////////////////////////////////////////////*/
$masterMainDb = new mysql_db ( DB_HOST, DB_NAME, DB_USER, DB_PASS );
$masterMainDb->connect_db();
// Confiurar base de dados para log de erros
$masterMainDb->set_db_error_log_obj($masterMainDb);
/* /Base de dados principal (main) ////////////////////////////////////////////////////////////////////*/




/* Sistema do utilizador /////////////////////////////////////////////////////////////////////////*/
$masterSystemObj = new system ( $masterSystem );
if (! $masterSystemObj->load ( $masterMainDb )) {
	session_destroy ();
	header ( "location: ".PATH_ROOT."/master/layout/login.php" );
	exit();
}
/* /Sistema do utilizador /////////////////////////////////////////////////////////////////////////*/




/* Base de dados do sistema do utilizador /////////////////////////////////////////////////////////////////////////*/
$masterSystemDb = new mysql_db($masterSystemObj->get_db_host(), $masterSystemObj->get_db_name(), $masterSystemObj->get_db_username(), $masterSystemObj->get_db_password());
$masterSystemDb->connect_db();
// Confiurar base de dados para log de erros
$masterSystemDb->set_db_error_log_obj($masterMainDb);
/* /Base de dados do sistema do utilizador /////////////////////////////////////////////////////////////////////////*/




/* Objecto principal para manupulacao de todos os objectos principais //////////////////////////////////////////////////////////////*/
$masterMainObj = new main();
$masterMainObj->set_masterUser($masterUser);
$masterMainObj->set_masterStore($masterStore);
$masterMainObj->load ($masterMainDb, $masterSystemDb);
/* /Objecto principal para manupulacao de todos os objectos principais //////////////////////////////////////////////////////////////*/




/* Utilizador (user) /////////////////////////////////////////////////////////////////////////*/
$masterUserObj = new user($masterUser);
if (! $masterUserObj->load ( $masterSystemDb )) {
	session_destroy ();
	header ( "location: ".PATH_ROOT."/master/layout/login.php" );
	exit ();
}
/* /Utilizador (user) /////////////////////////////////////////////////////////////////////////*/




/* Balcao (store) do utilizador /////////////////////////////////////////////////////////////////////////*/
// Set a default store
if($masterStore === false) {
	$masterStore = $masterMainObj->get_default_store();
}
else { // Valida se tem permissoes para usar store. Evita tentativa de acesso nao permitido
	//$store_id = $masterMainObj->check_store_permissions();
}

if($masterStore != $_SESSION ['masterStore'])
{
	// Actualiza info de acordo com nova store
	$_SESSION ['masterStore'] = $masterStore;
	$masterMainObj->set_masterStore($masterStore);
	$masterMainObj->load ($masterMainDb, $masterSystemDb);
}

$masterStoreObj = false;
if($masterStore > 0) $masterStoreObj = $masterMainObj->get_store($masterStore);
/* /Balcao (store) do utilizador /////////////////////////////////////////////////////////////////////////*/




/* Modulo e menu /////////////////////////////////////////////////////////////////////////*/
$masterModuleObj = false;
$masterMenuObj = false;
if($masterModule) $masterModuleObj = $masterMainObj->get_module($masterMainDb, $masterSystemDb, $masterModule);
if($masterModule && $masterMenu) $masterMenuObj = $masterMainObj->get_menu($masterMainDb, $masterSystemDb, $masterMenu);
/* /Modulo e menu /////////////////////////////////////////////////////////////////////////*/
?>