<?php require_once (dirname(__FILE__)."/../../../top_all.php"); ?>

<?php
// Include de classes
require_once(DIR_ROOT."administration/menus_settings/classes/menu_setting.class.php");


// Obter post enviado por jquery
$post = false;
// Registo de erros
$errors = array();


// Atraves de serialize (formulario completo)
if(!empty($_POST['serialize_post']))
{
	parse_str($_POST['serialize_post'], $post);
	$post = cleanSlashesArray($post);
	
	$id = $post['id'];
	$fk_mygest_menus_settings_info = $post['fk_mygest_menus_settings_info'];
	$fk_modules_menus = $post['fk_modules_menus'];
	$fk_stores = $post['fk_stores'];
	$fk_users = $post['fk_users'];
	$var_value = $post['var_value'];
	
	// Validacao de variaveis
	if(empty($fk_mygest_menus_settings_info)) $errors['fk_mygest_menus_settings_info'] = "Setting cannot be empty!";
	if(empty($var_value)) $errors['var_value'] = "Value cannot be empty!";
	
	// Save
	if(count($errors)==0)
	{
		$obj = new menu_setting();
		if(!empty($id)) {
			$obj->set_id($id);
			/* Carrega objecto, para que seja feito apenas overwrite dos atributos carregados via "set". */
			$obj->load($masterSystemDb);
		}
		$obj->set_fk_mygest_menus_settings_info($fk_mygest_menus_settings_info);
		$obj->set_fk_modules_menus($fk_modules_menus);
		$obj->set_fk_stores($fk_stores);
		$obj->set_fk_users($fk_users);
		$obj->set_var_value($var_value);
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