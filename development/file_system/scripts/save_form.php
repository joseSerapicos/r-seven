<?php require_once (dirname(__FILE__)."/../../../top_all.php"); ?>

<?php
include_once(DIR_ROOT."development/file_system/classes/development_file_system.class.php");


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
	$fk_development_file_system = $post['fk_development_file_system'];
	$name = $post['name'];
	$description = $post['description'];
	$type = $post['type'];
	
	// Validacao de variaveis
	if(empty($name)) $errors['name'] = "Name cannot be empty!";
	if(empty($type)) $errors['type'] = "Type cannot be empty!";
	
	// Save
	if(count($errors)==0)
	{
		$obj = new development_file_system();
		if(!empty($id)) $obj->set_id($id);
		if(!empty($fk_development_file_system)) $obj->set_fk_development_file_system($fk_development_file_system);
		if(!empty($name)) $obj->set_name($name);
		if(!empty($description)) $obj->set_description($description);
		if(!empty($type)) $obj->set_type($type);
		$obj->set_insert_user($masterUserObj->get_username());
		
		$obj->save($masterMainDb);
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