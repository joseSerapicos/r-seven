<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: file_system.class.php
|  PATH: development/classes/file_system
|  DESCRIPTION: Classe que representa os objectos da tabela file_system
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class file_system {
	
	private $id;
	private $fk_file_system;
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
		$this->fk_file_system = false;
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
		$this->fk_file_system = false;
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
	
	public function set_id($var) {
		$this->id = $var;
	}
	
	public function set_fk_file_system($var) {
		$this->fk_file_system = $var;
	}
	
	public function set_name($var) {
		$this->name = $var;
	}
	
	public function set_description($var) {
		$this->description = $var;
	}
	
	public function set_type($var) {
		$this->type = $var;
	}
	
	public function set_insert_user($var) {
		$this->insert_user = $var;
	}
	
	
	// ////////////////
	// Get methods //
	// //////////////
	
	// Retorna id //
	public function get_id() {
		return ($this->id);
	}
	
	// Retorna fk_file_system //
	public function get_fk_file_system() {
		return ($this->fk_file_system);
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
					file_system.fk_file_system,
					file_system.name,
					file_system.description,
					file_system.type,
					file_system.insert_time,
					file_system.insert_user
				FROM 
					file_system 
				WHERE 
					file_system.id = " . addslashes ( $this->id ));
		$rs = $var_db->execute ( $sql );
		if ($row = $var_db->get_row ( $rs )) {
			$this->fk_file_system = $row->fk_file_system;
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
					file_system.fk_file_system,
					file_system.name,
					file_system.type,
					file_system.insert_time,
					file_system.insert_user
				FROM 
					file_system 
				WHERE 
					file_system.id = " . addslashes ( $this->id ));
		$rs = $var_db->execute ( $sql );
		if ($row = $var_db->get_row ( $rs )) {
			$this->fk_file_system = $row->fk_file_system;
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
	
	// Guarda a informacao na base de dados //
	public function save($var_db) {
		$this->error = false;
		
		if(empty($this->id)) {
			// INSERT	
			$sql = ("INSERT INTO
						file_system
							(file_system.fk_file_system,
							file_system.name,
							file_system.description,
							file_system.type,
							file_system.insert_time,
							file_system.insert_user)
					VALUES
						(".(empty($this->fk_file_system)?"NULL":("'".addslashes($this->fk_file_system)."'")).",
						'".addslashes($this->name)."',
						'".addslashes($this->description)."',
						'".addslashes($this->type)."',
						CURRENT_TIMESTAMP(),
						'".addslashes($this->insert_user)."')");
		}
		else {
			// UPDATE	
			$sql = ("UPDATE
						file_system
					SET
						file_system.fk_file_system = ".(empty($this->fk_file_system)?"NULL":("'".addslashes($this->fk_file_system)."'")).",
						file_system.name = '".addslashes($this->name)."',
						file_system.description = '".addslashes($this->description)."',
						file_system.type = '".addslashes($this->type)."'
					WHERE
						file_system.id = '".addslashes($this->id)."'");
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
					file_system
				WHERE
					file_system.id = ".addslashes($this->id));
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