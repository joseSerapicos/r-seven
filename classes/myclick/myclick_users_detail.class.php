<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: myclick_users_config.class.php
|  PATH: classes
|  DESCRIPTION: Classe da myclick_users_config parte do cliente
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 14JAN2014
|  MODIFICATION DATE: 20JAN2014
|____________________________________________________________*/


class myclick_users_detail {
	private $id;
	private $fk_myclick_users_head;
	private $fk_mygest_myclick_detail;
	private $value;
	private $insert_time;
	private $insert_user;
	
	private $mygest_myclick_detail;
	
	/*Parametros */

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
	public function __construct3($system_db,$user_db,$var_id) {

		$this->id = $var_id;
 		$this->load($system_db,$user_db);
		
		$this->error = false;
	}
	
	// ////////////////
	// Set methods //
	// //////////////
	
	// ////////////////
	// Get methods //
	// //////////////
	
	public function get_id() {
		return ($this->id);
	}
	public function get_fk_myclick_users_head() {
		return ($this->fk_myclick_users_head);
	}
	public function get_fk_mygest_myclick_detail() {
		return ($this->fk_mygest_myclick_detail);
	}
	public function get_value() {
		return ($this->value);
	}
	public function get_insert_time() {
		return ($this->insert_time);
	}
	public function get_insert_user() {
		return ($this->insert_user);
	}
	public function get_error() {
		return ($this->error);
	}
	public function get_mygest_myclick_detail() {
		return ($this->mygest_myclick_detail);
	}

	
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega a informacao a partir da base de dados //
	
	private function load($system_db,$user_db) {
		$this->error = false;
		$sql = ("SELECT 
					myclick_users_detail.fk_myclick_users_head,
					myclick_users_detail.fk_mygest_myclick_detail,
					myclick_users_detail.value,
					myclick_users_detail.insert_time,
					myclick_users_detail.insert_user
				FROM 
					myclick_users_detail
				WHERE
					myclick_users_detail.id = ".$this->id."
				");
		$rs = $user_db->execute ( $sql );
		if ($row = $user_db->get_row ( $rs )) {
			//$this->id = $row->id;
			$this->fk_myclick_users_head = $row->fk_myclick_users_head;
			$this->fk_mygest_myclick_detail = $row->fk_mygest_myclick_detail;
			$this->value = $row->value;
			$this->insert_time = $row->insert_time;
			$this->insert_user = $row->insert_user;
			
			$this->load_mygest_myclick_detail($system_db,$this->fk_mygest_myclick_detail);
			return (true);
		}
		
		// Error
		$this->error = $user_db->get_error ();
		return (false);
	}
	
	private function load_mygest_myclick_detail($system_db,$fk_mygest_myclick_detail) {
		
		$this->error = false;
		
		//$this->mygest_myclick_detail = $fk_mygest_myclick_detail;
		
		$this->mygest_myclick_detail = new myclick_detail($system_db,$fk_mygest_myclick_detail);
		//$this->mygest_myclick_detail = "xpto";
		
		// Error
		$this->error = $system_db->get_error ();
		return (false);
		}
	
	
	// Destructor //
	public function __destruct() {
	}
}

?>