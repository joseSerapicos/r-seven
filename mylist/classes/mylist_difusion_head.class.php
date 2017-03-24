<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: mylist_difusion_head.class.php
|  PATH: classes
|  DESCRIPTION: Classe da mylist_difusion_head
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 17ABR2014
|  MODIFICATION DATE: -
|____________________________________________________________*/


class mylist_difusion_head {
	private $id;
	private $title;
	private $body;
	private $difusion_date;
	private $status;
	private $insert_time;
	private $insert_user;
	private $enabled;
	
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
	public function set_title($value){
		$this->title = $value;
	}
	public function set_body($value){
		$this->body = $value;
	}
	public function set_difusion_date($value){
		$this->difusion_date = $value;
	}
	public function set_status($value){
		$this->status = $value;
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
	public function get_title() {
		return ($this->title);
	}
	public function get_body() {
		return ($this->body);
	}
	public function get_difusion_date() {
		return ($this->difusion_date);
	}
	public function get_status() {
		return ($this->status);
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
					mylist_difusion_head.id,
					mylist_difusion_head.title,
					mylist_difusion_head.body,
					mylist_difusion_head.difusion_date,
					mylist_difusion_head.status,
					mylist_difusion_head.insert_time,
					mylist_difusion_head.insert_user,
					mylist_difusion_head.enabled 
				FROM 
					mylist_difusion_head 
				WHERE 
					mylist_difusion_head.id = '".$difusion_list_id."' 
					AND mylist_difusion_head.enabled = '".$this->enabled."'
				");
		$rs = $user_db->execute ( $sql );
		if ($row = $user_db->get_row ( $rs )) {
			
			$this->id 				= $row->id;
			$this->title 			= $row->title;
			$this->body 			= $row->body;
			$this->difusion_date	= $row->difusion_date;
			$this->status 			= $row->status;
			$this->insert_time 		= $row->insert_time;
			$this->insert_user 		= $row->insert_user;
			$this->enabled 			= $row->enabled;
			
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
						mylist_difusion_head 
							(mylist_difusion_head.title,
							mylist_difusion_head.body,
							mylist_difusion_head.difusion_date,
							mylist_difusion_head.status,
							mylist_difusion_head.insert_time,
							mylist_difusion_head.insert_user,
							mylist_difusion_head.enabled
							) 
					VALUES 
						('".addslashes($this->title)."',
						'".addslashes($this->body)."',
						'".addslashes($this->difusion_date)."',
						'".addslashes($this->status)."',
						CURRENT_TIMESTAMP(),
						'".addslashes($this->insert_user)."',
						'".addslashes($this->enabled)."'
						)");
		}else{
	
			$sql = ("UPDATE 
						mylist_difusion_head 
					SET 
						mylist_difusion_head.title = '".addslashes($this->title)."',
						mylist_difusion_head.body = '".addslashes($this->body)."',
						mylist_difusion_head.difusion_date = '".addslashes($this->difusion_date)."',
						mylist_difusion_head.status = '".addslashes($this->status)."',
						mylist_difusion_head.enabled = '".addslashes($this->enabled)."'  
					WHERE 
						mylist_difusion_head.id = '".addslashes($this->id)."'");
		}
		$rs = $var_db->execute($sql);
		return (true);
	}
	
	// Elimina registo da base de dados //
	public function delete($var_db) {

		$this->error = false;
	
		$sql = ("DELETE FROM 
					mylist_difusion_head 
				WHERE 
					mylist_difusion_head.id = '".addslashes($this->id)."'");
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