<?php

/**
* Pdf Advanced Multicell - Example
* Copyright (c) 2005-2013, Andrei Bintintan, http://www.interpid.eu
*/

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
$oPdf->SetFont('times', '', 11);
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
$oMulticell->SetStyle("b", "times", "B",  11, "130,0,30");
$oMulticell->setStyle("i", "times", "I", 11, "80,80,260");
$oMulticell->setStyle("u", "times", "U", 11, "80,80,260");
$oMulticell->SetStyle("h1", "times", "", 11, "80,80,260");
$oMulticell->SetStyle("h3", "dejavuserif",  "B",  12, "203,0,48");
$oMulticell->SetStyle("h4", "times", "BI", 11, "0,151,200");
$oMulticell->SetStyle("hh", "dejavuserif",  "B",  11, "255,189,12");
$oMulticell->SetStyle("ss", "times", "", 7,  "203,0,48");
$oMulticell->SetStyle("font", "times", "", 10, "0,0,255");
$oMulticell->SetStyle("style", "times", "BI", 10, "0,0,220");
$oMulticell->SetStyle("size", "timessrif",  "BI", 12, "0,0,120");
$oMulticell->SetStyle("color", "timessrif",  "BI", 12, "0,255,255");

//read TAG formatted text from files
$sTxt1 = file_get_contents('content/createdby.txt');
$sTxt2 = file_get_contents('content/multicell.txt');
$sTxtUtf8 = file_get_contents('content/text_utf8.txt');

//create an advanced multicell
$oMulticell->multiCell(150, 5, $sTxt1, 1, "L", 1, 5, 5, 5, 5); 
$oPdf->Ln(10); //new line

//create an advanced multicell
$oMulticell->multiCell(0, 5, $sTxtUtf8, 1, "L", 1, 5, 5, 5, 5); 
$oPdf->Ln(10); //new line

//create an advanced multicell
$oMulticell->multiCell(0, 5, $sTxt2, 1, "J", 1, 3, 3, 3, 3); 
$oPdf->Ln(10); //new line

//send the pdf to the browser
$oPdf->Output();
?>