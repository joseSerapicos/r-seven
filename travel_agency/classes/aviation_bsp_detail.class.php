<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: aviation_bsp_detail.class.php
|  PATH: classes
|  DESCRIPTION: Classe da head do aviation_bsp na principal
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 31JAN2014
|  MODIFICATION DATE: 31JAN2014
|____________________________________________________________*/


class aviation_bsp_detail {
	private $id;
	private $fk_aviation_bsp_head;
	private $company;
	private $type;
	private $doc_n;
	private $dc;
	private $cpn_void;
	private $emission_date;
	private $cash;
	private $exp_rates_credit;
	private $irs;
	private $rates;
	private $com_perc;
	private $comission;
	private $irs_com;
	private $adj_comercial;
	private $payment_value;
	private $comments;
	
	private $user_text;
	private $status;
	private $change_user;
	private $change_time;
	
	
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
	public function set_fk_aviation_bsp_head($value) {
		$this->fk_aviation_bsp_head = $value;
	}
	public function set_company($value) {
		$this->company = $value;
	}
	public function set_type($value) {
		$this->type = $value;
	}
	public function set_doc_n($value) {
		$this->doc_n = $value;
	}
	public function set_dc($value) {
		$this->dc = $value;
	}
	public function set_cpn_void($value) {
		$this->cpn_void = $value;
	}
	public function set_emission_date($value) {
		$this->emission_date = $value;
	}
	public function set_cash($value) {
		$this->cash = $value;
	}
	public function set_exp_rates_credit($value) {
		$this->exp_rates_credit = $value;
	}
	public function set_irs($value) {
		$this->irs = $value;
	}
	public function set_rates($value) {
		$this->rates = $value;
	}
	public function set_com_perc($value) {
		$this->com_perc = $value;
	}
	public function set_comission($value) {
		$this->comission = $value;
	}
	public function set_irs_com($value) {
		$this->irs_com = $value;
	}
	public function set_adj_comercial($value) {
		$this->adj_comercial = $value;
	}
	public function set_payment_value($value) {
		$this->payment_value = $value;
	}
	public function set_comments($value) {
		$this->comments = $value;
	}
	
