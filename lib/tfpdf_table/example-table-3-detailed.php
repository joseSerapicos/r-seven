<?php
//include pdf class
require_once ("classes/pdf.php");

/**
 * mypdf extends pdf class, it is used to draw the header and footer
 */
require_once ("mypdf-table.php");

//Tag Based Multicell Class
require_once ("classes/pdftable.php");

//define some background colors
$aBgColor1 = array(234, 255, 218);
$aBgColor2 = array(165, 250, 220);
$aBgColor3 = array(255, 252, 249);
$aBgColor4 = array(86, 155, 225);
$aBgColor5 = array(207, 247, 239);
$aBgColor6 = array(246, 211, 207);
$bg_color7 = array(216, 243, 228);

//create the pdf object and do some initialization
$oPdf = new myPdf();
$oPdf->Open();
$oPdf->SetAutoPageBreak(true, 20);
$oPdf->SetMargins(20, 20, 20);
$oPdf->AddPage();
$oPdf->AliasNbPages();

/**
 * Create the pdf Table object
 * Alternative you can use the Singleton Instance
 * @example : $oTable = PdfTable::getInstance($oPdf);
 */
$oTable = new PdfTable($oPdf);

/**
 * Set the tag styles
 */
$oTable->setStyle("p", "times", "", 10, "130,0,30");
$oTable->setStyle("b", "times", "", 9, "80,80,260");
$oTable->setStyle("h1", "times", "", 10, "0,151,200");
$oTable->setStyle("bi", "times", "BI", 12, "0,0,120");

//default text color
$oPdf->SetTextColor(118, 0, 3);

//create an advanced multicell    
$oMulticell = PdfMulticell::getInstance($oPdf);
$oMulticell->SetStyle("s1", "arial", "", 8, "118,0,3");
$oMulticell->SetStyle("s2", "arial", "", 6, "0,49,159");

$oMulticell->multiCell(100, 4, "<s1>Example 1 - Very Simple Table</s1>", 0);
$oPdf->Ln(1);

//require ('table_example1.inc');
$nColumns = 3;

//Initialize the table class, 3 columns
$oTable->initialize(array(40, 50, 30));

$aHeader = array();

//Table Header
for ($i = 0; $i < $nColumns; $i ++) {
    $aHeader[$i]['TEXT'] = "Header #" . ($i + 1);
}

//add the header
$oTable->addHeader($aHeader);

for ($j = 1; $j < 105; $j ++) {
    $aRow = Array();
    $aRow[0]['TEXT'] = "Line $j Text 1"; //text for column 0
    $aRow[0]['TEXT_ALIGN'] = "L"; //text align
    //$aRow[0]['LINE_SIZE'] = 7; //text align
    $aRow[1]['TEXT'] = "Line $j Text 2"; //text for column 1
    $aRow[2]['TEXT'] = "Line $j Text x3"; //text for column 2
    $aRow[2]['TEXT_ALIGN'] = "R"; //text align
    

    //add the row
    $oTable->addRow($aRow);
    
    //break;
}

//close the table
$oTable->close();

/**/
$oPdf->Ln(10);

$sTxt = "<s1>Example 2 - More detailed Table</s1>\n<s2>\t- Table Align = Center\n\t- The header has multiple lines\n\t- Colspanning Example\n\t- Rowspanning Example\n\t- Text Alignments\n\t- Properties overwriting</s2>";

$oPdf->SetX(60);
$oMulticell->multiCell(100, 2.5, $sTxt, 0);
$oPdf->Ln(1);
require ('table_example2.inc');

$oPdf->Ln(10);

$sTxt = "<s1>Example 3 - Table split end of the page</s1>\n<s2>\t- This is the table from Example 2 at the end of the page\n\t- Splitting mode = ON, you can see that the cells are splitted</s2>";

$oPdf->SetXY(60, 215);
$oMulticell->multiCell(100, 2.5, $sTxt, 0);
$oPdf->Ln(1);
$bTableSplitMode = true;
require ('table_example2.inc');

$oPdf->Ln(10);

$sTxt = "<s1>Example 4 - Table split end of the page</s1>\n<s2>\t- This is the table from Example 2 at the end of the page\n\t- Splitting mode = OFF. In this case the cells are NOT splitted</s2>";

$oPdf->SetXY(60, 215);
$oMulticell->multiCell(100, 2.5, $sTxt, 0);
$oPdf->Ln(1);
$bTableSplitMode = false;
require ('table_example2.inc');

//send the pdf to the browser
$oPdf->Output(); 
?>