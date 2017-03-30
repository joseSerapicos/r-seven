<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: modules_info.master.class.php
|  PATH: administration/modules_menus/classes
|  DESCRIPTION: Classe para manipular o menu "Modules Menus"
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class modules_menus_master {
	
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
					modules.id
				FROM 
					modules
				ORDER BY modules.priority ASC");
		$rs = $var_db->execute ( $sql );
		while($row = $var_db->get_row ( $rs )) {
			$obj_module = new module($row->id);
			$obj_module->load($var_db);
			$output[] = $obj_module;
		}
		
		return ($output);
	}
	
	// Retorna os menus de um modulo //
	public function getModuleMenus($var_db, $var_module) {
		
		$output = array();
		
		$sql = ("SELECT
					modules_menus.id
				FROM 
					modules_menus
				WHERE
					modules_menus.fk_modules = '".addslashes($var_module)."'
				ORDER BY modules_menus.priority ASC");
		$rs = $var_db->execute ( $sql );
		while($row = $var_db->get_row( $rs )) {
			$obj_module_menu = new module_menu($row->id);
			$obj_module_menu->load($var_db);
			$output[] = $obj_module_menu;
		}
		
		return ($output);
	}
	
	// Retorna as settings de um menu //
	public function getMenuSettings($var_db, $var_menu) {
		
		$output = array();
		
		$sql = ("SELECT
					menus_settings.id
				FROM 
					menus_settings
				WHERE
					menus_settings.fk_modules_menus = '".addslashes($var_menu)."'
				ORDER BY menus_settings.fk_mygest_menus_settings_info ASC, menus_settings.fk_stores ASC, menus_settings.fk_users ASC");
		$rs = $var_db->execute ( $sql );
		while($row = $var_db->get_row($rs)) {
			$obj_menu_setting = new menu_setting($row->id);
			$obj_menu_setting->load($var_db);
			$output[] = $obj_menu_setting;
		}
		
		return($output);
	}
	
	
	// Destructor //
	public function __destruct() {
	}
}

?>