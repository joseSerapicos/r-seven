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
		$this->enabled = "1";
		$this->error = false;

	}
	
	
	// ////////////////
	// Set methods //
	// //////////////
	public function set_payme_type_id($var_payme_type_id) {
		$this->payme_type_id = $var_payme_type_id;
	}
	
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
	
	public function get_payme_type() {
		return ($this->payme_type);
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
		Carrega toda informacao a partir da base de dados!
		Usado nas Listagens dentro do sistema do cliente
	*/
	public function client_list($system_db, $client_db) {
		
		$this->error = false;
		
		/*payme_users_head - cliente */
		require_once (dirname(__FILE__)."/payme_users_head.class.php");
		
		//system_db head
		$sql_where = "";
		if($this->payme_users_head_id){
			$sql_where = " AND payme_users_head.id = '".$this->payme_users_head_id."'";
		}
		
		$this->payme_users_head = array();
		$sql = ("SELECT 
					payme_users_head.id
				FROM 
					payme_users_head
				WHERE
					payme_users_head.enabled = '".$this->enabled."'
					$sql_where
					ORDER BY payme_users_head.id DESC
				");
		$rs = $client_db->execute ( $sql );
		
		while($row = $client_db->get_row ( $rs )) {
			/*instance payme_users_head information from cliente db*/
			$obj_payme_users_head = new payme_users_head();
			$obj_payme_users_head->set_id($row->id);
			$obj_payme_users_head->load($client_db);
			
			$this->payme_users_head[] = $obj_payme_users_head;
		}
		$this->error = $client_db->get_error ();
		if ($this->error){
			return (true);
		}else{
			return (false);
		}
	}/**/
	
	/* 
		Carrega pelo Sistema a listagem dos metodos de pagamento 
		disponíveis
	*/
	public function payme_type($system_db,$client_db) {
		
		/*payme_type - system */
		require_once (dirname(__FILE__)."/payme_type.mygest.class.php");

		$this->error = false;
		
		$sql_where = "";
		if($this->payme_type_id){
			$sql_where = " AND payme_type.id = '".$this->payme_type_id."'";
		}
		
		$this->payme_users_head = array();
		$sql = ("SELECT 
					payme_type.id
				FROM 
					payme_type
				WHERE
					payme_type.enabled = '".$this->enabled."'
					$sql_where
					ORDER BY payme_type.name DESC
				");
		$rs = $system_db->execute ( $sql );
		
		while($row = $system_db->get_row ( $rs )) {
			
			/*instance payme_type information from system db*/
			$obj_payme_type= new payme_type();
			$obj_payme_type->set_id($row->id);
			$obj_payme_type->load_connect($system_db,$client_db); //<- falta detectar se esta preenchido
			
			$this->payme_type[] = $obj_payme_type;
		}
		
		$this->error = $system_db->get_error ();
		if ($this->error){
			return (true);
		}else{
			return (false);
		}
	}
	/* 
		Carrega pelo Sistema a listagem dos metodos de pagamento 
		disponíveis
	*/
	public function payme_submit($system_db,$client_db,$array_input) {
				
		/*payme_users_head - cliente */
		require_once (dirname(__FILE__)."/payme_users_head.class.php");
		
		
		//echo "<pre>";print_r($array_input);echo "</pre>";
		$id				= $array_input['id'];
		$email 			= $array_input['email'];
		$description 	= $array_input['description']; 
		$total_value 	= $array_input['total_value']; 
		$currency_code 	= $array_input['currency_code']; 
		/*if pay_type is not array create pay_type empty*///if(!is_array($pay_type)) $pay_type = array();
		$pay_type 		= is_array($array_input['pay_type'])?$array_input['pay_type']:array(); 
		$status 		= empty($array_input['status'])?'O':$array_input['status']; //If Empty = O:Open
		

		/*Insert line at payme_users_head*/
		$payme_users_head = new payme_users_head();
		
		if(!empty($id)){ //Editar
			$payme_users_head->set_id($id);
		}
		$payme_users_head->set_email($email);
		$payme_users_head->set_description($description);
		$payme_users_head->set_total($total_value);
		$payme_users_head->set_currency_code($currency_code);
		$payme_users_head->set_status($status);
		
		$payme_users_head->save($client_db);
		
		if(empty($id)){ //Get Last Id from Head
			$sql = ("SELECT 
						MAX( id ) as last_id 
					FROM  
						`payme_users_head`
				");
			$rs = $client_db->execute ( $sql );
			
			if ($row = $client_db->get_row ( $rs )) {
				$id = $row->last_id;
			}else{ 
				$this->error = "MaxID: Error";	
				return (false);
			}
		}
		/*Import from Client Open Types: DB*/
		$pay_type_sys = $this->payme_type($system_db,$client_db);
		$pay_type_sys_list = $this->payme_type;
		//echo "<pre>";print_r($pay_type_sys_list);echo "</pre>";

		foreach($pay_type_sys_list as $pts_value){ //Detect if exist from system to post
			if(array_key_exists($pts_value->get_code(),$pay_type)){
				$this->payme_users_detail_process($system_db,$client_db,'NEW',array('fk_payme_users_head' => $id,"fk_mygest_payme_type" =>$pts_value->get_id(),"type"=>"HTML"));
				
			}else{
				$this->payme_users_detail_process($system_db,$client_db,'DELETE',array('fk_payme_users_head' => $id,"fk_mygest_payme_type" =>$pts_value->get_id(),"type"=>"HTML"));
				
			}
		}
		
		die();

		$this->error = $system_db->get_error ();
		if ($this->error){
			return (true);
		}else{
			return (false);
		}
	}
	/*Gest between process*/
	private function payme_users_detail_process($system_db,$client_db,$process,$array_input) {
		
		/*payme_gem - generate */
		require_once (dirname(__FILE__)."/payme_gen.class.php");
		
		
		//$process NEW or DELETE
		//NEW - ADD NEW OR EDIT if exist ignore
		//DELETE - REMOVE EXISTED
		
		/*payme_users_detail- cliente */
		require_once (dirname(__FILE__)."/payme_users_detail.class.php");
		
		
		$fk_payme_users_head 	= $array_input['fk_payme_users_head'];
		$fk_mygest_payme_type 	= $array_input['fk_mygest_payme_type'];
		$type 					= $array_input['type'];

		$sql = ("SELECT 
					payme_users_detail.id 
				FROM 
					payme_users_detail 
				WHERE 
					payme_users_detail.enabled = '".$this->enabled."' 
					AND payme_users_detail.fk_payme_users_head = '".addslashes($fk_payme_users_head)."' 
					AND payme_users_detail.fk_mygest_payme_type = '".addslashes($fk_mygest_payme_type)."' 
					AND payme_users_detail.type = '".addslashes($type)."' 
				");
		$rs = $client_db->execute ( $sql );
		$num_rows = mysql_num_rows($rs);
		if($num_rows > 0){ //If find - one or more 

			while($row = $system_db->get_row ( $rs )) { //run cicle
				
				switch ($process){
					case "DELETE":
					
							$id = $row->id;
						
							$obj_payme_users_detail = new payme_users_detail();
							$obj_payme_users_detail->set_id($id);
							$obj_payme_users_detail->delete($client_db);
						
					break;
				}
				
			}			
		}else{ //if empty
	
			switch ($process){
				case "NEW":
					/*Generate Code for Type*/
					$obj_payme_gen = new payme_gen(); //<- generate code
					$obj_payme_gen->gen_content($system_db,$client_db,$type,$fk_mygest_payme_type);
					$obj_payme_gen_code = $obj_payme_gen->get_gen_code(); //<-generated html
	
					/**/
					
					/*payme_users_detail add*/
					$obj_payme_users_detail = new payme_users_detail();
					$obj_payme_users_detail->set_fk_payme_users_head($fk_payme_users_head);
					$obj_payme_users_detail->set_fk_mygest_payme_type($fk_mygest_payme_type);
					$obj_payme_users_detail->set_type($type);
					$obj_payme_users_detail->set_code($obj_payme_gen_code); //<- generated from payme_gen
					$obj_payme_users_detail->set_enabled("1");
					
					$obj_payme_users_detail->save($client_db);
					
				break;
			}
		}
		
	}
	
	// Destructor //
	public function __destruct() {
	}
}

?>