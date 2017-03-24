<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: development_file_system_array.class.php
|  PATH: classes
|  DESCRIPTION: Classe com todos os registos da tabela development_file_system
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class development_file_system_array {
	
	private $development_file_system_array;
	private $load_description;
	
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
	public function __construct1($var_db) {
		$this->development_file_system_array = array();
		$this->load_description = true;
				
		$this->error = false;
		
		$this->load($var_db);
	}	
	
	
	// ////////////////
	// Get methods //
	// //////////////
	
	// Retorna development_file_system_array //
	public function get_development_file_system_array() {
		return ($this->development_file_system_array);
	}
	
	// Retorna error //
	public function get_error() {
		return ($this->error);
	}
	
	//////////////////
	// Set methods //
	////////////////
	
	// Atribui load_description //
	public function set_load_description($var_load_description) {
		$this->load_description = $var_load_description;
	}
	
	
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega a informacao a partir da base de dados //
	private function load($var_db) {
		
		// Carrega registos da raiz (fk_development_file_system IS NULL)
		$sql = ("SELECT
					development_file_system.id
				FROM 
					development_file_system 
				WHERE 
					development_file_system.fk_development_file_system IS NULL
				ORDER BY development_file_system.name ASC");
		$rs = $var_db->execute ( $sql );
		while($row = $var_db->get_row ( $rs )) {
			$obj_development_file_system = new development_file_system($row->id);
			if($this->load_description)
			{
				$obj_development_file_system->load($var_db);
			}
			else
			{
				$obj_development_file_system->load_without_description($var_db);	
			}
			$development_file_system = array();
			$development_file_system['obj'] = $obj_development_file_system;
			$development_file_system['children'] = $this->load_children($row->id, $var_db);
			$this->development_file_system_array[] = $development_file_system;
		}
		
		return (true);
	}
	
	// Retorna file_system_children (directorios e ficheiros filho) //
	private function load_children($var_parent_id, $var_db) {

		$development_file_system_children_array = array();

		$sql = ("SELECT
					development_file_system.id
				FROM 
					development_file_system 
				WHERE 
					development_file_system.fk_development_file_system = ".addslashes($var_parent_id)."
				ORDER BY development_file_system.name ASC");
		$rs = $var_db->execute ( $sql );
		while($row = $var_db->get_row ( $rs )) {
			$obj_development_file_system = new development_file_system($row->id);
			if($this->load_description)
			{
				$obj_development_file_system->load($var_db);
			}
			else
			{
				$obj_development_file_system->load_without_description($var_db);	
			}
			$development_file_system_children = array();
			$development_file_system_children['obj'] = $obj_development_file_system;
			$development_file_system_children['children'] = $this->load_children($row->id, $var_db);
			$development_file_system_children_array[] = $development_file_system_children;
		}
		
		return ($development_file_system_children_array);
	}
	
	
	// Destructor //
	public function __destruct() {
	}
}

?>