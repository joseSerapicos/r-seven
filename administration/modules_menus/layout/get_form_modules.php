<?php require_once (dirname(__FILE__)."/../../../top_all.php"); ?>

<?php
// Include de classes
require_once(DIR_ROOT."administration/modules_menus/classes/module.class.php");
require_once(DIR_ROOT."development/modules_menus_info/classes/module_info.class.php");
require_once(DIR_ROOT."development/modules_menus_info/classes/modules_menus_info.master.class.php");


// Obter post enviado por jquery
$post = array();
// Objecto no caso de edit
$obj = false;

if(!empty($_POST['json_post']))
{
	$post = json_decode(str_replace("\\", "", $_POST['json_post']));

	// Percorrer object
	if(is_object($post))
	{
		$obj = new module($post->id);
		$obj->load($masterSystemDb);
	}
}


// Instanciar classe
$modulesMenusInfoMasterObj = new modules_menus_info_master();
$modulesInfo = $modulesMenusInfoMasterObj->getAllModules($masterMainDb);
?>


<form role="form" class="form-horizontal col-md-7">

	<?php if($obj) { ?>
        <div class="form-group">
            <label class="col-md-4">Id</label>
            <div class="col-md-8">
                <?= $obj->get_id() ?>
                <input type="hidden" id="id" name="id" value="<?= $obj->get_id() ?>" />
                <input type="hidden" id="fk_mygest_modules_info" name="fk_mygest_modules_info" value="<?= $obj->get_fk_mygest_modules_info() ?>" />
            </div>
        </div> <!-- /.form-group -->
    <?php } ?>

	<?php if(!$obj) { // Nao pode ser alterado depois de criado! Existem registos dependentes deste, como os menus. ?>
	<div class="form-group ">
        <label for="fk_mygest_modules_info" class="col-md-4">Module</label>
        <div class="col-md-8">
            <select id="fk_mygest_modules_info" name="fk_mygest_modules_info" class="form-control">
            	<option value=""></option>
            	<?php if(is_array($modulesInfo))
    			foreach ( $modulesInfo as $moduleInfo ) { ?>
                	<option value="<?= $moduleInfo->get_id() ?>" <?= ($obj?(($obj->get_fk_mygest_modules_info()==$moduleInfo->get_id())?('selected="selected"'):''):'') ?> data-myPriority="<?= $moduleInfo->get_priority() ?>" data-myName="<?= $moduleInfo->get_name() ?>"><?= $moduleInfo->get_name() ?></option>
                <?php } ?>
            </select>
        </div>
    </div> <!-- /.form-group -->
    <?php } ?>

    <div class="form-group">
        <label class="col-md-4">Name</label>
        <div class="col-md-8">
            <input type="text" id="name" value="<?= ($obj?$obj->get_name():'') ?>" name="name" class="form-control" />
        </div>
    </div> <!-- /.form-group -->
    
    <div class="form-group">
        <label class="col-md-4">Priority</label>
        <div class="col-md-8">
            <input type="text" id="priority" value="<?= ($obj?$obj->get_priority():'') ?>" name="priority" class="form-control" />
        </div>
    </div> <!-- /.form-group -->

</form>


<script>
<!--
$(document).ready(function() {
	// Carregar priority de forma automatica
	$("#fk_mygest_modules_info").change( function() {
		var priority = $(this).find(":selected").attr("data-myPriority");
		var name = $(this).find(":selected").attr("data-myName");
		$("#priority").val(priority);
		$("#name").val(name);
	});
});
//-->	
</script>