<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: mylist_difusion_detail.class.php
|  PATH: classes
|  DESCRIPTION: Classe da mylist_difusion_detail
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 17ABR2014
|  MODIFICATION DATE: -
|____________________________________________________________*/


class mylist_difusion_detail {
	private $id;
	private $fk_mylist_difusion_head;
	private $fk_mylist_difusion_detail; //referencia
	private $status;
	
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
		
		$this->enabled = "1";
		
	}
	
	// ////////////////
	// Set methods //
	// //////////////
	public function set_id($value){
		$this->id = $value;
	}
	public function set_fk_mylist_difusion_head($value){
		$this->fk_mylist_difusion_head = $value;
	}
	public function set_fk_mylist_difusion_detail($value){
		$this->fk_mylist_difusion_detail = $value;
	}
	public function set_status($value){
		$this->status = $value;
	}
	
	// ////////////////
	// Get methods //
	// //////////////
	
	// Retorna id do myclick_head//
	public function get_id() {
		return ($this->id);
	}
	public function get_fk_mylist_difusion_head() {
		return ($this->fk_mylist_difusion_head);
	}
	public function get_fk_mylist_difusion_detail() {
		return ($this->fk_mylist_difusion_detail);
	}
	public function get_status() {
		return ($this->status);
	}
		
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega a informacao a partir da base de dados //
	public function load($user_db,$difusion_list_id) {
		$this->error = false;
		$sql = ("SELECT 
					mylist_difusion_detail.id,
					mylist_difusion_detail.fk_mylist_difusion_head,
					mylist_difusion_detail.fk_mylist_difusion_detail,
					mylist_difusion_detail.status 					
				FROM 
					mylist_difusion_detail 
				WHERE 
					mylist_difusion_detail.id = '".$difusion_list_id."' 
					AND mylist_difusion_detail.enabled = '".$this->enabled."'
				");
		$rs = $user_db->execute ( $sql );
		if ($row = $user_db->get_row ( $rs )) {
			$this->id 							= $row->id;
			$this->fk_mylist_difusion_head 		= $row->fk_mylist_difusion_head;
			$this->fk_mylist_difusion_detail 	= $row->fk_mylist_difusion_detail;
			$this->status 						= $row->status;
			
			return (true);
		}
		
		// Error
		$this->error = $user_db->get_error ();
		return (false);
	}

	// Guarda a informacao na base de dados //
	public function save($var_db) {
		$this->error = false;
	
		if(empty($this->id)) {
			$sql = ("INSERT INTO 
						mylist_difusion_detail 
							(mylist_difusion_detail.fk_mylist_difusion_head,
							mylist_difusion_detail.fk_mylist_difusion_detail,
							mylist_difusion_detail.status
							) 
					VALUES 
						('".addslashes($this->fk_mylist_difusion_head)."',
						'".addslashes($this->fk_mylist_difusion_detail)."',
						'".addslashes($this->status)."'
						)");
		}else{
	
			$sql = ("UPDATE 
						mylist_difusion_detail 
					SET 
						mylist_difusion_detail.fk_mylist_difusion_head = '".addslashes($this->fk_mylist_difusion_head)."',
						mylist_difusion_detail.fk_mylist_difusion_detail = '".addslashes($this->fk_mylist_difusion_detail)."',
						mylist_difusion_detail.status = '".addslashes($this->status)."' 						
					WHERE 
						mylist_difusion_detail.id = '".addslashes($this->id)."'");
		}
		$rs = $var_db->execute($sql);
		return (true);
	}
	
	// Elimina registo da base de dados //
	public function delete($var_db) {

		$this->error = false;
	
		$sql = ("DELETE FROM 
					mylist_difusion_detail 
				WHERE 
					mylist_difusion_detail.id = '".addslashes($this->id)."'");
		$rs = $var_db->execute($sql);
			
		// Error
		$this->error = $var_db->get_error();
		if($this->error) return(false);
		
		return (true);
	}
	
	// Destructor //
	public function __destruct() {
	}
}

?>