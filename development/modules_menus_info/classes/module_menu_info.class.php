<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: module_menu_info.class.php
|  PATH: development/modules_menus_info/classes
|  DESCRIPTION: Classe que representa os objectos da tabela modules_menus_info
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class module_menu_info {
	
	private $id;
	private $fk_modules_info;
	private $name;
	private $description;
	private $filepath_top;
	private $filepath_content;
	private $filepath_bottom;
	private $path_languages;
	private $priority;
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
		$this->fk_modules_info = false;
		$this->name = false;
		$this->description = false;
		$this->filepath_top = false;
		$this->filepath_content = false;
		$this->filepath_bottom = false;
		$this->path_languages = false;
		$this->priority = false;
		$this->insert_time = false;
		$this->insert_user = false;
		
		$this->error = false;
	}
	
	// 1 Args //
	public function __construct1($var_id) {
		$this->id = $var_id;
		$this->fk_modules_info = false;
		$this->name = false;
		$this->description = false;
		$this->filepath_top = false;
		$this->filepath_content = false;
		$this->filepath_bottom = false;
		$this->path_languages = false;
		$this->priority = false;
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
	
	public function set_fk_modules_info($var) {
		$this->fk_modules_info = $var;
	}
	
	public function set_name($var) {
		$this->name = $var;
	}
	
	public function set_description($var) {
		$this->description = $var;
	}
	
	public function set_filepath_top($var) {
		$this->filepath_top = $var;
	}
	
	public function set_filepath_content($var) {
		$this->filepath_content = $var;
	}
	
	public function set_filepath_bottom($var) {
		$this->filepath_bottom = $var;
	}
	
	public function set_path_languages($var) {
		$this->path_languages = $var;
	}
	
	public function set_priority($var) {
		$this->priority = $var;
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
	public function get_fk_modules_info() {
		return ($this->fk_modules_info);
	}
	
	// Retorna name //
	public function get_name() {
		return ($this->name);
	}
	
	// Retorna description //
	public function get_description() {
		return($this->description);
	}
	
	public function get_filepath_top() {
		return($this->filepath_top);
	}
	
	public function get_filepath_content() {
		return($this->filepath_content);
	}
	
	public function get_filepath_bottom() {
		return($this->filepath_bottom);
	}
	
	public function get_path_languages() {
		return($this->path_languages);
	}
	
	public function get_priority() {
		return($this->priority);
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
	
	
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega a informacao a partir da base de dados //
	public function load($var_db) {
		$this->error = false;
		
		$sql = ("SELECT  
					modules_menus_info.fk_modules_info,
					modules_menus_info.name,
					modules_menus_info.description,
					modules_menus_info.filepath_top,
					modules_menus_info.filepath_content,
					modules_menus_info.filepath_bottom,
					modules_menus_info.path_languages,
					modules_menus_info.priority,
					modules_menus_info.insert_time,
					modules_menus_info.insert_user
				FROM 
					modules_menus_info 
				WHERE 
					modules_menus_info.id = " . addslashes ( $this->id ));
		$rs = $var_db->execute ( $sql );
		if ($row = $var_db->get_row ( $rs )) {
			$this->fk_modules_info = $row->fk_modules_info;
			$this->name = $row->name;
			$this->description = $row->description;
			$this->filepath_top = $row->filepath_top;
			$this->filepath_content = $row->filepath_content;
			$this->filepath_bottom = $row->filepath_bottom;
			$this->path_languages = $row->path_languages;
			$this->priority = $row->priority;
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
						modules_menus_info
							(modules_menus_info.fk_modules_info,
							modules_menus_info.name,
							modules_menus_info.description,
							modules_menus_info.filepath_top,
							modules_menus_info.filepath_content,
							modules_menus_info.filepath_bottom,
							modules_menus_info.path_languages,
							modules_menus_info.priority,
							modules_menus_info.insert_time,
							modules_menus_info.insert_user)
					VALUES
						(".(empty($this->fk_modules_info)?"NULL":("'".addslashes($this->fk_modules_info)."'")).",
						'".addslashes($this->name)."',
						'".addslashes($this->description)."',
						'".addslashes($this->filepath_top)."',
						'".addslashes($this->filepath_content)."',
						'".addslashes($this->filepath_bottom)."',
						'".addslashes($this->path_languages)."',
						'".addslashes($this->priority)."',
						CURRENT_TIMESTAMP(),
						'".addslashes($this->insert_user)."')");
		}
		else {
			// UPDATE	
			$sql = ("UPDATE
						modules_menus_info
					SET
						modules_menus_info.name = '".addslashes($this->name)."',
						modules_menus_info.description = '".addslashes($this->description)."',
						modules_menus_info.filepath_top = '".addslashes($this->filepath_top)."',
						modules_menus_info.filepath_content = '".addslashes($this->filepath_content)."',
						modules_menus_info.filepath_bottom = '".addslashes($this->filepath_bottom)."',
						modules_menus_info.path_languages = '".addslashes($this->path_languages)."',
						modules_menus_info.priority = '".addslashes($this->priority)."'
					WHERE
						modules_menus_info.id = '".addslashes($this->id)."'");
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
					modules_menus_info
				WHERE
					modules_menus_info.id = ".addslashes($this->id));
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