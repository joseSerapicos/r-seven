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

	// Variaveis
	$id = $post['id'];
	$fk_mygest_modules_info = $post['fk_mygest_modules_info'];
	$name = $post['name'];
	$priority = $post['priority'];
	
	// Validacao de variaveis
	if(empty($fk_mygest_modules_info)) $errors['fk_mygest_modules_info'] = "Module cannot be empty!";
	if(empty($name)) $errors['name'] = "Name cannot be empty!";
	
	// Save
	if(count($errors)==0)
	{
		$obj = new module();
		if(!empty($id)) {
			$obj->set_id($id);
			/* Carrega objecto, para que seja feito apenas overwrite dos atributos carregados via "set". */
			$obj->load($masterSystemDb);
		}
		$obj->set_fk_mygest_modules_info($fk_mygest_modules_info);
		$obj->set_name($name);
		$obj->set_priority($priority);
		$obj->set_insert_user($masterUserObj->get_username());
		
		$obj->save($masterSystemDb);
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