<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: users.master.class.php
|  PATH: administration/users/classes
|  DESCRIPTION: Classe para manipular o menu "Users"
|
|  AUTHOR: MyGest.PT
|  CREATE DATE: 06SET2013
|  MODIFICATION DATE: 06SET2013
|____________________________________________________________*/


class users_master {
	
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
	// Get methods //
	// //////////////
	
	// Retorna error //
	public function get_error() {
		return ($this->error);
	}

	// Retorna todos os users //
	public function getAllUsers($var_db) {
		
		$output = array();
		
		$sql = ("SELECT
					users.id
				FROM 
					users
				ORDER BY users.username ASC");
		$rs = $var_db->execute ( $sql );
		while($row = $var_db->get_row ( $rs )) {
			$obj_user = new user_tmp($row->id);
			$obj_user->load($var_db);
			$output[] = $obj_user;
		}
		
		return ($output);
	}
	
	// Retorna todas as languages //
	public function getAllLanguages($var_db) {
		
		$output = array();
		
		$sql = ("SELECT
					languages.id,
					languages.description
				FROM 
					languages
				ORDER BY languages.description ASC");
		$rs = $var_db->execute($sql);
		while($row = $var_db->get_row($rs)) {
			$arr_lang = array();
			$arr_lang['id'] = $row->id;
			$arr_lang['description'] = $row->description;
			$output[] = $arr_lang;
		}
		
		return ($output);
	}
	
	
	// ////////////////
	// All methods //
	// //////////////
	
	// Destructor //
	public function __destruct() {
	}
}

?>