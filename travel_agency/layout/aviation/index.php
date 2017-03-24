<?php
require_once (dirname ( __FILE__ ) . "/../../../top.php"); // Carregamento do top                                                    

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
                        <h2>Code here...</h2>
                    </div>
                </div>
                    
</div></div></div></div>



<?php require_once (DIR_ROOT."/bottom.php"); ?>