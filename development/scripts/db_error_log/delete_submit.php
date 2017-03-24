<?php require_once (dirname(__FILE__)."/../../../top_no_langs.php"); ?>

<?php
include_once(DIR_ROOT."development/classes/development_db_error_log.class.php");


// Obter post enviado por jquery
$post = array();


// Atraves de serialize (formulario completo)
if(!empty($_POST['serialize_post']))
{
	parse_str($_POST['serialize_post'], $post);
	
	// Percorrer array
	if(is_array($post['chk_del']))
	foreach($post['chk_del'] as $key => $value)
	{
		// Instanciar classe development_db_error_log
		$obj_db_error_log = new development_db_error_log ($key);
		$obj_db_error_log->delete($masterMainDb);
	}
}
// Atraves de json (registo individual)
elseif(!empty($_POST['json_post']))
{
	$post = json_decode(str_replace("\\", "",$_POST['json_post']));
		
	// Percorrer object
	if(is_object($post->chk_del))
	foreach($post->chk_del as $value)
	{
		// Instanciar classe development_db_error_log
		$obj_db_error_log = new development_db_error_log ($value);
		$obj_db_error_log->delete($masterMainDb);
	}
}


$output = "Success";
echo json_encode($output);
exit();
?>