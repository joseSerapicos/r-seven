<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: payme_head.class.php
|  PATH: classes
|  DESCRIPTION: Classe da payme_head (DB: cliente)
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 03MAR2014
|  MODIFICATION DATE: -
|____________________________________________________________*/


class payme_head {
	private $id;
	private $description;
	private $email;
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
	public function __construct1($var_id) {
		
		$this->id = $var_id;
		
	}
	
	// ////////////////
	// Set methods //
	// //////////////
	
	// ////////////////
	// Get methods //
	// //////////////

	public function get_id() {
		return ($this->id);
	}
	public function get_description() {
		return ($this->description);
	}
	public function get_email() {
		return ($this->email);
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
	public function load($user_db) {
		$this->error = false;
		$sql = ("SELECT 
					-- payme_head.id,
					payme_head.description,
					payme_head.email,
					payme_head.insert_time,
					payme_head.insert_user,
					payme_head.enabled
				FROM 
					payme_head
				WHERE
					payme_head.id = ".addslashes($this->id)."
				");
		$rs = $user_db->execute ( $sql );
		if ($row = $user_db->get_row ( $rs )) {
			//$this->id = $row->id;
			$this->description = $row->description;
			$this->email = $row->email;
			$this->insert_time = $row->insert_time;
			$this->insert_user = $row->insert_user;
			$this->enabled = $row->enabled;
			
			/*
			$this->load_users_detail($system_db,$user_db);
			
			//print "system:";print_r($sytem_db);
			$this->load_mygest_myclick_head($system_db);
			*/
			return (true);
		}
		
		// Error
		$this->error = $user_db->get_error ();
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
					payme_head
				WHERE
					payme_head.id = ".addslashes( $this->id ));
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