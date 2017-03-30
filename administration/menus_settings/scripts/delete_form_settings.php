<?php require_once (dirname(__FILE__)."/../../../top_all.php"); ?>

<?php
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
		$obj = new menu_setting($key);
		$obj->delete($masterSystemDb);
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
		$obj = new menu_setting($post->id);
		$obj->delete($masterSystemDb);
	}
}


// Output
$output = array();
//$output['actionSelector'] = "#deleteAllActionSelector"; // Selector para o form
//$output['hasDialog'] = "1"; // Determina o form se encontra numa dialog
// Mensagem a apresentar ao user
$output['msg'] = array();
$output['msg']['type'] = "success";
$output['msg']['title'] = "Success";
$output['msg']['text'] = "This data has been deleted!";

echo json_encode($output);
exit();
?>