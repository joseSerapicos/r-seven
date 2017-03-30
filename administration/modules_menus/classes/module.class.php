<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: module_info.class.php
|  PATH: administration/modules_menus/classes
|  DESCRIPTION: Classe que representa os objectos da tabela modules
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class module {
	
	private $id;
	private $fk_mygest_modules_info;
	private $name;
	private $priority;
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
		$this->fk_mygest_modules_info = false;
		$this->name = false;
		$this->priority = false;
		$this->insert_time = false;
		$this->insert_user = false;
		
		$this->error = false;
	}
	
	// 1 Args //
	public function __construct1($var_id) {
		$this->id = $var_id;
		$this->fk_mygest_modules_info = false;
		$this->name = false;
		$this->priority = false;
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
	
	public function set_fk_mygest_modules_info($var) {
		$this->fk_mygest_modules_info = $var;
	}
	
	public function set_name($var) {
		$this->name = $var;
	}
	
	public function set_priority($var) {
		$this->priority = $var;
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
	
	// Retorna fk_development_file_system //
	public function get_fk_mygest_modules_info() {
		return ($this->fk_mygest_modules_info);
	}
	
	// Retorna name //
	public function get_name() {
		return ($this->name);
	}
	
	// Retorna description //
	public function get_description($var_db) {
		$sql = ("SELECT  
					modules_info.description 
				FROM 
					modules_info
				WHERE
					modules_info.id = '".addslashes($this->fk_mygest_modules_info)."'");
		$rs = $var_db->execute ( $sql );

		if ($row = $var_db->get_row ( $rs )) {
			return($row->description);
		}
		else
		{
			return (false);
		}
	}
	
	// Retorna icon //
	public function get_icon($var_db) {
		$sql = ("SELECT  
					icons.name 
				FROM 
					icons
				INNER JOIN modules_info
					ON modules_info.fk_icons = icons.id
				WHERE
					modules_info.id = '".addslashes($this->fk_mygest_modules_info)."'");
		$rs = $var_db->execute ( $sql );

		if ($row = $var_db->get_row ( $rs )) {
			return($row->name);
		}
		else
		{
			return (false);
		}
	}
	
	// Retorna has_menus //
	public function get_has_menus($var_db) {
		$sql = ("SELECT  
					modules_info.has_menus 
				FROM 
					modules_info
				WHERE
					modules_info.id = '".addslashes($this->fk_mygest_modules_info)."'");
		$rs = $var_db->execute($sql);

		if ($row = $var_db->get_row($rs)) {
			if($row->has_menus > 0) return(true);
		}
		
		return (false);
	}
	
	public function get_priority() {
		return ($this->priority);
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
					modules.fk_mygest_modules_info,
					modules.name,
					modules.priority,
					modules.insert_time,
					modules.insert_user
				FROM 
					modules 
				WHERE 
					modules.id = " . addslashes ( $this->id ));
		$rs = $var_db->execute ( $sql );
		if ($row = $var_db->get_row ( $rs )) {
			$this->fk_mygest_modules_info = $row->fk_mygest_modules_info;
			$this->name = $row->name;
			$this->priority = $row->priority;
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
						modules
							(modules.fk_mygest_modules_info,
							modules.name,
							modules.priority,
							modules.insert_time,
							modules.insert_user)
					VALUES
						(".(empty($this->fk_mygest_modules_info)?"NULL":("'".addslashes($this->fk_mygest_modules_info)."'")).",
						'".addslashes($this->name)."',
						'".addslashes($this->priority)."',
						CURRENT_TIMESTAMP(),
						'".addslashes($this->insert_user)."')");
		}
		else {
			// UPDATE	
			$sql = ("UPDATE
						modules
					SET
						modules.name = '".addslashes($this->name)."',
						modules.priority = '".addslashes($this->priority)."'
					WHERE
						modules.id = '".addslashes($this->id)."'");
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
					modules
				WHERE
					modules.id = ".addslashes($this->id));
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