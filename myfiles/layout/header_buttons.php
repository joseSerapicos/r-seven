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
$headerButtons['add']['id'] = false;
$headerButtons['add']['class'] = false;
$headerButtons['add']['scriptGetForm'] = false;
$headerButtons['add']['scriptPostForm'] = false;
$headerButtons['add']['addEditSingleHeader'] = true; // Se "true", e "$headerButtons['conf']['addScripts'] = true", adiciona os scripts para "editSingleHeader"

// deleteAll
$headerButtons['deleteAll'] = array();
$headerButtons['deleteAll']['enabled'] = false;
$headerButtons['deleteAll']['addDeleteSingleHeader'] = true; // Se "true", adiciona os scripts para "deleteSingleHeader"
$headerButtons['deleteAll']['addMultiDeleteAllHeader'] = false; // Se "true", adiciona os scripts para "multiDeleteAllHeader"

// Help
$headerButtons['help'] = array();
$headerButtons['help']['id'] = false;
$headerButtons['help']['enabled'] = false;
// checkAll
$headerButtons['checkAll'] = array();
$headerButtons['checkAll']['enabled'] = false;
/* /Header buttons */
?>