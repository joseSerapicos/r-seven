<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: menu_setting_info.class.php
|  PATH: development/modules_info/classes
|  DESCRIPTION: Classe que representa os objectos da tabela menus_settings_info
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class menu_setting_info {
	
	private $id;
	private $fk_modules_menus_info;
	private $var_name;
	private $var_type;
	private $var_options;
	private $var_default_value;
	private $description;
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
		$this->fk_modules_menus_info = false;
		$this->var_name = false;
		$this->var_type = false;
		$this->var_options = false;
		$this->var_default_value = false;
		$this->description = false;
		$this->insert_time = false;
		$this->insert_user = false;
		
		$this->error = false;
	}
	
	// 1 Args //
	public function __construct1($var_id) {
		$this->id = $var_id;
		$this->fk_modules_menus_info = false;
		$this->var_name = false;
		$this->var_type = false;
		$this->var_options = false;
		$this->var_default_value = false;
		$this->description = false;
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
	
	public function set_fk_modules_menus_info($var) {
		$this->fk_modules_menus_info = $var;
	}
	
	public function set_var_name($var) {
		$this->var_name = $var;
	}
	
	public function set_var_type($var) {
		$this->var_type = $var;
	}
	
	public function set_var_options($var) {
		$this->var_options = $var;
	}
	
	public function set_var_default_value($var) {
		$this->var_default_value = $var;
	}
	
	public function set_description($var) {
		$this->description = $var;
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
	
	public function get_fk_modules_menus_info() {
		return ($this->fk_modules_menus_info);
	}
	
	public function get_var_name() {
		return ($this->var_name);
	}
	
	public function get_var_type() {
		return ($this->var_type);
	}
	
	public function get_var_options() {
		return ($this->var_options);
	}
	
	public function get_var_default_value() {
		return ($this->var_default_value);
	}
	
	public function get_description() {
		return ($this->description);
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
					menus_settings_info.fk_modules_menus_info,
					menus_settings_info.var_name,
					menus_settings_info.var_type,
					menus_settings_info.var_options,
					menus_settings_info.var_default_value,
					menus_settings_info.description,
					menus_settings_info.insert_time,
					menus_settings_info.insert_user
				FROM 
					menus_settings_info 
				WHERE 
					menus_settings_info.id = " . addslashes ( $this->id ));
		$rs = $var_db->execute ( $sql );
		if ($row = $var_db->get_row ( $rs )) {
			$this->fk_modules_menus_info = $row->fk_modules_menus_info;
			$this->var_name = $row->var_name;
			$this->var_type = $row->var_type;
			$this->var_options = $row->var_options;
			$this->var_default_value = $row->var_default_value;
			$this->description = $row->description;
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
						menus_settings_info
							(menus_settings_info.fk_modules_menus_info,
							menus_settings_info.var_name,
							menus_settings_info.var_type,
							menus_settings_info.var_options,
							menus_settings_info.var_default_value,
							menus_settings_info.description,
							menus_settings_info.insert_time,
							menus_settings_info.insert_user)
					VALUES
						(".(empty($this->fk_modules_menus_info)?"NULL":("'".addslashes($this->fk_modules_menus_info)."'")).",
						'".addslashes($this->var_name)."',
						'".addslashes($this->var_type)."',
						'".addslashes($this->var_options)."',
						'".addslashes($this->var_default_value)."',
						'".addslashes($this->description)."',
						CURRENT_TIMESTAMP(),
						'".addslashes($this->insert_user)."')");
		}
		else {
			// UPDATE	
			$sql = ("UPDATE
						menus_settings_info
					SET
						menus_settings_info.fk_modules_menus_info = ".(empty($this->fk_modules_menus_info)?"NULL":("'".addslashes($this->fk_modules_menus_info)."'")).",
						menus_settings_info.var_name = '".addslashes($this->var_name)."',
						menus_settings_info.var_type = '".addslashes($this->var_type)."',
						menus_settings_info.var_options = '".addslashes($this->var_options)."',
						menus_settings_info.var_default_value = '".addslashes($this->var_default_value)."',
						menus_settings_info.description = '".addslashes($this->description)."'
					WHERE
						menus_settings_info.id = '".addslashes($this->id)."'");
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
					menus_settings_info
				WHERE
					menus_settings_info.id = ".addslashes($this->id));
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