<?php require_once (dirname(__FILE__)."/../../top_all.php"); ?>

<?php

//PayMe
include_once (DIR_ROOT . "payme/classes/payme.master.class.php");


// Obter post enviado por jquery
$post = false;
// Registo de erros
$errors = array();


// Atraves de serialize (formulario completo)
if(!empty($_POST['serialize_post']))
{
	parse_str($_POST['serialize_post'], $post);
	$post = cleanSlashesArray($post);

	// Variaveis
	$id = $post['id'];
	//echo "<pre>";print_r($post);echo "</pre>";
	// Validacao de variaveis
	// if(empty($id)) $errors['id'] = "Id cannot be empty!";
	
	// Save
	if(count($errors)==0)
	{
		$payme_obj = new payme();
		$payme_obj->payme_submit($masterMainDb,$masterSystemDb,$post);
		/*
		$obj = new [Name of class]();
		if(!empty($id)) $obj->set_id($id);
		$obj->set_insert_user($masterUserObj->get_username());
		
		$obj->save([Data base]);*/
	}
}

// Output
$output = array();
$output['actionSelector'] = "#addActionSelector"; // Selector para o form
$output['hasDialog'] = "1"; // Determina o form se encontra numa dialog
if(count($errors)>0) { // Registo de erros
	$output['errors'] = $errors;
}
else { // Mensagem a apresentar ao user
	$output['msg'] = array();
	$output['msg']['type'] = "success";
	$output['msg']['title'] = "Success";
	$output['msg']['text'] = "This data has been saved!";
}

echo json_encode($output);
exit();
?>