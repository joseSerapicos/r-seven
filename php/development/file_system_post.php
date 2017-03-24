<?php require_once (dirname(__FILE__)."/../general/top1_conf.php"); ?>
<?php require_once (DIR_ROOT."php/general/top2_session.php"); ?>
<?php require_once (DIR_ROOT."php/general/top3_includes.php"); ?>
<?php require_once (DIR_ROOT."php/general/top4_connections.php"); ?>

<?php
include_once (DIR_ROOT . "classes/development/development_file_system.class.php");

$post = json_decode(str_replace("\\", "",$_POST['json_post']));
$file_system_id = (empty($post)?0:(is_int(intval($post))?$post:0));


if(empty($file_system_id)) return("File system id is empty!");

$obj_file_system = new development_file_system($post);
$obj_file_system->load($db_main);

$return_html = ("<h3>".$obj_file_system->get_name()."</h3>");
$return_html .= $obj_file_system->get_description();

echo($return_html);
?>