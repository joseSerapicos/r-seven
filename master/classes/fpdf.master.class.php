<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: fpdf.master.class.php
|  PATH: classes
|  DESCRIPTION: Classe Master de gerar pdf pelo fpdf
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 11MAR2014
|  MODIFICATION DATE: -
|____________________________________________________________*/


class gen_fpdf {
	private $debug;	
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
		$this->debug = false;
		$this->error = false;
	}
	
	// ////////////////
	// Set methods //
	// //////////////
	public function set_debug($set_debug) {
		$this->debug = $set_debug;
	}
	
	// ////////////////
	// Get methods //
	// //////////////
	
	// Retorna array//
	
	public function get_pdf() {
		//return ($this->news_new_array);
	}
	
	public function get_error() {
		return ($this->error);
	}
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega toda informacao a partir da base de dados //
	public function create_xpto() {
		
		$this->error = false;
		
		/*Includes*/
		include_once ($_SERVER['DOCUMENT_ROOT']. "/mygest/lib/fpdf/fpdf.php");
		
		$pdf = new FPDF();
		$pdf->AddPage();
		$pdf->SetFont('Arial','B',16);
		$pdf->Cell(40,10,'Hello World!');
		$pdf->Output();
		
		//$error = false;
		
		if($error){
			$this->error = "fpdf.master.class error";
			return (false);
		}else{
			//adiciona no Objecto
			$this->news_new_array = $add_news; 
			return (true);
		}
		
	}
	
	// Destructor //
	public function __destruct() {
	}
}

?>