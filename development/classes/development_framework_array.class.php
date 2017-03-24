<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: development_framework_array.class.php
|  PATH: classes
|  DESCRIPTION: Classe com todos os registos da tabela development_framework_array
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class development_framework_array {
	
	private $development_framework_array;
	
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
	public function __construct1($var_db) {
		$this->development_framework_array = array();
				
		$this->error = false;
		
		$this->load($var_db);
	}	
	
	
	// ////////////////
	// Get methods //
	// //////////////
	
	// Retorna id //
	public function get_development_framework_array() {
		return ($this->development_framework_array);
	}
	
	// Retorna error //
	public function get_error() {
		return ($this->error);
	}
	
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega a informacao a partir da base de dados //
	private function load($var_db) {
		
		$sql = ("SELECT
					development_framework.id
				FROM 
					development_framework 
				ORDER BY development_framework.priority ASC");
		$rs = $var_db->execute ( $sql );
		while($row = $var_db->get_row ( $rs )) {
			$development_framework = new development_framework($row->id);
			$development_framework->load($var_db);
			$this->development_framework_array[] = $development_framework;
		}
				
		return (true);
	}	
	
	
	// Destructor //
	public function __destruct() {
	}
}

?>