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


require_once ($_SERVER['DOCUMENT_ROOT']. "/mygest/lib/fpdf/fpdf.php");

class gen_fpdf extends FPDF{
	private $debug;	
	private $error;
	
	// ////////////////
	// Constructor //
	// //////////////
	
	// Default //
	public function __construct() {
		
		parent::FPDF();
		
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
		
		$this->debug 		= false;
		
		/*Margins*/
		$this->left_margin = "14.5";
		$this->right_margin = "12";
		$this->top_margin = "15";
		
		/*cabeçalho*/
		$this->info_head 	= false;
		$this->info_detail 	= false;
		$this->info_width 	= false;
		
		/*detalhe*/
		$this->head 	= false;
		$this->detail 	= false;
		$this->width 	= false;
		$this->total 	= false;
		
		$this->error 		= false;
		
	}
	
	// ////////////////
	// Set methods //
	// //////////////
	public function set_debug($set_debug) {
		$this->debug = $set_debug;
	}
	/*Cabeçalho*/
	public function set_info_head($set_info_head) {
		$this->info_head = $set_info_head;
	}
	public function set_info_detail($set_info_detail) {
		$this->info_detail = $set_info_detail;
	}
	public function set_info_width($set_info_width) {
		$this->info_width = $set_info_width;
	}
	
