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
	public function __construct2($client_db,$var_id) {

		$this->id = $var_id;
 		$this->load($client_db);
		
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
		
	public function load($client_db) {
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
					aviation_bsp_detail.comments				
				FROM 
					aviation_bsp_detail 
				WHERE
					aviation_bsp_detail.id = ".$this->id."
				");
		//print "<hr><pre>";print $sql;
		$rs = $client_db->execute ( $sql );
		
		if ($row = $client_db->get_row ( $rs )) {
			
			$this->id = $row->id;
			$this->fk_aviation_bsp_head = $row->fk_aviation_bsp_head;
			$this->company = $row->company;
			$this->type = $row->type;
			$this->doc_n = $row->doc_n;
			$this->dc = $row->dc;
			$this->cpn_void = $row->cpn_void;
			$this->emission_date = $row->emission_date;
			$this->cash = $row->cash;
			$this->exp_rates_credit = $row->exp_rates_credit;
			$this->irs = $row->irs;
			$this->rates = $row->rates;
			$this->com_perc = $row->com_perc;
			$this->comission = $row->comission;
			$this->irs_com = $row->irs_com;
			$this->adj_comercial = $row->adj_comercial;
			$this->payment_value = $row->payment_value;
			$this->comments = $row->comments;
			
			return (true);
		}
		
		
		// Error
		$this->error = $client_db->get_error ();
		return (false);
	}
	
	// Destructor //
	public function __destruct() {
	}
}

?>