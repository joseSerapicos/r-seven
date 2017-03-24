<?php
// Top
//require_once(dirname(__FILE__)."/top_all_with_lang.php"); // Nao necessita, ja se encontra carregado no index

// Path
$include_file = ($masterMenuObj?($masterMenuObj->get_filepath_content()):($masterModuleObj?($masterModuleObj->get_filepath_content()):(false)));
$include_file = ($include_file?(DIR_ROOT.$include_file):false);
$include_file_dir = ($include_file?(substr($include_file, 0, (strrpos($include_file, "/")+1))):false);

// Header buttons
if( (!empty($include_file_dir)) ) {
	if(is_file($include_file_dir."header_buttons.php")) {
		include_once($include_file_dir."header_buttons.php");
	}
}

// Header
include_once(DIR_ROOT."header.php");
?>


<div id="load_main_menu">
	<?php
    // Menu script
    if( (!empty($include_file)) ) {
        if(is_file($include_file)) {
            include_once($include_file);
        }
    }
    
    
    /* Buttons do header que necessitam ser instanciados /////////////////////////////////////////////////////////////////////////*/
    
    /* EXAMPLE
    (Ver example em header.php)
    /EXAMPLE */
    
    if(is_array($headerButtons)) { ?>
    
        <!-- Javascript -->
        <script>
        <!--
        $(document).ready(function() { 
            
            <?php if(is_array($headerButtons['add']) && $headerButtons['add']['enabled'] && $headerButtons['conf']['addScripts'] && $headerButtons['add']['addEditSingleHeader']) { ?>
            /* Botao "editSingleHeader" */
            // Variaveis
            var addHeader_selectorDialog = "#addActionSelector";
            var addHeader_selectorDialogBody = (addHeader_selectorDialog+" .modal-dialog .modal-content .modal-body");
            var addHeader_selectorDialogFooter = (addHeader_selectorDialog+" .modal-dialog .modal-content .modal-footer");
            // Instancia botoes
            $(".editSingleHeader").click( function(event) {
                // Evita que outras accoes definidas sejam executadas
                event.preventDefault();
                
                var myId = $(this).attr("data-myId");
                var myIdObj = {'id': myId};
        
                $(addHeader_selectorDialogBody).html('<div class="alignCenter"><img src="/mygest/master/layout/img/loading/4.gif" /></div>');
                callScript("<?= $headerButtons['add']['scriptGetForm'] ?>", "selector", addHeader_selectorDialogBody, myIdObj);
                
                //return(false);
            });
            /* /Botao "editSingleHeader" */
            <?php } ?>
            
            <?php if(is_array($headerButtons['deleteAll']) && $headerButtons['deleteAll']['enabled'] && $headerButtons['conf']['addScripts'] && $headerButtons['deleteAll']['addDeleteSingleHeader']) { ?>
            /* Botao "deleteSingleHeader" */
            $(".deleteSingleHeader").click( function(event) {
                // Evita que outras accoes definidas sejam executadas
                event.preventDefault();
                    
                var myId = $(this).attr("data-myId");
                var myIdObj = {'id': myId};
                    
                callScript("<?= $headerButtons['deleteAll']['scriptPostForm'] ?>", "function", "processReturnForm", myIdObj);
            
                //return(false);
            });
            /* /Botao "deleteSingleHeader" */
            <?php } ?>
            
        });
        //-->
        </script>
        <!-- /Javascript -->
    <?php } /* Buttons do header que necessitam ser instanciados /////////////////////////////////////////////////////////////////////////*/ ?>
</div>