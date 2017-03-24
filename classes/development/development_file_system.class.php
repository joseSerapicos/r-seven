<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: development_file_system.class.php
|  PATH: classes
|  DESCRIPTION: Classe para interaccao com a tabela development_file_system
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class development_file_system {
	
	private $id;
	private $fk_development_file_system;
	private $name;
	private $description;
	private $type;
	private $insert_time;
	private $insert_user;
	
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
		$this->fk_development_file_system = false;
		$this->name = false;
		$this->description = false;
		$this->type = false;
		$this->insert_time = false;
		$this->insert_user = false;
		
		$this->error = false;
	}
	
	// 1 Args //
	public function __construct1($var_id) {
		$this->id = $var_id;
		$this->fk_development_file_system = false;
		$this->name = false;
		$this->description = false;
		$this->type = false;
		$this->insert_time = false;
		$this->insert_user = false;
		
		$this->error;
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
	
	// Retorna fk_development_file_system //
	public function get_fk_development_file_system() {
		return ($this->fk_development_file_system);
	}
	
	// Retorna name //
	public function get_name() {
		return ($this->name);
	}
	
	// Retorna description //
	public function get_description() {
		return ($this->description);
	}
	
	// Retorna type //
	public function get_type() {
		return ($this->type);
	}
	
	// Retorna insert_user //
	public function get_insert_user() {
		return ($this->insert_user);
	}
	
	// Retorna insert_time //
	public function get_insert_time() {
		return ($this->insert_time);
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
					development_file_system.fk_development_file_system,
					development_file_system.name,
					development_file_system.description,
					development_file_system.type,
					development_file_system.insert_time,
					development_file_system.insert_user
				FROM 
					development_file_system 
				WHERE 
					development_file_system.id = " . addslashes ( $this->id ));
		$rs = $var_db->execute ( $sql );
		if ($row = $var_db->get_row ( $rs )) {
			$this->fk_development_file_system = $row->fk_development_file_system;
			$this->name = $row->name;
			$this->description = $row->description;
			$this->type = $row->type;
			$this->insert_time = $row->insert_time;
			$this->insert_user = $row->insert_user;
			
			return (true);
		}
		
		// Error
		$this->error = $var_db->get_error ();
		return (false);
	}
	
	// Carrega a informacao a partir da base de dados sem a description //
	public function load_without_description($var_db) {
		$this->error = false;
		
		$sql = ("SELECT  
					development_file_system.fk_development_file_system,
					development_file_system.name,
					development_file_system.type,
					development_file_system.insert_time,
					development_file_system.insert_user
				FROM 
					development_file_system 
				WHERE 
					development_file_system.id = " . addslashes ( $this->id ));
		$rs = $var_db->execute ( $sql );
		if ($row = $var_db->get_row ( $rs )) {
			$this->fk_development_file_system = $row->fk_development_file_system;
			$this->name = $row->name;
			$this->description = false;
			$this->type = $row->type;
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