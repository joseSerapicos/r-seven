<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: aviation.master.class.php
|  PATH: classes
|  DESCRIPTION: Classe do modulo aviation (aviaçao)
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 16ABR2014
|  MODIFICATION DATE: -
|____________________________________________________________*/


class aviation {

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
		
		$this->error = false;

	}
	
	
	// ////////////////
	// Set methods //
	// //////////////
	/*public function set_payme_type_id($var_payme_type_id) {
		$this->payme_type_id = $var_payme_type_id;
	}*/
	public function set_showDetail($Bool){
		$this->showDetail($Bool);
	}
	
	// ////////////////
	// Get methods //
	// //////////////
		
	public function get_error() {
		return ($this->error);
	}
	public function get_aviation_head(){
		return ($this->aviation_head);
	}
	// ////////////////
	// All methods //
	// //////////////
	
	/* 
		Carrega toda informacao a partir da base de dados!
		Usado nas Listagens dentro do sistema do cliente
	*/
	public function client_list($client_db) {
		
		$this->error = false;
		
		/*aviation_head - cliente */
		require_once (dirname(__FILE__)."/aviation_head.class.php");
		
		$this->aviation_head = array();
		$sql = ("SELECT 
					aviation_head.id
				FROM 
					aviation_head
				ORDER BY 
					aviation_head.id DESC
				");
		$rs = $client_db->execute ( $sql );
		
		while($row = $client_db->get_row ( $rs )) {
			/*instance aviation_head information from cliente db*/
			$obj_aviation_head = new aviation_head();

			if($this->showDetail){
				$obj_aviation_head->set_showDetail(true);
			}
			
			$obj_aviation_head->load($client_db,$row->id);
			
			$this->aviation_head[] = $obj_aviation_head;
		}
		$this->error = $client_db->get_error ();
		if ($this->error){
			return (true);
		}else{
			return (false);
		}
	}/**/
	
	// Destructor //
	public function __destruct() {
	}
}

?>