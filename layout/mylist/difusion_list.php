<?php
require_once (dirname ( __FILE__ ) . "/../general/top.php"); // Carregamento do top

// Includes : Ficheiros necessarios
//include_once (DIR_ROOT . "classes/development/development_framework.class.php");
//include_once (DIR_ROOT . "classes/development/development_framework_array.class.php");

/*MyClick*/
include_once (DIR_ROOT . "classes/mylist/mylist.master.class.php");

/*Configuraçoes Cliente*/
$mylist = new mylist();
$mylist->load_list($db_system); //abrir objecto

$mylist_difusion_list = $mylist->get_mylist_difusion_list();
//echo "<pre>";print_r($mylist_difusion_list);echo "</pre>";

?>


<div class="main">
    <div class="container">
    	<div class="row">
			<div class="col-md-12">
            
            	<div class="widget stacked">
					<div class="widget-header">
						<i class="<?= ($obj_module?$obj_module->get_icon($db_main):'') ?>"></i>
						<h3><?= ($obj_module?$obj_module->get_name():'') ?><?= ($obj_menu?(' : '.$obj_menu->get_name()):'') ?></h3>
                         <div class="options_menu"><button class="btn btn-default icon-plus Add" /></div>
					</div>

					<div class="widget-content">
                        <table width="100%" border="1" class="table table-bordered table-hover table-striped">
                          <tr>
                            <th width="47%">Email</th>
                            <th width="22%">Reference_1</th>
                            <th width="22%">Reference_2</th>
                            <th width="9%">&nbsp;</th>
                          </tr>
                          <?php foreach($mylist_difusion_list as $difusion_list){ ?>
                          <tr>
                            <td><?=$difusion_list->get_email();?></td>
                            <td><?=$difusion_list->get_reference_1();?></td>
                            <td><?=$difusion_list->get_reference_2();?></td>
                            <td><!-- /btn-group -->
                             <button class="btn btn-default icon-edit Edit" />
                            <button class="btn btn-default icon-remove Remove" />
                             </td>
                          </tr>
                          <?php }  ?>
                        </table>
                        <h2>&nbsp;</h2>
                    </div>
                </div>
                    
</div></div></div></div>



<?php require_once (DIR_ROOT."layout/general/bottom.php"); ?>