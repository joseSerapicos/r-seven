<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: modules_info.master.class.php
|  PATH: development/modules_menus_info/classes
|  DESCRIPTION: Classe para manipular o menu "Modules Info"
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class modules_menus_info_master {
	
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
		$this->error = false;
	}	
	
	
	// ////////////////
	// Get methods //
	// //////////////
	
	// Retorna error //
	public function get_error() {
		return ($this->error);
	}


	// ////////////////
	// All methods //
	// //////////////

	// Retorna todos os modulos //
	public function getAllModules($var_db) {
		
		$output = array();
		
		$sql = ("SELECT
					modules_info.id
				FROM 
					modules_info
				ORDER BY modules_info.id ASC");
		$rs = $var_db->execute ( $sql );
		while($row = $var_db->get_row ( $rs )) {
			$obj_module_info = new module_info($row->id);
			$obj_module_info->load($var_db);
			$output[] = $obj_module_info;
		}
		
		return ($output);
	}
	
	// Retorna os menus de um modulo //
	public function getModuleMenus($var_db, $var_module) {
		
		$output = array();
		
		$sql = ("SELECT
					modules_menus_info.id
				FROM 
					modules_menus_info
				WHERE
					modules_menus_info.fk_modules_info = '".addslashes($var_module)."'
				ORDER BY modules_menus_info.id ASC");
		$rs = $var_db->execute ( $sql );
		while($row = $var_db->get_row ( $rs )) {
			$obj_module_menu_info = new module_menu_info($row->id);
			$obj_module_menu_info->load($var_db);
			$output[] = $obj_module_menu_info;
		}
		
		return ($output);
	}
	
	// Retorna as settings de um menu //
	public function getMenuSettings($var_db, $var_menu) {
		
		$output = array();
		
		$sql = ("SELECT
					menus_settings_info.id
				FROM 
					menus_settings_info
				WHERE
					menus_settings_info.fk_modules_menus_info = '".addslashes($var_menu)."'
				ORDER BY menus_settings_info.id ASC");
		$rs = $var_db->execute ( $sql );
		while($row = $var_db->get_row ( $rs )) {
			$obj_menu_setting_info = new menu_setting_info($row->id);
			$obj_menu_setting_info->load($var_db);
			$output[] = $obj_menu_setting_info;
		}
		
		return ($output);
	}
	
	
	// Destructor //
	public function __destruct() {
	}
}

?>