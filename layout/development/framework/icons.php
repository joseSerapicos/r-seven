<?php
require_once (dirname ( __FILE__ ) . "/../../general/top.php"); // Carregamento do top

// Includes : Ficheiros necessarios
include_once (DIR_ROOT . "classes/development/framework/icons.class.php");
include_once (DIR_ROOT . "classes/development/framework/framework.master.class.php");

// Instanciar classe development_db_error_log_array
$obj_framework = new framework();
$icons = $obj_framework->get_icons($db_main);
?>

<!-- Icons -->


<div class="main">
    <div class="container">
    	<div class="row">
			<div class="col-md-12">
  				
  				<div class="widget stacked widget-table">
					
					<div class="widget-header">
						<i class="icon-star"></i>
						<h3>Icons</h3>
					</div> <!-- .widget-header -->
					
					<div class="widget-content">
						<table class="table table-bordered table-striped">
							
                        <thead><tr>						
                            <th>ID</th>
                            <th>Name</th>
                            <th>Icon</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Icon</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Icon</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Icon</th>
                        </tr></thead>
					
						<tbody>
                        	<?php
							$td_number = 0;
							if(is_array($icons))
							foreach ( $icons as $tmp ) {
								if($td_number==0) echo('<tr>'); ?>
                                
								<td><?= $tmp->get_id() ?></td>
								<td><?= $tmp->get_name() ?></td>
                                <td><i class="<?= $tmp->get_name() ?>"></i></td>

								<?php
								$td_number++;
								if($td_number==4)
								{
									echo('</tr>');
									$td_number=0;
								}
							}
                            
							// Acertar colunas no final
							if($td_number>0)
							{
								for($td_number;$td_number<5;$td_number++)
								{
									echo("<td>&nbsp;</td>");
								}
								echo("</tr>");
							}?>
						</tbody>
                    	</table>
					
					</div> <!-- .widget-content -->
					
				</div>
  				
  			</div> <!-- /col-md-12 -->
      	
		</div> <!-- /row -->
      
      
    </div> <!-- /container -->
    
</div> <!-- /main -->


<?php require_once (DIR_ROOT."layout/general/bottom.php"); ?>