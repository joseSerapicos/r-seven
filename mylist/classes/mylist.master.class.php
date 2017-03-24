<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: mylist.master.class.php
|  PATH: classes
|  DESCRIPTION: Classe principal do mylist
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 27FEV2014
|  MODIFICATION DATE: -
|____________________________________________________________*/


class mylist {
	private $enabled;
	
	private $mylist_difusion_list;
	
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
		
		$GLOBALS['key_program'] = "MyList)cl";
		$this->enabled = '1';
		
		$this->error = false;

	}
	
	
	// ////////////////
	// Set methods //
	// //////////////
	
	public function set_enabled($var_enabled) {
		$this->enabled = $var_enabled;
	}
	
	
	// ////////////////
	// Get methods //
	// //////////////
	
	public function get_mylist_difusion_list() {
		return ($this->mylist_difusion_list);
	}
	public function get_mylist_difusion_management() {
		return ($this->mylist_difusion_management);
	}
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega toda informacao a partir da base de dados //
	public function load_list($client_db) {
		
		$this->error = false;
		
		/*Includes - mylist_difusion_list*/
		include_once (dirname(__FILE__) . "/mylist_difusion_list.class.php"); //client_db head
		
		$this->mylist_difusion_list = array();
		$sql = ("SELECT 
					mylist_difusion_list.id
				FROM 
					mylist_difusion_list
				WHERE
					mylist_difusion_list.enabled = '".$this->enabled."'
				");
		$rs = $client_db->execute ( $sql );
		
		while($row = $client_db->get_row ( $rs )) {
			$obj_mylist_difusion_list = new mylist_difusion_list();
			$obj_mylist_difusion_list->load($client_db,$row->id);
			$this->mylist_difusion_list[] = $obj_mylist_difusion_list; 
		}
		
		
		$this->error = $client_db->get_error ();
		if ($this->error){
			return (true);
		}else{
			return (false);
		}
	}
	// function submit list//
	public function mylist_submit($client_db,$post) {
		
		/*Includes - mylist_difusion_list*/
		include_once (dirname(__FILE__) . "/mylist_difusion_list.class.php"); //client_db head
		
		//echo "<pre>";print_r($post);echo "</pre>";die();
		$mylist_id 	= $post['mylist_id']; //used in edit
		
		$email 		= $post['email'];
		$ref_1 		= $post['reference_1'];
		$ref_2 		= $post['reference_2'];
		
		$ob_mylist_difusion_list = new mylist_difusion_list();
		
		if(!empty($mylist_id)){
			$ob_mylist_difusion_list->set_id($mylist_id);
		}
		$ob_mylist_difusion_list->set_email($email);
		$ob_mylist_difusion_list->set_reference_1($ref_1);
		$ob_mylist_difusion_list->set_reference_2($ref_2);
		$ob_mylist_difusion_list->set_enabled("1");
		$ob_mylist_difusion_list->save($client_db);
	
	}
	// function delete//
	public function mylist_delete($client_db,$post) {
		
		/*Includes - mylist_difusion_list*/
		include_once (dirname(__FILE__) . "/mylist_difusion_list.class.php"); //client_db head
		
		//echo "<pre>";print_r($post);echo "</pre>";die();
		$mylist_id 	= $post['mylist_id']; //used in edit
		
		
		$ob_mylist_difusion_list = new mylist_difusion_list();
		
		$ob_mylist_difusion_list->set_id($mylist_id);
		$ob_mylist_difusion_list->delete($client_db);
	
	}
	
	// Carrega toda informacao a partir da base de dados //
	public function load_management_list($client_db) {
		
		$this->error = false;
		
		/*Includes - mylist_difusion_list*/
		include_once (dirname(__FILE__) . "/mylist_difusion_head.class.php"); //client_db head
		
		$this->mylist_difusion_list = array();
		$sql = ("SELECT 
					mylist_difusion_head.id
				FROM 
					mylist_difusion_head
				WHERE
					mylist_difusion_head.enabled = '".$this->enabled."'
				");
		$rs = $client_db->execute ( $sql );
		
		while($row = $client_db->get_row ( $rs )) {
			$obj_mylist_difusion_head = new mylist_difusion_head();
			$obj_mylist_difusion_head->load($client_db,$row->id);
			$this->mylist_difusion_management[] = $obj_mylist_difusion_head; 
		}
		
		
		$this->error = $client_db->get_error ();
		if ($this->error){
			return (true);
		}else{
			return (false);
		}
	}
	
	// function manage submit list//
	public function mylist_manage_submit($client_db,$post) {
		
		/*Includes - mylist_difusion_list*/
		include_once (dirname(__FILE__) . "/mylist_difusion_head.class.php"); //client_db 
		
		$mylist_difusion_head_id 	= $post['mylist_difusion_head_id']; //used in edit
		
		$title 		= $post['title'];
		$body 		= $post['body'];
		
		$ob_mylist_difusion_head = new mylist_difusion_head();
		
		if(!empty($mylist_difusion_head_id)){
			$ob_mylist_difusion_head->set_id($mylist_difusion_head_id);
		}
		$ob_mylist_difusion_head->set_title($title);
		$ob_mylist_difusion_head->set_body($body);
		
		//$ob_mylist_difusion_head->set_difusion_date();
		$ob_mylist_difusion_head->set_status("O");
		$ob_mylist_difusion_head->set_enabled("1");
		
		$ob_mylist_difusion_head->save($client_db);
	
	}
	
	// function manage delete//
	public function mylist_manage_delete($client_db,$post_id) {
		
		/*Includes - mylist_difusion_list*/
		include_once (dirname(__FILE__) . "/mylist_difusion_head.class.php"); //client_db head
		
		//echo "<pre>";print_r($post);echo "</pre>";die();
		$mylist_difusion_head_id 	= $post['mylist_difusion_head_id']; //used in edit
		
		$ob_mylist_difusion_head = new mylist_difusion_head();
		
		$ob_mylist_difusion_head->set_id($post_id);
		$ob_mylist_difusion_head->delete($client_db);
	
	}
	
	// Destructor //
	public function __destruct() {
	}
}

?>