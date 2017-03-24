<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: system.class.php
|  PATH: classes
|  DESCRIPTION: Classe para interaccao com a tabela systems
|
|  AUTHOR: Jose A. C. Serapicos
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|  MODIFICATION DATE: 25FEV2014 Adriano Mendes
|____________________________________________________________*/


class system {
	private $id;
	private $name;
	private $db_host;
	private $db_name;
	private $db_username;
	private $db_password;
	private $iv_user;
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
		$this->name = false;
		$this->db_host = false;
		$this->db_name = false;
		$this->db_username = false;
		$this->db_password = false;
		$this->iv_user = false;
		
		$this->error = false;
	}
	
	// 1 Args //
	public function __construct1($var_id) {
		$this->id = $var_id;
		$this->name = false;
		$this->db_host = false;
		$this->db_name = false;
		$this->db_username = false;
		$this->db_password = false;
		$this->iv_user = false;
		
		$this->error = false;
	}
	
	// ////////////////
	// Set methods //
	// //////////////
	
	// Atribui id //
	public function set_id($var_id) {
		$this->id = $var_id;
	}
	
	// ////////////////
	// Get methods //
	// //////////////
	
	// Retorna id //
	public function get_id() {
		return ($this->id);
	}
	
	// Retorna db_host //
	public function get_db_host() {
		return ($this->db_host);
	}
	
	// Retorna db_name //
	public function get_db_name() {
		return ($this->db_name);
	}
	
	// Retorna db_username //
	public function get_db_username() {
		return ($this->db_username);
	}
	
	// Retorna db_password //
	public function get_db_password() {
		return ($this->db_password);
	}
		// Retorna db_password //
	public function get_iv_user() {
		return ($this->iv_user);
	}
	
	// Retorna error //
	public function get_error() {
		return ($this->error);
	}
	
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega a informacao a partir da base de dados //
	public function load($var_db) {
		$this->error = false;
		
		$sql = ("SELECT 
					systems.name, 
					systems.db_host, 
					systems.db_name, 
					systems.db_username, 
					systems.db_password,
					systems.iv_user 
				FROM
					systems 
				WHERE 
					systems.id = " . addslashes ( $this->id ) . " 
					AND systems.enabled = 1");
		$rs = $var_db->execute ( $sql );
		
		if ($row = $var_db->get_row ( $rs )) {
			$this->name 		= $row->name;
			$this->db_host 		= $row->db_host;
			$this->db_name		= $row->db_name;
			$this->db_username 	= $row->db_username;
			$this->db_password 	= $row->db_password;
			$this->iv_user 		= $row->iv_user;
			
			return (true);
		}
		
		// Error
		$this->error = $var_db->get_error();
		return (false);
	}
	
	// Destructor //
	public function __destruct() {
	}
}

?>