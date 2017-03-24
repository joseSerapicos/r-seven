<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: development_db_error_log_array.class.php
|  PATH: classes
|  DESCRIPTION: Classe com todos os registos da tabela development_db_error_log
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class development_db_error_log_array {
	
	private $development_db_error_log_array;
	
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
		$this->development_db_error_log_array = array();
				
		$this->error = false;
		
		$this->load($var_db);
	}	
	
	
	// ////////////////
	// Get methods //
	// //////////////
	
	// Retorna id //
	public function get_development_db_error_log_array() {
		return ($this->development_db_error_log_array);
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
					development_db_error_log.id
				FROM 
					development_db_error_log 
				ORDER BY development_db_error_log.id DESC");
		$rs = $var_db->execute ( $sql );
		while($row = $var_db->get_row ( $rs )) {
			$development_db_error_log = new development_db_error_log($row->id);
			$development_db_error_log->load($var_db);
			$this->development_db_error_log_array[] = $development_db_error_log;
		}
				
		return (true);
	}	
	
	
	// Destructor //
	public function __destruct() {
	}
}

?>