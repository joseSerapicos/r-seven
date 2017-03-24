<?php

/*By referer see if its valid!*/
$referer = $_SERVER['HTTP_REFERER'];
if(strpos($referer,'hash=')){
	$start = strrpos($referer, 'hash=');
	$hash_key = substr ( $referer, $start+5 , strlen($referer) );
}else{
	die("No Access!");
}

if($_POST['cmd']=='_xclick'){ //PayPal
	$system_type = "PAYPAL";
}

require_once (dirname(__FILE__)."/../classes/payme.master.class.php"); 

$hash_key = rawurldecode($hash_key);
$PayMe = new payme();
$PayMe->read_hash($hash_key); //abrir 


if(!$PayMe->get_error()){

	$payme_users_head = $PayMe->get_payme_users_head();
	
	/*Info from PayMe!*/
	$id	= $payme_users_head->get_id(); //invoice number payme
	$total = $payme_users_head->get_total();
	$currency_code = $payme_users_head->get_currency_code();
	$description = $payme_users_head->get_description();
	$status = $payme_users_head->get_status();
	
	$masterSystem = $PayMe->get_masterSystemID();
	
	
	
}else{
	die("Error Hash-Key");
}


switch ($system_type){
	case "PAYPAL":

		$paypal_email = 'gestmygest-facilitator@gmail.com';
		
		$return_url = $referer;
		$cancel_url = $referer;
		$notify_url = 'http://mygest.pt/mygest/payme/acknowledge/paypal_acknowledge.php';
		
		//$invoice = $masterSystem.str_pad($payme_id, 6, "0", STR_PAD_LEFT); //gera invoice n
		$invoice = $id;
				
		$no_shipping = "1"; //sem morada
		$no_note = "1"; //nota para o cliente deixar
		
		$item_name = 'PayMe! Invoice: '.$invoice;
		$item_description = $description;
		$item_amount = $total;
		$currency_code = $currency_code;

		
		$custom = $hash_key; //sends hash_key to paypal! ^c^
		
		//$shipping_1 = "10"; //Portes preço
		//$handling_1 = ""; //preparar preço
		
		// Firstly Append paypal account to querystring
		$querystring .= "?business=".urlencode($paypal_email)."&";	
		
		$querystring .= "invoice=".urlencode($invoice)."&";
		$querystring .= "item_name=".urlencode($item_name)."&";
		$querystring .= "item_description=".urlencode($item_description)."&";
		$querystring .= "amount=".urlencode($item_amount)."&";
		$querystring .= "currency_code=".urlencode($currency_code)."&";
		
		//loop for posted values and append to querystring
		foreach($_POST as $key => $value){
			$value = urlencode(stripslashes($value));
			$querystring .= "$key=$value&";
		}
		
		// Append paypal return addresses
		$querystring .= "return=".urlencode(stripslashes($return_url))."&";
		$querystring .= "cancel_return=".urlencode(stripslashes($cancel_url))."&";
		$querystring .= "notify_url=".urlencode($notify_url)."&";
		$querystring .= "custom=".urlencode($custom);
	
		// Append querystring with custom field
		
		// Redirect to paypal IPN
		
		header('location:https://www.sandbox.paypal.com/cgi-bin/webscr'.$querystring);
		exit();
	break;
	
	default:
		die("Type Not Found");
	break;
}

?>