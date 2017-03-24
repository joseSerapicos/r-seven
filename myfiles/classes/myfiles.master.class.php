<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: myfiles.master.class.php
|  PATH: classes
|  DESCRIPTION: Classe myfiles master
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 14ABR2014
|  MODIFICATION DATE: -
|____________________________________________________________*/


class myfiles {
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
		$this->enabled = '1';

	}
	
	
	// ////////////////
	// Set methods //
	// //////////////
	public function set_myfiles_users_id($value){
		$this->myfiles_users_id = $value;
	}
	
	// ////////////////
	// Get methods //
	// //////////////
	public function get_myfiles_users_list() {
		return ($this->myfiles_users_list);
	}
	/*All From Total Methods*/
	public function get_total_user_size() {
		return ($this->total_user_size);
	}
	public function get_total_system_size() {
		return ($this->total_system_size);
	}
	public function get_percent_use() {
		return ($this->percent_use);
	}
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega toda informacao a partir da base de dados com os dados do cliente//
	public function load($client_db) {
		
		$this->error = false;
		
		/*Includes - myfiles_users*/
		include_once (dirname(__FILE__) . "/myfiles_users.class.php"); //client_db head
		
		
		/*myfiles_users*/
		$sql_where = "";
		if($this->myfiles_users_id){
			$sql_where = " AND myfiles_users.id = '".$this->myfiles_users_id."'";
		}
		
		$this->myfiles_users_list = array();
		$sql = ("SELECT 
					myfiles_users.id
				FROM 
					myfiles_users
				WHERE
					myfiles_users.enabled = '".$this->enabled."'
					$sql_where
				ORDER BY insert_time DESC
				");
		$rs = $client_db->execute ( $sql );
		
		while($row = $client_db->get_row ( $rs )) {
			
			$obj_myfiles_users = new myfiles_users();
			$obj_myfiles_users->set_id($row->id);
			$obj_myfiles_users->load($client_db);
			
			$this->myfiles_users_list[] = $obj_myfiles_users; 
		}
		
		
		$this->error = $client_db->get_error ();
		if ($this->error){
			return (true);
		}else{
			return (false);
		}
		/**/
	}

	// Total in bytes//
	public function total($client_db) {
		
		$this->error = false;

		/*Includes - myfiles_users*/
		include_once (dirname(__FILE__) . "/myfiles_users.class.php"); //client_db head
				
		$this->myfiles_users_list = array();
		$sql = ("SELECT 
					sum(myfiles_users.file_size) as total_size
				FROM 
					myfiles_users
				");
		$rs = $client_db->execute ( $sql );
		
		if ($row = $client_db->get_row ( $rs )) {
			$total_user_size_bytes = empty($row->total_size)?'0':$row->total_size;
			$this->total_user_size = $this->set_digital($total_user_size_bytes);
		}
		$total_system_size_bytes = "2147483648";
		$this->total_system_size = $this->set_digital($total_system_size_bytes);
		
		$this->percent_use = $this->total_user_size * 100 / $this->total_system_size;
		
		$this->error = $client_db->get_error ();
		if ($this->error){
			return (true);
		}else{
			return (false);
		}
		/**/
	}
	public function set_digital($value){
		
		if($value <= '1024'){
			$value_set =  $value." Byte";
		}else if (($value >= "1024") and ($value <= '1048576')){
			$value_set = round($value/pow(1024,1),2)." KByte";
		}else if ($value > '1048576'){
			$value_set =  round($value/pow(1024,2),2)." MByte";
		}		
		
		return $value_set;
	
	}
	// function upload file//
	public function myfiles_submit($client_db,$post,$files) {
		
		//echo "<pre>";print_r($files);echo "</pre>";
		//echo "<pre>";print_r($post);echo "</pre>";
		$file_name 		 = $files['file']['name'];
		$file_type 		 = $files['file']['type'];
		$file_tmp_name 	 = $files['file']['tmp_name'];
		$error 			 = $files['file']['error'];
		$file_size 		 =  $files['file']['size'];
		
		$external_access = $post['external_access'];
		
		$store 			 = $_SESSION['masterStore'];
		$module			 = $_SESSION['masterModule'];
		
		$file_path 		 = dirname(__FILE__) ."/../public/" .$store."/";
		
		$allowedExts = array("jpeg", "txt");
		$allowedTypes = array("text/plain","image/jpeg");
		
		$temp = explode(".", $file_name);
		$real_filename = reset($temp); //file name
		$extension = end($temp); //extension
		
		$new_filename = uniqid(); //new filename - unique
		$internal_name = $new_filename.".".$extension; //new filename plus extension
		
		if (in_array($file_type, $allowedTypes) && in_array($extension, $allowedExts)){
			if ($error > 0){
				echo "Return Code: " . $error  . "<br>";
			}else{
				
				if(move_uploaded_file($file_tmp_name,$file_path.$internal_name)){
					
					$myfiles_users = new myfiles_users();
					
					$myfiles_users->set_fk_stores($store);
					$myfiles_users->set_file_path($file_path);
					$myfiles_users->set_filename($file_name);
					$myfiles_users->set_internalname($internal_name);
					$myfiles_users->set_file_size($file_size);
					$myfiles_users->set_external_access($external_access);
					//$myfiles_users->set_insert_user($external_access);
					$myfiles_users->set_enabled("1");
					
					$myfiles_users->save($client_db);
					
				
				}
				
				/**/
			}
		}else{
			echo "Invalid file";
		}
		
	}
	
	// Elimina documento na BD e no servidor//
	public function myfiles_delete($client_db,$myfiles_users_id) {
		
		$this->error = false;
		
		/*Includes - myfiles_users*/
		include_once (dirname(__FILE__) . "/myfiles_users.class.php"); //client_db head
		
			
		$obj_myfiles_users = new myfiles_users();
		$obj_myfiles_users->set_id($myfiles_users_id);
		$obj_myfiles_users->load($client_db);
		
		$path_file 		= $obj_myfiles_users->get_file_path();
		$internalname 	= $obj_myfiles_users->get_internalname();

		$obj_myfiles_users->delete($client_db);
		
		if(!empty($internalname)){
			unlink($path_file.$internalname);
		}
		
		$this->error = $client_db->get_error ();
		if ($this->error){
			return (true);
		}else{
			return (false);
		}
		/**/
	}
	
	// Destructor //
	public function __destruct() {
	}
}

?>