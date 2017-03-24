<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: payme_gen.class.php
|  PATH: classes
|  DESCRIPTION: Classe gera informaçao independente
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 09ABRIL2014
|  MODIFICATION DATE: -
|____________________________________________________________*/


class payme_gen {
	private $gen_code;
	
	private $error;
	
	// ////////////////
	// Constructor //
	// //////////////
	
	// Default //
	public function __construct() {
		$args = func_get_args ();
		$num_args = func_num_args ();
		$method = "__construct" . $num_args;
		
		if (method_exists ( $this, $method ))
			call_user_func_array ( array (
					$this,
					$method 
			), $args );
		else
			die ( "CONSTRUCT '" . $method . "' NOT DEFINED!" );
	}
	
	// 0 Args //
	public function __construct0() {
			
		$this->gen_code 	= false;
		//$this->error 	= false;
	}
	
	// ////////////////
	// Set methods //
	// //////////////
	public function set_type($var_id) {
		$this->type = $var_id;
	}
	
	
	// ////////////////
	// Get methods //
	// //////////////

	public function get_gen_code() {
		return ($this->gen_code);
	}
	
	
	// ////////////////
	// All methods //
	// //////////////

	// Carrega a informacao a partir da base de dados //
	public function gen_content($system_db,$client_db,$type,$payme_type_id) {
		$this->error = false;
		//'HTML',1;
		//Detect type name by id
		$sql = ("SELECT 
					payme_type.code,
					payme_type.type_system 
				FROM 
					payme_type 
				WHERE 
					payme_type.id = '".$payme_type_id."' 
					AND payme_type.enabled = '1'
				");
		$rs = $system_db->execute ( $sql );
		
		if ($row = $system_db->get_row ( $rs )) {
			
			
			$this->code 		= $row->code; //PAYPAL_1
			$this->type_system = $row->type_system; //DYNAMIC
			
			switch ($type){
				case "HTML":
					switch($this->type_system){
						case "IDLE":
							$this->gen_code = 'FIXED';
						break;
						case "DYNAMIC":
							switch ($this->code){
								case "PAYPAL_1":
									$this->gen_code = '<form class="paypal" action="payments.php" method="post" id="paypal_form" target="_blank">
									<input type="hidden" name="cmd" value="_xclick" /> 
									<input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_LG.gif:NonHostedGuest" />
									<input type="image" alt="PayPal - The safer, easier way to pay online!" name="submit" src="https://www.paypalobjects.com/en_US/i/btn/x-click-but6.gif" />
									</form>'; 
								break;
								case "GWALLET_1":
									require_once (dirname ( __FILE__ ) . "/../../lib/jwt-master/JWT.php");//classe + direto
									/*Gen JWT*/
									$sellerIdentifier = "05735407439750179467";
									$sellerSecret = "_aQ2qq6lHNUUKqNmhl2a3Q";
									
									$payload = array(
									  "iss" => $sellerIdentifier,
									  "aud" => "Google",
									  "typ" => "google/payments/inapp/item/v1",
									  "exp" => time() + 100600,
									  "iat" => time(),
									  "request" => array (
										"name" => "Invoice 23",
										"description" => "PayMe! Invoice: 23",
										"price" => "3",
										"currencyCode" => "EUR",
										"sellerData" => "DVP%2BRG3yhUZjrJX0fuqNc6bAxcJWNiKX5L2iWc2%2BeL9oKqN5CFIvuVhzLoq%2BUywn0i%2BeY1zZs518VZ7N%2BqvgTQ%3D%3D",
									  ),
									);
									$jwt = JWT::encode($payload, $sellerSecret);
									
									/*Gen HTML*/
									$this->gen_code = 
									'<script type="text/javascript" src="https://sandbox.google.com/checkout/inapp/lib/buy.js"></script>
									<script type="text/javascript">
									  function setup() {
										runDemoButton = document.getElementById("runDemoButton");
										runDemoButton.onclick = function() {
										  google.payments.inapp.buy({
											parameters: {},
											jwt: "'.$jwt.'",
											success: function() { location.reload(); },
											failure: function() { location.reload(); }
										  });
										  return false;
										};
      
      									}
     									 window.onload = setup;
   										</script>
										<input type="image"  src="../layout/img/gwallet_paybtn.png" value="buy" name="runDemoButton" id="runDemoButton"/>';
								break;
							
						}
						break;
					}
					
				break;
			}
			
			$this->error = false;
			
			return (true);
		}else{ //se nao existe mete eliminado
			$this->error = "ERROR GEN @ payme_gen";	
			return (false);
		}		
		// Error
		$this->error = $user_db->get_error ();
		
		return (false);
	}
	
	
	
	// Destructor //
	public function __destruct() {
	}
}

?>