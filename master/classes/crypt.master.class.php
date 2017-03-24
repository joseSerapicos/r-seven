<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: crypt.master.class.php
|  PATH: classes
|  DESCRIPTION: faz handled da classe crypt
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 22MAR014
|  MODIFICATION DATE: -
|____________________________________________________________*/


class crypt {
	/*
	private $id;
	private $ip_range_begin;
	private $ip_range_end;
	private $iso_code;
	private $default_lang;
	private $insert_time;
	private $insert_user;*/
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
	public function decrypt($key_crypt){
	
	}	
	public function decrypt_hash(){
	
	}
	// Carrega a informacao a partir da base de dados //
	public function load_from_ip($var_db,$var_ip) {
		$this->error = false;
		
		$sql = ("SELECT 
					countries.id, 		
					countries.ip_range_begin, 
					countries.ip_range_end, 
					countries.iso_code, 
					countries.default_lang,
					countries.insert_time,
					countries.insert_user
				FROM 
					countries 
				WHERE 
					INET_ATON('" . addslashes ($var_ip) . "') 
					BETWEEN INET_ATON(`ip_range_begin`) AND INET_ATON(`ip_range_end`) ");
		$rs = $var_db->execute ( $sql );
		if ($row = $var_db->get_row ( $rs )) {
			$this->id = $row->id;
			$this->ip_range_begin = $row->ip_range_begin;
			$this->ip_range_end = $row->ip_range_end;
			$this->iso_code = $row->iso_code;
			$this->default_lang = $row->default_lang;
			$this->insert_time = $row->insert_time;
			$this->insert_user = $row->insert_user;
			
			return (true);
		}
		
		// Error
		$this->error = $var_db->get_error ();
		return (false);
	}
	
	
	// Destructor //
	public function __destruct() {
	}
}

?>