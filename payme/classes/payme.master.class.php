<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: payme.master.class.php
|  PATH: classes
|  DESCRIPTION: Classe do modulo payme
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 25FEV2014
|  MODIFICATION DATE: 22MAR2014
|____________________________________________________________*/


class payme {

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
		
		$GLOBALS['key_program'] = "PayMe!RX";
		
		$this->error = false;

	}
	
	
	// ////////////////
	// Set methods //
	// //////////////

	
	// ////////////////
	// Get methods //
	// //////////////
	
	public function get_payme_users_head() {
		return ($this->payme_users_head);
	}
	public function get_payme_users_detail_html() {
		return ($this->payme_users_detail_html);
	}
	public function get_masterSystemID() {
		return ($this->masterSystemID);
	}
	public function get_error() {
		return ($this->error);
	}
	
	// ////////////////
	// All methods //
	// //////////////
	
	//Gera e Cria
	public function read_hash($hash_key){
		//$GLOBALS['key_program'];
		
		/*BD Principal*/
		require_once (dirname(__FILE__)."/../../top1_conf.php"); 
		/*Func DB*/
		require_once (dirname(__FILE__)."/../../top3_includes.php"); 
		/*crypt*/
		require_once (dirname(__FILE__)."/../../development/classes/development_crypt.class.php");
		/*payme_users_head - cliente */
		require_once (dirname(__FILE__)."/payme_users_head.class.php");
		
		/*payme_users_detail- cliente */
		require_once (dirname(__FILE__)."/payme_users_detail.class.php");
		
		
		// Acesso a base de dados principal (main)
		$db_main = new mysql_db ( DB_HOST, DB_NAME, DB_USER, DB_PASS );
		$db_main->connect_db ();
				
		/*Procura pelas IV Existentes e tenta descodificar*/
		$sql = ("SELECT id,iv_user FROM systems");
		$rs = $db_main->execute ( $sql );
		
		$find_id = 0;
		
		while($row = $db_main->get_row ( $rs )) {
			$decrypt_data = "";
			$id_system = $row->id;
			$iv_user = $row->iv_user;
			
			
			
			if($debug){print "<hr>";print $id_system."<br>";print $iv_user;}
			
			$development_crypt = new development_crypt();
			$development_crypt->decrypt($GLOBALS['key_program'],$iv_user,$hash_key); //abrir objecto
			$decrypt = $development_crypt->get_decrypt();
			
			if($debug){print "<br>--<br>";print_r($decrypt);}
			
			$decrypt_data = unserialize(htmlspecialchars_decode($decrypt));
			
			/*Se Encontrar a Correcta*/
			if(is_array($decrypt_data) && $decrypt_data['id_payme']){
				
				$find_id = $id_system; //encontra o ID 
				$id_payme = $decrypt_data['id_payme'];
				
				$this->masterSystemID = $find_id; //passa o masterSystem o id_user
				
				/*Connecta-se a BD do cliente*/
				$system = new system ($find_id);
				if (! $system->load ( $db_main )) {
					
					$errors[] = "System Not Found";
					$output['status'] = ((count($errors)>0)?(0):(1));
					$output['errors'] = $errors;
					echo json_encode($output);
					exit ();
				}
				// Acesso a base de dados do sistema
				$db_system = new mysql_db ( $system->get_db_host (), $system->get_db_name (), $system->get_db_username (), $system->get_db_password () );
				$db_system->connect_db ();
				
				$this->db_system = $db_system; //mete db_system a db certa
				
				/*Carrega os valores da payme do cliente*/
				$payme_users_head = new payme_users_head();
				$payme_users_head->set_id($id_payme);
				$payme_users_head->load($db_system);
				
				$this->payme_users_head = $payme_users_head;
				
				$this->id = $payme_users_head->get_id(); //mete o id_payme no objecto

				
				/*Carrega os detalhes HTML - Apenas em status: O - Open*/
				$sql_ud_html = ("SELECT payme_users_detail.`id` FROM payme_users_detail LEFT JOIN payme_users_head ON payme_users_detail.`fk_payme_users_head`= payme_users_head.id WHERE payme_users_detail.`fk_payme_users_head` = '$id_payme' AND payme_users_detail.`enabled`='1' AND payme_users_detail.`type`='HTML' and payme_users_head.status = 'O'");
				
				$rs_ud_html = $db_system->execute ( $sql_ud_html );
				
				while($row_ud = $db_system->get_row ( $rs_ud_html )) {
					
					$obj_payme_users_detail = new payme_users_detail();
					$obj_payme_users_detail->set_id($row_ud->id);
					$obj_payme_users_detail->load($db_system);					
					$this->payme_users_detail_html[] = $obj_payme_users_detail; 
				}
				
				
				
				if($debug){print_r($this->payme_users_head);print_r($db_system);}
				return(true);
				
			}
			if($debug){print "<hr>";}
			
		}
		

	$this->error = "ERR - Not Found";
	return (false);
		
	}
	
	public function create_hash($client_db){
		
		$key = "xpto";
		//get iv from cliente	
	}
	
	public function create_payme($client_db,$data_array){
		/*crypt*/
		require_once (dirname(__FILE__)."/../../development/classes/development_crypt.class.php");
		
		/*
		$development_crypt = new development_crypt();
		$development_crypt->encrypt($GLOBALS['key_program'],$iv,$encript); //abrir objecto
		$hash = rawurlencode($development_crypt->get_encrypt());
		*/
		//get iv from cliente	
	}
	public function change_status_payme($status,$status_desc){
		
		
		if($this->db_system){

			$payme_users_head_ob = $this->payme_users_head; //obj
			$payme_users_head_ob->set_status($status);
			$payme_users_head_ob->set_status_desc($status_desc);
			
			$payme_users_head_ob->save($this->db_system);
			
			return (true);	
		}
		
		return (false);
	}
	public function set_pay_users_history($status,$status_desc){ //setting 
		
		if($this->db_system){	
					
			$payme_users_history_ob = new payme_users_history();
			$payme_users_history_ob->set_fk_payme_users_head($this->id);
			$payme_users_history_ob->set_fk_mygest_payme_type($this->fk_mygest_payme_type); //<< falta
			$payme_users_history_ob->set_status_desc($status_desc);
			$payme_users_history_ob->set_status($status);
		
			$payme_users_history_ob->save($this->db_system);
			
			return (true);	
		}
		
		return (false);
	}
	/*
	// Carrega toda informacao a partir da base de dados //
	public function load($system_db, $client_db) {
		
		$this->error = false;
		
		//Includes - user_db
		include_once (dirname(__FILE__) . "/myclick_users_head.class.php"); //client_db head
		
		include_once (dirname(__FILE__) . "/myclick_users_detail.class.php"); //client_db detail
		
		//Includes - system_db
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
			$obj_myclick_user_list = new myclick_users_head($system_db,$client_db,$row->id);
			$this->myclick_user_list[] = $obj_myclick_user_list; 
		}
		
		
		$this->error = $client_db->get_error ();
		if ($this->error){
			return (true);
		}else{
			return (false);
		}
	}*/
	// Destructor //
	public function __destruct() {
	}
}

?>