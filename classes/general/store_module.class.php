<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: store_module.class.php
|  PATH: classes
|  DESCRIPTION: Classe para interaccao com a tabela stores_modules
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class store_module {
	
	private $id;
	private $fk_mygest_modules_info;
	private $fk_stores;
	private $name;
	private $link;
	private $priority;
	private $insert_time;
	private $insert_user;
	private $enabled;
	
	private $menus;
	
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
		$this->fk_stores = false;
		$this->name = false;
		$this->link = false;
		$this->insert_time = false;
		$this->insert_user = false;
		$this->enabled = false;
		
		$this->menus = false;
		
		$this->error = false;
	}
	
	// 1 Args //
	public function __construct1($var_id) {
		$this->id = $var_id;
		$this->fk_mygest_modules_info = false;
		$this->fk_stores = false;
		$this->name = false;
		$this->link = false;
		$this->insert_time = false;
		$this->insert_user = false;
		$this->enabled = false;
		
		$this->menus = false;
		
		$this->error = false;
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
	
	// Retorna name //
	public function get_name() {
		return ($this->name);
	}
	
	// Retorna name //
	public function get_link() {
		return ($this->link);
	}
	
	// Retorna menus //
	public function get_menus() {
		return ($this->menus);
	}
	
	// Retorna  //
	public function get_fk_mygest_modules_info() {
		return ($this->fk_mygest_modules_info);
	}

	// Retorna icon //
	public function get_icon($var_db_main) {
		$sql = ("SELECT  
					icons.name 
				FROM 
					modules_info
				INNER JOIN icons
					ON icons.id = modules_info.fk_icons
				WHERE 
					modules_info.id = " . addslashes ( $this->fk_mygest_modules_info ));
		$rs = $var_db_main->execute ( $sql );

		if ($row = $var_db_main->get_row ( $rs )) {
			return($row->name);
		}
		else
		{
			return (false);
		}
	}
	
	// Retorna error //
	public function get_error() {
		return ($this->error);
	}
	
	// ////////////////
	// All methods //
	// //////////////
	
	
	// Carrega a informacao do modulo a partir da base de dados //
	private function load_module($var_db) {
		$this->error = false;
	
		$sql = ("SELECT
					stores_modules.fk_mygest_modules_info,
					stores_modules.fk_stores,
					stores_modules.name,
					stores_modules.link,
					stores_modules.priority,
					stores_modules.insert_time,
					stores_modules.insert_user,
					stores_modules.enabled
				FROM
					stores_modules
				WHERE
					stores_modules.id = " . addslashes ( $this->id ) . "
					AND stores_modules.enabled = 1");
		$rs = $var_db->execute ( $sql );
		if ($row = $var_db->get_row ( $rs )) {
			$this->fk_mygest_modules_info = $row->fk_mygest_modules_info;
			$this->fk_stores = $row->fk_stores;
			$this->name = $row->name;
			$this->link = $row->link;
			$this->insert_time = $row->insert_time;
			$this->insert_user = $row->insert_user;
			$this->enabled = $row->enabled;
			return (true);
		}
		else
		{
			// Error
			$this->error = $var_db->get_error ();
			return (false);
		}
	}
	
	// Carrega a informacao a partir da base de dados //
	public function load($var_db) {
		$this->error = false;
		
		// Carrega informacao do modulo a partir da base de dados //
		$this->load_module($var_db);
		
		// Carrega menus do modulo a partir da base de dados //
		$this->load_menus($var_db);
		
		return (true);
	}
	
	// Carrega a informacao a partir da base de dados de acordo com permissoes do user //
	public function load_for_user($var_db, $var_user, $var_store) {
		$this->error = false;
	
		// Carrega informacao do modulo a partir da base de dados //
		$this->load_module($var_db);
	
		// Carrega menus do modulo a partir da base de dados //
		$this->load_menus_for_user($var_db, $var_user, $var_store);
	
		return (true);
	}
	
	// Carrega menus do modulo a partir da base de dados //
	private function load_menus($var_db)
	{
		$this->menus = array();
		$sql = ("SELECT
					stores_modules_menus.id
				FROM
					stores_modules_menus
				WHERE
					stores_modules_menus.fk_stores_modules = " . addslashes ( $this->id ) . "
					AND stores_modules_menus.enabled = 1
				ORDER BY stores_modules_menus.priority ASC");
		$rs = $var_db->execute ( $sql );
		while($row = $var_db->get_row ( $rs )) {
			$store_module_menu = new store_module_menu($row->id);
			$store_module_menu->load($var_db);
			$this->menus[] = $store_module_menu;
		}
		
		return (true);
	}
	
	// Carrega menus do modulo a partir da base de dados de acordo com as permissoes do user //
	private function load_menus_for_user($var_db, $var_user, $var_store)
	{
		// Restricao da store caso esteja definida ($store_id > 0)
		$sql_join_store = ($var_store>0?
							(" INNER JOIN stores_modules
								ON stores_modules.id = stores_modules_menus.fk_stores_modules
								AND stores_modules.fk_stores = " . addslashes ( $var_store )):
							(""));
		
		$this->menus = array();
		$sql = ("SELECT
					stores_modules_menus.id
				FROM
					stores_modules_menus
				INNER JOIN users_menus_permissions
					ON users_menus_permissions.fk_stores_modules_menus = stores_modules_menus.id
					AND users_menus_permissions.fk_users = " . addslashes ( $var_user ) . "
					AND users_menus_permissions.read = 1
				".$sql_join_store."
				WHERE
					stores_modules_menus.fk_stores_modules = " . addslashes ( $this->id ) . "
					AND stores_modules_menus.enabled = 1
				ORDER BY stores_modules_menus.priority ASC");
		$rs = $var_db->execute ( $sql );
		while($row = $var_db->get_row ( $rs )) {
			$store_module_menu = new store_module_menu($row->id);
			$store_module_menu->load($var_db);
			$this->menus[] = $store_module_menu;
		}
	
		return (true);
	}
	
	
	// Destructor //
	public function __destruct() {
	}
}

?>