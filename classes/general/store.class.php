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
	private $name;
	private $legal_name;
	private $nif;
	private $rnavt;
	private $residence_1;
	private $residence_2;
	private $residence_3;
	private $zip_code;
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
		$this->name = false;
		$this->legal_name = false;
		$this->nif = false;
		$this->rnavt = false;
		$this->residence_1 = false;
		$this->residence_2 = false;
		$this->residence_3 = false;
		$this->zip_code = false;
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
		$this->name = false;
		$this->legal_name = false;
		$this->nif = false;
		$this->rnavt = false;
		$this->residence_1 = false;
		$this->residence_2 = false;
		$this->residence_3 = false;
		$this->zip_code = false;
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
					stores.name,
					stores.legal_name,
					stores.nif,
					stores.rnavt,
					stores.residence_1,
					stores.residence_2,
					stores.residence_3,
					stores.zip_code,
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
			$this->name = $row->name;
			$this->legal_name = $row->legal_name;
			$this->nif = $row->nif;
			$this->rnavt = $row->rnavt;
			$this->residence_1 = $row->residence_1;
			$this->residence_2 = $row->residence_2;
			$this->residence_3 = $row->residence_3;
			$this->zip_code = $row->zip_code;
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
	public function load_for_user($var_db, $var_user) {
		$this->error = false;
	
		$sql = ("SELECT
					stores.name,
					stores.legal_name,
					stores.nif,
					stores.rnavt,
					stores.residence_1,
					stores.residence_2,
					stores.residence_3,
					stores.zip_code,
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
			$this->name = $row->name;
			$this->legal_name = $row->legal_name;
			$this->nif = $row->nif;
			$this->rnavt = $row->rnavt;
			$this->residence_1 = $row->residence_1;
			$this->residence_2 = $row->residence_2;
			$this->residence_3 = $row->residence_3;
			$this->zip_code = $row->zip_code;
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
		$this->load_modules_for_user($var_db, $var_user);
	
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
	private function load_modules_for_user($var_db, $var_user)
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
		$rs = $var_db->execute ( $sql );
		while($row = $var_db->get_row ( $rs )) {
			$store_module = new store_module($row->id);
			$store_module->load_for_user($var_db, $var_user, $this->id);
			$this->modules[] = $store_module;
		}
	
		return (true);
	}
	
	
	// Destructor //
	public function __destruct() {
	}
}

?>