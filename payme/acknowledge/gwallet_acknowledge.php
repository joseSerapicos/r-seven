<?php 
/*Google Wallet Aknowledge 
Author: Adriano Mendes
Date: 15/03/2014
*/
$debug = false;

$POST_DATA = $_POST;

require_once (dirname ( __FILE__ ) . "/../../lib/jwt-master/JWT.php");//classe + direto
/*https://developers.google.com/wallet/digital/docs/tutorial*/

require_once (dirname(__FILE__)."/../classes/payme.master.class.php"); 

$jwt_hash = $POST_DATA['jwt'];

if(!empty($jwt_hash)){
	$sellerSecret = "_aQ2qq6lHNUUKqNmhl2a3Q";
	
	$decoded = JWT::decode($jwt_hash, $sellerSecret);
	
	if($debug){
		$handle = fopen("gwallet_debug.txt", "a");
		fwrite($handle, "\n Hash \n");
		fwrite($handle, $jwt_hash);
		fwrite($handle, "\n decoded \n");
		//fwrite($handle, $sellerSecret);
		//fwrite($handle, "\n");
		fwrite($handle, serialize($decoded));
		fclose($handle);
	}
	
	if($decoded->iss == "Google"){ //If google replied

		$price = $decoded->request->price;
		$currencyCode = $decoded->request->currencyCode;
		$hash_key = $decoded->request->sellerData;
		
		$orderId = $decoded->response->orderId;
		
		$aud = $decoded->aud;
		$typ = $decoded->typ; // data : google/payments/inapp/item/v1/postback/buy
		
		
		/*Data from Server */
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
			
		}else{
			die();
		}

		if (($price == $total) && ($currencyCode == $currency_code) )
			if($status == "O"){ //payme open
				$PayMe->change_status_payme('C',$orderId);
				print $decoded->response->orderId;
			}
		}else{
			if($status == "O"){ //payme open
				$PayMe->change_status_payme('PD',$orderId);
				print $decoded->response->orderId;
			}
		}
	
}else{
	print "ERR: GWallet Acknowledge";
}


?>