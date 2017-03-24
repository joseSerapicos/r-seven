<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: payme_users_detail.class.php
|  PATH: classes
|  DESCRIPTION: Classe da payme_users_detail (DB: cliente)
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 24MAR2014
|  MODIFICATION DATE: -
|____________________________________________________________*/


class payme_users_detail {
	private $id;
	private $fk_payme_users_head;
	private $fk_mygest_payme_type;
	private $type;
	private $code;
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
		$this->fk_payme_users_head = false;
		$this->fk_mygest_payme_type = false;
		$this->type = false;
		$this->code = false;
		$this->enabled = "1";
	}
	
	// ////////////////
	// Set methods //
	// //////////////
	public function set_id($var_id) {
		$this->id = $var_id;
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
	public function get_fk_payme_users_head() {
		return ($this->fk_payme_users_head);
	}
	public function get_fk_mygest_payme_type() {
		return ($this->fk_mygest_payme_type);
	}
	public function get_type() {
		return ($this->type);
	}
	public function get_code() {
		return ($this->code);
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
			$sql_where_id = " AND payme_users_detail.id = '".$this->id."'";
		}

		$sql = ("SELECT 
					payme_users_detail.id,
					payme_users_detail.fk_payme_users_head,
					payme_users_detail.fk_mygest_payme_type,
					payme_users_detail.type,
					payme_users_detail.code,
					payme_users_detail.enabled
				FROM 
					payme_users_detail
				WHERE
					payme_users_detail.enabled = '".$this->enabled."'
					$sql_where_id 
				");
		$rs = $user_db->execute ( $sql );
		if ($row = $user_db->get_row ( $rs )) {
			
			$this->id 					= $row->id;
			$this->fk_payme_users_head 	= $row->fk_payme_users_head;
			$this->fk_mygest_payme_type = $row->fk_mygest_payme_type;
			$this->type 				= $row->type;
			$this->code 				= $row->code;
			$this->enabled 				= $row->enabled;
			
			$this->error = false;
			return (true);
		}
		
		// Error
		$this->error = $user_db->get_error ();
		$this->error = "ERR";
		return (false);
	}
	
		// Guarda a informacao na base de dados //
	public function save($var_db) {
		$this->error = false;
	
		if($this->id) {
			// UPDATE	
		}
		else {
			// INSERT
		}
		
		return (true);
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