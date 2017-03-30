<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: user.class.php
|  PATH: administration/users/classes
|  DESCRIPTION: Classe para interaccao com a tabela users
|
|  AUTHOR: Jose A. C. Serapicos
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class user {
	private $id;
	private $fk_mygest_languages;
	private $username;
	private $password;
	private $name;
	private $email;
	private $insert_time;
	private $insert_user;
	private $enabled;
	
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
		$this->fk_mygest_languages = false;
		$this->username = false;
		$this->password = false;
		$this->name = false;
		$this->email = false;
		$this->insert_time = false;
		$this->insert_user = false;
		$this->enabled = false;
		
		$this->error = false;
	}
	
	// 1 Args //
	public function __construct1($var_id) {
		$this->id = $var_id;
		$this->fk_mygest_languages = false;
		$this->username = false;
		$this->password = false;
		$this->name = false;
		$this->email = false;
		$this->insert_time = false;
		$this->insert_user = false;
		$this->enabled = false;
		
		$this->error = false;
	}
	
	// ////////////////
	// Set methods //
	// //////////////
	
	public function set_id($var) {
		$this->id = $var;
	}
	
	public function set_fk_mygest_languages($var) {
		$this->fk_mygest_languages = $var;
	}
	
	public function set_username($var) {
		$this->username = $var;
	}
	
	public function set_password($var) {
		$this->password = $var;
	}
	
	public function set_name($var) {
		$this->name = $var;
	}
	
	public function set_email($var) {
		$this->email = $var;
	}
	
	public function set_insert_user($var) {
		$this->insert_user = $var;
	}
	
	public function set_enabled($var) {
		$this->enabled = $var;
	}
	
	
	// ////////////////
	// Get methods //
	// //////////////
	
	// Retorna id //
	public function get_id() {
		return ($this->id);
	}
	
	// Retorna lang //
	public function get_fk_mygest_languages() {
		return ($this->fk_mygest_languages);
	}
	
	// Retorna id da language do user //
	private function get_mygest_language_id($var_db) {
		
		$mygest_language_id = $this->fk_mygest_languages;
		
		$sql = ("SELECT  
					languages.fk_languages
				FROM
					languages
				WHERE
					languages.id = '".addslashes($this->fk_mygest_languages)."'");
		$rs = $var_db->execute ( $sql );

		if ($row = $var_db->get_row($rs)) {
			$fk_languages = $row->fk_languages;
			
			if(!empty($fk_languages)) {
				$mygest_language_id = $fk_languages;
			}
			
			return($mygest_language_id);
		}
		else
		{
			return (false);
		}
	}
	
	// Retorna nome da lang //
	public function get_language_name($var_db) {
		
		$language_id = $this->get_mygest_language_id($var_db);
		
		$sql = ("SELECT  
					languages.name
				FROM 
					languages
				WHERE
					languages.id = '".addslashes($language_id)."'");
		$rs = $var_db->execute($sql);

		if($row = $var_db->get_row($rs)) {
			
			return($row->name);
		}
		else
		{
			return (false);
		}
	}
	
	// Retorna description da lang //
	public function get_language_description($var_db) {
		
		$language_id = $this->get_mygest_language_id($var_db);
		
		$sql = ("SELECT  
					languages.description
				FROM 
					languages
				WHERE
					languages.id = '".addslashes($language_id)."'");
		$rs = $var_db->execute($sql);

		if($row = $var_db->get_row($rs)) {		
			return($row->description);
		}
		else
		{
			return (false);
		}
	}
	
	// Retorna username //
	public function get_username() {
		return ($this->username);
	}
	
	public function get_password() {
		return ($this->password);
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
	
	public function get_insert_time() {
		return($this->insert_time);
	}
	
	public function get_insert_user() {
		return($this->insert_user);
	}
	
	public function get_enabled() {
		return($this->enabled);
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
					users.email,
					users.insert_time,
					users.insert_user,
					users.enabled
				FROM
					users 
				WHERE 
					users.id = ".addslashes($this->id));
		$rs = $var_db->execute ( $sql );
		if ($row = $var_db->get_row ( $rs )) {
			$this->username = $row->username;
			$this->fk_mygest_languages = $row->fk_mygest_languages;
			$this->name = $row->name;
			$this->email = $row->email;
			$this->insert_time = $row->insert_time;
			$this->insert_user = $row->insert_user;
			$this->enabled = $row->enabled;
			
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
					users.email,
					users.insert_time,
					users.insert_user,
					users.enabled
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
			$this->insert_time = $row->insert_time;
			$this->insert_user = $row->insert_user;
			$this->enabled = $row->enabled;
			
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
	
	// Guarda a informacao na base de dados //
	public function save($var_db) {
		$this->error = false;
		
		if(empty($this->id)) {
			// INSERT	
			$sql = ("INSERT INTO
						users
							(users.username,
							users.password, 
							users.fk_mygest_languages, 
							users.name, 
							users.email,
							users.insert_time,
							users.insert_user,
							users.enabled)
					VALUES
						('".addslashes($this->username)."',
						'".addslashes(md5($this->password))."',
						".(empty($this->fk_mygest_languages)?"NULL":("'".addslashes($this->fk_mygest_languages)."'")).",
						'".addslashes($this->name)."',
						'".addslashes($this->email)."',
						CURRENT_TIMESTAMP(),
						'".addslashes($this->insert_user)."',
						'".addslashes($this->enabled)."')");
		}
		else {
			// UPDATE	
			$sql = ("UPDATE
						users
					SET 
						users.username = '".addslashes($this->username)."',".
						(empty($this->password)?(""):("users.password = '".addslashes(md5($this->password))."',"))."
						users.fk_mygest_languages = ".(empty($this->fk_mygest_languages)?"NULL":("'".addslashes($this->fk_mygest_languages)."'")).",
						users.name = '".addslashes($this->name)."',
						users.email = '".addslashes($this->email)."',
						users.enabled = '".addslashes($this->enabled)."'
					WHERE
						users.id = '".addslashes($this->id)."'");
		}
		$rs = $var_db->execute($sql);
		
		// Error
		$this->error = $var_db->get_error();
		if($this->error) return(false);
		
		return (true);
	}
	
	// Elimina registo da base de dados //
	public function delete($var_db) {
		$this->error = false;
	
		$sql = ("DELETE FROM
					users
				WHERE
					users.id = ".addslashes($this->id));
		$rs = $var_db->execute($sql);
	
		// Error
		$this->error = $var_db->get_error();
		if($this->error) return(false);
		
		return (true);
	}
	
	// Destructor //
	public function __destruct() {
	}
}

?>