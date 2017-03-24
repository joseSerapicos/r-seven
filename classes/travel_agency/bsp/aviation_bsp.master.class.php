<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: aviation_bsp.master.class.php
|  PATH: classes
|  DESCRIPTION: Classe da master da aviation_bsp
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 31JAN2014
|  MODIFICATION DATE: 31JAN2014
|____________________________________________________________*/


class aviation_bsp {
	private $enabled;
	
	private $aviation_bsp_head;
	
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
	
	// ////////////////
	// Get methods //
	// //////////////
	
	public function get_aviation_bsp_head() {
		return ($this->aviation_bsp_head);
	}
	
	// ////////////////
	// All methods //
	// //////////////
	
	/*Get information from Head only! (good for listing)*/
	public function head($client_db) {
		
		$this->error = false;
		
		/*Includes */
		include_once (dirname(__FILE__) . "/aviation_bsp_head.class.php"); //aviation_bsp head 
		//system_db head
		$sql_where = "";
		/*
		if($this->myclick_users_head_id){
			$sql_where = " AND myclick_users_head.id = '".$this->myclick_users_head_id."'";
		}*/
		
		$this->aviation_bsp_head = array();
		$sql = ("SELECT 
					aviation_bsp_head.id
				FROM 
					aviation_bsp_head
				WHERE
					aviation_bsp_head.enabled = '".$this->enabled."'
					$sql_where
				");
		$rs = $client_db->execute ( $sql );
		
		while($row = $client_db->get_row ( $rs )) {
			$obj_aviation_bsp_head = new aviation_bsp_head();
			$obj_aviation_bsp_head->load($client_db,$row->id);
			
			$this->aviation_bsp_head[] = $obj_aviation_bsp_head; 
		}
		
		
		$this->error = $client_db->get_error ();
		if ($this->error){
			return (true);
		}else{
			return (false);
		}
	}
	
	/*Get information from Head And Detail (connected to head)*/
	public function head_detail($client_db,$bsp_id) {
		
		$this->error = false;
		
		/*Includes */
		include_once (dirname(__FILE__) . "/aviation_bsp_head.class.php"); //aviation_bsp head 
		
		$this->aviation_bsp_head = array();
		$sql = ("SELECT 
					aviation_bsp_head.id
				FROM 
					aviation_bsp_head
				WHERE
					aviation_bsp_head.enabled = '".$this->enabled."'
				AND
					aviation_bsp_head.id = '".$bsp_id."'
					
				");
		$rs = $client_db->execute ( $sql );
		
		while($row = $client_db->get_row ( $rs )) {
			$obj_aviation_bsp_head = new aviation_bsp_head();
			$obj_aviation_bsp_head->load_detail($client_db,$row->id);
			$this->aviation_bsp_head[] = $obj_aviation_bsp_head; 
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