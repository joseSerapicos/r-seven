<?php 
/*Paypal Aknowledge 
Author: Adriano Mendes
Date: 15/03/2014
*/
require_once (dirname(__FILE__)."/../classes/payme.master.class.php"); 

$debug = false;

$POST_DATA = $_POST;

if (isset($POST_DATA["txn_id"]) && isset($POST_DATA["txn_type"])){
	
	if($debug){
		$handle = fopen("paypal_debug.txt", "a");
		fwrite($handle, "\n");
		fwrite($handle, "---");
		fwrite($handle, "\n");
		fwrite($handle, serialize($POST_DATA));
		fclose($handle);
	}
	//POST FROM IPN ^c^
	
	$data['mc_gross']			= $POST_DATA['mc_gross'];
	$data['invoice'] 			= $POST_DATA['invoice'];
	$data['payer_id'] 			= $POST_DATA['payer_id'];
	$data['tax'] 				= $POST_DATA['tax'];
	$data['txn_id']				= $POST_DATA['txn_id'];
	$data['txn_type']			= $POST_DATA['txn_type'];
	$data['payer_status'] 		= $POST_DATA['payer_status'];
	$data['payment_type'] 		= $POST_DATA['payment_type'];
	$data['payment_status'] 	= $POST_DATA['payment_status'];
	$data['payment_date'] 		= $POST_DATA['payment_date'];
	$data['mc_currency'] 		= $POST_DATA['mc_currency'];
	$data['item_name'] 			= $POST_DATA['item_name'];
	$data['item_number'] 		= $POST_DATA['item_number'];
	$data['handling_amount'] 	= $POST_DATA['handling_amount'];
	$data['shipping'] 			= $POST_DATA['shipping'];
	//Pending
	$data['pending_reason']		= $POST_DATA['pending_reason'];
	//Complete
	$data['verify_sign']		= $POST_DATA['verify_sign'];
	$data['payment_date']		= $POST_DATA['payment_date'];
	
	//custom
	$data['custom'] 			= $POST_DATA['custom'];
	
	/*Data from Server */
	$hash_key = rawurldecode($hash_key);
	$PayMe = new payme();
	$PayMe->read_hash($data['custom']); //abrir 
		
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
		$handle = fopen("paypal_error.txt", "a");
		fwrite($handle, "\n");
		fwrite($handle, "---");
		fwrite($handle, "\n");
		fwrite($handle, serialize($POST_DATA));
		fclose($handle);
		die();
	}
	/*END*/
	
	//Detecta os valores e o currency do payme e compara
	switch ($data['payment_status']){
		case "Completed":
			
			if($total == $data['mc_gross'] && $currency_code == $data['mc_currency']){
				
				$PayMe->change_status_payme('C',$data['verify_sign']);
				
			}else{
				$PayMe->change_status_payme('PD',$data['verify_sign']." ".$data['pending_reason']);
				
			}
			
		break;
		case "Pending":
			$PayMe->change_status_payme('PD',$data['pending_reason']);

		break;
		case "Failed":
			$PayMe->change_status_payme('F','Bank Account Client Denied');
		break;
		case "Processed":
		
			$PayMe->change_status_payme('C',$data['verify_sign']);
			
		break;
		
		case "Refunded":
			$PayMe->change_status_payme('O',$data['verify_sign']);
			
			$handle = fopen("paypal_debug.txt", "a");
			fwrite($handle, "\n");
			fwrite($handle, "---");
			fwrite($handle, "\n");
			fwrite($handle, serialize($POST_DATA));
			fclose($handle);
		
		break;
		
		default:
			$PayMe->change_status_payme('PD',$data['pending_reason']);
		break;
		
	}
	
}else{
	
	print "ERR: PayPal Acknowledge";
}


?>