<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: user_menu_permissions.class.php
|  PATH: classes
|  DESCRIPTION: Classe para interaccao com a tabela users_menus_permissions
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class user_menu_permissions {
	
	private $id;
	private $fk_users;
	private $fk_stores_modules_menus;
	private $read;
	private $write;
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
		$this->fk_users = false;
		$this->fk_stores_modules_menus = false;
		$this->read = false;
		$this->write = false;
		$this->insert_time = false;
		$this->insert_user = false;
		
		$this->error = false;
	}
	
	// 1 Args //
	public function __construct1($var_id) {
		$this->id = $var_id;
		$this->fk_users = false;
		$this->fk_stores_modules_menus = false;
		$this->read = false;
		$this->write = false;
		$this->insert_time = false;
		$this->insert_user = false;
		
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
	
	// Retorna read //
	public function get_read() {
		return ($this->read);
	}
	
	// Retorna write //
	public function get_write() {
		return ($this->write);
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
					users_menus_permissions.fk_users,
					users_menus_permissions.fk_stores_modules_menus,
					users_menus_permissions.read,
					users_menus_permissions.write,
					users_menus_permissions.insert_time,
					users_menus_permissions.insert_user 
				FROM 
					users_menus_permissions 
				WHERE 
					users_menus_permissions.id = " . addslashes ( $this->id ));
		$rs = $var_db->execute ( $sql );
		if ($row = $var_db->get_row ( $rs )) {
			$this->fk_users = $row->fk_users;
			$this->fk_stores_modules_menus = $row->fk_stores_modules_menus;
			$this->read = $row->read;
			$this->write = $row->write;
			$this->insert_time = $row->insert_time;
			$this->insert_user = $row->insert_user;
		}
		else
		{		
			// Error
			$this->error = $var_db->get_error ();
			return (false);
		}
		
		return (true);
	}
	
	
	// Destructor //
	public function __destruct() {
	}
}

?>