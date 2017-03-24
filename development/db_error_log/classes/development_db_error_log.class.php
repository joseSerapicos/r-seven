<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: development_db_error_log.class.php
|  PATH: classes
|  DESCRIPTION: Classe para interaccao com a tabela development_db_error_log
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class development_db_error_log {
	
	private $id;
	private $sql_error;
	private $sql;
	private $db_host;
	private $db_name;
	private $db_username;
	private $insert_time;
	
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
		$this->sql_error = false;
		$this->sql = false;
		$this->db_host = false;
		$this->db_name = false;
		$this->db_username = false;
		$this->insert_time = false;
		
		$this->error = false;
	}
	
	// 1 Args //
	public function __construct1($var_id) {
		$this->id = $var_id;
		$this->sql_error = false;
		$this->sql = false;
		$this->db_host = false;
		$this->db_name = false;
		$this->db_username = false;
		$this->insert_time = false;
		
		$this->error;
	}

	
	// ////////////////
	// Set methods //
	// //////////////
	
	// Atribui id //
	public function set_id($var_id) {
		$this->id = $var_id;
	}
	
	
	// ////////////////
	// Get methods //
	// //////////////
	
	// Retorna id //
	public function get_id() {
		return ($this->id);
	}
	
	// Retorna sql error //
	public function get_sql_error() {
		return ($this->sql_error);
	}
	
	// Retorna sql //
	public function get_sql() {
		return ($this->sql);
	}
	
	// Retorna db host //
	public function get_db_host() {
		return ($this->db_host);
	}
	
	// Retorna db name //
	public function get_db_name() {
		return ($this->db_name);
	}
	
	// Retorna db username //
	public function get_db_username() {
		return ($this->db_username);
	}
	
	// Retorna insert_time //
	public function get_insert_time() {
		return ($this->insert_time);
	}
	
	// Retorna error //
	public function get_error() {
		return ($this->error);
	}
	
	
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega a informacao a partir da base de dados //
	public function load($var_db) {
		$this->error = false;
		
		$sql = ("SELECT  
					development_db_error_log.sql_error,
					development_db_error_log.sql,
					development_db_error_log.db_host,
					development_db_error_log.db_name,
					development_db_error_log.db_username,
					development_db_error_log.insert_time
				FROM 
					development_db_error_log 
				WHERE 
					development_db_error_log.id = " . addslashes ( $this->id ));
		$rs = $var_db->execute ( $sql );
		if ($row = $var_db->get_row ( $rs )) {
			$this->sql_error = $row->sql_error;
			$this->sql = $row->sql;
			$this->db_host = $row->db_host;
			$this->db_name = $row->db_name;
			$this->db_username = $row->db_username;
			$this->insert_time = $row->insert_time;
			
			return (true);
		}
		
		// Error
		$this->error = $var_db->get_error ();
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
	public function delete($var_db) {
		$this->error = false;
	
		$sql = ("DELETE FROM
					development_db_error_log
				WHERE
					development_db_error_log.id = ".addslashes( $this->id ));
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