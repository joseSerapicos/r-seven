<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: aviation_detail.class.php
|  PATH: classes
|  DESCRIPTION: Classe da aviaçao (detalhe)
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 16ABR2014
|  MODIFICATION DATE: -
|____________________________________________________________*/


class aviation_detail {
	private $id;
	private $fk_aviation_detail;
	private $airline_code;
	private $airplane_type;
	private $flight_number;
	private $segments;
	private $m_tag;
	private $origin_airport_code;
	private $destination_airport_code;
	private $service_class;
	private $booking_class;
	private $departure_time;
	private $arrival_time;
	private $company_confirmation;
	private $baggage_allow;
	private $fare_basis;
	private $not_valid_before;
	private $not_valid_after;
	private $terminal_departure;
	private $terminal_arrival;
	private $pax_seat;
	
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
		$this->id 							= false;
		$this->fk_aviation_detail 			= false;
		$this->airline_code 				= false;
		$this->airplane_type				= false;
		$this->flight_number 				= false;
		$this->segments 					= false;
		$this->m_tag 						= false;
		$this->origin_airport_code 			= false;
		$this->destination_airport_code 	= false;
		$this->service_class 				= false;
		$this->booking_class 				= false;
		$this->departure_time 				= false;
		$this->arrival_time 				= false;
		$this->company_confirmation 		= false;
		$this->baggage_allow 				= false;
		$this->fare_basis 					= false;
		$this->not_valid_before 			= false;
		$this->not_valid_after 				= false;
		$this->terminal_departure 			= false;
		$this->terminal_arrival				= false;
		$this->pax_seat 					= false;
		
