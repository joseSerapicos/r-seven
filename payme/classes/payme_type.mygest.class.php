<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: payme_type.mygest.php
|  PATH: classes
|  DESCRIPTION: Classe tabelta payme_type (BD: mygest)
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 25MAR2014
|  MODIFICATION DATE: -
|____________________________________________________________*/


class payme_type {
	private $id;
	private $name;
	private $code;
	private $type_desc;
	private $type_system;
	private $require_id;
	private $require_pass;
	private $require_email;
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
		$this->name = false;
		$this->code = false;
		$this->type_desc = false;
		$this->type_system = false;
		$this->require_id = false;
		$this->require_pass = false;
		$this->require_email = false;
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
	public function set_enabled($var_enabled) {
		$this->enabled = $var_enabled;
	}
	
	// ////////////////
	// Get methods //
	// //////////////

			
	public function get_id() {
		return ($this->id);
	}
	public function get_name() {
		return ($this->name);
	}
	public function get_code() {
		return ($this->code);
	}
	public function get_type_desc() {
		return ($this->type_desc);
	}
	public function get_type_system() {
		return ($this->type_system);
	}
	public function get_require_id() {
		return ($this->require_id);
	}
	public function get_require_pass() {
		return ($this->require_pass);
	}
	public function get_require_email() {
		return ($this->require_email);
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
	public function get_user_enabled() {
		return ($this->user_enabled);
	}
	
	
	
	
	// ////////////////
	// All methods //
	// //////////////

	// Carrega a informacao a partir da base de dados //
	public function load($system_db) {
		$this->error = false;
		if($this->id){
			$sql_where_id = " AND payme_type.id = '".$this->id."'";
		}
			
		$sql = ("SELECT 
					payme_type.id,
					payme_type.name,
					payme_type.code,
					payme_type.type_desc,
					payme_type.type_system,
					payme_type.require_id,
					payme_type.require_pass,
					payme_type.require_email,
					payme_type.insert_time,
					payme_type.insert_user,
					payme_type.enabled
				FROM 
					payme_type
				WHERE
					payme_type.enabled = '".$this->enabled."'
					$sql_where_id 
				");
		$rs = $system_db->execute ( $sql );
		if ($row = $system_db->get_row ( $rs )) {
			
			$this->id 				= $row->id;
			$this->name 			= $row->name;
			$this->code 		= $row->code;
			$this->type_desc 		= $row->type_desc;
			$this->type_system 		= $row->type_system;
			$this->require_id 		= $row->require_id;
			$this->require_pass 	= $row->require_pass;
			$this->require_email 	= $row->require_email;
			$this->insert_time 		= $row->insert_time;
			$this->insert_user 		= $row->insert_user;
			$this->enabled 			= $row->enabled;
			
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
	
	// Carrega a informacao a partir da base de dados do sistema e do cliente //
	public function load_connect($system_db,$client_db) {
		
		/*payme_type - system */
		require_once (dirname(__FILE__)."/payme_type.mygest.class.php");
		
		$this->error = false;
		if($this->id){
			$sql_where_id = " AND payme_type.id = '".$this->id."'";
		}
			
		$sql = ("SELECT 
					payme_type.id,
					payme_type.name,
					payme_type.code,
					payme_type.type_desc,
					payme_type.type_system,
					payme_type.require_id,
					payme_type.require_pass,
					payme_type.require_email,
					payme_type.insert_time,
					payme_type.insert_user,
					payme_type.enabled
				FROM 
					payme_type
				WHERE
					payme_type.enabled = '".$this->enabled."'
					$sql_where_id 
				");
		$rs = $system_db->execute ( $sql );
		if ($row = $system_db->get_row ( $rs )) {
			
			$this->id 				= $row->id;
			$this->name 			= $row->name;
			$this->code 		= $row->code;
			$this->type_desc 		= $row->type_desc;
			$this->type_system 		= $row->type_system;
			$this->require_id 		= $row->require_id;
			$this->require_pass 	= $row->require_pass;
			$this->require_email 	= $row->require_email;
			$this->insert_time 		= $row->insert_time;
			$this->insert_user 		= $row->insert_user;
			$this->enabled 			= $row->enabled;
			
			
			/*Falta implementar se os dados estao preenchidos pelo accesso do modulo dele*/
			$access = true;
			switch ($this->type_system){
				case 'DYNAMIC': //Tipo Dinamicos 
					if($this->require_id && $access){
						$require_id = $row->code."_ID";
						//corre a funcion se der erro = $access = false;
					}
					if($this->require_pass && $access){
						$require_id = $row->code."_PASS";
						//corre a funcion se der erro = $access = false;
					}
					if($this->require_email && $access){
						$require_id = $row->code."_EMAIL";
						//corre a funcion se der erro = $access = false;
					}
				break;
				case 'IDLE': 
				break;
			}
			
			$this->user_enabled  = $access;
			
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
					payme_type
				WHERE
					payme_type.id = ".addslashes( $this->id ));
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