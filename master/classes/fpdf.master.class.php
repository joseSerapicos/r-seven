<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: fpdf.master.class.php
|  PATH: classes
|  DESCRIPTION: Classe Master de gerar pdf pelo fpdf
|
|  AUTHOR: Adriano Mendes
|  CREATE DATE: 13MAR2014
|  MODIFICATION DATE: -
|____________________________________________________________*/


require_once ($_SERVER['DOCUMENT_ROOT']. "/mygest/lib/tfpdf_table/classes/pdf.php");//classe pdf

class gen_fpdf extends Pdf{
	private $debug;	
	private $error;
	
	// ////////////////
	// Constructor //
	// //////////////
	
	// Default //
	public function __construct() {
		
		parent::PDF();
		
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
		
		
		//usado no cabeçalho do documento
		$this->client 		= false;
		$this->store 		= false;
		
		
		$this->doc_type		= "MISC"; //INVOICE RECEIVE MISC
		/*Margins*/
		$this->left_margin 		= "14.5";
		$this->right_margin 	= "12";
		$this->top_margin 		= "107";
		$this->bottom_margin 	= "10";
		
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
	
	/**/
	public function set_client($db,$id_client) {
		/*vai buscar a base de dados*/
		$this->client = array("Nome","Morada","blabla");
	}
	public function set_store($db,$id_store) {
		/*vai buscar a base de dados*/
		$this->store = array("Store","Store","Store","Tel: xxx","Portugal");
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
	
	
	/*Doc Type*/
	public function set_doc_type($set_doc_type) {
		$this->doc_type	= $set_doc_type;
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
		if($this->store){

			$this->SetTextColor(0,0,0);
			
			$this->setxy($this->left_margin, 20.5); //primeira posiçao
			foreach($this->store as $store_key => $store_value){
				if($store_key == 0){
					$this->SetFont('Times','B',12);
				}else{
					$this->SetFont('Times','',12);
					$this->setxy($this->left_margin, $this->gety()+6);
				}
				$this->Cell(80, 5,$store_value, 0, 0, 'L');
			}
		}
		
		/*Para Info*/
		if($this->client){
			$this->SetTextColor(0,0,0);
			$this->SetFont('Times','',12);
			
			$this->setxy(120, $this->gety()+6);
			$this->Cell(0,5,'Exmo.(s) Sr.(s)',0,0,'C');
			foreach($this->client as $client_value){
				$this->setxy(120, $this->gety()+6);
				$this->Cell(0,5,$client_value,0,0,'C');
			}
		}
		
		
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
		$this->Ln(10);
		//$this->setxy($this->left_margin, $this->gety());
	}
	function Footer(){
		//$this->SetY(-$this->bottom_margin);
		$this->setxy($this->left_margin, -$this->bottom_margin);
	
		// Arial italic 8
		$this->SetTextColor(0);
		$this->SetFont('Times','I',8);
		$this->Cell(0,10,'Power by XPTO',0,0,'L');
		
		$this->Cell(0,10,'Página '.$this->PageNo().' de '.$this->n,0,0,'R');
		
		//$this->setx($this->left_margin);
		//$this->Cell(0,0,'Página '.$this->PageNo().' de {nb}',0,0,'R');
	}
	
	public function create_xpto(){
		
		require_once ($_SERVER['DOCUMENT_ROOT']. "/mygest/lib/tfpdf_table/classes/pdftable.php"); //classe tabelas
		
		//$this->Open();
		$this->SetAutoPageBreak(true, $this->bottom_margin);
		$this->SetMargins(0, $this->top_margin, $this->right_margin);
		
		$this->AddPage();
		$this->AliasNbPages();
		
		/*Style Tabela*/
		$table_style = array(
		'TABLE' => array(
				 'TABLE_ALIGN'       => 'L',
				 'TABLE_LEFT_MARGIN' => $this->left_margin, 
                 'BORDER_COLOR'      => array(195,189,189),    //border color
        ),
        'HEADER' => array(
                'TEXT_COLOR'        => array(255, 255, 255),  //text color
				'TEXT_SIZE'         => 11, 
				'BACKGROUND_COLOR'  => array(195,189,189), 
				'PADDING_TOP'       => 1,                   //padding top
                'PADDING_RIGHT'     => 1,                   //padding right
                'PADDING_LEFT'      => 1,                   //padding left
                'PADDING_BOTTOM'    => 1,                   //padding bottom
				'BORDER_COLOR'      => array(195,189,189),    //border color
        ),
        'ROW' => array(
                'TEXT_COLOR'        => array(0, 0, 0),   //text color
                'TEXT_SIZE'         => 11,                   //font size
				'BORDER_COLOR'      => array(195,189,189),    //border color
				'PADDING_TOP'       => 1,
                'PADDING_RIGHT'     => 1,
                'PADDING_LEFT'      => 1,
                'PADDING_BOTTOM'    => 1,
        ),
		);

		/*Gerar Tabela ^c^*/
		$table = new PdfTable($this);
		
		$table->setStyle("p", "times", "", 11, "130,0,30");
		$table->setStyle("b", "times", "", 11, "80,80,260");
		 		
		//Initialize table
		/*Tamanho das tabelas*/
		$width = array();
		if(!$this->width){ //Se n existe gera automaticamente
			foreach($this->head as $head_key =>$head_value){ 
				$width[] = (($this -> w - ($this->left_margin+$this->right_margin))/count($this->head));//valor total - espaçamentos a dividir pelo total
			}
		}else{
			foreach($this->width as $wkey =>$wvalue){ 
				$width[] = (($this -> w - ($this->left_margin+$this->right_margin))*($wvalue/100));
			}
			//contagem se existe com o tamanho total da página!!
		}
		$table->initialize($width,$table_style);
		
		
		
		//Table Header
		$tHeader = array();
		foreach($this->head as $head_key =>$head_value){ 
			$tHeader[$head_key]['TEXT'] = $head_value;
		}
		
		//add the header
		$table->addHeader($tHeader);
		
		
		/*Detalhe & Totais*/
		//TOTAL
		if($this->total){
			$total = array();	
			foreach($this->total as $vtotal){
				$total[$vtotal] = true;
			}
		}
		//DETALHE
		foreach($this->detail as $detail_key =>$detail_value){ 
			$tRow = Array();
			foreach($detail_value as $d_key =>$d_value){
				
				$tRow[$d_key]['TEXT_ALIGN'] = "R";
				$tRow[$d_key]['TEXT'] = $d_value;
				
				/*Totais*/
				if($this->total){
					if($total[$d_key]){
						$total[$d_key] === true ? $total[$d_key] = 0:'';
						$total[$d_key] += $d_value;
					}
				}
				//END TPTAOS
				
			}
			$table->addRow($tRow);
		}
		
		
		//DETALHE TOTAIS FINAL
			if($this->total){
				switch ($this->doc_type){
					case "INVOICE";
					
						foreach($total as $tkey => $tvalue){
							/*DESC*/
							$tRow[0]['TEXT_ALIGN'] = "R";
							//$tRow[0]['TEXT_SIZE'] = 15;
							$tRow[0]['PADDING_TOP'] = 2;
							$tRow[0]['PADDING_BOTTOM'] = 2;
							$tRow[0]['TEXT_COLOR'] = array(0,0,0);
							$tRow[0]['BACKGROUND_COLOR'] = array(234,227,227);
							$tRow[0]['COLSPAN'] = count($this->head)-1;
							$tRow[0]['TEXT'] = $this->head[$tkey]." (Total):";
							/*VALOR*/
							$tRow[count($this->head)-1]['TEXT'] = $tvalue;
							
							$table->addRow($tRow);
						}
						
					
					break;
					case "MISC":
					default:
						foreach($this->head as $t_key =>$t_value){
							$tRow[$t_key]['TEXT_ALIGN'] = "C";
							$tRow[$t_key]['TEXT'] = ($total[$t_key])?$total[$t_key]:'';
						}
						$table->addRow($tRow);
					break;
				}
				
			}
				
		//END DETALHE TOTAIS
		
		//close the table
		$table->close();
		
		$this->Ln(10);
		
		$this->SetMargins($this->bottom_margin, $this->top_margin, $this->right_margin);
		
		
		
		$this->Output(); 
	}
	
	// Carrega toda informacao a partir da base de dados //
	public function create_xpto_old() {
		
		$this->error = false;
		
		/*Margins*/
		$this->SetLeftMargin($this->left_margin);
		$this->SetRightMargin($this->right_margin);
		$this->SetTopMargin($this->top_margin);

		// Instanciation of inherited class
		$this->SetAutoPageBreak(true , 20);
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
			
			
			/*Detalhe & Totais*/
			$total = array();
			if($this->total){
				foreach($this->total as $vtotal){
					$total[$vtotal] = true;
				}
			}
			$this->SetFont('Times','',12);
			$this->SetTextColor(0);
			
			
		
			foreach($this->detail as $detail_key =>$detail_value){ 
	
				$row = $detail_key;
				$x = $this->GetX();
				
				foreach($detail_value as $d_key =>$d_value){
	
					$yBeforeCell = $this->GetY();
					//$borders = 'LB' . ($d_key + 1 == count($detail_value) ? 'R' : ''); // Only add R for last col
					if($d_key == 0){
						$this->MultiCell($width[$d_key], 7, $d_value, 1,'R');
					}else{
						$this->MultiCell($width[$d_key], $rowHeight, $d_value, 1,'C');
					}
					$yCurrent = $this->GetY();
					$rowHeight = $yCurrent - $yBeforeCell;
					$this->SetXY($x + $width[$d_key], $yCurrent - $rowHeight);
					$x = $this->GetX();
					
					/*Totais*/
					if($total[$d_key]){
						 $total[$d_key] === true ? $total[$d_key] = 0:'';
						 $total[$d_key] += $d_value;
					}
				}
	
				$this->Ln($rowHeight); // Line-feed at last cell height to start a new row
			}
		
			
			
			//Mostra Totais
			if($this->total){
				switch ($this->doc_type){
					case "INVOICE";
						/*Fecha linha Detalhes*/
						$this->SetDrawColor(195,189,189);
						$this->Line($this -> w-$this->right_margin, $this->gety(), $this->left_margin, $this->gety());
						
						
						$this->SetDrawColor(255,255,255);
						$this->SetTextColor(0);
						$this->SetLineWidth(.3);
						foreach($total as $total_key => $total_value){
							foreach($this->head as $head_key =>$head_value){ 
								if($head_key == (count($this->head)-2)){
									$this->SetTextColor(0);
									$this->Cell($width[$head_key],7,"Total ".$this->head[$total_key].":",'LR',0,'R');	
									
								}else if($head_key == (count($this->head)-1)){
									$this->SetDrawColor(195,189,189);
									$this->SetTextColor(255,255,255);
									$this->Cell($width[$head_key],7,$total_value,'LR',0,'R',true);	
								
								}else{
									$this->SetTextColor(0);
									$this->Cell($width[$head_key],7,"",'LR',0,'R');	
								
								}
							}
						$this->Ln();
						}
						/*Fecha Tabela (HIDE)*/
						$this->SetDrawColor(255,255,255);
						$this->Cell(($this -> w - ($this->left_margin+$this->right_margin)),0,'','T');
						/*Fecha Tabela*/
				
					break;
					case "MISC":
					default:
						$this->SetDrawColor(195,189,189);
						$this->Line($this -> w-$this->right_margin, $this->gety(), $this->left_margin, $this->gety());
						
						$this->SetDrawColor(255,255,255);
						$this->SetTextColor(0);
						$this->SetLineWidth(.3);
						foreach($total as $total_key => $total_value){
							foreach($this->head as $head_key =>$head_value){ 
								if($head_key == $total_key){
									$this->SetDrawColor(195,189,189);
									$this->SetTextColor(255,255,255);
									$this->Cell($width[$head_key],7,$total_value,'LR',0,'R',true);	
								}else{
									$this->SetDrawColor(255,255,255);
									$this->Cell($width[$head_key],7,"",'LR',0,'R');	
								}
							}
						$this->Ln();
						}
						/*Fecha Tabela*/
						$this->SetDrawColor(255,255,255);
						$this->Cell(($this -> w - ($this->left_margin+$this->right_margin)),0,'','T');
						/*Fecha Tabela*/
					break;
					
				}
				
			}else{ 
				/*Fecha Tabela*/
				$this->Cell(($this -> w - ($this->left_margin+$this->right_margin)),0,'','T');
				
			}//end if(this->total)
		
		} //end if($this->head && $this->detail)
		
		
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