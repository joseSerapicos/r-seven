<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: main.master.class.php
|  PATH: classes
|  DESCRIPTION: Classe para manipulacao de stores menus e permissoes do user
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class main {
	
	private $masterUser;
	private $masterStore;
	
	private $stores;
	
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
		$this->masterUser = false;
		$this->masterStore = false;
		
		$this->stores = false;
			
		$this->error = false;
	}
	
	
	// ////////////////
	// Set methods //
	// //////////////
	
	public function set_masterUser($var) {
		$this->masterUser = $var;
	}
	
	public function set_masterStore($var) {
		$this->masterStore = $var;
	}
	
	
	// ////////////////
	// Get methods //
	// //////////////
	
	public function get_masterUser() {
		return ($this->masterUser);
	}
	
	public function get_masterStore() {
		return ($this->masterStore);
	}
	
	// Retorna stores //
	public function get_stores() {
		return ($this->stores);
	}
	
	// Retorna store //
	public function get_store($var_store) {
		if(is_array($this->stores))
		foreach($this->stores as $store)
		{
			if($store->get_id()==$var_store)
			{
				return ($store);
			}
		}
		return (false);
	}
	
	// Retorna store default //
	public function get_default_store() {
		if(count($this->stores)>1)
			return(0);
		else
			return($this->stores[0]->get_id());
	}
	
	// Retorna modules //
	public function get_modules($var_db=false) {
		if( ($this->masterStore == 0) && ($var_db) )
		{
			$modules = array();
			$sql = ("SELECT
						stores_modules.id
					FROM
						stores_modules
					INNER JOIN stores_modules_menus
						ON stores_modules_menus.fk_stores_modules = stores_modules.id
						AND stores_modules_menus.enabled = 1
					INNER JOIN users_menus_permissions
						ON users_menus_permissions.fk_stores_modules_menus = stores_modules_menus.id
						AND users_menus_permissions.fk_users = " . addslashes ( $this->masterUser ) . "
						AND users_menus_permissions.read = 1
					WHERE
						stores_modules.enabled = 1
					GROUP BY stores_modules.fk_mygest_modules_info
					ORDER BY stores_modules.priority ASC");
			$rs = $var_db->execute ( $sql );
			while($row = $var_db->get_row ( $rs )) {
				$module = new store_module($row->id);
				$module->load($var_db);
				$modules[] = $module;
			}
		
			return ($modules);
		}
		elseif($this->masterStore > 0)
		{
			$store = $this->get_store($this->masterStore);	
			return ($store->get_modules());
		}
		
		return (false);
	}
	
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
	
	// Retorna module //
	public function get_module($var_main_db, $var_system_db, $var_module) {

		$store_module = new store_module($var_module);
		$store_module->load_for_user($var_main_db, $var_system_db, $this->masterUser, $this->masterStore);
	
		return ($store_module);
	}
	
	// Retorna menu //
	public function get_menu($var_main_db, $var_system_db, $var_menu) {

		$store_module_menu = new store_module_menu($var_menu);

		$store_module_menu->load($var_main_db, $var_system_db);
		
		return ($store_module_menu);
	}
	
	// Retorna permissions //
	public function get_permissions($var_menu) {	
		//a sdcbnjwendjnwedwje tem que ver a permissao e carregar array read write etc... mediante o menu
		return ($var_menu);
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
		
		// Load das stores
		$this->load_stores($var_main_db, $var_system_db);
				
		return (true);
	}
	
	// Carrega modulos da store //
	private function load_stores($var_main_db, $var_system_db)
	{
		$this->stores = array();
		$sql = ("SELECT  
					stores.id
				FROM 
					stores 
				INNER JOIN stores_modules
					ON stores_modules.fk_stores = stores.id
					AND stores_modules.enabled = 1
				INNER JOIN stores_modules_menus
					ON stores_modules_menus.fk_stores_modules = stores_modules.id
					AND stores_modules_menus.enabled = 1
				INNER JOIN users_menus_permissions
					ON users_menus_permissions.fk_stores_modules_menus = stores_modules_menus.id
					AND users_menus_permissions.fk_users = " . addslashes ( $this->masterUser ) . " 
					AND users_menus_permissions.read = 1
				WHERE 
					stores.enabled = 1
				GROUP BY stores.id");
		$rs = $var_system_db->execute ( $sql );
		
		while($row = $var_system_db->get_row ( $rs )) {
			$store = new store($row->id);
			$store->load_for_user($var_main_db, $var_system_db, $this->masterUser);
			$this->stores[] = $store;
		}

		return (true);
	}
	
	
	// Destructor //
	public function __destruct() {
	}
}

?>