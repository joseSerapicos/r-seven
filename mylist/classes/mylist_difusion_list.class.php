<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: mylist_difusion_list.class.php
|  PATH: classes
|  DESCRIPTION: Classe da mylist_difusion_list listagem dos emails existenes
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 27FEV2014
|  MODIFICATION DATE: -
|____________________________________________________________*/


class mylist_difusion_list {
	private $id;
	private $email;
	private $reference_1; //referencia
	private $reference_2;
	private $insert_time;
	private $insert_user;
	private $enabled;
	
	//private $users_detail;
	//private $mygest_myclick_head;

	
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
		
		$this->enabled = "1";
		
	}
	
	// ////////////////
	// Set methods //
	// //////////////
	public function set_id($value){
		$this->id = $value;
	}
	public function set_email($value){
		$this->email = $value;
	}
	public function set_reference_1($value){
		$this->reference_1 = $value;
	}
	public function set_reference_2($value){
		$this->reference_2 = $value;
	}
	public function set_insert_time($value){
		$this->insert_time = $value;
	}
	public function set_insert_user($value){
		$this->insert_user = $value;
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
	public function get_email() {
		return ($this->email);
	}
	public function get_reference_1() {
		return ($this->reference_1);
	}
	public function get_reference_2() {
		return ($this->reference_2);
	}
	public function get_insert_time() {
		return ($this->insert_time);
	}
	public function get_insert_user() {
		return ($this->insert_user);
	}
	public function get_enabled() {
		return ($this->enabled);
	}
		
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega a informacao a partir da base de dados //
	public function load($user_db,$difusion_list_id) {
		$this->error = false;
		$sql = ("SELECT 
					mylist_difusion_list.id,
					mylist_difusion_list.email,
					mylist_difusion_list.reference_1,
					mylist_difusion_list.reference_2,
					mylist_difusion_list.insert_time,
					mylist_difusion_list.insert_user,
					mylist_difusion_list.enabled 
				FROM 
					mylist_difusion_list 
				WHERE 
					mylist_difusion_list.id = '".$difusion_list_id."' 
					AND mylist_difusion_list.enabled = '".$this->enabled."'
				");
		$rs = $user_db->execute ( $sql );
		if ($row = $user_db->get_row ( $rs )) {
			$this->id 			= $row->id;
			$this->email 		= $row->email;
			$this->reference_1 	= $row->reference_1;
			$this->reference_2 	= $row->reference_2;
			$this->insert_time 	= $row->insert_time;
			$this->insert_user 	= $row->insert_user;
			$this->enabled 		= $row->enabled;
			
			return (true);
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
						mylist_difusion_list 
							(mylist_difusion_list.email,
							mylist_difusion_list.reference_1,
							mylist_difusion_list.reference_2,
							mylist_difusion_list.insert_time,
							mylist_difusion_list.insert_user,
							mylist_difusion_list.enabled
							) 
					VALUES 
						('".addslashes($this->email)."',
						'".addslashes($this->reference_1)."',
						'".addslashes($this->reference_2)."',
						CURRENT_TIMESTAMP(),
						'".addslashes($this->insert_user)."',
						'".addslashes($this->enabled)."'
						)");
		}else{
	
			$sql = ("UPDATE 
						mylist_difusion_list 
					SET 
						mylist_difusion_list.email = '".addslashes($this->email)."',
						mylist_difusion_list.reference_1 = '".addslashes($this->reference_1)."',
						mylist_difusion_list.reference_2 = '".addslashes($this->reference_2)."',
						mylist_difusion_list.enabled = '".addslashes($this->enabled)."'  
					WHERE 
						mylist_difusion_list.id = '".addslashes($this->id)."'");
		}
		$rs = $var_db->execute($sql);
		return (true);
	}
	
	// Elimina registo da base de dados //
	public function delete($var_db) {

		$this->error = false;
	
		$sql = ("DELETE FROM 
					mylist_difusion_list 
				WHERE 
					mylist_difusion_list.id = '".addslashes($this->id)."'");
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