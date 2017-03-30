<?php require_once (dirname(__FILE__)."/../../../top_all.php"); ?>

<?php
include_once(DIR_ROOT."[Filepath for class]");


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
	$a = $post['a'];
	$b = $post['b'];
	$c = $post['c'];
	$d = $post['d'];
	
	// Validacao de variaveis
	if(empty($a)) $errors['a'] = "a cannot be empty!";
	if(empty($b)) $errors['b'] = "b cannot be empty!";
	if(empty($c)) $errors['c'] = "c cannot be empty!";
	if(empty($d)) $errors['d'] = "d cannot be empty!";
	
	// Save
	if(count($errors)==0)
	{
		$obj = new [Name of class]();
		if(!empty($id))
		{
			$obj->set_id($id);
			/* Carrega objecto, para que seja feito apenas overwrite dos atributos carregados via "set". */
			$obj->load($masterSystemDb);
		}
		$obj->set_a($a);
		$obj->set_a($b);
		$obj->set_a($c);
		$obj->set_a($d);
		$obj->set_insert_user($masterUserObj->get_username());
		
		$obj->save([Data base]);
	}
}


// Output
$output = array();
$output['targetSelector'] = "[selector do objecto que disparou o processo]"; // Selector do objecto que disparou o processo, para voltar a ser aberta a dialog no processamento do retorno da validacao de forms enviados via submit (data-mymethodpostform="submit"). Apenas necessario quando usado: $output['hasDialog'] = "1";
$output['actionSelector'] = "#addActionSelector"; // Selector para o form. Apenas necessario quando usado: $output['hasDialog'] = "1";
$output['hasDialog'] = "1"; // Determina se o form se encontra numa dialog
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