<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: myclick.master.class.php
|  PATH: classes
|  DESCRIPTION: Classe da head do myclick (myclick_head) na principal
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 15JAN2014
|  MODIFICATION DATE: 15JAN2014
|____________________________________________________________*/


class myclick {
	private $enabled;
	
	private $myclick_user_list;
	private $myclick_head_list;
	
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
		$this->showDetail = false; //<- mostra detalhe
		$this->error = false;

	}
	
	
	// ////////////////
	// Set methods //
	// //////////////
	
	/*Usado no load & load_list*/
	public function set_enabled($var_enabled) {
		$this->enabled = $var_enabled;
	}
	/*Usado no load*/
	public function set_myclick_users_head_id($var_myclick_users_head_id) {
		$this->myclick_users_head_id = $var_myclick_users_head_id;
	}
	/*Usado na load_list*/
	public function set_myclick_head_id($var_myclick_head_id) { 
		$this->myclick_users_head_id = $var_myclick_head_id;
	}
	public function set_showDetail($var_showDetail) {
		$this->showDetail = $var_showDetail;
	}
	
	// ////////////////
	// Get methods //
	// //////////////
	
	public function get_myclick_user_list() {
		return ($this->myclick_user_list);
	}
	
	public function get_myclick_head_list() {
		return ($this->myclick_head_list);
	}
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega toda informacao a partir da base de dados com os dados do cliente//
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
			
			$obj_myclick_user_list = new myclick_users_head($row->id);
			$obj_myclick_user_list->load($system_db,$client_db);
			
			$this->myclick_user_list[] = $obj_myclick_user_list; 
		}
		
		
		$this->error = $client_db->get_error ();
		if ($this->error){
			return (true);
		}else{
			return (false);
		}
	}
	// Carrega toda informacao a partir da base de dados //
	public function load_list($system_db, $client_db) {
		/*FUTURO Relacionar com os modulos do cliente*/
		
		$this->error = false;
		
		/*Includes - user_db
		include_once (dirname(__FILE__) . "/myclick_users_head.class.php"); //client_db head
		
		include_once (dirname(__FILE__) . "/myclick_users_detail.class.php"); //client_db detail*/
		
		/*Includes - system_db*/
		include_once (dirname(__FILE__) . "/myclick_head.mygest.class.php"); 
		include_once (dirname(__FILE__) . "/myclick_detail.mygest.class.php"); 
		
		if($this->myclick_head_id){
			$sql_where = " AND myclick_head.id = '".$this->myclick_head_id."'";
			
			
		}
		
		$this->myclick_head_list = array();
		$sql = ("SELECT 
					myclick_head.id
				FROM 
					myclick_head
				WHERE
					myclick_head.enabled = '".$this->enabled."'
					$sql_where
				");
		$rs = $system_db->execute ( $sql );
		
		while($row = $system_db->get_row ( $rs )) {
			$obj_myclick_head_list = new myclick_head();
			
			if($this->showDetail){
				$obj_myclick_head_list->set_showDetail(true); //<- Mostra Detalhe
			}
			$obj_myclick_head_list->load($system_db,$row->id);
			//$myclick_head_list = $obj_myclick_head_list->get_this();//<- busca o objecto
			$this->myclick_head_list[] = $obj_myclick_head_list; 
		}
		
		
		$this->error = $system_db->get_error ();
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