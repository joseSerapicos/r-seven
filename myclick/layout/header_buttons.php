<?php 
/* Header buttons */
$headerButtons = array();
// conf
$headerButtons['conf'] = array();
$headerButtons['conf']['type'] = "large"; // ["small", "large", "smallTable", "largeTable"]
$headerButtons['conf']['addScripts'] = true; // Adiciona os scripts para os botoes
// add
$headerButtons['add'] = array();
$headerButtons['add']['enabled'] = false;
$headerButtons['add']['addMultiAddHeader'] = false;
// deleteAll
$headerButtons['deleteAll'] = array();
$headerButtons['deleteAll']['enabled'] = false; // Activar button
$headerButtons['deleteAll']['id'] = false;
$headerButtons['deleteAll']['class'] = false;
//$headerButtons['deleteAll']['actionSelector'] = "#deleteAllActionSelector"; // Selector para o form a ser afectado
$headerButtons['deleteAll']['scriptPostForm'] = (PATH_ROOT."myclick/scripts/myclick_form_delete.php"); // Script para onde deve ser enviado o post do form
$headerButtons['deleteAll']['addDeleteSingleHeader'] = true; // Se "true", adiciona os scripts para "deleteSingleHeader"
$headerButtons['deleteAll']['addMultiDeleteAllHeader'] = false; // Se "true", adiciona os scripts para "multiDeleteAllHeader"
// checkAll
$headerButtons['checkAll'] = array();
$headerButtons['checkAll']['enabled'] = false;
/* /Header buttons */
?>