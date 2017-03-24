<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: myfiles_users.class.php
|  PATH: classes
|  DESCRIPTION: Classe da myfiles_users (DB: cliente)
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 02ABRIL2014
|  MODIFICATION DATE: -
|____________________________________________________________*/


class myfiles_users {
	private $id;
	private $file_path;
	private $filename;
	private $file_size;
	private $external_access;
	//private $insert_user;
	//private $insert_time;
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
		$this->file_path = false;
		$this->filename = false;
		$this->file_size = false;
		$this->external_access = false;
		$this->enabled = "1";
	}
	
	// ////////////////
	// Set methods //
	// //////////////
	public function set_id($var_id) {
		$this->id = $var_id;
	}
	
	public function set_file_path($var_id) {
		$this->file_path = $var_id;
	}
	public function set_filename($var_id) {
		$this->filename = $var_id;
	}
	public function set_file_size($var_id) {
		$this->file_size = $var_id;
	}
	public function set_external_access($var_id) {
		$this->external_access = $var_id;
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
	public function get_file_path() {
		return ($this->file_path);
	}
	public function get_filename() {
		return ($this->filename);
	}
	public function get_file_size() {
		return ($this->file_size);
	}
	public function get_external_access() {
		return ($this->external_access);
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
			$sql_where_id = " AND myfiles_users.id = '".$this->id."'";
		}

		$sql = ("SELECT 
					myfiles_users.id,
					myfiles_users.file_path,
					myfiles_users.filename,
					myfiles_users.file_size,
					myfiles_users.external_access,
					myfiles_users.insert_time,
					myfiles_users.insert_user,
					myfiles_users.enabled
				FROM 
					myfiles_users
				WHERE
					myfiles_users.enabled = '".$this->enabled."'
					$sql_where_id 
				");
		$rs = $user_db->execute ( $sql );
		if ($row = $user_db->get_row ( $rs )) {
			
			$this->id 				= $row->id;
			$this->file_path 		= $row->file_path;
			$this->filename 		= $row->filename;
			$this->file_size 		= $row->file_size;
			$this->external_access 	= $row->external_access;
			$this->insert_time 		= $row->insert_time;
			$this->insert_user 		= $row->insert_user;
			$this->enabled 			= $row->enabled;
			
			$this->error = false;
			return (true);
		}else{ //se nao existe mete eliminado
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
						myfiles_users
							(myfiles_users.file_path,
							myfiles_users.filename,
							myfiles_users.file_size,
							myfiles_users.external_access,
							myfiles_users.insert_time,
							myfiles_users.insert_user,
							myfiles_users.enabled,
							)
					VALUES
						('".addslashes($this->file_path)."',
						'".addslashes($this->filename)."',
						'".addslashes($this->file_size)."',
						'".addslashes($this->external_access)."',
						CURRENT_TIMESTAMP(),
						'".addslashes($this->insert_user)."',
						'".addslashes($this->enabled)."'
						)");
		}
		else {
			
			// UPDATE	
			$sql = ("UPDATE
						myfiles_users
					SET
						myfiles_users.file_path = '".addslashes($this->file_path)."',
						myfiles_users.filename = '".addslashes($this->filename)."',
						myfiles_users.file_size = '".addslashes($this->file_size)."',
						myfiles_users.external_access = '".addslashes($this->external_access)."',
						myfiles_users.enabled = '".addslashes($this->enabled)."'
					WHERE
						myfiles_users.id = '".addslashes($this->id)."'");
		}
		$rs = $var_db->execute($sql);
		
		return(true);
	}
	
	// Elimina registo da base de dados //
	public function delete($system_db) {
				
		$this->error = false;
	
		$sql = ("DELETE FROM
					myfiles_users
				WHERE
					myfiles_users.id = ".addslashes( $this->id ));
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