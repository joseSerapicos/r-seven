<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: myclick_head.class.php
|  PATH: classes
|  DESCRIPTION: Classe da head do myclick (myclick_head) na principal
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 10DEC2013
|  MODIFICATION DATE: 20JAN2014
|____________________________________________________________*/


class myclick_head {
	private $id;
	private $name;
	private $url;
	private $method;
	private $cat;
	private $active;
	private $version;
	private $enabled;
	private $insert_time;
	private $insert_user;
	private $error;
	
	private $mygest_myclick_detail;
	
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
				
		//$this->id = $var_id;
		$this->showDetail = false;
		//$this->load($system_db);
	
	}
	
	// ////////////////
	// Set methods //
	// //////////////
	public function set_showDetail($showDetail){ //mostra detalhe
	
		$this->showDetail = $showDetail;
	}
	// ////////////////
	// Get methods //
	// //////////////
	
	// Retorna id do myclick_head//
	public function get_id() {
		return ($this->id);
	}
	public function get_name() {
		return ($this->name);
	}
	public function get_url() {
		return ($this->url);
	}
	public function get_method() {
		return ($this->method);
	}
	public function get_cat() {
		return ($this->cat);
	}
	public function get_active() {
		return ($this->active);
	}
	public function get_version() {
		return ($this->version);
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
	
	// Retorna array com a listagem //
	public function get_myclick_list_array() {
		return ($this->myclick_list_array);
	}
	

	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega a informacao a partir da base de dados //
	public function load($system_db,$var_id) {
		
		$this->error = false;
		$sql = ("SELECT 		
					myclick_head.id,
					myclick_head.name, 
					myclick_head.url, 
					myclick_head.method, 
					myclick_head.cat,
					myclick_head.active,
					myclick_head.version,
					myclick_head.enabled,
					myclick_head.insert_time,
					myclick_head.insert_user
				FROM 
					myclick_head 
				WHERE
					myclick_head.id = '".$var_id."'
				");
		$rs = $system_db->execute ( $sql );

		if ($row = $system_db->get_row ( $rs )) {
			$this->id = $row->id;
			$this->name = $row->name;
			$this->url = $row->url;
			$this->method = $row->method;
			$this->cat = $row->cat;
			$this->active = $row->active;
			$this->version = $row->version;
			$this->enabled = $row->enabled;
			$this->insert_time = $row->insert_time;
			$this->insert_user = $row->insert_user;
			
			if($this->showDetail){
				$this->load_myclick_detail($system_db,$this->id);
			}
			
			return (true);
		}
		
		// Error
		/*Handle Error*/
		if($system_db->get_error()){
			$this->error = $system_db->get_error ();
			return (false);
		}else{
			return (true);
		}
	}
	private function load_myclick_detail($system_db,$detail_id){
		$this->error = false;
		
		$sql = ("SELECT 		
					myclick_detail.id,
					myclick_detail.fk_myclick_head
				FROM 
					myclick_detail 
				WHERE
					myclick_detail.fk_myclick_head = '".$detail_id."'
				");
		$rs = $system_db->execute ( $sql );
		
		while($row = $system_db->get_row ( $rs )) {
			$obj_myclick_detail_list = new myclick_detail($system_db,$row->id);
			$this->mygest_myclick_detail[] = $obj_myclick_detail_list; 
		}

		
		
		//$this->mygest_myclick_detail[];
	}
	
	// Destructor //
	public function __destruct() {
	}
}

?>