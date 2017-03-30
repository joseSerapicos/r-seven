<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: store_module_menu.class.php
|  PATH: classes
|  DESCRIPTION: Classe para interaccao com a tabela stores_modules_menus
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class store_module_menu {
	
	private $id;
	private $fk_stores_modules;
	private $fk_mygest_modules_menus_info;
	private $name;
	private $priority;
	private $insert_time;
	private $insert_user;
	private $enabled;
	
	private $filepath_top; // mygest modules_menus_info
	private $filepath_content; // mygest modules_menus_info
	private $filepath_bottom; // mygest modules_menus_info
	
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
		$this->fk_stores_modules = false;
		$this->name = false;
		$this->priority = false;
		$this->insert_time = false;
		$this->insert_user = false;
		$this->enabled = false;
		
		$this->filepath_top = false;
		$this->filepath_content = false;
		$this->filepath_bottom = false;
		
		$this->error = false;
	}
	
	// 1 Args //
	public function __construct1($var_id) {
		$this->id = $var_id;
		$this->fk_mygest_modules_menus_info = false;
		$this->fk_stores_modules = false;
		$this->name = false;
		$this->priority = false;
		$this->insert_time = false;
		$this->insert_user = false;
		$this->enabled = false;
		
		$this->filepath_top = false;
		$this->filepath_content = false;
		$this->filepath_bottom = false;
		
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
	
	// Retorna fk_stores_modules //
	public function get_fk_stores_modules() {
		return ($this->fk_stores_modules);
	}
	
	// Retorna name //
	public function get_name() {
		return ($this->name);
	}
	
	// Retorna priority //
	public function get_priority() {
		return ($this->priority);
	}
	
	// Retorna insert_time //
	public function get_insert_time() {
		return ($this->insert_time);
	}
	
	// Retorna insert_user //
	public function get_insert_user() {
		return ($this->insert_user);
	}
	
	// Retorna enabled //
	public function get_enabled() {
		return ($this->enabled);
	}
	
	public function get_filepath_top() {
		return ($this->filepath_top);
	}
	
	public function get_filepath_content() {
		return ($this->filepath_content);
	}
	
	public function get_filepath_bottom() {
		return ($this->filepath_bottom);
	}
	
	// Retorna error //
	public function get_error() {
		return ($this->error);
	}
	
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega a informacao a partir da base de dados //
	public function load($var_main_db, $var_system_db) {
		$this->error = false;
		
		$sql = ("SELECT
					stores_modules_menus.fk_mygest_modules_menus_info,
					stores_modules_menus.name,
					stores_modules_menus.priority 
				FROM 
					stores_modules_menus 
				WHERE 
					stores_modules_menus.id = " . addslashes ( $this->id ) . " 
					AND stores_modules_menus.enabled = 1");
		$rs = $var_system_db->execute ( $sql );
		if ($row = $var_system_db->get_row ( $rs )) {
			$this->fk_mygest_modules_menus_info = $row->fk_mygest_modules_menus_info;
			$this->name = $row->name;
			$this->priotity = $row->priority;
			
			
			/* mygest modules_menus_info */
			$sql = ("SELECT  
						modules_menus_info.filepath_top,
						modules_menus_info.filepath_content,
						modules_menus_info.filepath_bottom
					FROM 
						modules_menus_info 
					WHERE 
						modules_menus_info.id = ".addslashes($this->fk_mygest_modules_menus_info));
			$rs = $var_main_db->execute($sql);
			if($row = $var_main_db->get_row($rs)) {
				$this->filepath_top = $row->filepath_top;
				$this->filepath_content = $row->filepath_content;
				$this->filepath_bottom = $row->filepath_bottom;
			}
			
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