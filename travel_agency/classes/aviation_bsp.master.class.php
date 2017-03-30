<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: aviation_bsp.master.class.php
|  PATH: classes
|  DESCRIPTION: Classe da master da aviation_bsp
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 31JAN2014
|  MODIFICATION DATE: 05MAIO2014
|____________________________________________________________*/


class aviation_bsp {
	private $enabled;
	
	private $aviation_bsp_head;
	
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
		$this->myclick_users_head_id = '0'; //se for 0 aparece todos
		//$this->load($db_main,$db_system);
		
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
	
	public function get_aviation_bsp_head() {
		return ($this->aviation_bsp_head);
	}
	
	// ////////////////
	// All methods //
	// //////////////
	
	/*Get information from Head only! (good for listing)*/
	public function head($client_db) {
		
		$this->error = false;
		
		/*Includes */
		include_once ("aviation_bsp_head.class.php"); //aviation_bsp head 
		//system_db head
		$sql_where = "";
		/*
		if($this->myclick_users_head_id){
			$sql_where = " AND myclick_users_head.id = '".$this->myclick_users_head_id."'";
		}*/
		
		$this->aviation_bsp_head = array();
		$sql = ("SELECT 
					aviation_bsp_head.id
				FROM 
					aviation_bsp_head
				WHERE
					aviation_bsp_head.enabled = '".$this->enabled."'
					$sql_where
				");
		$rs = $client_db->execute ( $sql );
		
		while($row = $client_db->get_row ( $rs )) {
			$obj_aviation_bsp_head = new aviation_bsp_head();
			$obj_aviation_bsp_head->load($client_db,$row->id);
			
			$this->aviation_bsp_head[] = $obj_aviation_bsp_head; 
		}
		
		
		$this->error = $client_db->get_error ();
		if ($this->error){
			return (true);
		}else{
			return (false);
		}
	}
	
	/*Get information from Head And Detail (connected to head)*/
	public function head_detail($client_db,$bsp_id) {
		
		$this->error = false;
		
		/*Includes */
		include_once ("aviation_bsp_head.class.php"); //aviation_bsp head 
		
		$this->aviation_bsp_head = array();
		$sql = ("SELECT 
					aviation_bsp_head.id
				FROM 
					aviation_bsp_head
				WHERE
					aviation_bsp_head.enabled = '".$this->enabled."'
				AND
					aviation_bsp_head.id = '".$bsp_id."'
					
				");
		$rs = $client_db->execute ( $sql );
		
		while($row = $client_db->get_row ( $rs )) {
			$obj_aviation_bsp_head = new aviation_bsp_head();
			$obj_aviation_bsp_head->load_detail($client_db,$row->id);
			$this->aviation_bsp_head[] = $obj_aviation_bsp_head; 
		}
		
		
		$this->error = $client_db->get_error ();
		if ($this->error){
			return (true);
		}else{
			return (false);
		}
	}
	/*Submit BSP PT*/
	public function submit_bsp($client_db,$post,$files){
		
		/*Implementar PDF->TXT*/
		
		/*Params from _POST*/
		$name		= $post['name'];
		$date_in 	= $post['date_in'];
		$date_out 	= $post['date_out'];
		//echo "<pre>";print_r($post);echo "</pre>";
		
		
		
		
		/*Params from _FILES*/
		$file_name 		 = $files['file']['name'];
		$file_type 		 = $files['file']['type'];
		$file_tmp_name 	 = $files['file']['tmp_name'];
		$error 			 = $files['file']['error'];
		$file_size 		 = $files['file']['size'];
		
		$temp = explode(".", $file_name);
		$real_filename = reset($temp); //file name
		$extension = end($temp); //extension
		
		$allowedExts = array("txt");
		$allowedTypes = array("text/plain");
		
		$bsp_head_arr = array("name" => $name,"name_file" => $file_name,"date_in" =>$date_in,"date_out" =>$date_out); //sent to insert @ db
		
		if (in_array($file_type, $allowedTypes) && in_array($extension, $allowedExts)){
			if ($error == 0){
				
				/*Workin good!*/
				
				$bsp_detail_arr = $this->parse_bsp($file_tmp_name); //<-get clean array from detail - parsed information
				
				if(empty($this->error)){
					
					$this->submit_bsp_db($client_db,$bsp_head_arr,$bsp_detail_arr); //<- save data in DB
					return true;
					
				}
		
			}else{
				//echo "Return Code: " . $error  . "<br>";
				$this->error = "Error Return Code: ".$error;
				return false;
			}
		}else{
			$this->error = "Invalid File";
			return false;
			//echo "Invalid file";
		
		}
		

		
	}
	
	/*function parse content of bsp file in txt*/
	private function parse_bsp($file){
		
		if (!file_exists($file)) {
			$this->error = "File Not Found";
			return false;
		}
		
		$debug = false;
		
		$file = file($file);
		
		
		$type_line = "BREAK";
		$company = "EMPTY";
		
		foreach($file as $line=>$value){
		
			$value_clean = preg_replace('/\s+/', '', $value); 
			if(empty($value_clean)){
				$type_line = "BREAK";
				$type_array = array();
			}
			
			/*Errors*/
			if(substr($value, 0, 3) == "TOT"){ //Ignora este tipo
				$type_line = "BREAK";
				$type_array = array();
			}
			if(substr($value, 0, 10) == "REEMBOLSOS"){
				$type_line = "BREAK";
				$type_array = array();
			}
		
			//$type_array = array('doc_n','dc','cpn_void','emission_date','cash','exp_rates_credit','irs','rates','com_perc','comission','irs_com','adj_comercial','payment_value','comments');
			
			if(substr($value, 2, 9) == "DOCUMENTO"){ //Detecta os cabecalhos
				$type_line = "SKELETON";
			}else if(substr($value, 0, 9) == "COMPANHIA"){
				$type_line = "COMPANHIA";
			}else if(substr($value, 0, 4) == "OPET"){
				$type_line = "OPET";		
			}else if(substr($value, 0, 3) == "ACM"){
				$type_line = "ACM";
				$type_array = array('doc_n','dc','emission_date','comission');
			}else if(substr($value, 0, 11) == "ACM BSPLINK"){
				$type_line = "ACM BSPLINK";
				$type_array = array();
			}else if(substr($value, 0, 3) == "ADM"){
				$type_line = "ADM";
				$type_array = array();
			}else if(substr($value, 0, 5) == "OPATB"){
				$type_line = "OPATB";
				$type_array = array();
			}else if(substr($value, 0, 18) == "ELECTRONIC TICKETS"){
				$type_line = "ELECTRONIC TICKETS";		
			}else if(substr($value, 0, 8) == "REF APPL"){
				$type_line = "REF APPL";
				$type_array = array();
			}else if(substr($value, 0, 18) == "REEMBOLSO AUTOMATI"){
				$type_line = "REEMBOLSO AUTOMATI";
				$type_array = array();
			}else if(substr($value, 0, 14) == "MCO AUTOMATICO"){
				$type_line = "MCO AUTOMATICO";
				$type_array = array();
			}else if(substr($value, 0, 4) == "SPDR"){
				$type_line = "SPDR";
				$type_array = array();
			}else if(substr($value, 0, 9) == "VMPD MV50"){
				$type_line = "VMPD MV50";
				
				
			}else if(substr($value, 0, 9) == "EMDS-EMDA"){
				$type_line = "EMDS-EMDA";
				$type_array = array();
			}
		
			
			/*Companhia de aviaçao*/
			if($type_line == "COMPANHIA"){
				
				$company = substr($value, 382, 3);  
			}
			
			if($value_clean != $type_line){ //Ignora Linha Primeira
				
				/*Linhas de Cabecalho (pega nas posiçoes)*/
				if($type_line == "SKELETON"){
						
						unset($skeleton_board); //limpa se houver antigas
						unset($skeleton_each);
						//print "linha".$line;
						//echo "<hr><pre>";print_r($value);echo "<hr>";
						$skeleton = array_values(array_filter(explode(" ",$value), 'strlen'));
						//echo "<hr><pre>";print_r($skeleton);echo "<hr>";
						
						foreach ($skeleton as $value_skeleton){
							
							$skeleton_value =  trim(preg_replace('/\s+/', ' ', $value_skeleton));
							if($skeleton_value){ //se nao for vazio
								$skeleton_board['name'] = $skeleton_value;
								$skeleton_board['ini'] = (strpos($value, " ".$value_skeleton." ")+1); //+1 correcçao do espaço inicial
								$skeleton_board['last'] = $skeleton_board['ini']+strlen($skeleton_value);
								$skeleton_board['len'] = strlen($skeleton_value);
								
								$skeleton_each[] = $skeleton_board; //cada página tem a sua
							}
						}
					}
				//echo "<pre>";print_r($skeleton_each);
				
				/*Linhas disponiveis*/
				if($type_line != "BREAK" and $type_line != "COMPANHIA" and $type_line != "SKELETON" and substr($value, 0, 1) == " "){ //Ignora os que deve Ignorar ^c^
					
					//print "linha".$line;
		
					
					/*Limpa os espaços todos da linha*/
					$value = str_replace(",", ".", $value);
					$exploded_array = array_values(array_filter(explode(" ",$value), 'strlen'));
					
					
					$new_array = array();
					
					$implement_value = 0; //raros casos quando o - esta colado com o resultado anterior
					 
					foreach($exploded_array as $ex_key => $exploded){ //detecta os - nos valores
		
						//$exploded_type = $type_array[$ex_key]; //tipo da $type_array
						
						if(strpos($exploded,"-")){ //se detectar o "-"
		
							$xp = array_values(explode("-",$exploded));
							//echo "<pre>";print_r($xp);
							foreach($xp as $k=>$v){
								if($k == 0){ //primeiro encontrado
									$new_array[$ex_key+$k] = "-".$v;
								}else{
									if(!empty($v)){ //ignora vazios
										$new_array[$ex_key+$k+$implement_value] = $v; //<- martelada define seguinte
										$implement_value++;
									}
								}
							}
							
						}else{
							
							$new_array[$ex_key+$implement_value] = preg_replace('/\s+/', '', $exploded);
						
						}
						
						
						
					} //end foreach
					//ksort($new_array);
					
					
					/*Detecta se existe sobre o cabeçalho na linha correcta*/
					//echo "<pre>each1";print_r($skeleton_each);
					//echo "<hr>";print_r(htmlentities($value));echo "<hr>";
					
					$sent_array = array();
					$value_array_position = 0;
					//print "new";
					//echo "<pre>";print_r($new_array);echo "</pre>";
					//echo "<pre>";print_r($skeleton_each);echo "</pre>";
					
					$sent_array['company']	= $company;
					$sent_array['type']		= $type_line;;
					foreach($skeleton_each as $sk_key=>$sk_value){
						
						$type = $sk_value['name'];
						$ini = ($sk_value['ini']);
						$len = $sk_value['len'];
						
						$ch = trim(preg_replace('/\s+/', ' ', substr($value, $ini, $len)));
						
						/*print "<hr>";
						print $type." ";
						print $ch;*/
						
						
						if(!empty($ch) or is_numeric($ch)){ //if value is 0 
							//print "OK";
							//print $value_array_position;
							$sent_array[$type] = $new_array[$value_array_position];
							
							if(!is_array($skeleton_each[$sk_key+1])){ // insert last key to last value last key
								
								/*print "OK";
								print "K<b>";print $value_array_position;print "</b>"; print_r($new_array);print "E";*/
								for ($i = $value_array_position+1; $i < count($new_array); $i++) {
									$sent_array[$type] .= " ".$new_array[$i];
								}
								//$sent_array[$type] .= " ".$new_array[$value_array_position+1];
							}
							
							$value_array_position++;
						}else{
							$sent_array[$type] = "";
						}
						
						//print "<hr>";
					}//end foreach
					//echo "<pre>";print_r($sent_array);echo "</pre>";
					//print "<hr>";
					$parse[] = $sent_array;
					//print "sent_array";
				}
			}
		}
		
		
		
		/*Merging comments */
		if(is_array($parse))
		$working_key = 0;
		foreach($parse as $key => $value){
			if(empty($value['DOCUMENTO']) && ($parse[$key]['company'] == $value['company']) && ($parse[$key]['type'] == $value['type']) ){
				$parse[$working_key]['COMENTARIOS'] .= $parse[$key]['COMENTARIOS']; //adicona na working key merge do comentario
				unset($parse[$key]);
			}else{
				$working_key = $key; //se tiver documento é a working key
			}
		}
		
		$parse = array_values($parse);//reorder
		
		return $parse;
	}
	/*Function submit the bsp array and insert*/
	private function submit_bsp_db($client_db,$bsp_head_arr,$bsp_detail_arr){
		
		/*aviation_bsp_head - cliente */
		require_once (dirname(__FILE__)."/aviation_bsp_head.class.php");
		
		/*aviation_bsp_detail - cliente */
		require_once (dirname(__FILE__)."/aviation_bsp_detail.class.php");
		
		$obj_aviation_bsp_head = new aviation_bsp_head();
		$obj_aviation_bsp_head->set_name($bsp_head_arr['name']);
		$obj_aviation_bsp_head->set_name_file($bsp_head_arr['name_file']);
		$obj_aviation_bsp_head->set_date_in($bsp_head_arr['date_in']);
		$obj_aviation_bsp_head->set_date_out($bsp_head_arr['date_out']);
		$obj_aviation_bsp_head->set_enabled("1");
		$obj_aviation_bsp_head->save($client_db);
		

		/*Getting last id*/
		$sql = ("SELECT 
						MAX( id ) as last_id 
					FROM  
						`aviation_bsp_head`
				");
		$rs = $client_db->execute ( $sql );
			
		if ($row = $client_db->get_row ( $rs )) {
			$aviation_bsp_head_id = $row->last_id;
		}else{ 
			$this->error = "MaxID: Error";	
			return (false);
		}

		//die();
		foreach($bsp_detail_arr as $value_db){
			
			
			$obj_aviation_bsp_detail = new aviation_bsp_detail();
			
			$obj_aviation_bsp_detail->set_fk_aviation_bsp_head($aviation_bsp_head_id);
			$obj_aviation_bsp_detail->set_company($value_db['company']);
			$obj_aviation_bsp_detail->set_type($value_db['type']);
			$obj_aviation_bsp_detail->set_doc_n($value_db['DOCUMENTO']);
			$obj_aviation_bsp_detail->set_dc($value_db['C']);
			$obj_aviation_bsp_detail->set_cpn_void($value_db['VOID']);
			$sent_emission_date = "20".substr($value_db['EMISSAO'],4,2)."-".substr($value_db['EMISSAO'],2,2)."-".substr($value_db['EMISSAO'],0,2);
			$obj_aviation_bsp_detail->set_emission_date(empty($value_db['EMISSAO'])?'':$sent_emission_date);
			$obj_aviation_bsp_detail->set_cash($value_db['CASH']);
			$obj_aviation_bsp_detail->set_exp_rates_credit($value_db['CREDITO']);
			$obj_aviation_bsp_detail->set_irs($value_db['IVA']);
			$obj_aviation_bsp_detail->set_rates($value_db['TAXAS']);
			$obj_aviation_bsp_detail->set_com_perc($value_db['PERC']);
			$obj_aviation_bsp_detail->set_comission($value_db['COMISSAO']);
			$obj_aviation_bsp_detail->set_irs_com($value_db['COM']);
			$obj_aviation_bsp_detail->set_adj_comercial($value_db['COMERCIAL']);
			$obj_aviation_bsp_detail->set_payment_value($value_db['PAGAR']);
			$obj_aviation_bsp_detail->set_comments($value_db['COMENTARIOS']);
			$obj_aviation_bsp_detail->save($client_db);
		}	
	}
	
	
	/*Functions for submit detail (line description)*/
	public function submit_bsp_detail($client_db,$post){
		
		/*aviation_bsp_head - cliente */
		require_once (dirname(__FILE__)."/aviation_bsp_head.class.php");
		
		/*aviation_bsp_detail - cliente */
		require_once (dirname(__FILE__)."/aviation_bsp_detail.class.php");
				
		$aviation_bsp_detail_id = $post['aviation_bsp_detail_id'];
		$user_text 				= $post['user_text'];
		$status 				= $post['status'];
		
		
		$obj_aviation_bsp_detail = new aviation_bsp_detail();
		
		$obj_aviation_bsp_detail->load($client_db,$aviation_bsp_detail_id); //<-load data from detail
		
		$obj_aviation_bsp_detail->set_id($aviation_bsp_detail_id);
		$obj_aviation_bsp_detail->set_user_text($user_text);
		$obj_aviation_bsp_detail->set_status($status);
		$obj_aviation_bsp_detail->save($client_db);
		
		/*Every time you put OK detect if lines are good to put the head OK */
		//if($status == "OK"){ //after ok cannot change status!
			
			$fk_aviation_bsp_head = $obj_aviation_bsp_detail->get_fk_aviation_bsp_head();
			
			/*Detect from Details if mother PD exist in other results in PD*/
			
			$sql = ("SELECT aviation_bsp_detail.id 
						FROM `aviation_bsp_detail` 
						WHERE `fk_aviation_bsp_head` = '$fk_aviation_bsp_head'
							AND `status` = 'PD'
					");
			$rs = $client_db->execute ( $sql );
			$num_rows = mysql_num_rows($rs);
			
			if($num_rows == 0){ /*All in OK*/
				$obj_aviation_bsp_head = new aviation_bsp_head();
				$obj_aviation_bsp_head->load($client_db,$fk_aviation_bsp_head);	
				$obj_aviation_bsp_head->set_status("OK");
				$obj_aviation_bsp_head->save($client_db);
			}else{ //PD Open/
				$obj_aviation_bsp_head = new aviation_bsp_head();
				$obj_aviation_bsp_head->load($client_db,$fk_aviation_bsp_head);	
				$obj_aviation_bsp_head->set_status("PD");
				$obj_aviation_bsp_head->save($client_db);
			
			}
		//}
		
	}
	
	// Destructor //
	public function __destruct() {
	}
}

?>