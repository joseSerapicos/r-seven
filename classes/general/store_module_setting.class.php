<?php

class store_module_setting {
	private $id;
	private $fk_stores_modules;
	private $var_name;
	private $var_value;
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
	
	// 2 Args //
	public function __construct2($var_module_setting, $var_db) {
		
		$this->id = $var_module_setting;
		$this->fk_stores_modules = false;
		$this->var_name = false;
		$this->var_value = false;
		$this->insert_time = false;
		$this->insert_user = false;
		$this->enabled = false;
	
		$this->error = false;

		if($var_module_setting) $this->load($var_db);
	}
	
	
	// ////////////////
	// Set methods //
	// //////////////
	
	
	// ////////////////
	// Get methods //
	// //////////////
	
	public function get_var_name() {
		return($this->var_name);
	}
	
	public function get_var_value() {
		return($this->var_value);
	}

	
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega a informacao a partir da base de dados //
	public function load($var_db) {
		$sql = ("SELECT  
					stores_modules_settings.fk_stores_modules,
					stores_modules_settings.var_name,
					stores_modules_settings.var_value,
					stores_modules_settings.insert_time,
					stores_modules_settings.insert_user,
					stores_modules_settings.enabled
				FROM 
					stores_modules_settings
				WHERE
					stores_modules_settings.id = '".addslashes($this->id)."'
					stores_modules_settings.enabled = 1");
		$rs = $var_db->execute($sql);
		
		if($row = $var_db->get_row($rs))
		{
			$this->fk_stores_modules = $row->fk_stores_modules;
			$this->var_name = $row->var_name;
			$this->var_value = $row->var_value;
			$this->insert_time = $row->insert_time;
			$this->insert_user = $row->insert_user;
			$this->enabled = $row->enabled;
			
			return (true);
		}
		
		return(false);
	}
	
	
	// Destructor //
	public function __destruct() {
	}
}
?>