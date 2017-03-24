<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: db_errors.master.class.php
|  PATH: classes
|  DESCRIPTION: Classe com todos os registos da tabela db_errors
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class db_errors_master {
	
	private $db_errors;
	
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
		$this->db_errors = array();
				
		$this->error = false;
		
		$this->load($var_db);
	}	
	
	
	// ////////////////
	// Get methods //
	// //////////////
	
	// Retorna id //
	public function get_db_errors() {
		return ($this->db_errors);
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
					db_errors.id
				FROM 
					db_errors 
				ORDER BY db_errors.id DESC");
		$rs = $var_db->execute ( $sql );
		while($row = $var_db->get_row ( $rs )) {
			$db_error = new db_error($row->id);
			$db_error->load($var_db);
			$this->db_errors[] = $db_error;
		}
				
		return (true);
	}	
	
	
	// Destructor //
	public function __destruct() {
	}
}

?>