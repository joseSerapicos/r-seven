<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: payme_users_history.class.php
|  PATH: classes
|  DESCRIPTION: Classe da payme_users_history (DB: MyGest Principal)
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 27MAR2014
|  MODIFICATION DATE: -
|____________________________________________________________*/


class payme_users_history {
	private $id;
	private $fk_payme_users_head;
	private $fk_mygest_payme_type;
	private $status;
	private $status_desc;
	
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
		$this->fk_payme_users_history = false;
		$this->fk_mygest_payme_type = false;
		$this->status = false;
		$this->status_desc = false;
	}
	
	// ////////////////
	// Set methods //
	// //////////////
	public function set_id($var_id) {
		$this->id = $var_id;
	}
	public function set_fk_payme_users_head($var_id) {
		$this->fk_payme_users_head = $var_id;
	}
	public function set_fk_mygest_payme_type($var_id) {
		$this->fk_mygest_payme_type = $var_id;
	}
	public function set_status($var_id) {
		$this->status = $var_id;
	}
	public function set_status_desc($var_id) {
		$this->status_desc = $var_id;
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
	public function get_status() {
		return ($this->status);
	}
	public function get_status_desc() {
		return ($this->status_desc);
	}
	
	public function get_error() {
		return ($this->enabled);
	}
	
	
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega a informacao a partir da base de dados //
	public function load($system_db) {
		$this->error = false;

		$sql = ("SELECT 
					payme_users_history.id,
					payme_users_history.fk_payme_users_head,
					payme_users_history.fk_mygest_payme_type,
					payme_users_history.status,
					payme_users_history.status_desc
				FROM 
					payme_users_history
				");
		$rs = $system_db->execute ( $sql );
		if ($row = $system_db->get_row ( $rs )) {

		
			$this->id 					= $row->id;
			$this->fk_payme_users_head 	= $row->fk_payme_users_head;
			$this->fk_mygest_payme_type = $row->fk_mygest_payme_type;
			$this->status 				= $row->status;
			$this->status_desc 			= $row->status_desc;
			/*
			$this->load_users_detail($system_db,$system_db);
			
			//print "system:";print_r($sytem_db);
			$this->load_mygest_myclick_head($system_db);
			*/
			$this->error = false;
			return (true);
		}
		
		// Error
		$this->error = $system_db->get_error ();
		$this->error = "ERR";
		return (false);
	}
	
		// Guarda a informacao na base de dados //
	public function save($var_db) {
		$this->error = false;
		
		if(empty($this->id)) {
			// INSERT	(".(empty($this->fk_development_file_system)?"NULL":("'".addslashes($this->fk_development_file_system)."'")).",
			
			$sql = ("INSERT INTO
						payme_users_history
							(payme_users_history.fk_payme_users_head,
							payme_users_history.fk_mygest_payme_type,
							payme_users_history.status,
							payme_users_history.status_desc,
							payme_users_history.status
							)
					VALUES
						('".addslashes($this->fk_payme_users_head)."',
						'".addslashes($this->fk_mygest_payme_type)."',
						'".addslashes($this->status)."',
						'".addslashes($this->status_desc)."'
						)");
		}
		else {
			
			// UPDATE	
			$sql = ("UPDATE
						payme_users_history
					SET
						payme_users_history.fk_payme_users_head = '".addslashes($this->fk_payme_users_head)."',
						payme_users_history.fk_mygest_payme_type = '".addslashes($this->fk_mygest_payme_type)."',
						payme_users_history.status = '".addslashes($this->status)."',
						payme_users_history.status_desc = '".addslashes($this->status_desc)."'
					WHERE
						payme_users_history.id = '".addslashes($this->id)."'");
		}
		$rs = $var_db->execute($sql);
		
		return(true);
	}
	
	// Elimina registo da base de dados //
	public function delete($system_db) {
				
		$this->error = false;
	
		$sql = ("DELETE FROM
					payme_users_history
				WHERE
					payme_users_history.id = ".addslashes( $this->id ));
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