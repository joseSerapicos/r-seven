<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: users_stores_menus_permissions.master.class.php
|  PATH: administration/users_permissions/classes/
|  DESCRIPTION: Classe para manipular o menu users permissions
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class users_stores_menus_permissions_master {
	
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
	
	// Retorna as stores de acordo com as permissoes do user
	public function getUserStores($var_db, $var_user) {
		
		$output = array();
		
		$sql = ("SELECT
					DISTINCT(users_stores_menus_permissions.fk_stores)
				FROM 
					users_stores_menus_permissions
				INNER JOIN stores
					ON stores.id = users_stores_menus_permissions.fk_stores
				WHERE 
					users_stores_menus_permissions.fk_users = '".addslashes($var_user)."'
					AND users_stores_menus_permissions.permission > 0
				ORDER BY stores.name ASC");
		$rs = $var_db->execute($sql);
		while($row = $var_db->get_row($rs)) {
			$obj = new store($row->fk_stores);
			$obj->load($var_db);
			$output[] = $obj;
		}
		
		return ($output);
	}
	
	// Retorna os modulos de uma store de acordo com as permissoes do user
	public function getUserStoreModules($var_db, $var_user, $var_store) {
		
		$output = array();
		
		$sql = ("SELECT
					DISTINCT(modules.id)
				FROM 
					users_stores_menus_permissions
				INNER JOIN modules_menus
					ON modules_menus.id = users_stores_menus_permissions.fk_modules_menus
				INNER JOIN modules
					ON modules.id = modules_menus.fk_modules
				WHERE 
					users_stores_menus_permissions.fk_users = '".addslashes($var_user)."'"
					.(empty($var_store)?"":("AND users_stores_menus_permissions.fk_stores = '".addslashes($var_store)."'"))
					."AND users_stores_menus_permissions.permission > 0
				ORDER BY modules.priority ASC");
		$rs = $var_db->execute($sql);
		while($row = $var_db->get_row($rs)) {
			$obj = new module($row->id);
			$obj->load($var_db);
			$output[] = $obj;
		}
		
		// Permite apenas modulos comuns a todas as stores
		if(empty($var_store))
		{
			$outputAux = array();
			
			$userStores = $this->getUserStores($var_db, $var_user);
			
			if(is_array($output))
			foreach($output as $moduleObj) {
				$addModule = true;
				
				if(is_array($userStores))
				foreach($userStores as $storeObj) {
					$sql = ("SELECT
								modules.id
							FROM 
								users_stores_menus_permissions
							INNER JOIN modules_menus
								ON modules_menus.id = users_stores_menus_permissions.fk_modules_menus
							INNER JOIN modules
								ON modules.id = modules_menus.fk_modules
								AND modules.id = '".addslashes($moduleObj->get_id())."'
							WHERE 
								users_stores_menus_permissions.fk_users = '".addslashes($var_user)."'
								AND users_stores_menus_permissions.fk_stores = '".addslashes($storeObj->get_id())."'
								AND users_stores_menus_permissions.permission > 0");
					$rs = $var_db->execute($sql);
					if(!$var_db->get_row($rs)) $addModule = false; 
				}
				if($addModule) $outputAux[] = $moduleObj;
			}
			$output = array();
			$output = $outputAux;
		}
		
		return ($output);
	}
	
	// Retorna os menus de um determinado modulo numa store de acordo com as permissoes do user
	public function getUserStoreModuleMenus($var_db, $var_user, $var_store, $var_module) {
		
		$output = array();
		
		$sql = ("SELECT
					DISTINCT(users_stores_menus_permissions.fk_modules_menus)
				FROM 
					users_stores_menus_permissions
				INNER JOIN modules_menus
					ON modules_menus.id = users_stores_menus_permissions.fk_modules_menus
					AND modules_menus.fk_modules = '".addslashes($var_module)."'
				WHERE 
					users_stores_menus_permissions.fk_users = '".addslashes($var_user)."'"
					.(empty($var_store)?"":("AND users_stores_menus_permissions.fk_stores = '".addslashes($var_store)."'"))
					."AND users_stores_menus_permissions.permission > 0
				ORDER BY modules_menus.priority ASC");
		$rs = $var_db->execute($sql);
		while($row = $var_db->get_row($rs)) {
			$obj = new module_menu($row->fk_modules_menus);
			$obj->load($var_db);
			$output[] = $obj;
		}
		
		// Permite apenas menus comuns a todas as stores
		if(empty($var_store))
		{
			$outputAux = array();
			
			$userStores = $this->getUserStores($var_db, $var_user);
			
			if(is_array($output))
			foreach($output as $menuObj) {
				$addMenu = true;
				
				if(is_array($userStores))
				foreach($userStores as $storeObj) {
					$sql = ("SELECT
								DISTINCT(users_stores_menus_permissions.fk_modules_menus)
							FROM 
								users_stores_menus_permissions
							INNER JOIN modules_menus
								ON modules_menus.id = users_stores_menus_permissions.fk_modules_menus
								AND modules_menus.id = '".addslashes($menuObj->get_id())."'
							WHERE 
								users_stores_menus_permissions.fk_users = '".addslashes($var_user)."'
								AND users_stores_menus_permissions.fk_stores = '".addslashes($storeObj->get_id())."'
								AND users_stores_menus_permissions.permission > 0");
					$rs = $var_db->execute($sql);
					if(!$var_db->get_row($rs)) $addMenu = false; 
				}
				if($addMenu) $outputAux[] = $menuObj;
			}
			$output = array();
			$output = $outputAux;
		}
		
		return ($output);
	}
	
	// Retorna a permissao do user em determido menu de determinada store
	public function getUserMenuPermission($var_db, $var_user, $var_store, $var_menu) {
		
		$output = array();
		$output['read'] = false;
		$output['edit'] = false;
		$output['add'] = false;
		
		$sql = ("SELECT
					MIN(users_stores_menus_permissions.permission) AS permission
				FROM 
					users_stores_menus_permissions
				WHERE 
					users_stores_menus_permissions.fk_users = '".addslashes($var_user)."'"
					.(empty($var_store)?"":("AND users_stores_menus_permissions.fk_stores = '".addslashes($var_store)."'"))
					."AND users_stores_menus_permissions.fk_modules_menus = '".addslashes($var_menu)."'
					AND users_stores_menus_permissions.permission > 0");
		$rs = $var_db->execute($sql);
		if($row = $var_db->get_row($rs)) {
			switch($row->permission) {
				case 1:	$output['read'] = true;
						break;
				case 2: $output['edit'] = true;
						break;
				case 3: $output['read'] = true;
						$output['edit'] = true;
						break;
				case 4:	$output['add'] = true;
						break;
				case 5: $output['read'] = true;
						$output['add'] = true;
						break;
				case 6: $output['edit'] = true;
						$output['add'] = true;
						break;
				case 7: $output['read'] = true;
						$output['edit'] = true;
						$output['add'] = true;
			}
		}

		return($output);
	}
	
	
	// ////////////////
	// All methods //
	// //////////////	
	
	// Insere as permissoes do user na store
	public function saveUserStorePermissions($var_db, $var_user, $var_store, $var_menus, $var_insert_user) {
		$this->error = false;
		
		$this->deleteUserStorePermissions($var_db, $var_user, $var_store);
		
		if(is_array($var_menus))
		foreach($var_menus as $key => $permission)
		{
			// INSERT	
			$sql = ("INSERT INTO
						users_stores_menus_permissions
							(users_stores_menus_permissions.fk_users,
							users_stores_menus_permissions.fk_stores,
							users_stores_menus_permissions.fk_modules_menus, 
							users_stores_menus_permissions.permission,
							users_stores_menus_permissions.insert_time,
							users_stores_menus_permissions.insert_user)
					VALUES
						(".(empty($var_user)?"NULL":("'".addslashes($var_user)."'")).",
						".(empty($var_store)?"NULL":("'".addslashes($var_store)."'")).",
						".(empty($key)?"NULL":("'".addslashes($key)."'")).",
						'".addslashes($permission)."',
						CURRENT_TIMESTAMP(),
						'".addslashes($var_insert_user)."')");
			$rs = $var_db->execute($sql);
			
			// Error
			$this->error = $var_db->get_error();
			if($this->error) return(false);
		}
		
		return (true);
	}
	
	// Elimina todas as permissoes do user na store
	private function deleteUserStorePermissions($var_db, $var_user, $var_store) {

		$output = array();

		$sql = ("DELETE FROM
					users_stores_menus_permissions
				WHERE 
					fk_users = '".addslashes($var_user)."'
					AND fk_stores = '".addslashes($var_store)."'");
		$rs = $var_db->execute ( $sql );
				
		return (true);
	}
	
	
	// Destructor //
	public function __destruct() {
	}
}

?>