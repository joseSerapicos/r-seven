<?php
session_name("mygest");
session_start();
?>

<?php require_once dirname(__FILE__)."/../../top1_conf.php"; ?>
<?php require_once (DIR_ROOT."top3_includes.php"); ?>


<?php
// Obter post enviado pelo serialize do jquery
$post = array();
parse_str($_POST['serialize_post'], $post);

$system = $post['system'];
$username = $post['username'];
$password = $post['password'];

$output = array(); // Output a enviar
$errors = array(); // Regista os erros ocorridos.

// Acesso a base de dados principal (main)
$db_main = new mysql_db ( DB_HOST, DB_NAME, DB_USER, DB_PASS );
$db_main->connect_db ();

// Instanciar classe system
$system = new system ( $system );
if (! $system->load ( $db_main )) {
	session_unset ( "mygest" );
	$errors[] = "Invalid System!";
	
	// Neste caso como usamos o exit() apos ocorrencia de erro, nao seria necessario construir o array de output desta forma, mas fica como exemplo para outros formularios mais complexos com varias validacoes.
	$output['status'] = ((count($errors)>0)?(0):(1));
	$output['errors'] = $errors;
	echo json_encode($output);
	exit ();
}

// Acesso a base de dados do sistema
$db_system = new mysql_db ( $system->get_db_host (), $system->get_db_name (), $system->get_db_username (), $system->get_db_password () );
$db_system->connect_db ();

// Instanciar classe user
$user = new user ();
if (! $user->load_by_login ( $username, $password, $db_system )) {
	session_unset ( "mygest" );
	$errors[] = "Invalid User!";
	
	// Neste caso como usamos o exit() apos ocorrencia de erro, nao seria necessario construir o array de output desta forma, mas fica como exemplo para outros formularios mais complexos com varias validacoes.
	$output['status'] = ((count($errors)>0)?(0):(1));
	$output['errors'] = $errors;
	echo json_encode($output);
	exit ();
}

// Guardar informacao na session //
$_SESSION ['masterSystem'] = $system->get_id();
$_SESSION ['masterUser'] = $user->get_id ();

// Neste caso como usamos o exit() apos ocorrencia de erro, nao seria necessario construir o array de output desta forma, mas fica como exemplo para outros formularios mais complexos com varias validacoes.
$output['status'] = ((count($errors)>0)?(0):(1));
$output['errors'] = $errors;
echo json_encode($output);
exit();
?>