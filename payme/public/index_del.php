<?php
session_name ( "payme" );
session_start ();
?>
<?php require_once (dirname(__FILE__)."/../../development/classes/development_crypt.class.php"); 
$iv = 'X1zpAne5!hxdqlNx';
$key = "PayMe!RX"; //vem em $_GET

$arr['id_payme'] = "24";
 
$encript = htmlspecialchars(serialize($arr));

$development_crypt = new development_crypt();
print $iv;
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
require_once (dirname(__FILE__)."/../../top1_conf.php"); 
/*Func DB*/
require_once (dirname(__FILE__)."/../../top3_includes.php"); 

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
		
		
		/*contacta-se a bd do cliente*/
		$type = "SINGLE";
		
		print '<form class="paypal" action="payments.php" method="post" id="paypal_form" target="_blank">';
		
		if($type == "SINGLE"){
			print '<input type="hidden" name="cmd" value="_xclick" /> ';
		}else{ //Multi Carrinho
			print '<input type="hidden" name="cmd" value="_cart" />';
			print '<input type="hidden" name="upload" value="1">';
		}
		print '<input type="hidden" name="no_note" value="1" />';
		print '<input type="hidden" name="lc" value="UK" />';
		print '<input type="hidden" name="currency_code" value="GBP" />';
		print ' <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_LG.gif:NonHostedGuest" />';
		print '<input type="hidden" name="first_name" value="Primeiro"  />';
		print '<input type="hidden" name="last_name" value="Segundo"  />';
		print '<input type="hidden" name="payer_email" value="customer@example.com"  />';
		print '<input type="hidden" name="item_number" value="PayMe #1" / >';
		print '<input type="image" alt="PayPal - The safer, easier way to pay online!" name="submit" src="https://www.paypalobjects.com/en_US/i/btn/x-click-but6.gif" />';
		print '</form>';
    
   
  
		
		//print_r($decrypt);
		//print $id_system;
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

require_once (dirname(__FILE__)."/../classes/payme.master.class.php"); 

//
$hash = "DVP%2BRG3yhUZjrJX0fuqNc6bAxcJWNiKX5L2iWc2%2BeL%2FtdpKsj9Nf2%2FgcYkZ5eV4p8wofDs2KnnIeGmMwUPeSgA%3D%3D";
$hash = rawurldecode($hash);
$PayMe = new payme();
$PayMe->read_hash($hash); //abrir 
$payme_users_head = $PayMe->get_payme_users_head();
//$payme_users_head->get_id();


?>