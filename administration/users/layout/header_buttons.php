<?php
/* Header buttons */
$headerButtons = array();
// conf
$headerButtons['conf'] = array();
$headerButtons['conf']['type'] = "table"; // ["default", "table"]
$headerButtons['conf']['addScripts'] = true; // Adiciona os scripts para os botoes
// add
$headerButtons['add'] = array();
$headerButtons['add']['enabled'] = true;
$headerButtons['add']['id'] = false;
$headerButtons['add']['class'] = false;
$headerButtons['add']['methodPostForm'] = "script"; // ["script", "submit"]
$headerButtons['add']['scriptGetForm'] = (PATH_ROOT."administration/users/layout/get_form_users.php"); // Script com o form a ser carregado
$headerButtons['add']['scriptPostForm'] = (PATH_ROOT."administration/users/scripts/save_form_users.php"); // Script para onde deve ser enviado o post do form
$headerButtons['add']['addEditSingleHeader'] = true; // Se "true", adiciona os scripts para "editSingleHeader"
$headerButtons['add']['addMultiAddHeader'] = false; // Se "true", adiciona os scripts para "multiAddHeader"
// deleteAll
$headerButtons['deleteAll'] = array();
$headerButtons['deleteAll']['enabled'] = false; // Activar button
$headerButtons['deleteAll']['id'] = false;
$headerButtons['deleteAll']['class'] = false;
$headerButtons['deleteAll']['actionSelector'] = false; // Selector para o form a ser afectado
$headerButtons['deleteAll']['scriptPostForm'] = false; // Script para onde deve ser enviado o post do form
$headerButtons['deleteAll']['addDeleteSingleHeader'] = true; // Se "true", adiciona os scripts para "deleteSingleHeader"
$headerButtons['deleteAll']['addMultiDeleteAllHeader'] = false; // Se "true", adiciona os scripts para "multiDeleteAllHeader"
// checkAll
//$headerButtons['checkAll'] = array();
//$headerButtons['checkAll']['enabled'] = true; // Activar button
//$headerButtons['checkAll']['id'] = false;
//$headerButtons['checkAll']['class'] = false;
//$headerButtons['checkAll']['actionSelector'] = ".checkAllActionSelector"; // Selector para as checkbox que devem ser afectadas
//$headerButtons['checkAll']['addMultiCheckAllHeader'] = false; // Se "true", adiciona os scripts para "multiCheckAllHeader"
/* /Header buttons */ ?>