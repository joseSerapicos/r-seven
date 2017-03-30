<?php require_once (dirname(__FILE__)."/../../../top_all.php"); ?>

<?php
// Include de classes
require_once(DIR_ROOT."development/modules_menus_info/classes/module_menu_info.class.php");
require_once(DIR_ROOT."development/modules_menus_info/classes/modules_menus_info.master.class.php");


// Obter post enviado por jquery
$post = array();
// Objecto no caso de edit
$obj = false;
// Vars
$id = false;
$module = false;

if(!empty($_POST['json_post']))
{
	$post = json_decode(str_replace("\\", "", $_POST['json_post']));
	
	// Percorrer object
	if(is_object($post))
	{
		$post = explode(":", $post->id);
		if($post[0] == "module") $module = $post[1]; // Adicionar (id do modulo)
		elseif($post[0] == "id") $id = $post[1]; // Editar (id do objecto)
		
		if($id) {
			$obj = new module_menu($id);
			$obj->load($masterSystemDb);
			//$module = $obj->get_fk_modules(); // Nao pode ser alterado depois de criado! Existem registos dependentes deste, como as permissoes e as settings dos users.
		}
	}
}


// Instanciar classe
if($module) {
	$moduleObj = new module($module);
	$moduleObj->load($masterSystemDb);
	$modulesMenusInfoMasterObj = new modules_menus_info_master();
	$modulesMenusInfo = $modulesMenusInfoMasterObj->getModuleMenus($masterMainDb, $moduleObj->get_fk_mygest_modules_info());
} ?>


<form role="form" class="form-horizontal col-md-7">

	<?php if($obj) { ?>
        <div class="form-group">
            <label class="col-md-4">Id</label>
            <div class="col-md-8">
                <?= $obj->get_id() ?>
                <input type="hidden" id="id" name="id" value="<?= $obj->get_id() ?>" />
                <input type="hidden" id="fk_mygest_modules_menus_info" name="fk_mygest_modules_menus_info" value="<?= $obj->get_fk_mygest_modules_menus_info() ?>" />
                <input type="hidden" id="fk_modules" name="fk_modules" value="<?= $obj->get_fk_modules() ?>" />
            </div>
        </div> <!-- /.form-group -->
    <?php } ?>

	<?php if($module) { ?>
	<div class="form-group ">
        <label for="fk_mygest_modules_menus_info" class="col-md-4">Menu</label>
        <div class="col-md-8">
            <select id="fk_mygest_modules_menus_info" name="fk_mygest_modules_menus_info" class="form-control">
            	<option value=""></option>
            	<?php if(is_array($modulesMenusInfo))
    			foreach ( $modulesMenusInfo as $moduleMenuInfo ) { ?>
                	<option value="<?= $moduleMenuInfo->get_id() ?>" <?= ($obj?(($obj->get_fk_mygest_modules_menus_info()==$moduleMenuInfo->get_id())?('selected="selected"'):''):'') ?> data-myPriority="<?= $moduleMenuInfo->get_priority() ?>" data-myName="<?= $moduleMenuInfo->get_name() ?>"><?= $moduleMenuInfo->get_name() ?></option>
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
    
    <?php if($module) { ?>
    	<input type="hidden" id="fk_modules" name="fk_modules" value="<?= $module ?>" />
    <?php } ?>

</form>


<?php if($module) { ?>
	<script>
    <!--
    $(document).ready(function() {
        // Carregar priority de forma automatica
        $("#fk_mygest_modules_menus_info").change( function() {
            var priority = $(this).find(":selected").attr("data-myPriority");
            var name = $(this).find(":selected").attr("data-myName");
            $("#priority").val(priority);
            $("#name").val(name);
        });
    });
    //-->	
    </script>
<?php } ?>