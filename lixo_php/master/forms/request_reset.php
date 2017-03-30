<?php
session_name ( "mygest" );
session_start ();
?>

<?php require_once "../top1_conf.php"; ?>
<?php require_once (DIR_ROOT."php/general/top3_includes.php"); 

include_once (DIR_ROOT . "classes/general/send_mail.class.php"); //envio de email

?>


<?php
// Obter post enviado pelo serialize do jquery
$post_array = array();
parse_str($_POST['serialize_post'], $post_array);

$system = $post_array['system'];
$username = $post_array['username'];

$output = array(); // Output a enviar
$errors = array(); // Regista os erros ocorridos.

// Acesso a base de dados principal (main)
$db_main = new mysql_db ( DB_HOST, DB_NAME, DB_USER, DB_PASS );
$db_main->connect_db ();

// Instanciar classe system
$system = new system ( $system );
if (! $system->load ( $db_main )) {
	session_unset ( "mygest" );
	
	$errors[] = "System Not Found";
	$output['status'] = ((count($errors)>0)?(0):(1));
	$output['errors'] = $errors;
	echo json_encode($output);
	exit ();
}

// Acesso a base de dados do sistema
$db_system = new mysql_db ( $system->get_db_host (), $system->get_db_name (), $system->get_db_username (), $system->get_db_password () );
$db_system->connect_db ();

$user = new user (); // Instanciar classe user
if (! $user->load_by_user( $db_system, $username )) { //Se nao existir o username no system escolhido
	
	$fk_mygest_languages = $user->get_fk_mygest_languages();
	
	$errors[] = "Not Found";
	$output['status'] = ((count($errors)>0)?(0):(1));
	$output['errors'] = $errors;
	echo json_encode($output);
	exit ();
}
/*Envio de Email*/
$language = $user->get_lang();
$email = $user->get_email();
$email = "adrialbu86@gmail.com";
$message = "teste";
$sent = array("to" => $email, "subject" => "Reset Password", "message" => $message);
$sent_email = new send_mail();
if (!$sent_email->send($db_system,$sent)){
	
	$errors[] = "Erro de Email";
	$output['status'] = ((count($errors)>0)?(0):(1));
	$output['errors'] = $errors;
	echo json_encode($output);
	exit ();

}
/*Sem Erros com Sucesso!*/
$output['status'] = ((count($errors)>0)?(0):(1));
$output['errors'] = $errors;
echo json_encode($output);
exit ();


?>