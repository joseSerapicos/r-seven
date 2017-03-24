<?php require_once (dirname(__FILE__)."/../../top_all.php"); ?>

<?php

//MyClick
include_once (DIR_ROOT . "myfiles/classes/myfiles.master.class.php");

// Obter post enviado por jquery
$post = false;
// Registo de erros
$errors = array();


// Atraves de serialize (formulario completo)
if(!empty($_POST['serialize_post']))
{
	parse_str($_POST['serialize_post'], $post);
	$post = cleanSlashesArray($post);
	
	// Percorrer array
	if(is_array($post['chk']))
	foreach($post['chk'] as $key => $value)
	{
		// Instanciar classe
		$obj = new myfiles();
		$obj->myfiles_delete($masterSystemDb,$key);
	}
}
// Atraves de json (registo individual)
elseif(!empty($_POST['json_post']))
{
	$post = json_decode(str_replace("\\", "", $_POST['json_post']));
		
	// Percorrer object
	if(is_object($post))
	{
		// Instanciar classe
		$obj = new myfiles();
		$obj->myfiles_delete($masterSystemDb,$post->id);
	}
}


// Output
$output = array();
$output['actionSelector'] = "#deleteAllActionSelector"; // Selector para o form
//$output['hasDialog'] = "1"; // Determina o form se encontra numa dialog
// Mensagem a apresentar ao user
$output['msg'] = array();
$output['msg']['type'] = "success";
$output['msg']['title'] = "Success";
$output['msg']['text'] = "This data has been deleted!";

echo json_encode($output);
exit();
?>