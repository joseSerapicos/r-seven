<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: user.class.php
|  PATH: classes
|  DESCRIPTION: Classe para interaccao com a tabela users
|
|  AUTHOR: Jose A. C. Serapicos
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class user {
	private $id;
	private $username;
	private $password;
	private $fk_mygest_languages;
	private $name;
	private $email;
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
		$this->username = false;
		$this->password = false;
		$this->fk_mygest_languages = false;
		$this->name = false;
		$this->email = false;
		
		$this->error = false;
	}
	
	// 1 Args //
	public function __construct1($var_id) {
		$this->id = $var_id;
		$this->username = false;
		$this->password = false;
		$this->fk_mygest_languages = false;
		$this->name = false;
		$this->email = false;
		
		$this->error = false;
	}
	
	// ////////////////
	// Set methods //
	// //////////////
	
	// Atribui nome //
	public function set_name($var_name) {
		$this->name = $var_name;
	}
	
	// Atribui email //
	public function set_email($var_email) {
		$this->email = $var_email;
	}
	
	// ////////////////
	// Get methods //
	// //////////////
	
	// Retorna id //
	public function get_id() {
		return ($this->id);
	}
	
	// Retorna username //
	public function get_username() {
		return ($this->username);
	}
	
	// Retorna lang //
	public function get_fk_mygest_languages() {
		return ($this->fk_mygest_languages);
	}
	
	// Retorna name //
	public function get_name() {
		return ($this->name);
	}
	
	// Retorna email //
	public function get_email() {
		return ($this->email);
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
					users.username, 
					users.fk_mygest_languages, 
					users.name, 
					users.email 
				FROM 
					users 
				WHERE 
					users.id = " . addslashes ( $this->id ) . " 
					AND users.enabled = 1");
		$rs = $var_db->execute ( $sql );
		if ($row = $var_db->get_row ( $rs )) {
			$this->username = $row->username;
			$this->fk_mygest_languages = $row->fk_mygest_languages;
			$this->name = $row->name;
			$this->email = $row->email;
			
			return (true);
		}
		
		// Error
		$this->error = $var_db->get_error ();
		return (false);
	}
	
	// Carrega a informacao a partir da base de dados de acordo com informacao de login //
	public function load_by_login($var_username, $var_password, $var_db) {
		$this->error = false;
		
		$sql = ("SELECT
					users.id,
					users.fk_mygest_languages,
					users.name, 
					users.email 
				FROM 
					users 
				WHERE 
					users.username = '" . addslashes ( $var_username ) . "'
					AND users.password = '" . addslashes ( md5 ( $var_password ) ) . "' 
					AND users.enabled = 1");
		$rs = $var_db->execute ( $sql );
		if ($row = $var_db->get_row ( $rs )) {
			$this->id = $row->id;
			$this->username = $var_username;
			$this->fk_mygest_languages = $row->fk_mygest_languages;
			$this->name = $row->name;
			$this->email = $row->email;
			
			return (true);
		}
		
		// Error
		$this->error = $var_db->get_error ();
		return (false);
	}

	// Carrega a informacao a partir da base de dados de acordo com informacao de id e username - Reset Password //
	public function load_by_user($var_db, $var_user) {
		$this->error = false;
		
		$sql = ("SELECT
					users.id,
					users.username, 
					users.email,
					users.fk_mygest_languages
				FROM 
					users 
				WHERE
					users.username = '" . addslashes ( $var_user  ) . "' 
					AND users.enabled = 1");
		$rs = $var_db->execute ( $sql );
		if ($row = $var_db->get_row ( $rs )) {
			$this->id = $row->id;
			$this->username = $row->username;
			$this->fk_mygest_languages = $row->fk_mygest_languages;
			$this->email = $row->email;
			
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