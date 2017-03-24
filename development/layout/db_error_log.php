<?php
require_once (dirname(__FILE__)."/../../top.php"); // Carregamento do top

// Includes : Ficheiros necessarios
include_once (DIR_ROOT."development/classes/development_db_error_log.class.php");
include_once (DIR_ROOT."development/classes/development_db_error_log_array.class.php");

// Instanciar classe development_db_error_log_array
$obj_db_error_log_array = new development_db_error_log_array ( $masterMainDb );
$db_error_log_array = $obj_db_error_log_array->get_development_db_error_log_array ();
?>

<!-- Erros registados na base de dados -->


<div class="main">
    <div class="container">
    	<div class="row">
			<div class="col-md-12">
  				
  				<div class="widget stacked widget-table">
					
					<div class="widget-header">
						<i class="<?= ($obj_module?$obj_module->get_icon($masterMainDb):'') ?>"></i>
						<h3><?= ($obj_module?$obj_module->get_name():'') ?><?= ($obj_menu?(' : '.$obj_menu->get_name()):'') ?></h3>
                        <div class="options_menu"><button class="btn btn-default icon-remove deleteAll" /><button class="btn btn-default icon-check checkAll" id="chk_del" name="chk_del" myChecked="0" /></div>
					</div> <!-- .widget-header -->
					
					<div class="widget-content">
						<form id="frm_db_error_log" name="frm_db_error_log">
                        <table class="table table-bordered table-striped">
							
                        <thead><tr>								
                            <th>ID</th>

                            <th>SQL error</th>
            
                            <th>SQL</th>
            
                            <th>DB host</th>
            
                            <th>DB name</th>
            
                            <th>DB username</th>
            
                            <th>Insert time</th>
                            
                            <th>Options</th>
                            
                            <th></th>
                        </tr></thead>
					
						<tbody>
                        	<?php
							if (is_array ( $db_error_log_array ))
							if (count ( $db_error_log_array ) > 0) {
								foreach ( $db_error_log_array as $db_error_log ) { ?>
									<tr>
                                        <td><?= $db_error_log->get_id() ?></td>
                    
                                        <td><?= $db_error_log->get_sql_error() ?></td>
                    
                                        <td><?= $db_error_log->get_sql() ?></td>
                    
                                        <td><?= $db_error_log->get_db_host() ?></td>
                    
                                        <td><?= $db_error_log->get_db_name() ?></td>
                    
                                        <td><?= $db_error_log->get_db_username() ?></td>
                    
                                        <td><?= $db_error_log->get_insert_time() ?></td>
                                        
                                        <td><button class="btn btn-default icon-remove deleteSingle" myId="<?= $db_error_log->get_id() ?>" /></td>
                                        
                                        <td><input type="checkbox" id="chk_del[<?= $db_error_log->get_id() ?>]" name="chk_del[<?= $db_error_log->get_id() ?>]" class="chk_del" /></td>
									</tr>
								<?php
                            	}
							} else { ?>
								<tr>
									<td colspan="9">Database error log is empty!</td>
                                </tr>
							<?php } ?>
						</tbody>
                    	</table>
                        </form>
					
					</div> <!-- .widget-content -->
					
				</div>
  				
  			</div> <!-- /col-md-12 -->
      	
		</div> <!-- /row -->
      
      
    </div> <!-- /container -->
    
</div> <!-- /main -->


<?php require_once(DIR_ROOT."bottom.php"); ?>


<script>
<!--
$(document).ready(function() {

	// Botao "checkAll".
	// O botao e instanciado a partir da classe, e fica relacionado com todas as checkbox que possuam como classe o seu "id".
	$(".checkAll").click( function() {
			
		var selector = ("."+($(this).attr("id")));
		var myChecked = $(this).attr("myChecked");
		myChecked = ((myChecked>0)?false:true);
			
		$(selector).prop('checked', myChecked);
			
		$(this).attr("myChecked", (myChecked?1:0));
	});

	
	// Botao "deleteAll"
	$(".deleteAll").click( function() {
		submit_form("<?= PATH_ROOT ?>/development/scripts/db_error_log/delete_submit.php", "frm_db_error_log", "finishProcess");
	});
	
	
	// Botao "deleteSingle"
	$(".deleteSingle").click( function(event) {
		// Evita que outras accoes definidas sejam executadas
		event.preventDefault();
		
		var myId = $(this).attr("myId");
		var myIdObj = {'myId': myId};
		var myIdJson = ({'chk_del': myIdObj});
		
		call_script("<?= PATH_ROOT ?>/development/scripts/db_error_log/delete_submit.php", myIdJson, "function", "finishProcess");

		//return(false);
	});

});
//-->


// Feedback ao utilizador e refresh da pagina.
function finishProcess(var_data)
{
	alert(var_data);
	
	call_script_with_loading("<?= PATH_ROOT.($masterMenu?$masterMenuObj->get_filepath_content():$masterModuleObj->get_filepath_content()) ?>", <?= (json_encode(array('module' => $masterModule, 'menu' => $masterMenu))) ?>, "tag", "#main_load_menu_content");
}
</script>