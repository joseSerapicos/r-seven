<?php require_once (dirname(__FILE__)."/../../php/general/top1_conf.php"); ?>
<?php require_once (DIR_ROOT."php/general/top2_session.php"); ?>
<?php require_once (DIR_ROOT."php/general/top3_includes.php"); ?>
<?php require_once (DIR_ROOT."php/general/top4_connections.php"); ?>
<?php

// Ficheiro com o idioma do user
include_once (DIR_LANGS . "general/"./*$obj_user->get_fk_mygest_languages().*/"pt.inc.php");
include_once (DIR_LANGS . "errors/"./*$obj_user->get_fk_mygest_languages().*/"pt.inc.php");

?>