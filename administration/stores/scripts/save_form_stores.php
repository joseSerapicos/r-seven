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
	$fk_stores = $post['fk_stores'];
	$name = $post['name'];
	$legal_name = $post['legal_name'];
	$nif = $post['nif'];
	$rnavt = $post['rnavt'];
	$address_1 = $post['address_1'];
	$address_2 = $post['address_2'];
	$address_3 = $post['address_3'];
	$postal_code = $post['postal_code'];
	$country = $post['country'];
	$email = $post['email'];
	$web_page = $post['web_page'];
	$phone_1 = $post['phone_1'];
	$phone_2 = $post['phone_2'];
	$phone_3 = $post['phone_3'];
	$enabled = $post['enabled'];
	
	// Validacao de variaveis
	if(empty($name)) $errors['name'] = "Name cannot be empty!";
	if(empty($nif)) $errors['nif'] = "NIF cannot be empty!";
	
	// Save
	if(count($errors)==0)
	{
		$obj = new store();
		if(!empty($id))
		{
			$obj->set_id($id);
			/* Carrega objecto, para que seja feito apenas overwrite dos atributos carregados via "set". */
			$obj->load($masterSystemDb);
		}
		$obj->set_fk_stores($fk_stores);
		$obj->set_name($name);
		$obj->set_legal_name($legal_name);
		$obj->set_nif($nif);
		$obj->set_rnavt($rnavt);
		$obj->set_address_1($address_1);
		$obj->set_address_2($address_2);
		$obj->set_address_3($address_3);
		$obj->set_postal_code($postal_code);
		$obj->set_country($country);
		$obj->set_email($email);
		$obj->set_web_page($web_page);
		$obj->set_rnavt($rnavt);
		$obj->set_phone_1($phone_1);
		$obj->set_phone_2($phone_2);
		$obj->set_phone_3($phone_3);
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