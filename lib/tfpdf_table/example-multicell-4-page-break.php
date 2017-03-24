<?php
//include pdf class
require_once ("classes/pdf.php");

// Include the Advanced Multicell Class
require_once ("classes/pdfmulticell.php");

/**
 * Include my Custom PDF class This is required only to overwrite the header
 */
require_once ("mypdf-multicell.php");

// create new PDF document
$oPdf = new myPDF();

$oPdf->Open();
$oPdf->SetMargins(20, 20, 20);

//set default font/colors
$oPdf->SetFont('arial', '', 11);
$oPdf->SetTextColor(200, 10, 10);
$oPdf->SetFillColor(254, 255, 245);

//add the page
$oPdf->AddPage();
$oPdf->AliasNbPages();

/**
 * Create the Advanced Multicell Object and pass the PDF object as a parameter to the constructor
 */
$oMulticell = new PdfMulticell($oPdf);

/**
 * Set the styles for the advanced multicell
 */
$oMulticell->SetStyle("p", "times", "", 11, "130,0,30");
$oMulticell->SetStyle("b", "times", "B", 11, "130,0,30");
$oMulticell->setStyle("i", "times", "I", 11, "80,80,260");
$oMulticell->setStyle("u", "times", "U", 11, "80,80,260");
$oMulticell->SetStyle("h1", "times", "", 11, "80,80,260");
$oMulticell->SetStyle("h3", "times", "B", 12, "203,0,48");
$oMulticell->SetStyle("h4", "times", "BI", 11, "0,151,200");
$oMulticell->SetStyle("hh", "times", "B", 11, "255,189,12");
$oMulticell->SetStyle("ss", "times", "", 7, "203,0,48");
$oMulticell->SetStyle("font", "times", "", 10, "0,0,255");
$oMulticell->SetStyle("style", "times", "BI", 10, "0,0,220");
$oMulticell->SetStyle("size", "times", "BI", 12, "0,0,120");
$oMulticell->SetStyle("color", "times", "BI", 12, "0,255,255");

$sTxt1 = "Created by <h1 href='mailto:andy@interpid.eu'>Andrei Bintintan</h1>";

$sTxt2 = '<p>';
for ($i = 0; $i < 100; $i ++)
    $sTxt2 .= "Line <b>$i</b>\n";

$sTxt2 .= '</p>';

//create an advanced multicell
$oMulticell->multiCell(0, 5, $sTxt2, 1, "J", 1, 0, 0, 0, 0);
$oPdf->Ln(10); //new line

//send the pdf to the browser
$oPdf->Output(); 
?>