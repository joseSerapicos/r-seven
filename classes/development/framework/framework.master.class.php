<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: framework.master.class.php
|  PATH: classes/development/framework
|  DESCRIPTION: Classe geral para manipulacao de todos os objectos do modulo "development/framework"
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class framework {
	
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

	public function get_error() {
		return ($this->error);
	}
	
	public function get_icons($var_db) {
		
		$icons = array();
		
		$sql = ("SELECT
					icons.id
				FROM 
					icons 
				ORDER BY icons.id ASC");
		$rs = $var_db->execute ( $sql );
		while($row = $var_db->get_row ( $rs )) {
			$obj_icons = new icons($row->id, $var_db);
			$icons[$obj_icons->get_id()] = $obj_icons;
		}
				
		return ($icons);
	}
	
	
	// ////////////////
	// All methods //
	// //////////////
	
	
	// Destructor //
	public function __destruct() {
	}
}

?>