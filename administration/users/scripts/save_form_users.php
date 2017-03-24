<?php require_once (dirname(__FILE__)."/../../../top_all.php"); ?>

<?php
// Include de classes
require_once(DIR_ROOT."administration/users/classes/user.class.php");


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
	$fk_mygest_languages = $post['fk_mygest_languages'];
	$username = $post['username'];
	$password = $post['password'];
	$confirm_password = $post['confirm_password'];
	$name = $post['name'];
	$email = $post['email'];
	$enabled = $post['enabled'];
	
	// Validacao de variaveis
	if(empty($fk_mygest_languages)) $errors['fk_mygest_languages'] = "Language cannot be empty!";
	if(empty($username)) $errors['username'] = "Username cannot be empty!";
	if(empty($password)) $errors['password'] = "Password cannot be empty!";
	if($confirm_password != $password) {
		$errors['password'] = "Password not match!";
		$errors['confirm_password'] = "Password not match!";
	}
	if(empty($name)) $errors['name'] = "Name cannot be empty!";
	if(empty($email)) $errors['email'] = "Email cannot be empty!";
	
	// Save
	if(count($errors)==0)
	{
		$obj = new user_tmp();
		if(!empty($id))
		{
			$obj->set_id($id);
			/* Carrega objecto, para que seja feito apenas overwrite dos atributos carregados via "set". */
			$obj->load($masterSystemDb);
		}
		$obj->set_fk_mygest_languages($fk_mygest_languages);
		$obj->set_username($username);
		if($password != '********') $obj->set_password($password);
		$obj->set_name($name);
		$obj->set_email($email);
		$obj->set_enabled($enabled);
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