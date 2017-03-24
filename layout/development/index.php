<?php
require_once (dirname ( __FILE__ ) . "/../general/top.php"); // Carregamento do top                                                    
// Includes : Ficheiros necessarios
include_once (DIR_ROOT . "classes/development/development_framework.class.php");
include_once (DIR_ROOT . "classes/development/development_framework_array.class.php");
// Instanciar classe development_framework_array
$obj_framework_array = new development_framework_array ( $db_main );
$framework_array = $obj_framework_array->get_development_framework_array ();
?>


<!-- Styles -->
<style type="text/css">
.btn {
	margin: 0 .25em .5em;
}

.btn-group {
	margin: 0 .25em .5em;
}

.btn-group .btn {
	margin: 0;
}

#load_menus {
	margin-top:16px;	
}
</style>
<!-- /Styles -->


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
                        <!-- Menus da framework -->			
                        <?php
                        if (is_array ( $framework_array ))
                            foreach ( $framework_array as $framework ) { ?>
                                <button type="button" class="btn btn-default" onclick='javascript: call_script("<?= PATH_ROOT.$framework->get_link() ?>", "", "tag", "#load_menus");'><?= $framework->get_name() ?></button>
                        <?php } ?>	        
                        <!-- /Menus da framework -->
                    </div>
                </div>
                    
                    
                <!-- Conteudo da framework -->
                <div id="load_menus"><h4>Select a framework menu...</h4></div>
                <!-- /Conteudo da framework -->

</div></div></div></div>



<?php require_once (DIR_ROOT."layout/general/bottom.php"); ?>