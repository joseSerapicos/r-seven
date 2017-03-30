<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: myclick.master.class.php
|  PATH: classes
|  DESCRIPTION: Classe da head do myclick (myclick_head) na principal
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 15JAN2014
|  MODIFICATION DATE: 10ABRIL2014
|____________________________________________________________*/


class myclick {
	private $enabled;
	
	private $myclick_user_list;
	private $myclick_head_list;
	
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
		
		$GLOBALS['key_program'] = "MyClick/mE";
		$this->enabled = '1';
		$this->myclick_users_head_id = '0'; //se for 0 aparece todos
		//$this->load($db_main,$db_system);
		$this->showDetail = false; //<- mostra detalhe
		$this->error = false;

	}
	
	
	// ////////////////
	// Set methods //
	// //////////////
	
	/*Usado no load & load_list*/
	public function set_enabled($var_enabled) {
		$this->enabled = $var_enabled;
	}
	/*Usado no load*/
	public function set_myclick_users_head_id($var_myclick_users_head_id) {
		$this->myclick_users_head_id = $var_myclick_users_head_id;
	}
	/*Usado na load_list*/
	public function set_myclick_head_id($var_myclick_head_id) { 
		$this->myclick_head_id = $var_myclick_head_id;
	}
	public function set_showDetail($var_showDetail) {
		$this->showDetail = $var_showDetail;
	}
	
	// ////////////////
	// Get methods //
	// //////////////
	
	public function get_myclick_user_list() {
		return ($this->myclick_user_list);
	}
	
	public function get_myclick_head_list() {
		return ($this->myclick_head_list);
	}
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega toda informacao a partir da base de dados com os dados do cliente//
	public function load($system_db, $client_db) {
		
		$this->error = false;
		
		/*Includes - user_db*/
		include_once (dirname(__FILE__) . "/myclick_users_head.class.php"); //client_db head
		
		include_once (dirname(__FILE__) . "/myclick_users_detail.class.php"); //client_db detail
		
		/*Includes - system_db*/
		include_once (dirname(__FILE__) . "/myclick_head.mygest.class.php"); 
		include_once (dirname(__FILE__) . "/myclick_detail.mygest.class.php"); 
		//system_db head
		$sql_where = "";
		if($this->myclick_users_head_id){
			$sql_where = " AND myclick_users_head.id = '".$this->myclick_users_head_id."'";
		}
		
		$this->myclick_user_list = array();
		$sql = ("SELECT 
					myclick_users_head.id
				FROM 
					myclick_users_head
				WHERE
					myclick_users_head.enabled = '".$this->enabled."'
					$sql_where
				");
		$rs = $client_db->execute ( $sql );
		
		while($row = $client_db->get_row ( $rs )) {
			
			$obj_myclick_user_list = new myclick_users_head();
			$obj_myclick_user_list->set_id($row->id);
			$obj_myclick_user_list->load($system_db,$client_db);
			
			$this->myclick_user_list[] = $obj_myclick_user_list; 
		}
		
		
		$this->error = $client_db->get_error ();
		if ($this->error){
			return (true);
		}else{
			return (false);
		}
	}
	// Carrega toda informacao a partir da base de dados //
	public function load_list($system_db, $client_db) {
		/*FUTURO Relacionar com os modulos do cliente*/
		
		$this->error = false;
		
		/*Includes - user_db
		include_once (dirname(__FILE__) . "/myclick_users_head.class.php"); //client_db head
		
		include_once (dirname(__FILE__) . "/myclick_users_detail.class.php"); //client_db detail*/
		
		/*Includes - system_db*/
		include_once (dirname(__FILE__) . "/myclick_head.mygest.class.php"); 
		include_once (dirname(__FILE__) . "/myclick_detail.mygest.class.php"); 
		
		if($this->myclick_head_id){
			$sql_where = " AND myclick_head.id = '".$this->myclick_head_id."'";
			
			
		}
		
		$this->myclick_head_list = array();
		$sql = ("SELECT 
					myclick_head.id
				FROM 
					myclick_head
				WHERE
					myclick_head.enabled = '".$this->enabled."'
					$sql_where
				");
		$rs = $system_db->execute ( $sql );
		
		while($row = $system_db->get_row ( $rs )) {
			$obj_myclick_head_list = new myclick_head();
			
			if($this->showDetail){
				$obj_myclick_head_list->set_showDetail(true); //<- Mostra Detalhe
			}
			$obj_myclick_head_list->load($system_db,$row->id);
			//$myclick_head_list = $obj_myclick_head_list->get_this();//<- busca o objecto
			$this->myclick_head_list[] = $obj_myclick_head_list; 
		}
		
		
		$this->error = $system_db->get_error ();
		if ($this->error){
			return (true);
		}else{
			return (false);
		}
	}
	public function myclick_submit($system_db, $client_db,$masterSystemObj, $post) {
		
		/*Includes - system_db*/
		include_once (dirname(__FILE__) . "/myclick_head.mygest.class.php");
		include_once (dirname(__FILE__) . "/myclick_detail.mygest.class.php");

		/*Includes - user_db*/
		include_once (dirname(__FILE__) . "/myclick_users_head.class.php");
		include_once (dirname(__FILE__) . "/myclick_users_detail.class.php");
		
		$myclick_users_head_id 	= $post['myclick_users_head_id']; //internal from user_db for edit
		$myclick_head_id 		= $post['myclick_head_id']; //from system db
		$description 			= $post['description']; //description input
		
		unset($post['myclick_users_head_id']);
		unset($post['myclick_head_id']);
		unset($post['description']);
		
		/*get system head*/
		$myclick_head = new myclick_head();
		$myclick_head->load($system_db,$myclick_head_id);
		/*save Head*/
		$myclick_users_head_obj = new myclick_users_head();
		
		if(!empty($myclick_users_head_id)){
			$myclick_users_head_obj->set_id($myclick_users_head_id);
		}
		$myclick_users_head_obj->set_fk_mygest_myclick_head($myclick_head->get_id());
		$myclick_users_head_obj->set_version( $myclick_head->get_version() );
		$myclick_users_head_obj->set_description( $description );
		$myclick_users_head_obj->set_fk_users($_SESSION['masterUser']); //define user
		$myclick_users_head_obj->set_fk_stores($_SESSION['masterStore']); //define store
		$myclick_users_head_obj->set_enabled("1");
		$myclick_users_head_obj->save($client_db);
		
		/*get last from insert*/
		if(empty($myclick_users_head_id)){ //Get Last Id from Head
			$sql = ("SELECT 
						MAX( id ) as last_id 
					FROM  
						`myclick_users_head`
				");
			$rs = $client_db->execute ( $sql );
			
			if ($row = $client_db->get_row ( $rs )) {
				$myclick_users_head_id = $row->last_id;
			}else{ 
				$this->error = "MaxID: Error";	
				return (false);
			}
		}
		
		/*View detail from system_db*/
		$sql_md = ("SELECT 
						id 
					FROM 
						`myclick_detail` 
					WHERE 
						`fk_myclick_head` = '".$myclick_head->get_id()."'
				");

		$rs_detail = $system_db->execute ( $sql_md );
		
		while($row = $system_db->get_row ( $rs_detail )) {
			
			$myclick_detail = new myclick_detail();
			$myclick_detail->set_id($row->id);	
			$myclick_detail->load($system_db);		
			
			
			/*switch ($myclick_detail->get_type()){
				case "fixed":
					$set_value = $myclick_detail->get_value();
				break;
				
				/*
				case "password":
					//$pwd = ;
					$pwd = $this->encrypt_password($system_db,$client_db,$masterSystemObj,$post[$myclick_detail->get_field_name()]);
					$set_value = $pwd;
				break;
				//case "password":
				default:
					$set_value = $post[$myclick_detail->get_field_name()];
				break;
			}
			*/
			if($myclick_detail->get_type() == 'fixed'){ //if fixed get from myclick_detail
				$set_value = $myclick_detail->get_value();
			}else{
				$set_value = $post[$myclick_detail->get_field_name()];
			}
			
			/*Get ID if exist*/
			$sql_uhi = ("SELECT 
					id 
				FROM 
					`myclick_users_detail` 
				WHERE 
					`fk_myclick_users_head` = '".$myclick_users_head_id."'
					AND `fk_mygest_myclick_detail` = '".$myclick_detail->get_id()."'
			");
			$rs_uhi = $client_db->execute ( $sql_uhi );
			
			if ($row = $client_db->get_row ( $rs_uhi )) {
				$uhi_id = $row->id;
			}
			
			/*Insert @ myclick_users_detail*/
			$myclick_users_detail = new myclick_users_detail();
			if(!empty($uhi_id)){
				$myclick_users_detail->set_id($uhi_id);
			}
			$myclick_users_detail->set_fk_myclick_users_head($myclick_users_head_id);
			$myclick_users_detail->set_fk_mygest_myclick_detail($myclick_detail->get_id());
			$myclick_users_detail->set_value($set_value);
			
			$myclick_users_detail->save($client_db);
		}
				
	}
	
	public function encrypt_password($system_db,$client_db,$masterSystemObj,$encrypt_password){
		
		/*crypt*/
		require_once (dirname(__FILE__)."/../../development/classes/development_crypt.class.php");
		
		/*system*/
		require_once (dirname(__FILE__)."/../../master/classes/system.class.php");
		
		/*get IV from system*/
		$iv_user = $masterSystemObj->get_iv_user();	

		$development_crypt = new development_crypt();
		$development_crypt->encrypt($GLOBALS['key_program'],$iv_user,$encrypt_password);
		
		$encrypt_key = rawurlencode($development_crypt->get_encrypt());
		
		//$encrypt_key = $development_crypt->get_encrypt();
		
		return $encrypt_key;
		
		//get iv from cliente	
	}
	
	public function decrypt_password($system_db,$client_db,$masterSystemObj,$decrypt_password){
		
		$decrypt_password = rawurldecode($decrypt_password);
		/*crypt*/
		require_once (dirname(__FILE__)."/../../development/classes/development_crypt.class.php");
		
		/*system*/
		require_once (dirname(__FILE__)."/../../master/classes/system.class.php");
		
		/*get IV from system*/
		$iv_user = $masterSystemObj->get_iv_user();	

		$development_crypt = new development_crypt();
		$development_crypt->decrypt($GLOBALS['key_program'],$iv_user,$decrypt_password);
		
		//$decrypt_key = rawurldecode($development_crypt->get_encrypt());
		
		$decrypt_key = $development_crypt->get_decrypt();
		
		return $decrypt_key;
		
		//get iv from cliente	
	}
	
	// Destructor //
	public function __destruct() {
	}
}

?>