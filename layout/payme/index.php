<?php
require_once (dirname ( __FILE__ ) . "/../general/top.php"); // Carregamento do top                                                    

// Includes : Ficheiros necessarios
//include_once (DIR_ROOT . "classes/development/development_framework.class.php");
//include_once (DIR_ROOT . "classes/development/development_framework_array.class.php");
?>


<div class="main">
    <div class="container">
    	<div class="row">
			<div class="col-md-12">
            
            	<div class="widget stacked">
					<div class="widget-header">
						<i class="<?= ($obj_module?$obj_module->get_icon($db_main):'') ?>"></i>
						<h3><?= ($obj_module?$obj_module->get_name():'') ?><?= ($obj_menu?(' : '.$obj_menu->get_name()):'') ?></h3>
					</div>

					<div class="widget-content">
                       <table width="100%" border="1" class="table table-bordered table-hover table-striped">
										  <tr>
										    <th width="52%">Client</th>
										    <th width="22%">Payment Method</th>
										    <th width="11%">Status</th>
										    <th width="15%">Action</th>
									      </tr>
										  <?php //foreach($myclick_client_list as $client_list){ ?>
										  <tr>
										    <td>id - nome</td>
										    <td>xpto</td>
										    <td>
                                              <button class="btn btn-default icon-remove-sign" status="removed" myId="" />
                                              <button class="btn btn-success icon-ok-sign" status="paid" myId="" />
                                              <button class="btn btn-warning icon-minus-sign" status="deleted" myId="" />
										      <!-- /btn-group --></td>
                                               <td> <button class="btn btn-default icon-edit" title="Edit" />
                                              <button class="btn btn-default icon-envelope sendEmail"  myId="" />
                                              <button class="btn btn-default icon-remove deleteSingle"  myId="" /></td>
									      </tr>
										  <?php //}  ?>
								  </table>
                    </div>
                </div>
                    
</div></div></div></div>



<?php require_once (DIR_ROOT."layout/general/bottom.php"); ?>