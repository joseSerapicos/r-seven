<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: payme_head.class.php
|  PATH: classes
|  DESCRIPTION: Classe da payme_users_head (DB: cliente)
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 21MAR2014
|  MODIFICATION DATE: 26MAR2014
|____________________________________________________________*/


class payme_users_head {
	private $id;
	private $fk_stores;
	private $description;
	private $email;
	private $total;
	private $currency_code;
	private $status;
	private $status_desc;
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
			
		$this->id = false;
		$this->fk_stores = false;
		$this->description = false;
		$this->email = false;
		$this->total = false;
		$this->currency_code = false;
		$this->status = false;
		$this->status_desc = false;
		$this->insert_time = false;
		$this->insert_user = false;
		$this->enabled = "1";
	}
	
	// ////////////////
	// Set methods //
	// //////////////
	public function set_id($var_id) {
		$this->id = $var_id;
	}
	public function set_fk_stores($var_id) {
		$this->fk_stores = $var_id;
	}
	public function set_description($var_id) {
		$this->description = $var_id;
	}
	public function set_email($var_id) {
		$this->email = $var_id;
	}
	public function set_total($var_id) {
		$this->total = $var_id;
	}
	public function set_currency_code($var_id) {
		$this->currency_code = $var_id;
	}
	public function set_status($var_id) {
		$this->status = $var_id;
	}
	public function set_status_desc($var_id) {
		$this->status_desc = $var_id;
	}
	public function set_insert_time($var_id) {
		$this->insert_time = $var_id;
	}
	public function set_insert_user($var_id) {
		$this->insert_user = $var_id;
	}
	public function set_enabled($var_enabled) {
		$this->enabled = $var_enabled;
	}
	
	// ////////////////
	// Get methods //
	// //////////////

	public function get_id() {
		return ($this->id);
	}
	public function get_fk_stores() {
		return ($this->fk_stores);
	}
	public function get_description() {
		return ($this->description);
	}
	public function get_email() {
		return ($this->email);
	}
	public function get_total() {
		return ($this->total);
	}
	public function get_currency_code() {
		return ($this->currency_code);
	}
	public function get_status() {
		return ($this->status);
	}
	public function get_status_desc() {
		return ($this->status_desc);
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
	public function get_error() {
		return ($this->enabled);
	}
	
	
	// ////////////////
	// All methods //
	// //////////////

	// Carrega a informacao a partir da base de dados //
	public function load($user_db) {
		$this->error = false;
		if($this->id){
			$sql_where_id = " AND payme_users_head.id = '".$this->id."'";
		}

		$sql = ("SELECT 
					payme_users_head.id,
					payme_users_head.fk_stores,
					payme_users_head.description,
					payme_users_head.email,
					payme_users_head.total,
					payme_users_head.currency_code,
					payme_users_head.status,
					payme_users_head.status_desc,
					payme_users_head.insert_time,
					payme_users_head.insert_user,
					payme_users_head.enabled 
				FROM 
					payme_users_head 
				WHERE 
					payme_users_head.enabled = '".$this->enabled."'
					$sql_where_id 
				");
		$rs = $user_db->execute ( $sql );
		if ($row = $user_db->get_row ( $rs )) {
			
			$this->id 				= $row->id;
			$this->fk_stores 		= $row->fk_stores;
			$this->description 		= $row->description;
			$this->email 			= $row->email;
			$this->total 			= $row->total;
			$this->currency_code 	= $row->currency_code;
			$this->status 			= $row->status;
			$this->status_desc 		= $row->status_desc;
			$this->insert_time 		= $row->insert_time;
			$this->insert_user 		= $row->insert_user;
			$this->enabled 			= $row->enabled;
			
			/*
			$this->load_users_detail($system_db,$user_db);
			
			//print "system:";print_r($sytem_db);
			$this->load_mygest_myclick_head($system_db);
			*/
			$this->error = false;
			return (true);
		}else{ //se nao existe mete eliminado
			$this->status = "D"; 
			$this->error = "ERR: Empty";	
			return (false);
		}		
		// Error
		$this->error = $user_db->get_error ();
		
		return (false);
	}
	
		// Guarda a informacao na base de dados //
	public function save($var_db) {
		$this->error = false;
		
		if(empty($this->id)) {
			// INSERT	(".(empty($this->fk_development_file_system)?"NULL":("'".addslashes($this->fk_development_file_system)."'")).",
			
			$sql = ("INSERT INTO 
						payme_users_head 
							(payme_users_head.fk_stores,
							payme_users_head.description,
							payme_users_head.email,
							payme_users_head.total,
							payme_users_head.currency_code,
							payme_users_head.status,
							payme_users_head.status_desc,
							payme_users_head.insert_time,
							payme_users_head.insert_user,
							payme_users_head.enabled,
							) 
					VALUES 
						('".addslashes($this->fk_stores)."',
						'".addslashes($this->description)."',
						'".addslashes($this->email)."',
						'".addslashes($this->total)."',
						'".addslashes($this->currency_code)."',
						'".addslashes($this->status)."',
						'".addslashes($this->status_desc)."',
						CURRENT_TIMESTAMP(),
						'".addslashes($this->insert_user)."',
						'".addslashes($this->enabled)."'
						)");
		}
		else {
			
			// UPDATE	
			$sql = ("UPDATE 
						payme_users_head 
					SET 
						payme_users_head.fk_stores = '".addslashes($this->fk_stores)."',
						payme_users_head.description = '".addslashes($this->description)."',
						payme_users_head.email = '".addslashes($this->email)."',
						payme_users_head.total = '".addslashes($this->total)."',
						payme_users_head.currency_code = '".addslashes($this->currency_code)."',
						payme_users_head.status = '".addslashes($this->status)."',
						payme_users_head.status_desc = '".addslashes($this->status_desc)."',
						payme_users_head.enabled = '".addslashes($this->enabled)."' 
					WHERE 
						payme_users_head.id = '".addslashes($this->id)."'");
		}
		$rs = $var_db->execute($sql);
		
		return(true);
	}
	
	// Elimina registo da base de dados //
	public function delete($system_db) {
				
		$this->error = false;
	
		$sql = ("DELETE FROM 
					payme_users_head 
				WHERE 
					payme_users_head.id = ".addslashes( $this->id ));
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