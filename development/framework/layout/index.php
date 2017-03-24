<?php                                                  
// Includes: Ficheiros necessarios
require_once(DIR_ROOT."development/framework/classes/framework_menu.class.php");
require_once(DIR_ROOT."development/framework/classes/framework.master.class.php");
// Instanciar classe
$obj_framework = new framework_master();
$framework_menus = $obj_framework->getMenus($masterMainDb);
?>


<!-- Styles -->
<style type="text/css">
#menus .btn {
	margin: 0 .25em .5em;
}

#menus .btn-group {
	margin: 0 .25em .5em;
}

#menus .btn-group .btn {
	margin: 0;
}
</style>
<!-- /Styles -->


<?php
/* Header buttons */
$headerButtons = array();
// conf
$headerButtons['conf'] = array();
$headerButtons['conf']['type'] = "large"; // ["small", "large", "smallTable", "largeTable"]
$headerButtons['conf']['addScripts'] = false; // Adiciona os scripts para os botoes
// add
$headerButtons['add'] = array();
$headerButtons['add']['enabled'] = false;
// deleteAll
$headerButtons['deleteAll'] = array();
$headerButtons['deleteAll']['enabled'] = false;
// checkAll
$headerButtons['checkAll'] = array();
$headerButtons['checkAll']['enabled'] = false;
/* /Header buttons */
require_once(DIR_ROOT."header.php"); ?>

    <!-- Menus da framework -->
    <div id="menus">
		<?php
        if (is_array ( $framework_menus ))
            foreach ( $framework_menus as $framework_menu ) { ?>
                <button type="button" class="btn btn-default" onclick='javascript: callScript("<?= PATH_ROOT.$framework_menu->get_link() ?>", "selector", "#load_menus", false);'><?= $framework_menu->get_name() ?></button>
        <?php } ?>
    </div>	        
    <!-- /Menus da framework -->
                        
<?php require_once(DIR_ROOT."footer.php"); ?>
                    

<!-- Conteudo da framework -->
<div class="main">
    <div class="container">
    	<div class="row">
			<div class="col-md-12">
    			<div id="load_menus"><h4>Select a framework menu...</h4></div>
            </div>
        </div>
    </div>
</div>
<!-- /Conteudo da framework -->