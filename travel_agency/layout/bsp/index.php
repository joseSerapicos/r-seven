<?php
require_once (dirname ( __FILE__ ) . "/../../../top.php"); // Carregamento do top                                                    

// Includes : Ficheiros necessarios
//include_once (DIR_ROOT . "classes/development/development_framework.class.php");
//include_once (DIR_ROOT . "classes/development/development_framework_array.class.php");

/*AviationBSP*/
include_once (DIR_ROOT . "travel_agency/classes/aviation_bsp.master.class.php");

/*Aviation BSP*/
$aviation_bsp = new aviation_bsp();

$aviation_bsp->head($masterSystemDb); //abrir objecto
//echo "<pre>";print_r($aviation_bsp);
$aviation_bsp_list = $aviation_bsp->get_aviation_bsp_head();
//echo "<pre>";print_r($aviation_bsp_list);
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
                                <th width="66%">Name</th>
                                <th width="10%">Date From</th>
                                <th width="10%">Date To</th>
                                <th width="14%">&nbsp;</th>
                              </tr>
                              <?php foreach($aviation_bsp_list as $aviation_bsp){ ?>
                              <tr>
                                <td><?=$aviation_bsp->get_name();?></td>
                                <td><?=$aviation_bsp->get_date_in();?></td>
                                <td><?=$aviation_bsp->get_date_out();?></td>
                                <td><div class="btn-group myclick_list">
                                  <button type="button" onClick='javascript: call_script("<?=PATH_ROOT?>layout/travel_agency/bsp/bsp_detail.php", <?= json_encode(array("module" => $module, "bsp_id" => $aviation_bsp->get_id())) ?>, "tag", "#main_load_menus");' class="btn btn-default">View Detail</button>
                                  <button type="button" class="btn btn-default dropdown-toggle"
                            data-toggle="dropdown"> <span class="caret"></span> </button>
                                  <ul class="dropdown-menu" role="menu">
                                    <li><a href="#">Gen Doc.</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">Delete</a></li>
                                  </ul>
                                  </div>
                                  <!-- /btn-group --></td>
                              </tr>
                              <?php }  ?>
                      </table>
                    </div>
                </div>
                    
</div></div></div></div>



<?php require_once (DIR_ROOT."/bottom.php"); ?>