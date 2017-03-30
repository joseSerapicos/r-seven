<?php require_once (dirname(__FILE__)."/../../../top_all.php"); ?>

<?php
// Include de classes
require_once(DIR_ROOT."/development/modules_menus_info/classes/module_info.class.php");


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
	$fk_icons = $post['fk_icons'];
	$name = $post['name'];
	$description = $post['description'];
	$has_menus = $post['has_menus'];
	$priority = $post['priority'];
	
	// Validacao de variaveis
	if(empty($fk_icons)) $errors['fk_icons'] = "Icon cannot be empty!";
	if(empty($name)) $errors['name'] = "Name cannot be empty!";
	
	// Save
	if(count($errors)==0)
	{
		$obj = new module_info();
		if(!empty($id)) {
			$obj->set_id($id);
			/* Carrega objecto, para que seja feito apenas overwrite dos atributos carregados via "set". */
			$obj->load($masterMainDb);
		}
		$obj->set_fk_icons($fk_icons);
		$obj->set_name($name);
		$obj->set_description($description);
		$obj->set_has_menus($has_menus);
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