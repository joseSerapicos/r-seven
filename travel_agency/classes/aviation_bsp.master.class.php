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
		
		$bsp_head_arr = array("name" => $name,"date_in" =>$date_in,"date_out" =>$date_out); //sent to insert @ db
		
		
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
		
		
		if (in_array($file_type, $allowedTypes) && in_array($extension, $allowedExts)){
			if ($error == 0){
				
				/*Workin good!*/
				
				$bsp_detail_arr = $this->parse_bsp($file_tmp_name); //<-get clean array from detail - parsed information
				
				if(empty($this->error)){
					
					$this->submit_bsp_db($client_db,$bsp_head_arr,$bsp_detail_arr); //<- save data in DB
					
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
	
	/*function parse_pdf_bsp*/
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
			/*Detecta os cabecalhos*/
			if(substr($value, 2, 9) == "DOCUMENTO"){ 
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
				/*
				if(substr($value_clean, 0, 9) != $type_line){ 
					if($company != substr($value_clean, 0, 4)){
						$company = substr($value_clean, 0, 4);
					}
				}*/
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
								$skeleton_board['ini'] = strpos($value, $value_skeleton);
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
		
					
					/*Detecta se existe sobre o cabeçalho na linha correcta*/
					//echo "<pre>each1";print_r($skeleton_each);
					//echo "<hr>";print_r(htmlentities($value));echo "<hr>";
					unset($skeleton_find);
					foreach($skeleton_each as $sk_key=>$sk_value){
						$type = $sk_value['name'];
						$ini = ($sk_value['ini']-2);
						$len = $sk_value['len'];
						
						//$ch = substr($value, $ini, $last); 
						$ch = trim(preg_replace('/\s+/', ' ', substr($value, $ini, $len)));
						//print "<hr>";
						//print $type;print_r($ch);
						if(!empty($ch)){ //se estiver vazio limpa!
							$skeleton_find[] = $sk_value['name'];
						}
					}
					//echo "<hr>";echo "each2<pre>";print_r($skeleton_find);
					
					
					/*Faz Explode da linha */
					
					$value = str_replace(",", ".", $value);
					$exploded_array = array_values(array_filter(explode(" ",$value), 'strlen'));
					//echo "<pre>";print_r($exploded_array);
					$new_array = array();
					
					
		
					foreach($exploded_array as $ex_key => $exploded){ //detecta os - nos valores
		
						//$exploded_type = $type_array[$ex_key]; //tipo da $type_array
							
						if(strpos($exploded,"-")){ //se detectar o "-"
						
							$xp = array_values(explode("-",$exploded));
							//echo "<pre>";print_r($xp);
							foreach($xp as $k=>$v){
								if($k == 0){ //primeiro encontrado
									$new_array[$ex_key+$k] = "-".$v;
								}else{
									if($v){ //ignora vazios
										//$new_array[$ex_key] = $v;
										$new_array[$ex_key+$k] = preg_replace('/\s+/', '', $v);
									}
								}
							}
							
						}else{
							
							$new_array[$ex_key] = preg_replace('/\s+/', '', $exploded);
						
						}
						
					} //end foreach
					//echo "<pre>";print_r($new_array);
					/*Corre a Array e faz Merge */
					$last_parsed_key = "";
					unset($parsed_array);
					
					//echo "<pre><hr>new_array";print_r($new_array);
					//echo "<pre><hr>find";print_r($skeleton_find);
					
					foreach($new_array as $n_key => $n_value){
						
						//print $skeleton_find[$n_key];
						
						if(!empty($skeleton_find[$n_key])){
							
							$last_parsed_key = $skeleton_find[$n_key];
							$parsed_array[$skeleton_find[$n_key]] = $n_value; 
						}else{
							$parsed_array[$last_parsed_key] .= " ".$n_value;
						}
					}
					
					//echo "<pre>PARSED ARRAY";print_r($parsed_array);
					//print $company;
					//print $type_line;
					//print $line;
					
					$parse[$company][$type_line][$line] = array_filter($parsed_array);	
					
				}
			}
		}
		
		//echo "<pre>";print_r($parse);echo "</pre>";
		
		/*Re-Order Array for Insert DB*/
		$insert_db = array();
		$index_insert_db = 0;
		if(is_array($parse))
		foreach($parse as $key1 => $value1)
		{
			if(is_array($value1))
			foreach($value1 as $key2 => $value2)
			{	
				if(is_array($value2))
				foreach($value2 as $value3)
				{			
					// Martelada do comentsrio
					if( (count($value3)==1) && (!empty($value3['COMENTARIOS'])) )
					{
						$insert_db[$index_insert_db]['COMENTARIOS'] .= ($value3['COMENTARIOS']);
					}
					else 
					{
						$tmp_arr = array();	
						$tmp_arr['company'] = $key1;
						$tmp_arr['type'] = $key2;
					
						if(is_array($value3))
						foreach($value3 as $key4 => $value4)
						{
							$tmp_arr[$key4] = $value4;
						}
						
						$insert_db[] = $tmp_arr;
						$index_insert_db++;
					}
				}
			
			}
			
		}
				
	/*Insert*/
	return $insert_db;
	//echo "<pre>";print_r($insert_db);echo "</pre>"; die();
	}
	
	private function submit_bsp_db($client_db,$bsp_head_arr,$bsp_detail_arr){
		
		/*aviation_bsp_head - cliente */
		require_once (dirname(__FILE__)."/aviation_bsp_head.class.php");
		
		/*aviation_bsp_detail - cliente */
		require_once (dirname(__FILE__)."/aviation_bsp_detail.class.php");
		
		
		
		
		foreach($array as $key_db => $value_db){
			
		}
		print "insert_db";
		echo "<pre>";print_r($array);echo "</pre>";
		die();
		
	}
	
	// Destructor //
	public function __destruct() {
	}
}

?>