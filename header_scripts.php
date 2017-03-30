<?php 
// Scripts do header buttons, deve ser adicionado em todo o refresh parcial (normalmente executado pelo content)
/* Buttons do header que necessitam ser instanciados /////////////////////////////////////////////////////////////////////////*/

/* EXAMPLE
(Ver example em header.php)
/EXAMPLE */

if(is_array($headerButtons) && is_array($headerButtons['conf']) && $headerButtons['conf']['addScripts']) {
	$permission = $masterMainObj->get_permission();	?>

    <!-- Javascript -->
    <script>
    <!--
    $(document).ready(function() { 
        
        <?php if(is_array($headerButtons['add']) && ($headerButtons['add']['addEditSingleHeader'] || $headerButtons['add']['addMultiAddHeader'])) { ?>
        // Variaveis
        var addHeader_selectorDialog = "#addActionSelector";
        var addHeader_selectorDialogBody = (addHeader_selectorDialog+" .modal-dialog .modal-content .modal-body");
        var addHeader_selectorDialogFooter = (addHeader_selectorDialog+" .modal-dialog .modal-content .modal-footer");
        var addHeader_selectorDialogSave = (addHeader_selectorDialogFooter+" button.addHeaderSaveForm");
		
		// Instanciar botoes
        <?php if($headerButtons['add']['addEditSingleHeader']) { ?>
        /* Botao "editSingleHeader" */
        $(".editSingleHeader").click( function(event) {
            // Evita que outras accoes definidas sejam executadas
            event.preventDefault();
            
            var myId = $(this).attr("data-myId");
            var myIdObj = {'id': myId};
    
            $(addHeader_selectorDialogBody).html('<div class="alignCenter"><img src="/mygest/master/layout/img/loading/4.gif" /></div>');
            
            var editSingleHeader_scriptGetForm = "";
            var editSingleHeader_scriptPostForm = "";
            if(!$.isEmptyObject($(this).attr("data-myScriptGetForm"))) { // Definido no "editSingleHeader"
                editSingleHeader_scriptGetForm = $(this).attr("data-myScriptGetForm");
                editSingleHeader_scriptPostForm = $(this).attr("data-myScriptPostForm");
            }
            else { // Definido no "addHeader"
                editSingleHeader_scriptGetForm = $(".addHeader").attr("data-myScriptGetForm");
                editSingleHeader_scriptPostForm = $(".addHeader").attr("data-myScriptPostForm");
            }
            
            callScript(editSingleHeader_scriptGetForm, "selector", addHeader_selectorDialogBody, myIdObj);
            $(addHeader_selectorDialogSave).attr('data-myScriptPostForm', editSingleHeader_scriptPostForm);
            
            //return(false);
        });
        /* /Botao "editSingleHeader" */
		<?php } ?>
		
        <?php if($headerButtons['add']['addMultiAddHeader'] && $permission['add']) { ?>
        /* Botao "multiAddHeader" */
        $(".multiAddHeader").click( function(event) {
			// Evita que outras accoes definidas sejam executadas
            event.preventDefault();
            
            var myId = $(this).attr("data-myId");
            var myIdObj = {'id': myId};
			
            $(addHeader_selectorDialogBody).html('<div class="alignCenter"><img src="/mygest/master/layout/img/loading/4.gif" /></div>');
            
            var multiAddHeader_scriptGetForm = $(this).attr("data-myScriptGetForm");
            var multiAddHeader_scriptPostForm = $(this).attr("data-myScriptPostForm");
            
            callScript(multiAddHeader_scriptGetForm, "selector", addHeader_selectorDialogBody, myIdObj);
            $(addHeader_selectorDialogSave).attr('data-myScriptPostForm', multiAddHeader_scriptPostForm);
        });
        /* /Botao "multiAddHeader" */
        <?php } ?>
		
		<?php } ?>
        
        <?php if(is_array($headerButtons['deleteAll']) && $headerButtons['deleteAll']['addDeleteSingleHeader'] && $permission['add']) { ?>
        /* Botao "deleteSingleHeader" */
        $(".deleteSingleHeader").click( function(event) {
            // Evita que outras accoes definidas sejam executadas
            event.preventDefault();
                
            var myId = $(this).attr("data-myId");
            var myIdObj = {'id': myId};			
            
            var deleteSingleHeader_scriptPostForm = "";
            if(!$.isEmptyObject($(this).attr("data-myScriptPostForm"))) { // Definido no "deleteSingleHeader"
                deleteSingleHeader_scriptPostForm = $(this).attr("data-myScriptPostForm");
            }
            else { // Definido no "deleteAllHeader"
                deleteSingleHeader_scriptPostForm = $(".deleteAllHeader").attr("data-myScriptPostForm");
            }
            
            callScript(deleteSingleHeader_scriptPostForm, "function", "processReturnForm", myIdObj);
        
            //return(false);
        });
        /* /Botao "deleteSingleHeader" */
        <?php } ?>
		
		<?php if(is_array($headerButtons['checkAll']) && $headerButtons['checkAll']['addMultiCheckAllHeader']) { ?>
        /* Botao "multiCheckAllHeader". */
        $(".multiCheckAllHeader").click( function() {
                
            var multiCheckAllHeader_selectorInput = $(this).attr("data-myActionSelector");
            var myChecked = $(this).attr("data-myChecked");
            
			myChecked = ((myChecked>0)?false:true);
            $(multiCheckAllHeader_selectorInput).prop('checked', myChecked);
            $(this).attr("data-myChecked", (myChecked?1:0));
        });
        /* /Botao "multiCheckAllHeader". */
        <?php } ?>
        
    });
    //-->
    </script>
    <!-- /Javascript -->
<?php } /* Buttons do header que necessitam ser instanciados /////////////////////////////////////////////////////////////////////////*/ ?>