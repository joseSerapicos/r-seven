<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: myclick_head.class.php
|  PATH: classes
|  DESCRIPTION: Classe da head do myclick (myclick_head) na principal
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 10DEC2013
|  MODIFICATION DATE: 10ABRIL2014
|____________________________________________________________*/


class myclick_head {
	private $id;
	private $name;
	private $url;
	private $method;
	private $cat;
	private $active;
	private $version;
	private $enabled;
	private $insert_time;
	private $insert_user;
	private $error;
	
	private $mygest_myclick_detail;
	
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
				
		//$this->id = $var_id;
		$this->showDetail = false;
		//$this->load($system_db);
	
	}
	
	// ////////////////
	// Set methods //
	// //////////////
	public function set_id($value){
		$this->id = $value;
	}
	public function set_name($value){
		$this->name = $value;
	}
	public function set_url($value){
		$this->url = $value;
	}
	public function set_method($value){
		$this->method = $value;
	}
	public function set_logo($value){
		$this->logo = $value;
	}
	public function set_cat($value){
		$this->cat = $value;
	}
	public function set_active($value){
		$this->active = $value;
	}
	public function set_version($value){
		$this->version = $value;
	}
	public function set_enabled($value){
		$this->enabled = $value;
	}
	public function set_insert_time($value){
		$this->insert_time = $value;
	}
	public function set_insert_user($value){
		$this->insert_user = $value;
	}
	
	public function set_showDetail($showDetail){ //mostra detalhe
	
		$this->showDetail = $showDetail;
	}
	// ////////////////
	// Get methods //
	// //////////////
	
	// Retorna id do myclick_head//
	public function get_id() {
		return ($this->id);
	}
	public function get_name() {
		return ($this->name);
	}
	public function get_url() {
		return ($this->url);
	}
	public function get_method() {
		return ($this->method);
	}
	public function get_logo() {
		return ($this->logo);
	}
	public function get_cat() {
		return ($this->cat);
	}
	public function get_active() {
		return ($this->active);
	}
	public function get_version() {
		return ($this->version);
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
	
	// Retorna array com a listagem //
	public function get_myclick_list_array() {
		return ($this->myclick_list_array);
	}
	
  	public function get_mygest_myclick_detail() {
		return ($this->mygest_myclick_detail);
	}

	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega a informacao a partir da base de dados //
	public function load($system_db,$var_id) {
		
		$this->error = false;
		$sql = ("SELECT 		
					myclick_head.id,
					myclick_head.name, 
					myclick_head.url, 
					myclick_head.method, 
					myclick_head.logo, 
					myclick_head.cat,
					myclick_head.active,
					myclick_head.version,
					myclick_head.enabled,
					myclick_head.insert_time,
					myclick_head.insert_user
				FROM 
					myclick_head 
				WHERE
					myclick_head.id = '".$var_id."'
				");
		$rs = $system_db->execute ( $sql );

		if ($row = $system_db->get_row ( $rs )) {
			$this->id = $row->id;
			$this->name = $row->name;
			$this->url = $row->url;
			$this->method = $row->method;
			$this->logo = $row->logo;
			$this->cat = $row->cat;
			$this->active = $row->active;
			$this->version = $row->version;
			$this->enabled = $row->enabled;
			$this->insert_time = $row->insert_time;
			$this->insert_user = $row->insert_user;
			
			if($this->showDetail){
				$this->load_myclick_detail($system_db,$this->id);
			}
			
			return (true);
		}
		
		// Error
		/*Handle Error*/
		if($system_db->get_error()){
			$this->error = $system_db->get_error ();
			return (false);
		}else{
			return (true);
		}
	}
	private function load_myclick_detail($system_db,$detail_id){
		$this->error = false;
		
		$sql = ("SELECT 		
					myclick_detail.id,
					myclick_detail.fk_myclick_head
				FROM 
					myclick_detail 
				WHERE
					myclick_detail.fk_myclick_head = '".$detail_id."'
				");
		$rs = $system_db->execute ( $sql );
		
		while($row = $system_db->get_row ( $rs )) {
			$obj_myclick_detail_list = new myclick_detail();
			$obj_myclick_detail_list->set_id($row->id);
			$obj_myclick_detail_list->load($system_db);
			$this->mygest_myclick_detail[] = $obj_myclick_detail_list; 
		}

		
		
		//$this->mygest_myclick_detail[];
	}
	
	// Guarda a informacao na base de dados //
	public function save($var_db) {
		$this->error = false;
	
		if(empty($this->id)) {
			// INSERT	(".(empty($this->fk_development_file_system)?"NULL":("'".addslashes($this->fk_development_file_system)."'")).",
			
			$sql = ("INSERT INTO 
						myclick_head 
							(myclick_head.name,
							myclick_head.url,
							myclick_head.method,
							myclick_head.logo,
							myclick_head.cat,
							myclick_head.active,
							myclick_head.version,
							myclick_head.enabled,
							myclick_head.insert_time,
							myclick_head.insert_user
							) 
					VALUES 
						('".addslashes($this->name)."',
						'".addslashes($this->url)."',
						'".addslashes($this->method)."',
						'".addslashes($this->logo)."',
						'".addslashes($this->cat)."',
						'".addslashes($this->active)."',
						'".addslashes($this->version)."',
						'".addslashes($this->enabled)."',
						CURRENT_TIMESTAMP(),
						'".addslashes($this->insert_user)."'
						)");
		}
		else {	
			// UPDATE	
			$sql = ("UPDATE 
						myclick_head 
					SET 
						myclick_head.name = '".addslashes($this->name)."',
						myclick_head.url = '".addslashes($this->url)."',
						myclick_head.method = '".addslashes($this->method)."',
						myclick_head.logo = '".addslashes($this->logo)."',
						myclick_head.cat = '".addslashes($this->cat)."',
						myclick_head.active = '".addslashes($this->active)."',
						myclick_head.version = '".addslashes($this->version)."',
						myclick_head.enabled = '".addslashes($this->enabled)."' 
					WHERE 
						myclick_head.id = '".addslashes($this->id)."'");
		}
		$rs = $var_db->execute($sql);
		
		return(true);
	}
	// Elimina registo da base de dados //
	public function delete($system_db) {
		
		$this->error = false;
	
		$sql = ("DELETE FROM 
					myclick_head 
				WHERE 
					myclick_head.id = ".addslashes( $this->id ));
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