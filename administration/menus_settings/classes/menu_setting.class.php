<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: menu_setting.class.php
|  PATH: administration/menus_settings/classes
|  DESCRIPTION: Classe que representa os objectos da tabela menus_settings
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class menu_setting {
	
	private $id;
	private $fk_mygest_menus_settings_info;
	private $fk_modules_menus;
	private $fk_stores;
	private $fk_users;
	private $var_value;
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
		$this->fk_mygest_menus_settings_info = false;
		$this->fk_modules_menus = false;
		$this->fk_stores = false;
		$this->fk_users = false;
		$this->var_value = false;
		$this->insert_time = false;
		$this->insert_user = false;
		
		$this->error = false;
	}
	
	// 1 Args //
	public function __construct1($var_id) {
		$this->id = $var_id;
		$this->fk_mygest_menus_settings_info = false;
		$this->fk_modules_menus = false;
		$this->fk_stores = false;
		$this->fk_users = false;
		$this->var_value = false;
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
	
	public function set_fk_mygest_menus_settings_info($var) {
		$this->fk_mygest_menus_settings_info = $var;
	}
	
	public function set_fk_modules_menus($var) {
		$this->fk_modules_menus = $var;
	}
	
	public function set_fk_stores($var) {
		$this->fk_stores = $var;
	}
	
	public function set_fk_users($var) {
		$this->fk_users = $var;
	}
	
	public function set_var_value($var) {
		$this->var_value = $var;
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
	
	public function get_fk_mygest_menus_settings_info() {
		return ($this->fk_mygest_menus_settings_info);
	}
	
	public function get_fk_modules_menus() {
		return ($this->fk_modules_menus);
	}
	
	public function get_fk_stores() {
		return ($this->fk_stores);
	}
	
	public function get_fk_users() {
		return ($this->fk_users);
	}
	
	public function get_var_value() {
		return ($this->var_value);
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
					menus_settings.fk_mygest_menus_settings_info,
					menus_settings.fk_modules_menus,
					menus_settings.fk_stores,
					menus_settings.fk_users,
					menus_settings.var_value,
					menus_settings.insert_time,
					menus_settings.insert_user
				FROM 
					menus_settings 
				WHERE 
					menus_settings.id = " . addslashes ( $this->id ));
		$rs = $var_db->execute ( $sql );
		if ($row = $var_db->get_row ( $rs )) {
			$this->fk_mygest_menus_settings_info = $row->fk_mygest_menus_settings_info;
			$this->fk_modules_menus = $row->fk_modules_menus;
			$this->fk_stores = $row->fk_stores;
			$this->fk_users = $row->fk_users;
			$this->var_value = $row->var_value;
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
						menus_settings
							(menus_settings.fk_mygest_menus_settings_info,
							menus_settings.fk_modules_menus,
							menus_settings.fk_stores,
							menus_settings.fk_users,
							menus_settings.var_value,
							menus_settings.insert_time,
							menus_settings.insert_user)
					VALUES
						(".(empty($this->fk_mygest_menus_settings_info)?"NULL":("'".addslashes($this->fk_mygest_menus_settings_info)."'")).",
						".(empty($this->fk_modules_menus)?"NULL":("'".addslashes($this->fk_modules_menus)."'")).",
						".(empty($this->fk_stores)?"NULL":("'".addslashes($this->fk_stores)."'")).",
						".(empty($this->fk_users)?"NULL":("'".addslashes($this->fk_users)."'")).",
						'".addslashes($this->var_value)."',
						CURRENT_TIMESTAMP(),
						'".addslashes($this->insert_user)."')");
		}
		else {
			// UPDATE	
			$sql = ("UPDATE
						menus_settings
					SET
						menus_settings.fk_mygest_menus_settings_info = ".(empty($this->fk_mygest_menus_settings_info)?"NULL":("'".addslashes($this->fk_mygest_menus_settings_info)."'")).",
						menus_settings.fk_modules_menus = ".(empty($this->fk_modules_menus)?"NULL":("'".addslashes($this->fk_modules_menus)."'")).",
						menus_settings.fk_stores = ".(empty($this->fk_stores)?"NULL":("'".addslashes($this->fk_stores)."'")).",
						menus_settings.fk_users = ".(empty($this->fk_users)?"NULL":("'".addslashes($this->fk_users)."'")).",
						menus_settings.var_value = '".addslashes($this->var_value)."'
					WHERE
						menus_settings.id = '".addslashes($this->id)."'");
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
					menus_settings
				WHERE
					menus_settings.id = ".addslashes($this->id));
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