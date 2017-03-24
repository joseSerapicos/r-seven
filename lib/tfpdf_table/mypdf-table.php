<?php

/**
 * Custom PDF class extention for Header and Footer Definitions
 *
 * @author andy@interpid.eu
 *
 */
class myPDF extends Pdf {


    /**
     * Custom Header
     *
     * @see Pdf::Header()
     */
    public function Header () {

        $this->SetY(10);
        
        /**
         * yes, even here we can use the multicell tag! this will be a local object
         */
        $oMulticell = PdfMulticell::getInstance($this);
        
        $oMulticell->SetStyle("h1", "times", "", 6, "160,160,160");
        $oMulticell->SetStyle("h2", "times", "", 6, "0,119,220");
        
        $oMulticell->multiCell(100, 3, file_get_contents(dirname(__FILE__) . '/content/header-table.txt'));
        
        $this->Image(dirname(__FILE__) . '/images/interpid_logo.png', 160, 10, 40, 0, '', 'http://www.interpid.eu');
        $this->SetY($this->tMargin);
    
    }


    /**
     * Custom Footer
     *
     * @see Pdf::Footer()
     */
    public function Footer () {

        $this->SetY(- 10);
        $this->SetFont('times', 'I', 7);
        $this->SetTextColor(170, 170, 170);
        $this->MultiCell(0, 4, "Page {$this->PageNo()} / {nb}", 0, 'C');
    
    }

}

