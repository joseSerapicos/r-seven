<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: mylist.master.class.php
|  PATH: classes
|  DESCRIPTION: Classe principal do mylist
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 27FEV2014
|  MODIFICATION DATE: -
|____________________________________________________________*/


class mylist {
	private $enabled;
	
	private $mylist_difusion_list;
	
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
	
	public function get_mylist_difusion_list() {
		return ($this->mylist_difusion_list);
	}
	
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega toda informacao a partir da base de dados //
	public function load_list($client_db) {
		
		$this->error = false;
		
		/*Includes - mylist_difusion_list*/
		include_once (dirname(__FILE__) . "/mylist_difusion_list.class.php"); //client_db head
		
		$this->mylist_difusion_list = array();
		$sql = ("SELECT 
					mylist_difusion_list.id
				FROM 
					mylist_difusion_list
				WHERE
					mylist_difusion_list.enabled = '".$this->enabled."'
				");
		$rs = $client_db->execute ( $sql );
		
		while($row = $client_db->get_row ( $rs )) {
			$obj_mylist_difusion_list = new mylist_difusion_list($client_db,$row->id);
			$this->mylist_difusion_list[] = $obj_mylist_difusion_list; 
		}
		
		
		$this->error = $client_db->get_error ();
		if ($this->error){
			return (true);
		}else{
			return (false);
		}
	}
	public function submit_list($sytem_db,$client_db,$post) {
		echo "<pre>";print_r($post);echo "</pre>";
	}
	
	// Destructor //
	public function __destruct() {
	}
}

?>