<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: module_menu.class.php
|  PATH: administration/modules_menus/classes
|  DESCRIPTION: Classe que representa os objectos da tabela modules_menus
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class module_menu {
	
	private $id;
	private $fk_mygest_modules_menus_info;
	private $fk_modules;
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
		$this->fk_mygest_modules_menus_info = false;
		$this->fk_modules = false;
		$this->name = false;
		$this->priority = false;
		$this->insert_time = false;
		$this->insert_user = false;
		
		$this->error = false;
	}
	
	// 1 Args //
	public function __construct1($var_id) {
		$this->id = $var_id;
		$this->fk_mygest_modules_menus_info = false;
		$this->fk_modules = false;
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
	
	public function set_fk_mygest_modules_menus_info($var) {
		$this->fk_mygest_modules_menus_info = $var;
	}
	
	public function set_fk_modules($var) {
		$this->fk_modules = $var;
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
	
	public function get_fk_mygest_modules_menus_info() {
		return ($this->fk_mygest_modules_menus_info);
	}
	
	public function get_fk_modules() {
		return ($this->fk_modules);
	}
	
	// Retorna name //
	public function get_name() {
		return ($this->name);
	}
	
	// Retorna description //
	public function get_description($var_db) {
		$sql = ("SELECT  
					modules_menus_info.description 
				FROM 
					modules_menus_info
				WHERE
					modules_menus_info.id = '".addslashes($this->fk_mygest_modules_menus_info)."'");
		$rs = $var_db->execute ( $sql );

		if ($row = $var_db->get_row ( $rs )) {
			return($row->description);
		}
		else
		{
			return (false);
		}
	}
	
	public function get_priority() {
		return($this->priority);
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
					modules_menus.fk_mygest_modules_menus_info,
					modules_menus.fk_modules,
					modules_menus.name,
					modules_menus.priority,
					modules_menus.insert_time,
					modules_menus.insert_user
				FROM 
					modules_menus 
				WHERE 
					modules_menus.id = " . addslashes ( $this->id ));
		$rs = $var_db->execute ( $sql );
		if ($row = $var_db->get_row ( $rs )) {
			$this->fk_mygest_modules_menus_info = $row->fk_mygest_modules_menus_info;
			$this->fk_modules = $row->fk_modules;
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
						modules_menus
							(modules_menus.fk_mygest_modules_menus_info,
							modules_menus.fk_modules,
							modules_menus.name,
							modules_menus.priority,
							modules_menus.insert_time,
							modules_menus.insert_user)
					VALUES
						(".(empty($this->fk_mygest_modules_menus_info)?"NULL":("'".addslashes($this->fk_mygest_modules_menus_info)."'")).",
						".(empty($this->fk_modules)?"NULL":("'".addslashes($this->fk_modules)."'")).",
						'".addslashes($this->name)."',
						'".addslashes($this->priority)."',
						CURRENT_TIMESTAMP(),
						'".addslashes($this->insert_user)."')");
		}
		else {
			// UPDATE	
			$sql = ("UPDATE
						modules_menus
					SET
						modules_menus.fk_mygest_modules_menus_info= '".(empty($this->fk_mygest_modules_menus_info)?"NULL":("'".addslashes($this->fk_mygest_modules_menus_info)."'"))."',
						modules_menus.fk_modules= '".(empty($this->fk_modules)?"NULL":("'".addslashes($this->fk_modules)."'"))."',
						modules_menus.name = '".addslashes($this->name)."',
						modules_menus.priority = '".addslashes($this->priority)."'
					WHERE
						modules_menus.id = '".addslashes($this->id)."'");
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
					modules_menus
				WHERE
					modules_menus.id = ".addslashes($this->id));
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