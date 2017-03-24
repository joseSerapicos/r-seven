<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: module_info.class.php
|  PATH: development/modules_info/classes
|  DESCRIPTION: Classe que representa os objectos da tabela modules_info
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class module_info {
	
	private $id;
	private $fk_icons;
	private $name;
	private $description;
	private $has_menus;
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
	
	// 0 Args //
	public function __construct0() {
		$this->id = false;
		$this->fk_icons = false;
		$this->name = false;
		$this->description = false;
		$this->has_menus = false;
		$this->insert_time = false;
		$this->insert_user = false;
		
		$this->error = false;
	}
	
	// 1 Args //
	public function __construct1($var_id) {
		$this->id = $var_id;
		$this->fk_icons = false;
		$this->name = false;
		$this->description = false;
		$this->has_menus = false;
		$this->insert_time = false;
		$this->insert_user = false;
		
		$this->error;
	}

	
	// ////////////////
	// Set methods //
	// //////////////
	
	public function set_id($var) {
		$this->id = $var;
	}
	
	public function set_fk_icons($var) {
		$this->fk_icons = $var;
	}
	
	public function set_name($var) {
		$this->name = $var;
	}
	
	public function set_description($var) {
		$this->description = $var;
	}
	
	public function set_has_menus($var) {
		$this->has_menus = $var;
	}
	
	public function set_insert_user($var) {
		$this->insert_user = $var;
	}
	
	
	// ////////////////
	// Get methods //
	// //////////////
	
	// Retorna id //
	public function get_id() {
		return ($this->id);
	}
	
	// Retorna fk_development_file_system //
	public function get_fk_icons() {
		return ($this->fk_icons);
	}
	
	// Retorna name //
	public function get_name() {
		return ($this->name);
	}
	
	// Retorna description //
	public function get_description() {
		return ($this->description);
	}
	
	// Retorna type //
	public function get_has_menus() {
		return ($this->has_menus);
	}
	
	// Retorna insert_user //
	public function get_insert_user() {
		return ($this->insert_user);
	}
	
	// Retorna insert_time //
	public function get_insert_time() {
		return ($this->insert_time);
	}
	
	// Retorna error //
	public function get_error() {
		return ($this->error);
	}
	
	// Retorna icon //
	public function get_icon($var_db) {
		$sql = ("SELECT  
					icons.name 
				FROM 
					icons
				WHERE
					icons.id = ".addslashes($this->fk_icons));
		$rs = $var_db->execute($sql);

		if ($row = $var_db->get_row($rs)) {
			return($row->name);
		}
		else
		{
			return (false);
		}
	}
	
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega a informacao a partir da base de dados //
	public function load($var_db) {
		$this->error = false;
		
		$sql = ("SELECT  
					modules_info.fk_icons,
					modules_info.name,
					modules_info.description,
					modules_info.has_menus,
					modules_info.insert_time,
					modules_info.insert_user
				FROM 
					modules_info 
				WHERE 
					modules_info.id = " . addslashes ( $this->id ));
		$rs = $var_db->execute ( $sql );
		if ($row = $var_db->get_row ( $rs )) {
			$this->fk_icons = $row->fk_icons;
			$this->name = $row->name;
			$this->description = $row->description;
			$this->has_menus = $row->has_menus;
			$this->insert_time = $row->insert_time;
			$this->insert_user = $row->insert_user;
			
			return (true);
		}
		
		// Error
		$this->error = $var_db->get_error ();
		return (false);
	}
	
	// Guarda a informacao na base de dados //
	public function save($var_db) {
		$this->error = false;
		
		if(empty($this->id)) {
			// INSERT	
			$sql = ("INSERT INTO
						modules_info
							(modules_info.fk_icons,
							modules_info.name,
							modules_info.description,
							modules_info.has_menus,
							modules_info.insert_time,
							modules_info.insert_user)
					VALUES
						(".(empty($this->fk_icons)?"NULL":("'".addslashes($this->fk_icons)."'")).",
						'".addslashes($this->name)."',
						'".addslashes($this->description)."',
						'".addslashes($this->has_menus)."',
						CURRENT_TIMESTAMP(),
						'".addslashes($this->insert_user)."')");
		}
		else {
			// UPDATE	
			$sql = ("UPDATE
						modules_info
					SET
						modules_info.fk_icons = ".(empty($this->fk_icons)?"NULL":("'".addslashes($this->fk_icons)."'")).",
						modules_info.name = '".addslashes($this->name)."',
						modules_info.description = '".addslashes($this->description)."',
						modules_info.has_menus = '".addslashes($this->has_menus)."'
					WHERE
						modules_info.id = '".addslashes($this->id)."'");
		}
		$rs = $var_db->execute($sql);
		
		// Error
		$this->error = $var_db->get_error();
		if($this->error) return(false);
		
		return (true);
	}
	
	// Elimina registo da base de dados //
	public function delete($var_db) {
		$this->error = false;
	
		$sql = ("DELETE FROM
					modules_info
				WHERE
					modules_info.id = ".addslashes($this->id));
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