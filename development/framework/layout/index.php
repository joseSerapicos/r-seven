<?php                                                  
// Includes: Ficheiros necessarios
require_once(DIR_ROOT."development/framework/classes/development_framework.class.php");
require_once(DIR_ROOT."development/framework/classes/development_framework_array.class.php");
// Instanciar classe development_framework_array
$obj_framework_array = new development_framework_array($masterMainDb);
$framework_array = $obj_framework_array->get_development_framework_array();
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
        if (is_array ( $framework_array ))
            foreach ( $framework_array as $framework ) { ?>
                <button type="button" class="btn btn-default" onclick='javascript: callScript("<?= PATH_ROOT.$framework->get_link() ?>", "selector", "#load_menus", false);'><?= $framework->get_name() ?></button>
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