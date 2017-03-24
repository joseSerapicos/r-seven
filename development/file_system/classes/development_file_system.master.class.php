<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: development_file_system.master.class.php
|  PATH: development/classes/file_system
|  DESCRIPTION: Classe para manipular todos os registos da tabela development_file_system
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class development_file_system_master {
	
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
		$this->error = false;
	}	
	
	
	// ////////////////
	// Get methods //
	// //////////////
	
	// Retorna error //
	public function get_error() {
		return ($this->error);
	}


	// ////////////////
	// All methods //
	// //////////////

	// Carrega a informacao apenas dos registos do tipo folder //
	public function getAllFolder($var_db) {
		
		$output = array();
		
		// Carrega registos da raiz (fk_development_file_system IS NULL)
		$sql = ("SELECT
					development_file_system.id
				FROM 
					development_file_system 
				WHERE 
					development_file_system.type = 'folder'
				ORDER BY development_file_system.name ASC");
		$rs = $var_db->execute ( $sql );
		while($row = $var_db->get_row ( $rs )) {
			$obj_development_file_system = new development_file_system($row->id);
			$obj_development_file_system->load_without_description($var_db);
			$output[] = $obj_development_file_system;
		}
		
		return ($output);
	}
	
	// Carrega a informacao a partir da base de dados //
	public function getAll($var_db) {
		
		$output = array();
		
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
			$obj_development_file_system->load_without_description($var_db);
			$development_file_system = array();
			$development_file_system['obj'] = $obj_development_file_system;
			$development_file_system['children'] = $this->load_children($row->id, $var_db);
			$output[] = $development_file_system;
		}
		
		return ($output);
	}
	
	// Retorna file_system_children (directorios e ficheiros filho) //
	private function load_children($var_parent_id, $var_db) {

		$output = array();

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
			$obj_development_file_system->load_without_description($var_db);
			$development_file_system_children = array();
			$development_file_system_children['obj'] = $obj_development_file_system;
			$development_file_system_children['children'] = $this->load_children($row->id, $var_db);
			$output[] = $development_file_system_children;
		}
		
		return ($output);
	}
	
	
	// Destructor //
	public function __destruct() {
	}
}

?>