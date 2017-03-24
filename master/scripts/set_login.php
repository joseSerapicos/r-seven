<?php
session_name("mygest");
session_start();
?>

<?php require_once dirname(__FILE__)."/../../top1_conf.php"; ?>
<?php require_once (DIR_ROOT."top3_includes.php"); ?>


<?php
// Registo de erros
$errors = array();
$error = false;

// Obter post enviado pelo serialize do jquery
parse_str($_POST['serialize_post'], $post);
$post = cleanSlashesArray($post);

// Variaveis
$system = $post['system'];
$username = $post['username'];
$password = $post['password'];

// Acesso a base de dados principal (main)
$db_main = new mysql_db ( DB_HOST, DB_NAME, DB_USER, DB_PASS );
$db_main->connect_db ();

// Instanciar classe system
$system = new system($system);
if(!$system->load($db_main)) {
	session_unset("mygest");
	$error = true;
}
else {
	// Acesso a base de dados do sistema
	$db_system = new mysql_db ( $system->get_db_host (), $system->get_db_name (), $system->get_db_username (), $system->get_db_password () );
	$db_system->connect_db();

	// Instanciar classe user
	$user = new user ();
	if (! $user->load_by_login ( $username, $password, $db_system )) {
		session_unset("mygest");
		$error = true;
	}
	else {
		// Guardar informacao na session //
		$_SESSION ['masterSystem'] = $system->get_id();
		$_SESSION ['masterUser'] = $user->get_id ();		
	}
}

// Erros
if($error) {
	$errors['system'] = 'Invalid login.';
	$errors['username'] = 'Invalid login.';
	$errors['password'] = 'Invalid login.';
}

// Output
$output = array();
$output['actionSelector'] = "#frm_login"; // Selector para o form
//$output['hasDialog'] = "0"; // Determina o form se encontra numa dialog
if(count($errors)>0) { // Registo de erros
	$output['errors'] = $errors;
}

echo json_encode($output);
exit();
?>