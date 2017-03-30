<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: store.class.php
|  PATH: administration/stores/classes
|  DESCRIPTION: Classe para interaccao com a tabela stores
|
|  AUTHOR: Jose A. C. Serapicos
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class store {
	private $id;
	private $fk_stores;
	private $name;
	private $legal_name;
	private $nif;
	private $rnavt;
	private $address_1;
	private $address_2;
	private $address_3;
	private $postal_code;
	private $country;
	private $email;
	private $web_page;
	private $phone_1;
	private $phone_2;
	private $phone_3;
	private $insert_time;
	private $insert_user;
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
		$this->fk_stores = false;
		$this->name = false;
		$this->legal_name = false;
		$this->nif = false;
		$this->rnavt = false;
		$this->address_1 = false;
		$this->address_2 = false;
		$this->address_3 = false;
		$this->postal_code = false;
		$this->country = false;
		$this->email = false;
		$this->web_page = false;
		$this->phone_1 = false;
		$this->phone_2 = false;
		$this->phone_3 = false;
		$this->insert_time = false;
		$this->insert_user = false;
		$this->enabled = false;
	
		$this->error = false;
	}
	
	// 1 Args //
	public function __construct1($var_id) {
		$this->id = $var_id;
		$this->fk_stores = false;
		$this->name = false;
		$this->legal_name = false;
		$this->nif = false;
		$this->rnavt = false;
		$this->address_1 = false;
		$this->address_2 = false;
		$this->address_3 = false;
		$this->postal_code = false;
		$this->country = false;
		$this->email = false;
		$this->web_page = false;
		$this->phone_1 = false;
		$this->phone_2 = false;
		$this->phone_3 = false;
		$this->insert_time = false;
		$this->insert_user = false;
		$this->enabled = false;
	
		$this->error = false;
	}
	
	// ////////////////
	// Set methods //
	// //////////////
	
	public function set_id($var) {
		$this->id = $var;
	}
	
	public function set_fk_stores($var) {
		$this->fk_stores = $var;
	}
	
	public function set_name($var) {
		$this->name = $var;
	}
	
	public function set_legal_name($var) {
		$this->legal_name = $var;
	}
	
	public function set_nif($var) {
		$this->nif = $var;
	}
	
	public function set_rnavt($var) {
		$this->rnavt = $var;
	}
	
	public function set_address_1($var) {
		$this->address_1 = $var;
	}
	
	public function set_address_2($var) {
		$this->address_2 = $var;
	}
	
	public function set_address_3($var) {
		$this->address_3 = $var;
	}
	
	public function set_postal_code($var) {
		$this->postal_code = $var;
	}
	
	public function set_country($var) {
		$this->country = $var;
	}
	
	public function set_email($var) {
		$this->email = $var;
	}
	
	public function set_web_page($var) {
		$this->web_page = $var;
	}
	
	public function set_phone_1($var) {
		$this->phone_1 = $var;
	}
	
	public function set_phone_2($var) {
		$this->phone_2 = $var;
	}
	
	public function set_phone_3($var) {
		$this->phone_3 = $var;
	}
	
	public function set_insert_user($var) {
		$this->insert_user = $var;
	}
	
	public function set_enabled($var) {
		$this->enabled = $var;
	}
	
	
	// ////////////////
	// Get methods //
	// //////////////
	
	public function get_id() {
		return($this->id);
	}
	
	public function get_fk_stores() {
		return($this->fk_stores);
	}
	
	public function get_name() {
		return($this->name);
	}
	
	public function get_legal_name() {
		return($this->legal_name);
	}
	
	public function get_nif() {
		return($this->nif);
	}
	
	public function get_rnavt() {
		return($this->rnavt);
	}
	
	public function get_address_1() {
		return($this->address_1);
	}
	
	public function get_address_2() {
		return($this->address_2);
	}
	
	public function get_address_3() {
		return($this->address_3);
	}
	
	public function get_postal_code() {
		return($this->postal_code);
	}
	
	public function get_country() {
		return($this->country);
	}
	
	public function get_email() {
		return($this->email);
	}
	
	public function get_web_page() {
		return($this->web_page);
	}
	
	public function get_phone_1() {
		return($this->phone_1);
	}
	
	public function get_phone_2() {
		return($this->phone_2);
	}
	
	public function get_phone_3() {
		return($this->phone_3);
	}
	
	public function get_insert_time() {
		return($this->insert_time);
	}
	
	public function get_insert_user() {
		return($this->insert_user);
	}
	
	public function get_enabled() {
		return($this->enabled);
	}
	
	public function get_error() {
		return ($this->error);
	}
	
	
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega a informacao a partir da base de dados //
	public function load($var_db) {
		$this->error = false;
		
		$sql = ("SELECT 
					stores.fk_stores,
					stores.name,
					stores.legal_name,
					stores.nif,
					stores.rnavt,
					stores.address_1,
					stores.address_2,
					stores.address_3,
					stores.postal_code,
					stores.country,
					stores.email,
					stores.web_page,
					stores.phone_1,
					stores.phone_2,
					stores.phone_3,
					stores.insert_time,
					stores.insert_user,
					stores.enabled
				FROM
					stores 
				WHERE 
					stores.id = ".addslashes($this->id));
		$rs = $var_db->execute ( $sql );
		if ($row = $var_db->get_row ( $rs )) {
			$this->fk_stores = $row->fk_stores;
			$this->name = $row->name;
			$this->legal_name = $row->legal_name;
			$this->nif = $row->nif;
			$this->rnavt = $row->rnavt;
			$this->address_1 = $row->address_1;
			$this->address_2 = $row->address_2;
			$this->address_3 = $row->address_3;
			$this->postal_code = $row->postal_code;
			$this->country = $row->country;
			$this->email = $row->email;
			$this->web_page = $row->web_page;
			$this->phone_1 = $row->phone_1;
			$this->phone_2 = $row->phone_2;
			$this->phone_3 = $row->phone_3;
			$this->insert_time = $row->insert_time;
			$this->insert_user = $row->insert_user;
			$this->enabled = $row->enabled;
			
			if(!empty($this->fk_stores)) {
				// Obter a store de ligacao
				$sql = ("SELECT 
							stores.name,
							stores.legal_name,
							stores.nif,
							stores.rnavt,
							stores.address_1,
							stores.address_2,
							stores.address_3,
							stores.postal_code,
							stores.country,
							stores.email,
							stores.web_page,
							stores.phone_1,
							stores.phone_2,
							stores.phone_3
						FROM
							stores 
						WHERE 
							stores.id = ".addslashes($this->fk_stores));
				$rs = $var_db->execute ( $sql );
				if ($row = $var_db->get_row ( $rs )) {
					if(empty($this->name)) $this->name = $row->name;
					if(empty($this->legal_name)) $this->legal_name = $row->legal_name;
					if(empty($this->nif)) $this->nif = $row->nif;
					if(empty($this->rnavt)) $this->rnavt = $row->rnavt;
					if(empty($this->address_1)) $this->address_1 = $row->address_1;
					if(empty($this->address_2)) $this->address_2 = $row->address_2;
					if(empty($this->address_3)) $this->address_3 = $row->address_3;
					if(empty($this->postal_code)) $this->postal_code = $row->postal_code;
					if(empty($this->country)) $this->country = $row->country;
					if(empty($this->email)) $this->email = $row->email;
					if(empty($this->web_page)) $this->web_page = $row->web_page;
					if(empty($this->phone_1)) $this->phone_1 = $row->phone_1;
					if(empty($this->phone_2)) $this->phone_2 = $row->phone_2;
					if(empty($this->phone_3)) $this->phone_3 = $row->phone_3;
				}
			}
			
			return (true);
		}
		
		// Error
		$this->error = $var_db->get_error ();
		return (false);
	}
	
	// Guarda a informacao na base de dados //
	public function save($var_db) {
		$this->error = false;
		
		if(empty($this->id)) {
			// INSERT	
			$sql = ("INSERT INTO
						stores
							(stores.fk_stores,
							stores.name,
							stores.legal_name,
							stores.nif,
							stores.rnavt,
							stores.address_1,
							stores.address_2,
							stores.address_3,
							stores.postal_code,
							stores.country,
							stores.email,
							stores.web_page,
							stores.phone_1,
							stores.phone_2,
							stores.phone_3,
							stores.insert_time,
							stores.insert_user,
							stores.enabled)
					VALUES
						(".(empty($this->fk_stores)?"NULL":("'".addslashes($this->fk_stores)."'")).",
						'".addslashes($this->name)."',
						'".addslashes($this->legal_name)."',
						'".addslashes($this->nif)."',
						'".addslashes($this->rnavt)."',
						'".addslashes($this->address_1)."',
						'".addslashes($this->address_2)."',
						'".addslashes($this->address_3)."',
						'".addslashes($this->postal_code)."',
						'".addslashes($this->country)."',
						'".addslashes($this->email)."',
						'".addslashes($this->web_page)."',
						'".addslashes($this->phone_1)."',
						'".addslashes($this->phone_2)."',
						'".addslashes($this->phone_3)."',
						CURRENT_TIMESTAMP(),
						'".addslashes($this->insert_user)."',
						'".addslashes($this->enabled)."')");
		}
		else {
			// UPDATE	
			$sql = ("UPDATE
						stores
					SET 
						stores.fk_stores = ".(empty($this->fk_stores)?"NULL":("'".addslashes($this->fk_stores)."'")).",
						stores.name = '".addslashes($this->name)."',
						stores.legal_name = '".addslashes($this->legal_name)."',
						stores.nif = '".addslashes($this->nif)."',
						stores.rnavt = '".addslashes($this->rnavt)."',
						stores.address_1 = '".addslashes($this->address_1)."',
						stores.address_2 = '".addslashes($this->address_2)."',
						stores.address_3 = '".addslashes($this->address_3)."',
						stores.postal_code = '".addslashes($this->postal_code)."',
						stores.country = '".addslashes($this->country)."',
						stores.email = '".addslashes($this->email)."',
						stores.web_page = '".addslashes($this->web_page)."',
						stores.phone_1 = '".addslashes($this->phone_1)."',
						stores.phone_2 = '".addslashes($this->phone_2)."',
						stores.phone_3 = '".addslashes($this->phone_3)."',
						stores.enabled = '".addslashes($this->enabled)."'
					WHERE
						stores.id = '".addslashes($this->id)."'");
		}
		$rs = $var_db->execute($sql);
		
		// Error
		$this->error = $var_db->get_error();
		if($this->error) return(false);
		
		return (true);
	}
	
	// Elimina registo da base de dados //
	public function delete($var_db) {
		$this->error = false;
	
		$sql = ("DELETE FROM
					stores
				WHERE
					stores.id = ".addslashes($this->id));
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