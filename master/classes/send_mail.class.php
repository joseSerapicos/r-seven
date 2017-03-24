<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: send_mail.class.php
|  PATH: classes
|  DESCRIPTION: Classe para enviar email
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 11DEC2013
|  MODIFICATION DATE: 11DEC2013
|____________________________________________________________*/


class send_mail {
	private $to;
	private $subject;
	private $message;

	
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
		$this->to = false;
		$this->subject = false;
		$this->message = false;
		$this->error = false;
	}
	
	// ////////////////
	// Set methods //
	// //////////////
	
	// ////////////////
	// Get methods //
	// //////////////
	
	// Retorna default_lang //
	public function get_default_lang() {
		return ($this->default_lang);
	}
	
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega a informacao a partir da base de dados //
	public function send($var_db, $sent_array) {
		$this->error = false;
		//Criar Log no futuro dos emails enviados
		/*
		$sql = ("INSERT AQUI ");
		$rs = $var_db->execute ( $sql );
		*/
		$to      = $sent_array['to'];
		$subject = $sent_array['subject'];
		$message = $sent_array['message'];
		$headers = 'From: no-reply@mygest.pt' . "\r\n" .
			'Reply-To: '.$to.'' . "\r\n" .
			'X-Mailer: PHP/' . phpversion();
		if (@mail($to, $subject, $message, $headers)){
			return (true);
		}else{
			return (false);
		}
	}
	
	
	// Destructor //
	public function __destruct() {
	}
}

?>