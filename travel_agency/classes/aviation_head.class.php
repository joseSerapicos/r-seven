<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: aviation_head.class.php
|  PATH: classes
|  DESCRIPTION: Classe da aviaçao
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 16ABR2014
|  MODIFICATION DATE: -
|____________________________________________________________*/


class aviation_head {
	private $id;
	private $agency;
	private $general_company;
	private $ticket;
	private $itinerary;
	private $type;
	private $pnr;
	private $pax;
	private $fare;
	private $xp;
	private $tsf;
	private $date_flight;
	private $fare_calculation;
	private $endorsement_information;
	private $tax_fee;
	private $spoiled;
	private $gds_type;
	
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
		$this->id 						= false;
		$this->agency 					= false;
		$this->general_company 			= false;
		$this->ticket 					= false;
		$this->itinerary 				= false;
		$this->type 					= false;
		$this->pnr 						= false;
		$this->pax 						= false;
		$this->fare 					= false;
		$this->xp 						= false;
		$this->tsf 						= false;
		$this->date_flight 				= false;
		$this->fare_calculation 		= false;
		$this->endorsement_information 	= false;
		$this->tax_fee 					= false;
		$this->spoiled 					= false;
		$this->gds_type 				= false;
		
		$this->error = false;
		
	}
	
	// ////////////////
	// Set methods //
	// //////////////
	public function set_showDetail($bool) {
		$this->showDetail = $bool;
	}
		
	public function set_id($value) {
		$this->id = $value;
	}
	public function set_agency($value) {
		$this->agency = $value;
	}
	public function set_general_company($value) {
		$this->general_company = $value;
	}
	public function set_ticket($value) {
		$this->ticket = $value;
	}
	public function set_itinerary($value) {
		$this->itinerary = $value;
	}
	public function set_type($value) {
		$this->type = $value;
	}
	public function set_pnr($value) {
		$this->pnr = $value;
	}
	public function set_pax($value) {
		$this->pax = $value;
	}
	public function set_fare($value) {
		$this->fare = $value;
	}
	public function set_xp($value) {
		$this->xp = $value;
	}
	public function set_tsf($value) {
		$this->tsf = $value;
	}
	public function set_date_flight($value) {
		$this->date_flight = $value;
	}
	public function set_fare_calculation($value) {
		$this->fare_calculation = $value;
	}
	public function set_endorsement_information($value) {
		$this->endorsement_information = $value;
	}
	public function set_tax_fee($value) {
		$this->tax_fee = $value;
	}
	public function set_spoiled($value) {
		$this->spoiled = $value;
	}
	public function set_gds_type($value) {
		$this->gds_type = $value;
	}	
	// ////////////////
	// Get methods //
	// //////////////

	public function get_id() {
		return ($this->id);
	}
	public function get_agency() {
		return ($this->agency);
	}
	public function get_general_company() {
		return ($this->general_company);
	}
	public function get_ticket() {
		return ($this->ticket);
	}
	public function get_itinerary() {
		return ($this->itinerary);
	}
	public function get_type() {
		return ($this->type);
	}
	public function get_pnr() {
		return ($this->pnr);
	}
	public function get_pax() {
		return ($this->pax);
	}
	public function get_fare() {
		return ($this->fare);
	}
	public function get_xp() {
		return ($this->xp);
	}
	public function get_tsf() {
		return ($this->tsf);
	}
	public function get_date_flight() {
		return ($this->date_flight);
	}
	public function get_fare_calculation() {
		return ($this->fare_calculation);
	}
	public function get_endorsement_information() {
		return ($this->endorsement_information);
	}
	public function get_tax_fee() {
		return ($this->tax_fee);
	}
	public function get_spoiled() {
		return ($this->spoiled);
	}
	public function get_gds_type() {
		return ($this->gds_type);
	}
		
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega a informacao a partir da base de dados //
	public function load($user_db, $id) {
		
		$this->error = false;
		/*
		if($this->id){
			$sql_where_id = " AND aviation_head.id = '".$this->id."'";
		}*/
		
		$sql = ("SELECT 
					aviation_head.id,
					aviation_head.agency,
					aviation_head.general_company,
					aviation_head.ticket,
					aviation_head.itinerary,
					aviation_head.type,
					aviation_head.pnr,
					aviation_head.pax,
					aviation_head.fare,
					aviation_head.xp,
					aviation_head.tsf,
					aviation_head.date_flight,
					aviation_head.fare_calculation,
					aviation_head.endorsement_information,
					aviation_head.tax_fee,
					aviation_head.spoiled,
					aviation_head.gds_type
				FROM 
					aviation_head
				WHERE
					aviation_head.id = ".$id."
				");
		$rs = $user_db->execute ( $sql );
		
		if ($row = $user_db->get_row ( $rs )) {
			
			$this->id 						= $row->id;
			$this->agency 					= $row->agency;
			$this->general_company 			= $row->general_company;
			$this->ticket 					= $row->ticket;
			$this->itinerary 				= $row->itinerary;
			$this->type 					= $row->type;
			$this->pnr 						= $row->pnr;
			$this->pax 						= $row->pax;
			$this->fare 					= $row->fare;
			$this->xp 						= $row->xp;
			$this->tsf 						= $row->tsf;
			$this->date_flight 				= $row->date_flight;
			$this->fare_calculation 		= $row->fare_calculation;
			$this->endorsement_information 	= $row->endorsement_information;
			$this->tax_fee 					= $row->tax_fee;
			$this->spoiled 					= $row->spoiled;
			$this->gds_type 				= $row->gds_type;
			
			if($this->showDetail){
				$this->load_aviation_detail($user_db);
			}
			return (true);
		}
		
		// Error
		$this->error = $user_db->get_error ();
		return (false);
	}
	
	private function load_aviation_detail($user_db) {
		$this->error = false;
		
		$this->aviation_detail = array();
		
		$sql = ("SELECT 
					aviation_detail.id
				FROM 
					aviation_detail
				WHERE
					aviation_detail.fk_aviation_head = '".$this->id."'
				");
		$rs = $user_db->execute ( $sql );
		
		while($row = $user_db->get_row ( $rs )) {
			$obj_aviation_detail = new aviation_detail();
			$obj_aviation_detail->load($user_db,$row->id);
			
			$this->aviation_detail[] = $obj_aviation_detail; 
		}
		
		// Error
		$this->error = $user_db->get_error ();
		return (false);
	}
	
	// Guarda a informacao na base de dados //
	public function save($user_db) {
		$this->error = false;
		
		if(empty($this->id)) {
		
			$sql = ("INSERT INTO 
						aviation_head 
							(aviation_head.agency,
							aviation_head.general_company,
							aviation_head.ticket,
							aviation_head.itinerary,
							aviation_head.type,
							aviation_head.pnr,
							aviation_head.pax,
							aviation_head.fare,
							aviation_head.xp,
							aviation_head.tsf,
							aviation_head.date_flight,
							aviation_head.fare_calculation,
							aviation_head.endorsement_information,
							aviation_head.tax_fee,
							aviation_head.spoiled,
							aviation_head.gds_type
							) 
					VALUES 
						('".addslashes($this->agency)."',
						'".addslashes($this->general_company)."',
						'".addslashes($this->ticket)."',
						'".addslashes($this->itinerary)."',
						'".addslashes($this->type)."',
						'".addslashes($this->pnr)."',
						'".addslashes($this->pax)."',
						'".addslashes($this->fare)."',
						'".addslashes($this->xp)."',
						'".addslashes($this->tsf)."',
						'".addslashes($this->date_flight)."',
						'".addslashes($this->fare_calculation)."',
						'".addslashes($this->endorsement_information)."',
						'".addslashes($this->tax_fee)."',
						'".addslashes($this->spoiled)."',
						'".addslashes($this->gds_type)."'
						)");
		}
		else {
			
			// UPDATE	
			$sql = ("UPDATE 
						aviation_head 
					SET 
						aviation_head.agency = '".addslashes($this->agency)."',
						aviation_head.general_company = '".addslashes($this->general_company)."',
						aviation_head.company = '".addslashes($this->company)."',
						aviation_head.ticket = '".addslashes($this->ticket)."',
						aviation_head.itinerary = '".addslashes($this->itinerary)."',
						aviation_head.type = '".addslashes($this->type)."',
						aviation_head.pnr = '".addslashes($this->pnr)."',
						aviation_head.pax = '".addslashes($this->pax)."',
						aviation_head.fare = '".addslashes($this->fare)."',
						aviation_head.xp = '".addslashes($this->xp)."',
						aviation_head.tsf = '".addslashes($this->tsf)."',
						aviation_head.date_flight = '".addslashes($this->date_flight)."',
						aviation_head.fare_calculation = '".addslashes($this->fare_calculation)."',
						aviation_head.endorsement_information = '".addslashes($this->endorsement_information)."',
						aviation_head.tax_fee = '".addslashes($this->tax_fee)."',
						aviation_head.spoiled = '".addslashes($this->spoiled)."',
						aviation_head.gds_type = '".addslashes($this->gds_type)."' 
					WHERE 
						aviation_head.id = '".addslashes($this->id)."'");
		}
		$rs = $user_db->execute($sql);
		
		return(true);
	}
	
	// Elimina registo da base de dados //
	public function delete($user_db) {
				
		$this->error = false;
	
		$sql = ("DELETE FROM 
					aviation_head 
				WHERE 
					aviation_head.id = ".addslashes( $this->id ));
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