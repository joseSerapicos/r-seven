<?php require_once (dirname(__FILE__)."/../../../top_all.php"); ?>

<?php
// Include de classes
require_once(DIR_ROOT."development/modules_menus_info/classes/module_menu_info.class.php");


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
	$fk_modules_info = $post['fk_modules_info'];
	$name = $post['name'];
	$description = $post['description'];
	$filepath_top = $post['filepath_top'];
	$filepath_content = $post['filepath_content'];
	$filepath_bottom = $post['filepath_bottom'];
	$path_languages = $post['path_languages'];
	$priority = $post['priority'];
	
	// Validacao de variaveis
	if(empty($name)) $errors['name'] = "Name cannot be empty!";
	
	// Save
	if(count($errors)==0)
	{
		$obj = new module_menu_info();
		if(!empty($id)) {
			$obj->set_id($id);
			/* Carrega objecto, para que seja feito apenas overwrite dos atributos carregados via "set". */
			$obj->load($masterMainDb);
		}
		$obj->set_fk_modules_info($fk_modules_info);
		$obj->set_name($name);
		$obj->set_description($description);
		$obj->set_filepath_top($filepath_top);
		$obj->set_filepath_content($filepath_content);
		$obj->set_filepath_bottom($filepath_bottom);
		$obj->set_path_languages($path_languages);
		$obj->set_priority($priority);
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