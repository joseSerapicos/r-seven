<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: myclick_head.class.php
|  PATH: classes
|  DESCRIPTION: Classe da head do myclick (myclick_head) na principal
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 10DEC2013
|  MODIFICATION DATE: 20JAN2014
|____________________________________________________________*/


class myclick_detail {
	private $id;
	private $fk_myclick_head;
	private $name;
	private $field_name;
	private $type;
	private $value;
	private $insert_time;
	private $insert_user;
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
	public function __construct2($system_db,$var_id) {

		$this->id = $var_id;
 		$this->load($system_db);
		
		$this->error = false;
	}
	
	// ////////////////
	// Set methods //
	// //////////////
	
	// ////////////////
	// Get methods //
	// //////////////
	
	// Retorna id do myclick_head//
	public function get_id() {
		return ($this->id);
	}
	public function get_fk_myclick_head() {
		return ($this->fk_myclick_head);
	}
	public function get_name() {
		return ($this->name);
	}
	public function get_field_name() {
		return ($this->field_name);
	}
	public function get_type() {
		return ($this->type);
	}
	public function get_value() {
		return ($this->value);
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
	

	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega a informacao a partir da base de dados //
	
	public function load($system_db) {
		$this->error = false;
		$sql = ("SELECT 
					-- myclick_head.id, 		
					myclick_detail.fk_myclick_head, 
					myclick_detail.name, 
					myclick_detail.field_name,
					myclick_detail.type,
					myclick_detail.value,
					myclick_detail.insert_time,
					myclick_detail.insert_user
				FROM 
					myclick_detail 
				WHERE
					myclick_detail.id = ".$this->id."
				");
		$rs = $system_db->execute ( $sql );
		if ($row = $system_db->get_row ( $rs )) {
			
			$this->fk_myclick_head = $row->fk_myclick_head;
			$this->name = $row->name;
			$this->field_name = $row->field_name;
			$this->type = $row->type;
			$this->value = $row->value;
			$this->insert_time = $row->insert_time;
			$this->insert_user = $row->insert_user;
			
			return (true);
		}
		
		// Error
		$this->error = $system_db->get_error ();
		return (false);
	}
	
	// Destructor //
	public function __destruct() {
	}
}

?>