		$this->error = false;
		
	}
	
	// ////////////////
	// Set methods //
	// //////////////
	
	public function set_id($value) {
		$this->id = $value;
	}
	public function set_fk_aviation_detail($value) {
		$this->fk_aviation_detail = $value;
	}
	public function set_airline_code($value) {
		$this->airline_code = $value;
	}
	public function set_airplane_type($value) {
		$this->airplane_type = $value;
	}
	public function set_flight_number($value) {
		$this->flight_number = $value;
	}
	public function set_segments($value) {
		$this->segments = $value;
	}
	public function set_m_tag($value) {
		$this->m_tag = $value;
	}
	public function set_origin_airport_code($value) {
		$this->origin_airport_code = $value;
	}
	public function set_destination_airport_code($value) {
		$this->destination_airport_code = $value;
	}
	public function set_service_class($value) {
		$this->service_class = $value;
	}
	public function set_booking_class($value) {
		$this->booking_class = $value;
	}
	public function set_departure_time($value) {
		$this->departure_time = $value;
	}
	public function set_arrival_time($value) {
		$this->arrival_time = $value;
	}
	public function set_company_confirmation($value) {
		$this->company_confirmation = $value;
	}
	public function set_baggage_allow($value) {
		$this->baggage_allow = $value;
	}
	public function set_fare_basis($value) {
		$this->fare_basis = $value;
	}
	public function set_not_valid_before($value) {
		$this->not_valid_before = $value;
	}
	public function set_not_valid_after($value) {
		$this->not_valid_after = $value;
	}	
	public function set_terminal_departure($value) {
		$this->terminal_departure = $value;
	}	
	public function set_terminal_arrival($value) {
		$this->terminal_arrival = $value;
	}	
	public function set_pax_seat($value) {
		$this->pax_seat = $value;
	}	
	// ////////////////
	// Get methods //
	// //////////////

	public function get_id() {
		return ($this->id);
	}
	public function get_fk_aviation_detail() {
		return ($this->fk_aviation_detail);
	}
	public function get_airline_code() {
		return ($this->airline_code);
	}
	public function get_airplane_type() {
		return ($this->airplane_type);
	}
	public function get_flight_number() {
		return ($this->flight_number);
	}
	public function get_segments() {
		return ($this->segments);
	}
	public function get_m_tag() {
		return ($this->m_tag);
	}
	public function get_origin_airport_code() {
		return ($this->origin_airport_code);
	}
	public function get_destination_airport_code() {
		return ($this->destination_airport_code);
	}
	public function get_service_class() {
		return ($this->service_class);
	}
	public function get_booking_class() {
		return ($this->booking_class);
	}
	public function get_departure_time() {
		return ($this->departure_time);
	}
	public function get_arrival_time() {
		return ($this->arrival_time);
	}
	public function get_company_confirmation() {
		return ($this->company_confirmation);
	}
	public function get_baggage_allow() {
		return ($this->baggage_allow);
	}
	public function get_fare_basis() {
		return ($this->fare_basis);
	}
	public function get_not_valid_before() {
		return ($this->not_valid_before);
	}
	public function get_not_valid_after() {
		return ($this->not_valid_after);
	}
	public function get_terminal_departure() {
		return ($this->terminal_departure);
	}
	public function get_terminal_arrival() {
		return ($this->terminal_arrival);
	}
	public function get_pax_seat() {
		return ($this->pax_seat);
	}
		
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega a informacao a partir da base de dados //
	private function load($user_db, $id) {
		$this->error = false;
		/*
		if($this->id){
			$sql_where_id = " AND aviation_detail.id = '".$this->id."'";
		}*/
		
		$sql = ("SELECT 
					aviation_detail.id,
					aviation_detail.fk_aviation_detail,
					aviation_detail.airline_code,
					aviation_detail.airplane_type,
					aviation_detail.flight_number,
					aviation_detail.segments,
					aviation_detail.m_tag,
					aviation_detail.origin_airport_code,
					aviation_detail.destination_airport_code,
					aviation_detail.service_class,
					aviation_detail.booking_class,
					aviation_detail.departure_time,
					aviation_detail.arrival_time,
					aviation_detail.company_confirmation,
					aviation_detail.baggage_allow,
					aviation_detail.fare_basis,
					aviation_detail.not_valid_before,
					aviation_detail.not_valid_after,
					aviation_detail.terminal_departure,
					aviation_detail.terminal_arrival,
					aviation_detail.pax_seat 
				FROM 
					aviation_detail 
				WHERE 
					aviation_detail.id = ".$id."
				");
		$rs = $user_db->execute ( $sql );
		if ($row = $user_db->get_row ( $rs )) {
			
			$this->id 						= $row->id;
			$this->fk_aviation_detail 		= $row->fk_aviation_detail;
			$this->airline_code 			= $row->airline_code;
			$this->airplane_type 			= $row->airplane_type;
			$this->flight_number 			= $row->flight_number;
			$this->segments 				= $row->segments;
			$this->m_tag 					= $row->m_tag;
			$this->origin_airport_code 		= $row->origin_airport_code;
			$this->destination_airport_code = $row->destination_airport_code;
			$this->service_class 			= $row->service_class;
			$this->booking_class 			= $row->booking_class;
			$this->departure_time 			= $row->departure_time;
			$this->arrival_time 			= $row->arrival_time;
			$this->company_confirmation 	= $row->company_confirmation;
			$this->baggage_allow 			= $row->baggage_allow;
			$this->fare_basis 				= $row->fare_basis;
			$this->not_valid_before 		= $row->not_valid_before;
			$this->not_valid_after	 		= $row->not_valid_after;
			$this->terminal_departure 		= $row->terminal_departure;
			$this->terminal_arrival 		= $row->terminal_arrival;
			$this->pax_seat			 		= $row->pax_seat;
			return (true);
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
						aviation_detail 
							(aviation_detail.fk_aviation_detail,
							aviation_detail.airline_code,
							aviation_detail.airplane_type,
							aviation_detail.flight_number,
							aviation_detail.segments,
							aviation_detail.m_tag,
							aviation_detail.origin_airport_code,
							aviation_detail.destination_airport_code,
							aviation_detail.service_class,
							aviation_detail.booking_class,
							aviation_detail.departure_time,
							aviation_detail.arrival_time,
							aviation_detail.company_confirmation,
							aviation_detail.baggage_allow,
							aviation_detail.fare_basis,
							aviation_detail.not_valid_before,
							aviation_detail.not_valid_after,
							aviation_detail.terminal_departure,
							aviation_detail.terminal_arrival,
							aviation_detail.pax_seat
							) 
					VALUES 
						('".addslashes($this->fk_aviation_detail)."',
						'".addslashes($this->airline_code)."',
						'".addslashes($this->airplane_type)."',
						'".addslashes($this->flight_number)."',
						'".addslashes($this->segments)."',
						'".addslashes($this->m_tag)."',
						'".addslashes($this->origin_airport_code)."',
						'".addslashes($this->destination_airport_code)."',
						'".addslashes($this->service_class)."',
						'".addslashes($this->booking_class)."',
						'".addslashes($this->departure_time)."',
						'".addslashes($this->arrival_time)."',
						'".addslashes($this->company_confirmation)."',
						'".addslashes($this->baggage_allow)."',
						'".addslashes($this->fare_basis)."',
						'".addslashes($this->not_valid_before)."',
						'".addslashes($this->not_valid_after)."',
						'".addslashes($this->terminal_departure)."',
						'".addslashes($this->terminal_arrival)."',
						'".addslashes($this->pax_seat)."'
						)");
		}
		else {
			
			// UPDATE	
			$sql = ("UPDATE 
						aviation_detail 
					SET 
						aviation_detail.fk_aviation_detail = '".addslashes($this->fk_aviation_detail)."',
						aviation_detail.airline_code = '".addslashes($this->airline_code)."',
						aviation_detail.airplane_type = '".addslashes($this->airplane_type)."',
						aviation_detail.flight_number = '".addslashes($this->flight_number)."',
						aviation_detail.segments = '".addslashes($this->segments)."',
						aviation_detail.m_tag = '".addslashes($this->m_tag)."',
						aviation_detail.origin_airport_code = '".addslashes($this->origin_airport_code)."',
						aviation_detail.destination_airport_code = '".addslashes($this->destination_airport_code)."',
						aviation_detail.service_class = '".addslashes($this->service_class)."',
						aviation_detail.booking_class = '".addslashes($this->booking_class)."',
						aviation_detail.departure_time = '".addslashes($this->departure_time)."',
						aviation_detail.arrival_time = '".addslashes($this->arrival_time)."',
						aviation_detail.company_confirmation = '".addslashes($this->company_confirmation)."',
						aviation_detail.baggage_allow = '".addslashes($this->baggage_allow)."',
						aviation_detail.fare_basis = '".addslashes($this->fare_basis)."',
						aviation_detail.not_valid_before = '".addslashes($this->not_valid_before)."',
						aviation_detail.not_valid_after = '".addslashes($this->not_valid_after)."',
						aviation_detail.terminal_departure = '".addslashes($this->terminal_departure)."', 
						aviation_detail.terminal_arrival = '".addslashes($this->terminal_arrival)."', 
						aviation_detail.pax_seat = '".addslashes($this->pax_seat)."' 
					WHERE 
						aviation_detail.id = '".addslashes($this->id)."'");
		}
		$rs = $user_db->execute($sql);
		
		return(true);
	}
	
	// Elimina registo da base de dados //
	public function delete($user_db) {
				
		$this->error = false;
	
		$sql = ("DELETE FROM 
					aviation_detail 
				WHERE 
					aviation_detail.id = ".addslashes( $this->id ));
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