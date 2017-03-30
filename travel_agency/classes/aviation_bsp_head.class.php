<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: aviation_bsp_head.class.php
|  PATH: classes
|  DESCRIPTION: Classe da head do aviation_bsp na principal
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 31JAN2014
|  MODIFICATION DATE: 31JAN2014
|____________________________________________________________*/


class aviation_bsp_head {
	private $id;
	private $name;
	private $name_file;
	private $date_in;
	private $date_out;
	private $status;
	private $insert_time;
	private $insert_user;
	private $enabled;
	
	private $aviation_bsp_detail;
	
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

		//$this->id = $var_id;
 		//$this->load($client_db);
		
		$this->error = false;
	}
	
	
	// ////////////////
	// Set methods //
	// //////////////
	public function set_id($value) {
		$this->id = $value;
	}
	public function set_name($value) {
		$this->name = $value;
	}
	public function set_name_file($value) {
		$this->name_file = $value;
	}
	public function set_date_in($value) {
		$this->date_in = $value;
	}
	public function set_date_out($value) {
		$this->date_out = $value;
	}
	public function set_status($value) {
		$this->status = $value;
	}
	public function set_insert_user($value) {
		$this->insert_user = $value;
	}
	public function set_enabled($value) {
		$this->enabled = $value;
	}
	
	// ////////////////
	// Get methods //
	// //////////////
	
	public function get_id() {
		return ($this->id);
	}
	public function get_name() {
		return ($this->name);
	}
	public function get_name_file() {
		return ($this->name_file);
	}
	public function get_date_in() {
		return ($this->date_in);
	}
	public function get_date_out() {
		return ($this->date_out);
	}
	public function get_status() {
		return ($this->status);
	}
	public function get_insert_time() {
		return ($this->insert_time);
	}
	public function get_insert_user() {
		return ($this->insert_user);
	}
	public function get_enabled() {
		return ($this->enabled);
	}
	public function get_aviation_bsp_detail() { //com detalhe da detail
		return ($this->aviation_bsp_detail);
	}
	
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega toda informacao a partir da base de dados //
	public function load($client_db,$var_id) {
		$this->error = false;
		$this->id = $var_id;
		
		$sql = ("SELECT 
					-- aviation_bsp_head.id,
					aviation_bsp_head.name,
					aviation_bsp_head.name_file,
					aviation_bsp_head.date_in,
					aviation_bsp_head.date_out,
					aviation_bsp_head.status,
					aviation_bsp_head.insert_time,
					aviation_bsp_head.insert_user,
					aviation_bsp_head.enabled
				FROM 
					aviation_bsp_head
				WHERE
					aviation_bsp_head.id = ".$this->id."
				");
		$rs = $client_db->execute ( $sql );
		if ($row = $client_db->get_row ( $rs )) {
			//$this->id = $row->id;
			$this->name 		= $row->name;
			$this->name_file 	= $row->name_file;
			$this->date_in 		= $row->date_in;
			$this->date_out 	= $row->date_out;
			$this->status 		= $row->status;
			$this->insert_time 	= $row->insert_time;
			$this->insert_user 	= $row->insert_user;
			$this->enabled 		= $row->enabled;
			return (true);
		}
		
		// Error
		$this->error = $client_db->get_error ();
		return (false);
	}
	
		// Carrega toda informacao a partir da base de dados //
	public function load_detail($client_db,$var_id) {
		
		$this->error = false;
		$this->id = $var_id;
		
		$sql = ("SELECT 
					aviation_bsp_head.id,
					aviation_bsp_head.name,
					aviation_bsp_head.name_file,
					aviation_bsp_head.date_in,
					aviation_bsp_head.date_out,
					aviation_bsp_head.status,
					aviation_bsp_head.insert_time,
					aviation_bsp_head.insert_user,
					aviation_bsp_head.enabled
				FROM 
					aviation_bsp_head
				WHERE
					aviation_bsp_head.id = ".$this->id."
				");
		$rs = $client_db->execute ( $sql );
		if ($row = $client_db->get_row ( $rs )) {
			$this->id 			= $row->id;
			$this->name 		= $row->name;
			$this->name_file 	= $row->name_file;
			$this->date_in 		= $row->date_in;
			$this->date_out 	= $row->date_out;
			$this->status 		= $row->status;
			$this->insert_time 	= $row->insert_time;
			$this->insert_user 	= $row->insert_user;
			$this->enabled 		= $row->enabled;
			
			$this->load_aviation_bsp_detail($client_db);
		
			
			return (true);
		}
		
		// Error
		$this->error = $client_db->get_error ();
		return (false);
	}
	private function load_aviation_bsp_detail($client_db){
		
		/*Includes */
		include_once ("aviation_bsp_detail.class.php"); //aviation_bsp head 
		
		
		$sql = ("SELECT 
					aviation_bsp_detail.id
				FROM 
					aviation_bsp_detail
				WHERE
					aviation_bsp_detail.fk_aviation_bsp_head = '".$this->id."'
				");
			$rs = $client_db->execute ( $sql );
			
			while($row = $client_db->get_row ( $rs )) {
				$obj_aviation_bsp_detail = new aviation_bsp_detail();
				$obj_aviation_bsp_detail->load($client_db,$row->id);
				$this->aviation_bsp_detail[] = $obj_aviation_bsp_detail; 
			}
			
		$this->error = $client_db->get_error ();
		return (false);	
	}
	
	// Guarda a informacao na base de dados //
	public function save($user_db) {
		$this->error = false;
		
		if(empty($this->id)) {
		
			$sql = ("INSERT INTO 
						aviation_bsp_head 
							(aviation_bsp_head.name,
							aviation_bsp_head.name_file,
							aviation_bsp_head.date_in,
							aviation_bsp_head.date_out,
							aviation_bsp_head.status,
							aviation_bsp_head.insert_time,
							aviation_bsp_head.insert_user,
							aviation_bsp_head.enabled
							) 
					VALUES 
						('".addslashes($this->name)."',
						'".addslashes($this->name_file)."',
						'".addslashes($this->date_in)."',
						'".addslashes($this->date_out)."',
						'".addslashes($this->status)."',
						CURRENT_TIMESTAMP(),
						'".addslashes($this->insert_user)."',
						'".addslashes($this->enabled)."'
						)");
		}
		else {
			
			// UPDATE	
			$sql = ("UPDATE 
						aviation_bsp_head 
					SET 
						aviation_bsp_head.name = '".addslashes($this->name)."',
						aviation_bsp_head.name_file = '".addslashes($this->name_file)."',
						aviation_bsp_head.date_in = '".addslashes($this->date_in)."',
						aviation_bsp_head.date_out = '".addslashes($this->date_out)."',
						aviation_bsp_head.status = '".addslashes($this->status)."',
						aviation_bsp_head.enabled = '".addslashes($this->enabled)."'
					WHERE 
						aviation_bsp_head.id = '".addslashes($this->id)."'");
		}
		$rs = $user_db->execute($sql);
		
		return(true);
	}
	
	// Elimina registo da base de dados //
	public function delete($user_db) {
				
		$this->error = false;
	
		$sql = ("DELETE FROM 
					aviation_bsp_head 
				WHERE 
					aviation_bsp_head.id = ".addslashes( $this->id ));
		$rs = $user_db->execute($sql);
	
		// Error
		$this->error = $user_db->get_error();
		if($this->error) return(false);
		
		return (true);
	}
	// Destructor //
	public function __destruct() {
	}
}

?>