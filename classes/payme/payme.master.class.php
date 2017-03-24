<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: payme.master.class.php
|  PATH: classes
|  DESCRIPTION: Classe do modulo payme
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 25FEV2014
|  MODIFICATION DATE: 25FEV2014
|____________________________________________________________*/


class payme {
	private $enabled;
	
	private $myclick_user_list;
	
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
		$this->enabled = '1';
		$this->myclick_users_head_id = '0'; //se for 0 aparece todos
		//$this->load($db_main,$db_system);
		
		$this->error = false;

	}
	
	
	// ////////////////
	// Set methods //
	// //////////////
	
	public function set_enabled($var_enabled) {
		$this->enabled = $var_enabled;
	}
	public function set_myclick_users_head_id($var_myclick_users_head_id) {
		$this->myclick_users_head_id = $var_myclick_users_head_id;
	}
	
	// ////////////////
	// Get methods //
	// //////////////
	
	public function get_myclick_user_list() {
		return ($this->myclick_user_list);
	}
	
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega toda informacao a partir da base de dados //
	public function load($system_db, $client_db) {
		
		$this->error = false;
		
		/*Includes - user_db*/
		include_once (dirname(__FILE__) . "/myclick_users_head.class.php"); //client_db head
		
		include_once (dirname(__FILE__) . "/myclick_users_detail.class.php"); //client_db detail
		
		/*Includes - system_db*/
		include_once (dirname(__FILE__) . "/myclick_head.mygest.class.php"); 
		include_once (dirname(__FILE__) . "/myclick_detail.mygest.class.php"); 
		//system_db head
		$sql_where = "";
		if($this->myclick_users_head_id){
			$sql_where = " AND myclick_users_head.id = '".$this->myclick_users_head_id."'";
		}
		
		$this->myclick_user_list = array();
		$sql = ("SELECT 
					myclick_users_head.id
				FROM 
					myclick_users_head
				WHERE
					myclick_users_head.enabled = '".$this->enabled."'
					$sql_where
				");
		$rs = $client_db->execute ( $sql );
		
		while($row = $client_db->get_row ( $rs )) {
			$obj_myclick_user_list = new myclick_users_head($system_db,$client_db,$row->id);
			$this->myclick_user_list[] = $obj_myclick_user_list; 
		}
		
		
		$this->error = $client_db->get_error ();
		if ($this->error){
			return (true);
		}else{
			return (false);
		}
	}
	// Destructor //
	public function __destruct() {
	}
}

?>