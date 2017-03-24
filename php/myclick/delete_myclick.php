<?php require_once (dirname(__FILE__)."/../../general/top1_conf.php"); ?>
<?php require_once (DIR_ROOT."php/general/top2_session.php"); ?>
<?php require_once (DIR_ROOT."php/general/top3_includes.php"); ?>
<?php require_once (DIR_ROOT."php/general/top4_connections.php"); ?>

<?php
include_once(DIR_ROOT."classes/myclick/myclick_users_head.class.php");


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
		$obj_db_error_log = new myclick_users_head ($key);
		$obj_db_error_log->delete($db_main);
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
		$obj_db_error_log = new myclick_users_head ($value);
		$obj_db_error_log->delete($db_main);
	}
}


$output = "Success";
echo json_encode($output);
exit();
?>