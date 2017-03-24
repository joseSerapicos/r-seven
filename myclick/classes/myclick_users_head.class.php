<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: myclick_users_head.class.php
|  PATH: classes
|  DESCRIPTION: Classe da myclick_users_head parte do cliente
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 14JAN2014
|  MODIFICATION DATE: 10ABRIL2014
|____________________________________________________________*/


class myclick_users_head {
	private $id;
	private $fk_stores;
	private $fk_mygest_myclick_head;
	private $description;
	private $version;
	private $enabled;
	
	private $users_detail;
	private $mygest_myclick_head;
	/*Carregar aqui os dados system_head*/
	
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
		
		//$this->id = $var_id;
		//$this->load($system_db,$user_db);
		
	}
	
	// ////////////////
	// Set methods //
	// //////////////
	public function set_id($value){
		$this->id = $value;
	}
	public function set_fk_users($value){
		$this->fk_users = $value;
	}
	public function set_fk_stores($value){
		$this->fk_stores = $value;
	}
	public function set_fk_mygest_myclick_head($value){
		$this->fk_mygest_myclick_head = $value;
	}
	public function set_description($value){
		$this->description = $value;
	}
	public function set_version($value){
		$this->version = $value;
	}
	public function set_enabled($value){
		$this->enabled = $value;
	}
		
	// ////////////////
	// Get methods //
	// //////////////
	
	// Retorna id do myclick_head//
	public function get_id() {
		return ($this->id);
	}
	public function get_fk_users() {
		return ($this->fk_users);
	}
	public function get_fk_stores() {
		return ($this->fk_stores);
	}
	public function get_fk_mygest_myclick_head() {
		return ($this->fk_mygest_myclick_head);
	}
	public function get_description() {
		return ($this->description);
	}
	public function get_version() {
		return ($this->version);
	}
	public function get_enabled() {
		return ($this->enabled);
	}
	
	public function myclick_users_head_get_list_array() {
		return ($this->myclick_list_array);
	}
	public function head_list_array() {
		return ($this->head_list_array);
	}
	
	public function get_mygest_myclick_head(){
		return ($this->mygest_myclick_head);
	}
	
	public function get_users_detail(){
		return ($this->users_detail);
	}
	
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega a informacao a partir da base de dados //
	public function load($system_db,$user_db) {
		$this->error = false;
		$sql = ("SELECT 
					-- myclick_users_head.id,
					myclick_users_head.fk_users,
					myclick_users_head.fk_stores,
					myclick_users_head.fk_mygest_myclick_head,
					myclick_users_head.description,
					myclick_users_head.version,
					myclick_users_head.enabled 
				FROM 
					myclick_users_head 
				WHERE 
					myclick_users_head.id = ".$this->id."
				");
		$rs = $user_db->execute ( $sql );
		if ($row = $user_db->get_row ( $rs )) {
			//$this->id = $row->id;
			$this->fk_users 				= $row->fk_users;
			$this->fk_stores 				= $row->fk_stores;
			$this->fk_mygest_myclick_head 	= $row->fk_mygest_myclick_head;
			$this->description 				= $row->description;
			$this->version 					= $row->version;
			$this->enabled 					= $row->enabled;
			
			$this->load_users_detail($system_db,$user_db);
			
			//print "system:";print_r($sytem_db);
			$this->load_mygest_myclick_head($system_db);
			
			return (true);
		}
		
		// Error
		$this->error = $user_db->get_error ();
		return (false);
	}
	private function load_mygest_myclick_head($system_db) {
		
		$this->error = false;

		$ob_myclick_head = new myclick_head();
		$ob_myclick_head->load($system_db,$this->fk_mygest_myclick_head);
		$this->mygest_myclick_head = $ob_myclick_head;
		
		// Error
		$this->error = $system_db->get_error ();
		return (false);
	}
	
	private function load_users_detail($system_db,$user_db) {
		$this->error = false;
		
		$this->users_detail = array();
		
		$sql = ("SELECT 
					myclick_users_detail.id
				FROM 
					myclick_users_detail
				WHERE
					myclick_users_detail.fk_myclick_users_head = '".$this->id."'
				");
		$rs = $user_db->execute ( $sql );
		
		while($row = $user_db->get_row ( $rs )) {
			$obj_user_detail = new myclick_users_detail();
			$obj_user_detail->set_id($row->id);
			$obj_user_detail->load_spec($system_db,$user_db);
			
			$this->users_detail[] = $obj_user_detail; 
		}
		
		// Error
		$this->error = $user_db->get_error ();
		return (false);
	}
	
	// Guarda a informacao na base de dados //
	public function save($var_db) {
		$this->error = false;
	
		if(empty($this->id)) {
			$sql = ("INSERT INTO 
						myclick_users_head 
							(myclick_users_head.fk_users,
							myclick_users_head.fk_stores,
							myclick_users_head.fk_mygest_myclick_head,
							myclick_users_head.description,
							myclick_users_head.version,
							myclick_users_head.enabled
							) 
					VALUES 
						('".addslashes($this->fk_users)."',
						'".addslashes($this->fk_stores)."',
						'".addslashes($this->fk_mygest_myclick_head)."',
						'".addslashes($this->description)."',
						'".addslashes($this->version)."',
						'".addslashes($this->enabled)."'
						)");
		}
		else {
			$sql = ("UPDATE 
						myclick_users_head 
					SET 
						myclick_users_head.fk_users = '".addslashes($this->fk_users)."',
						myclick_users_head.fk_stores = '".addslashes($this->fk_stores)."',
						myclick_users_head.fk_mygest_myclick_head = '".addslashes($this->fk_mygest_myclick_head)."',
						myclick_users_head.description = '".addslashes($this->description)."',
						myclick_users_head.version = '".addslashes($this->version)."',
						myclick_users_head.enabled = '".addslashes($this->enabled)."'  
					WHERE 
						myclick_users_head.id = '".addslashes($this->id)."'");
		}
		$rs = $var_db->execute($sql);
		return (true);
	}
	
	// Elimina registo da base de dados //
	public function delete($var_db) {

		$this->error = false;
	
		$sql = ("DELETE FROM 
					myclick_users_head 
				WHERE 
					myclick_users_head.id = '".addslashes($this->id)."'");
		$rs = $var_db->execute($sql);
			
		// Error
		$this->error = $var_db->get_error();
		if($this->error) return(false);
		
		return (true);
	}
	
	
	// Destructor //
	public function __destruct() {
	}
}

?>