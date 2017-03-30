<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: store.class.php
|  PATH: classes
|  DESCRIPTION: Classe para interaccao com a tabela stores
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class store {
	
	private $id;
	private $fk_stores;
	private $name;
	private $legal_name;
	private $nif;
	private $rnavt;
	private $address_1;
	private $address_2;
	private $address_3;
	private $postal_code;
	private $country;
	private $email;
	private $web_page;
	private $phone_1;
	private $phone_2;
	private $phone_3;
	private $insert_time;
	private $insert_user;
	private $enabled;
	
	private $modules;
	
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
		$this->fk_stores = false;
		$this->name = false;
		$this->legal_name = false;
		$this->nif = false;
		$this->rnavt = false;
		$this->address_1 = false;
		$this->address_2 = false;
		$this->address_3 = false;
		$this->postal_code = false;
		$this->country = false;
		$this->email = false;
		$this->web_page = false;
		$this->phone_1 = false;
		$this->phone_2 = false;
		$this->phone_3 = false;
		$this->insert_time = false;
		$this->insert_user = false;
		$this->enabled = false;
		
		$this->modules = false;
		
		$this->error = false;
	}
	
	// 1 Args //
	public function __construct1($var_id) {
		$this->id = $var_id;
		$this->fk_stores = false;
		$this->name = false;
		$this->legal_name = false;
		$this->nif = false;
		$this->rnavt = false;
		$this->address_1 = false;
		$this->address_2 = false;
		$this->address_3 = false;
		$this->postal_code = false;
		$this->country = false;
		$this->email = false;
		$this->web_page = false;
		$this->phone_1 = false;
		$this->phone_2 = false;
		$this->phone_3 = false;
		$this->insert_time = false;
		$this->insert_user = false;
		$this->enabled = false;
		
		$this->modules = false;
		
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
	
	public function get_fk_stores() {
		return ($this->fk_stores);
	}
	
	// Retorna name //
	public function get_name() {
		return ($this->name);
	}
	
	// Retorna modules //
	public function get_modules() {
		return ($this->modules);
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
					stores.fk_stores,
					stores.name,
					stores.legal_name,
					stores.nif,
					stores.rnavt,
					stores.address_1,
					stores.address_2,
					stores.address_3,
					stores.postal_code,
					stores.country,
					stores.email,
					stores.web_page,
					stores.phone_1,
					stores.phone_2,
					stores.phone_3,
					stores.insert_time,
					stores.insert_user,
					stores.enabled
				FROM 
					stores 
				WHERE 
					stores.id = " . addslashes ( $this->id ) . " 
					AND stores.enabled = 1");
		$rs = $var_db->execute ( $sql );
		if ($row = $var_db->get_row ( $rs )) {
			$this->fk_stores = $row->fk_stores;
			$this->name = $row->name;
			$this->legal_name = $row->legal_name;
			$this->nif = $row->nif;
			$this->rnavt = $row->rnavt;
			$this->address_1 = $row->address_1;
			$this->address_2 = $row->address_2;
			$this->address_3 = $row->address_3;
			$this->postal_code = $row->postal_code;
			$this->country = $row->country;
			$this->email = $row->email;
			$this->web_page = $row->web_page;
			$this->phone_1 = $row->phone_1;
			$this->phone_2 = $row->phone_2;
			$this->phone_3 = $row->phone_3;
			$this->insert_time = $row->insert_time;
			$this->insert_user = $row->insert_user;
			$this->enabled = $row->enabled;
		}
		else
		{		
			// Error
			$this->error = $var_db->get_error ();
			return (false);
		}
		
		// Carrega modulos da store //
		$this->load_modules($var_db);
				
		return (true);
	}
	
	// Carrega a informacao a partir da base de dados d acordo com as permissoes do user //
	public function load_for_user($var_main_db, $var_system_db, $var_user) {
		$this->error = false;
	
		$sql = ("SELECT
					stores.fk_stores,
					stores.name,
					stores.legal_name,
					stores.nif,
					stores.rnavt,
					stores.address_1,
					stores.address_2,
					stores.address_3,
					stores.postal_code,
					stores.country,
					stores.email,
					stores.web_page,
					stores.phone_1,
					stores.phone_2,
					stores.phone_3,
					stores.insert_time,
					stores.insert_user,
					stores.enabled
				FROM
					stores
				WHERE
					stores.id = " . addslashes ( $this->id ) . "
					AND stores.enabled = 1");
		$rs = $var_system_db->execute ( $sql );
		if ($row = $var_system_db->get_row ( $rs )) {
			$this->fk_stores = $row->fk_stores;
			$this->name = $row->name;
			$this->legal_name = $row->legal_name;
			$this->nif = $row->nif;
			$this->rnavt = $row->rnavt;
			$this->address_1 = $row->address_1;
			$this->address_2 = $row->address_2;
			$this->address_3 = $row->address_3;
			$this->postal_code = $row->postal_code;
			$this->country = $row->country;
			$this->email = $row->email;
			$this->web_page = $row->web_page;
			$this->phone_1 = $row->phone_1;
			$this->phone_2 = $row->phone_2;
			$this->phone_3 = $row->phone_3;
			$this->insert_time = $row->insert_time;
			$this->insert_user = $row->insert_user;
			$this->enabled = $row->enabled;
		}
		else
		{
			// Error
			$this->error = $var_system_db->get_error ();
			return (false);
		}
	
		// Carrega modulos da store //
		$this->load_modules_for_user($var_main_db, $var_system_db, $var_user);
	
		return (true);
	}

	// Carrega modulos da store //
	private function load_modules($var_db)
	{
		$this->modules = array();
		$sql = ("SELECT
					stores_modules.id
				FROM
					stores_modules
				WHERE
					stores_modules.fk_stores = " . addslashes ( $this->id ) . "
					AND stores_modules.enabled = 1
				ORDER BY stores_modules.priority ASC");
		$rs = $var_db->execute ( $sql );
		while($row = $var_db->get_row ( $rs )) {
			$store_module = new store_module($row->id);
			$store_module->load($var_db);
			$this->modules[] = $store_module;
		}
	
		return (true);
	}
	
	// Carrega modulos da store de acordo com as permissoes do user //
	private function load_modules_for_user($var_main_db, $var_system_db, $var_user)
	{
		$this->modules = array();
		$sql = ("SELECT
					stores_modules.id
				FROM
					stores_modules
				INNER JOIN stores_modules_menus
					ON stores_modules_menus.fk_stores_modules = stores_modules.id
					AND stores_modules_menus.enabled = 1
				INNER JOIN users_menus_permissions
					ON users_menus_permissions.fk_stores_modules_menus = stores_modules_menus.id
					AND users_menus_permissions.fk_users = " . addslashes ( $var_user ) . "
					AND users_menus_permissions.read = 1
				WHERE
					stores_modules.fk_stores = " . addslashes ( $this->id ) . "
					AND stores_modules.enabled = 1
				GROUP BY stores_modules.fk_mygest_modules_info
				ORDER BY stores_modules.priority ASC");
		$rs = $var_system_db->execute ( $sql );
		while($row = $var_system_db->get_row ( $rs )) {
			$store_module = new store_module($row->id);
			$store_module->load_for_user($var_main_db, $var_system_db, $var_user, $this->id);
			$this->modules[] = $store_module;
		}
	
		return (true);
	}
	
	
	// Destructor //
	public function __destruct() {
	}
}

?>