	/*Detalhes*/
	public function set_head($set_head) {
		$this->head = $set_head;
	}
	public function set_detail($set_detail) {
		$this->detail = $set_detail;
	}
	public function set_width($set_width) {
		$this->width = $set_width;
	}	
	public function set_total($set_total) { //sum valores
		$this->total = $set_total;
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
	function Header(){
		// Logo
		//$this->Image('logo.png',10,6,30);
		
		$this->SetFont('Times','B',14);
		/*Nome Doc*/
		$this->setxy(165, 14.5); 
		$this->SetTextColor(0,0,0);
		$this->Cell(5, 6,"INVOICE :", 0, 0, 'R');
		
		/*No Doc*/
		$this->SetFillColor(195,189,189);
		$this->rect($this->getx(), $this->gety(), 28, 6,F);
		
		$this->SetFont('Times','B',13);
		$this->SetTextColor(255,255,255);
		$this->Cell(0, 7,"0", 0, 0, 'R');
		
		/*Company Info*/
		$this->SetFont('Times','B',13);
		$this->SetTextColor(0,0,0);
		
		$this->setxy($this->left_margin, 20.5);
		$this->Cell(80, 5,"Nome Company", 0, 0, 'L');
		//$this->gety();
		$this->SetFont('Times','',12);
		$this->setxy($this->left_margin, $this->gety()+6);
		$this->Cell(80,5,'Morada 1.',0,0,'L');
		$this->setxy($this->left_margin, $this->gety()+6);
		$this->Cell(80,5,'Morada 2.',0,0,'L');
		$this->setxy($this->left_margin, $this->gety()+6);
		$this->Cell(80,5,'Phone',0,0,'L');
		$this->setxy($this->left_margin, $this->gety()+6);
		$this->Cell(80,5,'Fax',0,0,'L');
		
		/*Para Info*/
		$this->SetTextColor(0,0,0);
		$this->SetFont('Times','',12);
		
		$this->setxy(120, $this->gety()+6);
		$this->Cell(0,5,'Exmo.(s) Sr.(s)',0,0,'C');
		$this->setxy(120, $this->gety()+6);
		$this->Cell(0,5,'Nome.',0,0,'C');
		$this->setxy(120, $this->gety()+6);
		$this->Cell(0,5,'Rua de Casa Xpto.',0,0,'C');
		$this->setxy(120, $this->gety()+6);
		$this->Cell(0,5,'4450-577 Xpto.',0,0,'C');
		$this->setxy(120, $this->gety()+6);
		$this->Cell(0,5,'Portugal.',0,0,'C');
		
		
		if($this->info_head && $this->info_detail){
			/*Tabela Info*/	
			$this->setxy($this->left_margin, $this->gety()+12);	
			$this->SetFillColor(195,189,189);
			$this->SetTextColor(255);
			$this->SetDrawColor(213,203,198);
			$this->SetLineWidth(.3);
			$this->SetFont('Times','B',11);
			
			
			$info_width = array();
			if(!$this->info_width){ //Se n existe gera automaticamente
				foreach($this->info_head as $head_key =>$head_value){ 
					$info_width[$head_key] = (($this -> w - ($this->left_margin+$this->right_margin))/count($this->info_head));//valor total - espaçamentos a dividir pelo total
				}
			}else{
				foreach($this->info_width as $info_wkey =>$info_wvalue){ 
					$info_width[$info_wkey] = (($this -> w - ($this->left_margin+$this->right_margin))*($info_wvalue/100));
				}
				//contagem se existe com o tamanho total da página!!
			}

			// Header
			foreach($this->info_head as $info_key =>$info_value){ 
				$this->Cell($info_width[$info_key],7,$info_value,1,0,'C',true);
			}
			$this->Ln();
			
			// Color and font restoration
			$this->SetFillColor(224,235,255);
			$this->SetTextColor(0);
 			$this->SetFont('');
			//Detail
			
			$this->setxy($this->left_margin, $this->gety());
			foreach($this->info_detail as $info_detail_key =>$info_detail_value){ 
				$this->Cell($info_width[$info_detail_key],6,$info_detail_value,'LR',0,'R');
			}
			$this->Ln();
		
			/*Fecha tabela*/
			$this->setxy($this->left_margin, $this->gety());
			$this->Cell(($this -> w - ($this->left_margin+$this->right_margin)),0,'','T');
			
			/*
			$this->setxy(14.5, $this->gety()+5);
			$this->Cell(($header_w*5),0,'','T');
			*/
		
			$this->SetDrawColor(195,189,189);
			$this->Line($this -> w-$this->right_margin, $this->gety()+5, $this->left_margin, $this->gety()+5);
		}
		// Line break
		//$this->Ln(20);
		$this->Ln();
	}
	function Footer(){
		// Position at 1.5 cm from bottom
		$this->SetY(-10);
		// Arial italic 8
		$this->SetFont('Arial','I',8);
		// Page number
		$this->Cell(0,10,'Página '.$this->PageNo().'/{nb}',0,0,'C');
	}		
	// Carrega toda informacao a partir da base de dados //
	public function create_xpto() {
		
		$this->error = false;
		
		/*Margins*/
		$this->SetLeftMargin($this->left_margin);
		$this->SetRightMargin($this->right_margin);
		$this->SetTopMargin($this->top_margin);

		// Instanciation of inherited class
		
		$this->AliasNbPages();
		$this->AddPage();
		
		
		if($this->head && $this->detail){
			
			
			/*Tamanho das tabelas*/
			$width = array();
			if(!$this->width){ //Se n existe gera automaticamente
				foreach($this->head as $head_key =>$head_value){ 
					$width[$head_key] = (($this -> w - ($this->left_margin+$this->right_margin))/count($this->head));//valor total - espaçamentos a dividir pelo total
				}
			}else{
				foreach($this->width as $wkey =>$wvalue){ 
					$width[$wkey] = (($this -> w - ($this->left_margin+$this->right_margin))*($wvalue/100));
				}
				//contagem se existe com o tamanho total da página!!
			}
			
			/*Tabela Descriçao*/	
			$this->setxy($this->left_margin, $this->gety()+10);	
			$this->SetFillColor(195,189,189);
			$this->SetTextColor(255);
			$this->SetDrawColor(213,203,198);
			$this->SetLineWidth(.3);
			$this->SetFont('Times','B',11);
			// Header
			foreach($this->head as $head_key =>$head_value){ 
				$this->Cell($width[$head_key],7,$head_value,1,0,'C',true);
			}			
			$this->Ln();
			
			
			//Detalhe
			//Totais
			$total = array();
			if($this->total){
				foreach($this->total as $vtotal){
					$total[$vtotal] = true;
				}
			}
			$this->SetFont('Times','',12);
			$this->SetTextColor(0);
			
			foreach($this->detail as $detail_key =>$detail_value){ 
				foreach($detail_value as $d_key =>$d_value){
					 $this->Cell($width[$d_key],7,$d_value,'LR',0,'R');
					 /*Se estiver em soma*/
					 if($total[$d_key]){
						$total[$d_key] += $d_value;
					}
					
				}
				$this->Ln();
			}
			echo "<pre>";print_r($total);die();
			//$this->SetAutoPageBreak();
		}
		
		$this->Output();
		
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