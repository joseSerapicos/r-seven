<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: entities.class.php
|  PATH: classes
|  DESCRIPTION: Classe da entities (DB: cliente)
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 28MAR2014
|  MODIFICATION DATE: -
|____________________________________________________________*/


class entities {
	private $id;
	private $name;
	private $legal_name;
	private $taxpayer;
	private $address_1;
	private $address_2;
	private $postal_code;
	private $city;
	private $country;
	private $enabled;
	
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

		$this->id = false;
		$this->name = false;
		$this->legal_name = false;
		$this->taxpayer = false;
		$this->address_1 = false;
		$this->address_2 = false;
		$this->postal_code = false;
		$this->city = false;
		$this->country = false;
		$this->enabled = "1";
	}
	
	// ////////////////
	// Set methods //
	// //////////////
	public function set_id($var_id) {
		$this->id = $var_id;
	}
	
	public function set_name($var_id) {
		$this->name = $var_id;
	}
	public function set_legal_name($var_id) {
		$this->legal_name = $var_id;
	}
	public function set_taxpayer($var_id) {
		$this->taxpayer = $var_id;
	}
	public function set_address_1($var_id) {
		$this->address_1 = $var_id;
	}
	public function set_address_2($var_id) {
		$this->address_2 = $var_id;
	}
	public function set_postal_code($var_id) {
		$this->postal_code = $var_id;
	}
	public function set_city($var_id) {
		$this->city = $var_id;
	}
	public function set_country($var_id) {
		$this->country = $var_id;
	}
	public function set_enabled($var_enabled) {
		$this->enabled = $var_enabled;
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
	public function get_legal_name() {
		return ($this->legal_name);
	}
	public function get_taxpayer() {
		return ($this->taxpayer);
	}
	public function get_address_1() {
		return ($this->address_1);
	}
	public function get_address_2() {
		return ($this->address_2);
	}
	public function get_postal_code() {
		return ($this->postal_code);
	}
	public function get_city() {
		return ($this->city);
	}
	public function get_country() {
		return ($this->country);
	}
	public function get_enabled() {
		return ($this->enabled);
	}
	public function get_error() {
		return ($this->enabled);
	}
	
	
	// ////////////////
	// All methods //
	// //////////////

	// Carrega a informacao a partir da base de dados //
	public function load($user_db) {
		$this->error = false;
		if($this->id){
			$sql_where_id = " AND entities.id = '".$this->id."'";
		}

		$sql = ("SELECT 
					entities.id,
					entities.name,
					entities.legal_name,
					entities.taxpayer,
					entities.address_1,
					entities.address_2,
					entities.postal_code,
					entities.city,
					entities.country,
					entities.enabled
				FROM 
					entities
				WHERE
					entities.enabled = '".$this->enabled."'
					$sql_where_id 
				");
		$rs = $user_db->execute ( $sql );
		if ($row = $user_db->get_row ( $rs )) {
			
			$this->id 			= $row->id;
			$this->name 		= $row->name;
			$this->legal_name 	= $row->legal_name;
			$this->taxpayer 	= $row->taxpayer;
			$this->address_1 	= $row->address_1;
			$this->address_2 	= $row->address_2;
			$this->postal_code 	= $row->postal_code;
			$this->city 		= $row->city;
			$this->country 		= $row->country;
			$this->enabled 		= $row->enabled;
			
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
			// INSERT	(".(empty($this->fk_development_file_system)?"NULL":("'".addslashes($this->fk_development_file_system)."'")).",
			
			$sql = ("INSERT INTO
						entities
							(entities.name,
							entities.legal_name,
							entities.taxpayer,
							entities.address_1,
							entities.address_2,
							entities.postal_code,
							entities.city,
							entities.country,
							entities.enabled,
							)
					VALUES
						('".addslashes($this->name)."',
						'".addslashes($this->legal_name)."',
						'".addslashes($this->taxpayer)."',
						'".addslashes($this->address_1)."',
						'".addslashes($this->address_2)."',
						'".addslashes($this->postal_code)."',
						'".addslashes($this->city)."',
						'".addslashes($this->country)."',
						'".addslashes($this->enabled)."'
						)");
		}
		else {
			
			// UPDATE	
			$sql = ("UPDATE
						entities
					SET
						entities.name = '".addslashes($this->name)."',
						entities.legal_name = '".addslashes($this->legal_name)."',
						entities.taxpayer = '".addslashes($this->taxpayer)."',
						entities.address_1 = '".addslashes($this->address_1)."',
						entities.address_2 = '".addslashes($this->address_2)."',
						entities.postal_code = '".addslashes($this->postal_code)."',
						entities.enabled = '".addslashes($this->enabled)."'
					WHERE
						entities.id = '".addslashes($this->id)."'");
		}
		$rs = $var_db->execute($sql);
		
		return(true);
	}
	
	// Elimina registo da base de dados //
	public function delete($system_db) {
				
		$this->error = false;
	
		$sql = ("DELETE FROM
					entities
				WHERE
					entities.id = ".addslashes( $this->id ));
		$rs = $system_db->execute($sql);
		
		
	
		// Error
		$this->error = $system_db->get_error();
		if($this->error) return(false);
		
		return (true);
	}
	
	
	// Destructor //
	public function __destruct() {
	}
}

?>