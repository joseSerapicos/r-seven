<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: framework_menu.class.php
|  PATH: classes
|  DESCRIPTION: Classe para interaccao com a tabela framework_menus
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class framework_menu {
	
	private $id;
	private $name;
	private $link;
	private $priority;
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
		$this->name = false;
		$this->link = false;
		$this->priority = false;
		$this->insert_time = false;
		$this->insert_user = false;
		
		$this->error = false;
	}
	
	// 1 Args //
	public function __construct1($var_id) {
		$this->id = $var_id;
		$this->name = false;
		$this->link = false;
		$this->priority = false;
		$this->insert_time = false;
		$this->insert_user = false;
		
		$this->error;
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
	
	// Retorna link //
	public function get_link() {
		return ($this->link);
	}
	
	// Retorna priority //
	public function get_priority() {
		return ($this->priority);
	}
	
	// Retorna insert_time //
	public function get_insert_time() {
		return ($this->insert_time);
	}
	
	// Retorna insert_user //
	public function get_insert_user() {
		return ($this->insert_user);
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
					framework_menus.name, 
					framework_menus.link, 
					framework_menus.priority,
					framework_menus.insert_time,
					framework_menus.insert_user 
				FROM 
					framework_menus 
				WHERE 
					framework_menus.id = " . addslashes ( $this->id ));
		$rs = $var_db->execute ( $sql );
		if ($row = $var_db->get_row ( $rs )) {
			$this->name = $row->name;
			$this->link = $row->link;
			$this->priotity = $row->priority;
			$this->insert_time = $row->insert_time;
			$this->insert_user = $row->insert_user;
			
			return (true);
		}
		
		// Error
		$this->error = $var_db->get_error ();
		return (false);
	}
	
	
	// Destructor //
	public function __destruct() {
	}
}

?>