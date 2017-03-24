<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: users_recovery_password.class.php
|  PATH: classes
|  DESCRIPTION: Classe para interaccao com a tabela recovery password
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 19DEC2013
|  MODIFICATION DATE: 16DEC2013
|____________________________________________________________*/


class users_recovery_password {
	private $id;
	private $fk_users;
	private $hash_var;
	private $ip_address;
	private $insert_time;
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
		$this->id = false;
		$this->fk_users = false;
		$this->hash_var = false;
		$this->ip_address = false;
		$this->insert_time = false;

		$this->error = false;
	}
	
	// ////////////////
	// Set methods //
	// //////////////
	
	// ////////////////
	// Get methods //
	// //////////////
	
	// Retorna hash //
	public function get_hash() {
		return ($this->hash);
	}
	
	// ////////////////
	// All methods //
	// //////////////
	
	// Insere na base de dados //
	private function insert($var_db,$fk_users,$hash_var,$var_ip) {
		$this->error = false;
		
		$sql = ("INSERT INTO
					users_recovery_password
					(fk_users,hash_var,ip_address,insert_time)
					VALUES
					('".addslashes($fk_users)."','".addslashes($hash_var)."','".addslashes($var_ip)."',CURRENT_TIMESTAMP())
					");
		$rs = $var_db->execute ( $sql );
		
		if(!$var_db->get_error()){
			return (true);
		}
		
		// Error
		$this->error = $var_db->get_error ();
		return (false);
	}
	
	// Carrega a informacao a partir da hash//
	public function request_whash($var_db,$hash_var) {
		$this->error = false;
		$sql = ("SELECT 
					users_recovery_password.id, 		
					users_recovery_password.fk_users, 
					users_recovery_password.hash_var,
					users_recovery_password.ip_address, 
					users_recovery_password.insert_time
				FROM 
					users_recovery_password 
				WHERE 
					users_recovery_password.hash_var = '".addslashes($hash)."'
					 ");
		$rs = $var_db->execute ( $sql );
		if ($row = $var_db->get_row ( $rs )) {
			
			$this->id 			= $row->id;
			$this->fk_users 	= $row->fk_users;
			$this->hash_var 	= $row->hash_var;
			$this->ip_address 	= $row->ip_address;
			$this->insert_time 	= $row->insert_time;
			
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