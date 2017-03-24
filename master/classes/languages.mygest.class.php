<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: languages.mygest.class.php
|  PATH: classes
|  DESCRIPTION: Classe da lingua MyGest
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 11FEV2014
|  MODIFICATION DATE: 11FEV2014
|____________________________________________________________*/


class languages {
	private $id;
	private $lang;
	private $fk_languages;
	private $file_include;
	private $file_error_include;
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
	
	// 1 Args //
	public function __construct1($var_id) {

		$this->id = $var_id;
		$this->lang = false;
		$this->fk_languages = false;
		$this->file_include = false;
		$this->file_error_include = false;
		$this->insert_time = false;
		$this->insert_user = false;

		$this->error = false;
	}
	
	// ////////////////
	// Set methods //
	// //////////////
	/*
	public function set_fk_languages($var_fk_languages) {
		$this->fk_languages($var_fk_languages);
	}*/
	
	// ////////////////
	// Get methods //
	// //////////////
	/*
	// Retorna id do myclick_head//
	public function get_id() {
		return ($this->id);
	}
	*/
	public function get_error() {
		return ($this->error);
	}
	// Retorna info dos campos //
	public function get_id() {
		return ($this->id);
	}
	public function get_lang() {
		return ($this->lang);
	}
	public function get_fk_languages() {
		return ($this->fk_languages);
	}
	public function get_file_include() {
		return ($this->file_include);
	}
	public function get_file_error_include() {
		return ($this->file_error_include);
	}
	
	
	// ////////////////
	// All methods //
	// //////////////

	// Carrega a informacao a partir da base de dados //
	public function get_information($var_db) {
		$this->error = false;
		$sql = ("SELECT 
					news.id,
					news.lang,
					news.fk_languages,
					news.file_include,
					news.file_error_include,
					news.insert_time,
					news.insert_user,
					news.enabled
				FROM 
					languages
				WHERE
					news.id = ".addslashes($this->id)."
				");
		$rs = $var_db->execute ( $sql );
		if ($row = $var_db->get_row ( $rs )) {
			$this->id = $row->id;
			$this->title = $row->title;
			$this->description = $row->description;
			$this->fk_modules_info = $row->fk_modules_info;
			$this->insert_time = $row->insert_time;
			$this->insert_user = $row->insert_user;
			$this->enable = $row->enable;
					
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