<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: news.class.php
|  PATH: classes
|  DESCRIPTION: Classe das noticias do sistema
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 16JAN2014
|  MODIFICATION DATE: 16JAN2014
|____________________________________________________________*/


class news {
	private $id;
	private $title;
	private $description;
	private $fk_modules_info;
	private $fk_languages;
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
		$this->title = false;
		$this->description = false;
		$this->fk_modules_info = false;
		$this->fk_languages = false;
		$this->insert_time = false;
		$this->insert_user = false;
		$this->enable = false;
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
	// Retorna id do myclick_head//
	public function get_info_by_module_array() {
		return ($this->get_info_by_module_array);
	}
	// Retorna id do myclick_head//
	public function get_info_by_id_array() {
		return ($this->get_info_by_id_array);
	}
	
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega a informacao a partir da base de dados //
	public function get_information($var_db) {
		$this->error = false;
		$sql = ("SELECT 
					news.id,
					news.title,
					news.description,
					news.fk_modules_info,
					news.fk_languages,
					news.insert_time,
					news.insert_user,
					news.enabled
				FROM 
					news
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
	
	// vai buscar a lista com os parametros
	public function get_info_by_module($var_db,$module='all',$enabled='1',$lang='all') { //adicionar lingua
		$this->error = false;

		if($module != "all" and $module != "0"){ //default todas as versoes
			$sql_where .= "AND news.fk_modules_info = '".addslashes($module)."' ";
		}else if($module == '0'){ //modulo 0 significa que nao tem modules_info
			$sql_where .= "AND news.fk_modules_info IS NULL ";
		}
		
		
		if($lang != "all"){ //default todas as linguas
			$sql_where .= "AND news.fk_languages = '".addslashes($lang)."' ";
		}
		
		
		/*
		if(empty($myclick_head) or empty($version)){ //ERRO
			$this->error = "myclick_head or version cannot be empty";
			return (false);
		}
		*/
		$sql = ("SELECT 
					news.id,
					news.title,
					news.description,
					news.fk_modules_info,
					news.fk_languages,
					news.insert_time,
					news.insert_user,
					news.enabled
				FROM 
					news
				
				WHERE
					1=1 $sql_where
					AND news.enabled = '".addslashes($enabled)."'
				ORDER BY
					news.insert_time DESC
				");	
		$rs = $var_db->execute( $sql );
		while($row = $var_db->get_row ( $rs )) {

			$this->get_info_by_module_array[] = $row;
			
		}
		// Error
		if($var_db->get_error()){
			$this->error = $var_db->get_error ();
			return (false);
		}else{
			return (true);
		}
	}
	
	public function get_info_by_id($var_db,$id='all',$enabled='1',$lang='all') { //buscar valores pelo ID Noticia
		$this->error = false;

		if($id != "all"){ //default todas as versoes
			$sql_where .= "AND news.id = '".addslashes($id)."' ";
		}
		
		if($lang != "all"){ //default todas as linguas
			$sql_where .= "AND news.fk_languages = '".addslashes($lang)."' ";
		}
		
		$sql = ("SELECT 
					news.id,
					news.title,
					news.description,
					news.fk_modules_info,
					news.fk_languages,
					news.insert_time,
					news.insert_user,
					news.enabled
				FROM 
					news
				
				WHERE
					1=1 $sql_where
					AND news.enabled = '".addslashes($enabled)."'
				ORDER BY
					news.insert_time DESC
				");	
		$rs = $var_db->execute( $sql );
		while($row = $var_db->get_row ( $rs )) {

			$this->get_info_by_id_array[] = $row;
			
		}
		//print $sql;
		// Error
		if($var_db->get_error()){
			$this->error = $var_db->get_error ();
			return (false);
		}else{
			return (true);
		}
	}
	
	// Destructor //
	public function __destruct() {
	}
}

?>