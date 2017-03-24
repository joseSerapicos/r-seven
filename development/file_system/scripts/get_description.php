<?php require_once (dirname(__FILE__)."/../../../top_all.php"); ?>

<?php
include_once (DIR_ROOT."development/file_system/classes/file_system.class.php");

$post = json_decode(str_replace("\\", "",$_POST['json_post']));
$file_system_id = (empty($post)?0:(is_int(intval($post))?$post:0));


if(empty($file_system_id)) return("File system id is empty!");

$obj_file_system = new file_system($post);
$obj_file_system->load($masterMainDb);

$return_html = ("<h3>".$obj_file_system->get_name()."</h3>");
$return_html .= $obj_file_system->get_description();

echo($return_html);
?>