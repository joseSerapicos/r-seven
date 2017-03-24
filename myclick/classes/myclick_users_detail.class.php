<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: myclick_users_config.class.php
|  PATH: classes
|  DESCRIPTION: Classe da myclick_users_config parte do cliente
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 14JAN2014
|  MODIFICATION DATE: 10ABRIL2014
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
	public function __construct1($var_id) {

		$this->id = $var_id;
 		//$this->load($system_db,$user_db);
		
		$this->error = false;
	}
	
	// ////////////////
	// Set methods //
	// //////////////
	public function set_id($value){
		$this->id = $value;
	}
	public function set_fk_myclick_users_head($value){
		$this->fk_myclick_users_head = $value;
	}
	public function set_fk_mygest_myclick_detail($value){
		$this->fk_mygest_myclick_detail = $value;
	}
	public function set_value($value){
		$this->value = $value;
	}
	public function set_insert_time($value){
		$this->insert_time = $value;
	}
	public function set_insert_user($value){
		$this->insert_user = $value;
	}

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
	
	public function load($system_db,$user_db) {
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
		
		$obj_myclick_detail_list = new myclick_detail();
		$obj_myclick_detail_list->set_id($fk_mygest_myclick_detail);
		$obj_myclick_detail_list->load($system_db);
		$this->mygest_myclick_detail = $obj_myclick_detail_list; 
		
		//$this->mygest_myclick_detail = "xpto";
		
		// Error
		$this->error = $system_db->get_error ();
		return (false);
		}
	
	// Guarda a informacao na base de dados //
	public function save($var_db) {
		$this->error = false;
		
		if(empty($this->id)) {
			// INSERT	(".(empty($this->fk_development_file_system)?"NULL":("'".addslashes($this->fk_development_file_system)."'")).",
			
			$sql = ("INSERT INTO 
						myclick_users_detail 
							(myclick_users_detail.fk_myclick_users_head,
							myclick_users_detail.fk_mygest_myclick_detail,
							myclick_users_detail.value,
							myclick_users_detail.insert_time,
							myclick_users_detail.insert_user
							) 
					VALUES 
						('".addslashes($this->fk_myclick_users_head)."',
						'".addslashes($this->fk_mygest_myclick_detail)."',
						'".addslashes($this->value)."',
						CURRENT_TIMESTAMP(),
						'".addslashes($this->insert_user)."'
						)");
		}
		else {	
			// UPDATE	
			$sql = ("UPDATE 
						myclick_users_detail 
					SET 
						myclick_users_detail.fk_myclick_users_head = '".addslashes($this->fk_myclick_users_head)."',
						myclick_users_detail.fk_mygest_myclick_detail = '".addslashes($this->fk_mygest_myclick_detail)."',
						myclick_users_detail.value = '".addslashes($this->value)."' 
					WHERE 
						myclick_users_detail.id = '".addslashes($this->id)."'");
		}
		$rs = $var_db->execute($sql);
		
		return(true);
	}
	// Elimina registo da base de dados //
	public function delete($system_db) {
		
		$this->error = false;
	
		$sql = ("DELETE FROM 
					myclick_users_detail 
				WHERE 
					myclick_users_detail.id = ".addslashes( $this->id ));
		$rs = $system_db->execute($sql);
		
		
	
		// Error
		$this->error = $system_db->get_error();
		if($this->error) return(false);
		
		return (true);
	}
	
	// Destructor //
	public function __destruct() {
	}
}

?>