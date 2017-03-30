<?php require_once (dirname(__FILE__)."/../../top_all.php"); 

//MyList
include_once (DIR_ROOT . "mylist/classes/mylist.master.class.php");

//$_POST['serialize_post'] = serialize($_POST);

// Obter post enviado por jquery
$post = false;
// Registo de erros
$errors = array();

// Atraves de serialize (formulario completo)
if(!empty($_POST))
{
	//parse_str($_POST['serialize_post'], $post);
	$post = cleanSlashesArray($_POST);

	//echo "<pre>";print_r($post);echo "</pre>";
	// Variaveis
	//$id = $post['id'];
	
	// Validacao de variaveis
	
	foreach($post as $pkey => $pvalue){
		if(empty($pvalue) && $pkey != "mylist_difusion_head_id"){
			$errors[$pkey] = "Error";
		}
	}
	
	
	// Save
	if(count($errors)==0)
	{
		$mylist_obj = new mylist();
		$mylist_obj->mylist_manage_submit($masterSystemDb,$post);
		
	}
}

// Output
$output = array();
$output['targetSelector'] = ".addHeader"; // Selector do objecto que disparou o processo, para voltar a ser aberta a dialog no processamento do retorno da validacao de forms enviados via submit (data-mymethodpostform="submit"). Apenas necessario quando usado: $output['hasDialog'] = "1";
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

print_r($output);
?>