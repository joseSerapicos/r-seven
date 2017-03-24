<?php require_once (dirname(__FILE__)."/../../top_all.php"); 

//MyList
include_once (DIR_ROOT . "mylist/classes/mylist.master.class.php");

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
	
	// Validacao de variaveis
	
	foreach($post as $pkey => $pvalue){
		if(empty($pvalue) && $pkey != "mylist_id"){
			$errors[$pkey] = "Error";
		}
	}
	
	
	// Save
	if(count($errors)==0)
	{
		$mylist_obj = new mylist();
		$mylist_obj->mylist_submit($masterSystemDb,$post);
		
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