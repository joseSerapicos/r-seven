<?php
// Footer
include_once(DIR_ROOT."footer.php");


/* Incluido no "index.php" para se poder usar jquery antes do bottom
<script src="<?= PATH_ROOT ?>master/layout/js/libs/jquery-1.9.1.min.js"></script> */ ?>
<!-- Placed at the end of the document so the pages load faster -->
<script	src="<?= PATH_ROOT ?>master/layout/js/libs/jquery-ui-1.10.0.custom.min.js"></script>
<script src="<?= PATH_ROOT ?>master/layout/js/libs/bootstrap.min.js"></script>
<script src="<?= PATH_ROOT ?>master/layout/js/Application.js"></script>
<script src="<?= PATH_ROOT ?>master/layout/js/plugins/msgGrowl/js/msgGrowl.js"></script>

<script type="text/javascript" src="<?= PATH_ROOT ?>lib/functions.js"></script>


<?php
/* Buttons do header que necessitam ser instanciados /////////////////////////////////////////////////////////////////////////*/

/* EXAMPLE
(Ver example em header.php)
/EXAMPLE */

if(is_array($headerButtons)) {

	/* Dialog para add e edit */
	if(is_array($headerButtons['add']) && $headerButtons['add']['enabled'] && $headerButtons['conf']['addScripts']) { ?>
        <div id="addActionSelector" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
        
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 class="modal-title">Add/Edit</h4>
                    </div>
                    
                    <div class="modal-body"></div>
                    
                    <div class="clear"></div>
                    
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary addHeaderSaveForm">Save</button>
                    </div>
        
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->
    <?php /* /Dialog para add e edit */ } ?>
    
    
    <!-- Javascript -->
    <script>
    <!--
    $(document).ready(function() { 
		
		<?php if(is_array($headerButtons['add']) && $headerButtons['add']['enabled'] && $headerButtons['conf']['addScripts']) { ?>
		/* Botao "addHeader" */
		// Variaveis
		var addHeader_selectorDialog = "#addActionSelector";
		var addHeader_selectorDialogBody = (addHeader_selectorDialog+" .modal-dialog .modal-content .modal-body");
		var addHeader_selectorDialogFooter = (addHeader_selectorDialog+" .modal-dialog .modal-content .modal-footer");
		// Carrega e abre a dialog associada.
		$(".addHeader").click( function() {
			$(addHeader_selectorDialogBody).html('<div class="alignCenter"><img src="/mygest/master/layout/img/loading/4.gif" /></div>');
			callScript("<?= $headerButtons['add']['scriptGetForm'] ?>", "selector", addHeader_selectorDialogBody, false);
		});
		// Faz submit do form associado.
		$(addHeader_selectorDialogFooter+" button.addHeaderSaveForm").click( function() {
			// Limpar tooltips
			$(addHeader_selectorDialogBody+" form *").tooltip('destroy');
			$(addHeader_selectorDialogBody+" form *").removeClass('redBorder');
			// Submit form
			submitForm("<?= $headerButtons['add']['scriptPostForm'] ?>", (addHeader_selectorDialogBody+" form"), "processReturnForm");
		});
		/* /Botao "addHeader" */
        <?php } ?>
		
		<?php if(is_array($headerButtons['deleteAll']) && $headerButtons['deleteAll']['enabled'] && $headerButtons['conf']['addScripts']) { ?>
        /* Botao "deleteAllHeader" */
        $(".deleteAllHeader").click( function() {
            var deleteAllHeader_selectorForm = $(this).attr("data-myActionSelector");
            submitForm("<?= $headerButtons['deleteAll']['scriptPostForm'] ?>", deleteAllHeader_selectorForm, "processReturnForm");
        });
        /* /Botao "deleteAllHeader" */
        <?php } ?>
		
		<?php if(is_array($headerButtons['checkAll']) && $headerButtons['checkAll']['enabled'] && $headerButtons['conf']['addScripts']) { ?>
        /* Botao "checkAllHeader". */
        // O botao e instanciado a partir da classe, e fica relacionado com todas as checkbox que possuam como classe o seu "id".
        $(".checkAllHeader").click( function() {
                
            var checkAllHeader_selectorInput = $(this).attr("data-myActionSelector");
            var myChecked = $(this).attr("data-myChecked");
            myChecked = ((myChecked>0)?false:true);
            
            $(checkAllHeader_selectorInput).prop('checked', myChecked);
                
            $(this).attr("data-myChecked", (myChecked?1:0));
        });
        /* /Botao "checkAllHeader". */
		<? } ?>
    });
    //-->
    </script>
    <!-- /Javascript -->
<?php } // End if
/* /Buttons do header que necessitam ser instanciados /////////////////////////////////////////////////////////////////////////*/
?>