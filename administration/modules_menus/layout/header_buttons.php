<?php 
/* Header buttons */
$headerButtons = array();
// conf
$headerButtons['conf'] = array();
$headerButtons['conf']['type'] = "large"; // ["small", "large", "smallTable", "largeTable"]
$headerButtons['conf']['addScripts'] = true; // Adiciona os scripts para os botoes
// add
$headerButtons['add'] = array();
$headerButtons['add']['enabled'] = true;
$headerButtons['add']['id'] = false;
$headerButtons['add']['class'] = false;
$headerButtons['add']['scriptGetForm'] = (PATH_ROOT."administration/modules_menus/layout/get_form_modules.php");
$headerButtons['add']['scriptPostForm'] = (PATH_ROOT."administration/modules_menus/scripts/save_form_modules.php");
$headerButtons['add']['addEditSingleHeader'] = true; // Se "true", e "$headerButtons['conf']['addScripts'] = true", adiciona os scripts para "editSingleHeader"
// deleteAll
$headerButtons['deleteAll'] = array();
$headerButtons['deleteAll']['enabled'] = true;
$headerButtons['deleteAll']['id'] = false;
$headerButtons['deleteAll']['class'] = false;
$headerButtons['deleteAll']['actionSelector'] = "#deleteAllActionSelector";
$headerButtons['deleteAll']['scriptPostForm'] = (PATH_ROOT."[Dir of menu]/scripts/delete_form.php");
$headerButtons['deleteAll']['addDeleteSingleHeader'] = true; // Se "true", e "$headerButtons['conf']['addScripts'] = true", adiciona os scripts para "deleteSingleHeader"
// checkAll
$headerButtons['checkAll'] = array();
$headerButtons['checkAll']['enabled'] = true;
$headerButtons['checkAll']['id'] = false;
$headerButtons['checkAll']['class'] = false;
$headerButtons['checkAll']['actionSelector'] = ".checkAllActionSelector";
/* /Header buttons */
?>