	public function set_user_text($value) {
		$this->user_text = $value;
	}
	public function set_status($value) {
		$this->status = $value;
	}
	public function set_change_user($value) {
		$this->change_user = $value;
	}
	public function set_change_time($value) {
		$this->change_time = $value;
	}	
	// ////////////////
	// Get methods //
	// //////////////
	// Retorna id do myclick_head//
	public function get_id() {
		return ($this->id);
	}
	public function get_fk_aviation_bsp_head() {
		return ($this->fk_aviation_bsp_head);
	}
	public function get_company() {
		return ($this->company);
	}
	public function get_type() {
		return ($this->type);
	}
	public function get_doc_n() {
		return ($this->doc_n);
	}
	public function get_dc() {
		return ($this->dc);
	}
	public function get_cpn_void() {
		return ($this->cpn_void);
	}
	public function get_emission_date() {
		return ($this->emission_date);
	}
	public function get_cash() {
		return ($this->cash);
	}
	public function get_exp_rates_credit() {
		return ($this->exp_rates_credit);
	}
	public function get_irs() {
		return ($this->irs);
	}
	public function get_rates() {
		return ($this->rates);
	}
	public function get_com_perc() {
		return ($this->com_perc);
	}
	public function get_comission() {
		return ($this->comission);
	}
	public function get_irs_com() {
		return ($this->irs_com);
	}
	public function get_adj_comercial() {
		return ($this->adj_comercial);
	}
	public function get_payment_value() {
		return ($this->payment_value);
	}
	public function get_comments() {
		return ($this->comments);
	}
	public function get_user_text() {
		return ($this->user_text);
	}
	public function get_status() {
		return ($this->status);
	}
	public function get_change_user() {
		return ($this->change_user);
	}
	public function get_change_time() {
		return ($this->change_time);
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
		
	public function load($client_db,$var_id) {
		$this->error = false;
		$sql = ("SELECT 
					aviation_bsp_detail.id, 		
					aviation_bsp_detail.fk_aviation_bsp_head,
					aviation_bsp_detail.company,
					aviation_bsp_detail.type,
					aviation_bsp_detail.doc_n,
					aviation_bsp_detail.dc,
					aviation_bsp_detail.cpn_void,
					aviation_bsp_detail.emission_date,
					aviation_bsp_detail.cash,
					aviation_bsp_detail.exp_rates_credit,
					aviation_bsp_detail.irs,
					aviation_bsp_detail.rates,
					aviation_bsp_detail.com_perc,
					aviation_bsp_detail.comission,
					aviation_bsp_detail.irs_com,
					aviation_bsp_detail.adj_comercial,
					aviation_bsp_detail.payment_value,
					aviation_bsp_detail.comments,
					aviation_bsp_detail.user_text,
					aviation_bsp_detail.status 			
				FROM 
					aviation_bsp_detail 
				WHERE
					aviation_bsp_detail.id = ".addslashes($var_id)."
				");
		//print "<hr><pre>";print $sql;
		$rs = $client_db->execute ( $sql );
		
		if ($row = $client_db->get_row ( $rs )) {
			
			$this->id 				= $row->id;
			$this->fk_aviation_bsp_head = $row->fk_aviation_bsp_head;
			$this->company 			= $row->company;
			$this->type 			= $row->type;
			$this->doc_n 			= $row->doc_n;
			$this->dc 				= $row->dc;
			$this->cpn_void 		= $row->cpn_void;
			$this->emission_date	= $row->emission_date;
			$this->cash 			= $row->cash;
			$this->exp_rates_credit = $row->exp_rates_credit;
			$this->irs 				= $row->irs;
			$this->rates 			= $row->rates;
			$this->com_perc 		= $row->com_perc;
			$this->comission 		= $row->comission;
			$this->irs_com 			= $row->irs_com;
			$this->adj_comercial	= $row->adj_comercial;
			$this->payment_value 	= $row->payment_value;
			$this->comments 		= $row->comments;
			$this->user_text 		= $row->user_text;
			$this->status 			= $row->status;
			
			return (true);
		}
		
		
		// Error
		$this->error = $client_db->get_error ();
		return (false);
	}
	
	// Guarda a informacao na base de dados //
	public function save($user_db) {
		$this->error = false;
		
		if(empty($this->id)) {
		
			$sql = ("INSERT INTO 
						aviation_bsp_detail 
							(aviation_bsp_detail.fk_aviation_bsp_head,
							aviation_bsp_detail.company,
							aviation_bsp_detail.type,
							aviation_bsp_detail.doc_n,
							aviation_bsp_detail.dc,
							aviation_bsp_detail.cpn_void,
							aviation_bsp_detail.emission_date,
							aviation_bsp_detail.cash,
							aviation_bsp_detail.exp_rates_credit,
							aviation_bsp_detail.irs,
							aviation_bsp_detail.rates,
							aviation_bsp_detail.com_perc,
							aviation_bsp_detail.comission,
							aviation_bsp_detail.irs_com,
							aviation_bsp_detail.adj_comercial,
							aviation_bsp_detail.payment_value,
							aviation_bsp_detail.comments,
							aviation_bsp_detail.user_text,
							aviation_bsp_detail.status
							) 
					VALUES 
						('".addslashes($this->fk_aviation_bsp_head)."',
						'".addslashes($this->company)."',
						'".addslashes($this->type)."',
						'".addslashes($this->doc_n)."',
						'".addslashes($this->dc)."',
						'".addslashes($this->cpn_void)."',
						'".addslashes($this->emission_date)."',
						'".addslashes($this->cash)."',
						'".addslashes($this->exp_rates_credit)."',
						'".addslashes($this->irs)."',
						'".addslashes($this->rates)."',
						'".addslashes($this->com_perc)."',
						'".addslashes($this->comission)."',
						'".addslashes($this->irs_com)."',
						'".addslashes($this->adj_comercial)."',
						'".addslashes($this->payment_value)."',
						'".addslashes($this->comments)."',
						'".addslashes($this->user_text)."',
						'".addslashes($this->status)."'
						)");
		}
		else {
			
			// UPDATE	
			$sql = ("UPDATE 
						aviation_bsp_detail 
					SET 
						aviation_bsp_detail.fk_aviation_bsp_head = '".addslashes($this->fk_aviation_bsp_head)."',
						aviation_bsp_detail.company = '".addslashes($this->company)."',
						aviation_bsp_detail.type = '".addslashes($this->type)."',
						aviation_bsp_detail.doc_n = '".addslashes($this->doc_n)."',
						aviation_bsp_detail.dc = '".addslashes($this->dc)."',
						aviation_bsp_detail.cpn_void = '".addslashes($this->cpn_void)."',
						aviation_bsp_detail.emission_date = '".addslashes($this->emission_date)."',
						aviation_bsp_detail.cash = '".addslashes($this->cash)."',
						aviation_bsp_detail.exp_rates_credit = '".addslashes($this->exp_rates_credit)."',
						aviation_bsp_detail.irs = '".addslashes($this->irs)."',
						aviation_bsp_detail.rates = '".addslashes($this->rates)."',
						aviation_bsp_detail.com_perc = '".addslashes($this->com_perc)."',
						aviation_bsp_detail.comission = '".addslashes($this->comission)."',
						aviation_bsp_detail.irs_com = '".addslashes($this->irs_com)."',
						aviation_bsp_detail.adj_comercial = '".addslashes($this->adj_comercial)."',
						aviation_bsp_detail.payment_value = '".addslashes($this->payment_value)."',
						aviation_bsp_detail.comments = '".addslashes($this->comments)."',
						aviation_bsp_detail.user_text = '".addslashes($this->user_text)."',
						aviation_bsp_detail.status = '".addslashes($this->status)."',
						aviation_bsp_detail.change_user = '".addslashes($this->change_user)."',
						aviation_bsp_detail.change_time = CURRENT_TIMESTAMP() 
					WHERE 
						aviation_bsp_detail.id = '".addslashes($this->id)."'");
		}
		$rs = $user_db->execute($sql);
		
		return(true);
	}
	
	// Guarda a informacao na base de dados apenas utilizador nao controla dados//
	public function save_user($user_db) {
		$this->error = false;
		
		if(!empty($this->id)) {
		
			// UPDATE	
			$sql = ("UPDATE 
						aviation_bsp_detail 
					SET 
						aviation_bsp_detail.user_text = '".addslashes($this->user_text)."',
						aviation_bsp_detail.status = '".addslashes($this->status)."',
						aviation_bsp_detail.change_user = '".addslashes($this->change_user)."',
						aviation_bsp_detail.change_time = CURRENT_TIMESTAMP() 
					WHERE 
						aviation_bsp_detail.id = '".addslashes($this->id)."'");
		}else{
			
			return (false);
		}
		$rs = $user_db->execute($sql);
		
		return(true);
	}
	// Elimina registo da base de dados //
	public function delete($user_db) {
				
		$this->error = false;
	
		$sql = ("DELETE FROM 
					aviation_bsp_detail 
				WHERE 
					aviation_bsp_detail.id = ".addslashes( $this->id ));
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