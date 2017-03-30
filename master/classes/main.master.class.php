<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: main.master.class.php
|  PATH: classes
|  DESCRIPTION: Classe para manipulacao geral da aplicacao
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class main_master {
	
	private $system;
	private $user;
	private $store;
	private $module;
	private $menu;
	
	private $systemObj;
	private $userObj;
	private $storeObj;
	private $moduleObj;
	private $menuObj;
	
	private $mainDb;
	private $systemDb;
	
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
		$this->system = false;
		$this->user = false;
		$this->store = false;
		$this->module = false;
		$this->menu = false;
		
		$this->systemObj = false;
		$this->userObj = false;
		$this->storeObj = false;
		$this->moduleObj = false;
		$this->menuObj = false;
		
		$this->mainDb = false;
		$this->systemDb = false;
	}
	
	
	// ////////////////
	// Set methods //
	// //////////////
	
	public function set_system($var) {
		$this->system = $var;
	}
	
	public function set_user($var) {
		$this->user = $var;
	}
	
	public function set_store($var) {
		$this->store = $var;
	}
	
	public function set_module($var) {
		$this->module = $var;
	}
	
	public function set_menu($var) {
		$this->menu = $var;
	}
	
	public function set_systemObj($var) {
		$this->systemObj = $var;
	}
	
	public function set_userObj($var) {
		$this->userObj = $var;
	}
	
	public function set_storeObj($var) {
		$this->storeObj = $var;
	}
	
	public function set_moduleObj($var) {
		$this->moduleObj = $var;
	}
	
	public function set_menuObj($var) {
		$this->menuObj = $var;
	}
	
	public function set_mainDb($var) {
		$this->mainDb = $var;
	}
	
	public function set_systemDb($var) {
		$this->systemDb = $var;
	}
	
	
	// ////////////////
	// Get methods //
	// //////////////
	
	public function get_system() {
		return($this->system);
	}
	
	public function get_user() {
		return($this->user);
	}
	
	public function get_store() {
		return($this->store);
	}
	
	public function get_module() {
		return($this->module);
	}
	
	public function get_menu() {
		return($this->menu);
	}
	
	public function get_systemObj() {
		return($this->systemObj);
	}
	
	public function get_userObj() {
		return($this->userObj);
	}
	
	public function get_storeObj() {
		return($this->storeObj);
	}
	
	public function get_moduleObj() {
		return($this->moduleObj);
	}
	
	public function get_menuObj() {
		return($this->menuObj);
	}
	
	public function get_mainDb() {
		return($this->mainDb);
	}
	
	public function get_systemDb() {
		return($this->systemDb);
	}
	
	// Retorna store default //
	public function get_defaultStore() {

		$stores = $this->get_stores();
		
		if(count($stores)==1)
			return($stores[0]->get_id());
		else
			return(0);
	}
	
	// Retorna stores //
	public function get_stores() {
		
		$obj = new users_stores_menus_permissions_master();
		$stores = $obj->getUserStores($this->systemDb, $this->user);
		
		return($stores);
	}
	
	// Retorna modules //
	public function get_modules($var_store=false) {
		$store = ($var_store?$var_store:$this->store);
		$obj = new users_stores_menus_permissions_master();
		$modules = $obj->getUserStoreModules($this->systemDb, $this->user, $store);
		
		return($modules);
	}
	
	// Retorna menus do modulo //
	public function get_moduleMenus($var_module=false) {
		$module = ($var_module?$var_module:$this->module);
		$obj = new users_stores_menus_permissions_master();
		$menus = $obj->getUserStoreModuleMenus($this->systemDb, $this->user, $this->store, $module);
		
		return($menus);
	}
	
	// Retorna permission do menu //
	public function get_permission($var_menu=false) {
		$menu = ($var_menu?$var_menu:$this->menu);
		$obj = new users_stores_menus_permissions_master();
		$permission = $obj->getUserMenuPermission($this->systemDb, $this->user, $this->store, $menu);
		
		return($permission);
	}
		
	///////////////////////////////
	//////////////////////////////////////////
	/////////////////////////////////////////////////////
	public function get_module_settings($var_module,$var_db) {
		
		$module_settings = array();
		$sql = ("SELECT
					stores_modules_settings.id
				FROM
					stores_modules_settings
				WHERE
					stores_modules_settings.fk_stores_modules = '".addslashes($var_module)."'
					stores_modules_settings.enabled = 1");
		$rs = $var_db->execute($sql);
		while($row = $var_db->get_row($rs)) {
			$module_setting = new store_module_setting($row->id);
			$module_settings[$module_setting->get_name()] = $module_setting->get_value();
		}
		
		return($module_settings);
	}
	
	// Retorna a lingua
	public function get_lang() {
		return($this->userObj->get_language_name($this->mainDb));
	}
	
	// Retorna a descricao da lingua
	public function get_langDescription() {
		return($this->userObj->get_language_description($this->mainDb));
	}
	
	// Retorna error //
	public function get_error() {
		return ($this->error);
	}
	
	// ////////////////
	// All methods //
	// //////////////

	
	// Destructor //
	public function __destruct() {
	}
}

?>