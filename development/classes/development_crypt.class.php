<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: development_crypt.class.php
|  PATH: classes
|  DESCRIPTION: Classe para encriptar/decriptar
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 19DEC2013
|  MODIFICATION DATE: 25FEV2014
|____________________________________________________________*/


class development_crypt {
	
	private $encrypt;
	private $decrypt;

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
		
	public function __construct0() {
		
		$this->iv = false;
		$this->encrypt = false;
		$this->decrypt = false;
		
		$this->error;
	}

	
	// ////////////////
	// Set methods //
	// //////////////
	
	// ////////////////
	// Get methods //
	// //////////////
	
	// Retorna encrypt //
	public function get_encrypt() {
		return ($this->encrypt);
	}
	
	// Retorna decrypt //
	public function get_decrypt() {
		return ($this->decrypt);
	}
	
	// Retorna error //
	public function get_error() {
		return ($this->error);
	}
	
	// ////////////////
	// All methods //
	// //////////////
	
	public function encrypt($key,$iv,$toEncrypt) {
		
		$this->error = false;
		
		$iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC); //Size
		if(strlen($iv) != $iv_size){ //Size Wrong 16 CH
			$this->error = "IV Size Wrong!";
			return (false);
		}
		
		$ciphertext = mcrypt_encrypt(MCRYPT_RIJNDAEL_128, $key,$toEncrypt, MCRYPT_MODE_CBC, $iv);
		
		$this->encrypt = base64_encode($ciphertext);
		
		return (true);
	}
	
	public function decrypt($key,$iv,$hashKey) {
		
		$this->error = false;
		
		$iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC); //Size
		if(strlen($iv) != $iv_size){ //Size Wrong 16 CH
			$this->error = "IV Size Wrong!";
			return (false);
		}
		
		$hashKey = base64_decode($hashKey);
		$decrypttext = mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $key, $hashKey, MCRYPT_MODE_CBC, $iv);
		
		$this->decrypt = $decrypttext;
		
		return (true);
	}
	
	
	// Destructor //
	public function __destruct() {
	}
}

?>