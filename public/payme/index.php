<?php
session_name ( "payme" );
session_start ();
?>
<?php require_once (dirname(__FILE__)."/../../classes/development/development_crypt.class.php"); 
$iv = 'N1zpAne8!hncvBu$';
$key = "mygest"; //vem em $_GET

$arr['id_payme'] = "212"; 
$encript = htmlspecialchars(serialize($arr));

$development_crypt = new development_crypt();
$development_crypt->encrypt($key,$iv,$encript); //abrir objecto
$hash = rawurlencode($development_crypt->get_encrypt());
echo "<hr>";
print $hash;
echo "<hr>";


if(isset($_GET['hash'])){
	$hash = rawurldecode($_GET['hash']); 
	echo "<hr>";
	print $hash;
	echo "<hr>";
}else{
	$hash = rawurldecode($hash); 
}
/*BD Principal*/
require_once (dirname(__FILE__)."/../../php/general/top1_conf.php"); 
/*Func DB*/
require_once (dirname(__FILE__)."/../../php/general/top3_includes.php"); 

// Acesso a base de dados principal (main)
$db_main = new mysql_db ( DB_HOST, DB_NAME, DB_USER, DB_PASS );
$db_main->connect_db ();

/*Procura pelas IV Existentes e tenta descodificar*/
$sql = ("SELECT id,iv_user FROM systems");
$rs = $db_main->execute ( $sql );

$find_id = 0;
while($row = $db_main->get_row ( $rs )) {
	$id_system = $row->id;
	$iv_user = $row->iv_user;
	
	$development_crypt = new development_crypt();
	$development_crypt->decrypt($key,$iv_user,$hash); //abrir objecto
	$decrypt = $development_crypt->get_decrypt();
	$decrypt = unserialize(htmlspecialchars_decode($decrypt));
	/*Se Encontrar a Correcta*/
	if(is_array($decrypt) and !empty($decrypt['id_payme'])){
		$find_id = $id_system; //encontra o ID 
		$id_payme = $decrypt['id_payme'];
		print_r($decrypt);
		print $id_system;
	}
	
}
if(empty($find_id)){
	die("NOT FOUND");
}

/*Connecta-se a BD do cliente*/
$system = new system ($find_id);
if (! $system->load ( $db_main )) {
	session_unset ( "payme" );
	
	$errors[] = "System Not Found";
	$output['status'] = ((count($errors)>0)?(0):(1));
	$output['errors'] = $errors;
	echo json_encode($output);
	exit ();
}
// Acesso a base de dados do sistema
$db_system = new mysql_db ( $system->get_db_host (), $system->get_db_name (), $system->get_db_username (), $system->get_db_password () );
$db_system->connect_db ();


?>