<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: icon.class.php
|  PATH: classes/development/framework
|  DESCRIPTION: Classe para interaccao com a tabela icons
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class icon {
	
	private $id;
	private $name;
	private $insert_time;
	private $insert_user;
	
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
	
	// 1 Arg //
	public function __construct1($var_id) {
		$this->id = $var_id;
		$this->name = false;
		$this->insert_time = false;
		$this->insert_user = false;
		
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
	
	public function get_id() {
		return ($this->id);
	}
	
	public function get_name() {
		return ($this->name);
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
	
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega a informacao a partir da base de dados //
	public function load($var_db) {
		$this->error = false;
		
		$sql = ("SELECT  
					icons.name,
					icons.insert_time,
					icons.insert_user
				FROM 
					icons 
				WHERE 
					icons.id = '".addslashes($this->id)."'");
		$rs = $var_db->execute ( $sql );
		if ($row = $var_db->get_row ( $rs )) {
			$this->name = $row->name;
			$this->insert_time = $row->insert_time;
			$this->insert_user = $row->insert_user;
			
			return (true);
		}
		
		// Error
		$this->error = $var_db->get_error ();
		return (false);
	}
	
	
	// Destructor //
	public function __destruct() {
	}
}
?>