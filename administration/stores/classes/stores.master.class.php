<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: stores.master.class.php
|  PATH: administration/stores/classes
|  DESCRIPTION: Classe para manipular o menu "stores"
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class stores_master {
	
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

	// Retorna todos os users //
	public function getAllstores($var_db) {
		
		$output = array();
		
		$sql = ("SELECT
					stores.id
				FROM 
					stores
				ORDER BY stores.name ASC");
		$rs = $var_db->execute ( $sql );
		while($row = $var_db->get_row ( $rs )) {
			$obj_store = new store($row->id);
			$obj_store->load($var_db);
			$output[] = $obj_store;
		}
		
		return ($output);
	}
		
	
	// ////////////////
	// All methods //
	// //////////////
	
	// Destructor //
	public function __destruct() {
	}
}

?>