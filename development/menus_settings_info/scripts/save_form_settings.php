<?php require_once (dirname(__FILE__)."/../../../top_all.php"); ?>

<?php
// Include de classes
require_once(DIR_ROOT."development/menus_settings_info/classes/menu_setting_info.class.php");


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
	$fk_modules_menus_info = $post['fk_modules_menus_info'];
	$var_name = $post['var_name'];
	$var_type = $post['var_type'];
	$var_options = $post['var_options'];
	$var_default_value = $post['var_default_value'];
	$description = $post['description'];
	
	// Validacao de variaveis
	if(empty($var_name)) $errors['var_name'] = "Var name cannot be empty!";
	if(empty($var_type)) $errors['var_type'] = "Var type cannot be empty!";
	if( ($var_type=="enum") && (empty($var_options)) ) $errors['var_options'] = "Var options cannot be empty (enum ex:'option1;option2;option3')!";
	
	// Save
	if(count($errors)==0)
	{
		$obj = new menu_setting_info();
		if(!empty($id)) {
			$obj->set_id($id);
			/* Carrega objecto, para que seja feito apenas overwrite dos atributos carregados via "set". */
			$obj->load($masterMainDb);
		}
		$obj->set_fk_modules_menus_info($fk_modules_menus_info);
		$obj->set_var_name($var_name);
		$obj->set_var_type($var_type);
		$obj->set_var_options($var_options);
		$obj->set_var_default_value($var_default_value);
		$obj->set_description($description);
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