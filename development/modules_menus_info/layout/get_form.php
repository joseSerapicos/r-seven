<?php require_once (dirname(__FILE__)."/../../../top_all.php"); ?>

<?php
// Include de classes
require_once(DIR_ROOT."development/modules_menus_info/classes/module_info.class.php");
include_once(DIR_ROOT."development/framework/classes/icon.class.php");
include_once(DIR_ROOT."development/framework/classes/framework.master.class.php");


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
		$obj = new module_info($post->id);
		$obj->load($masterMainDb);
	}
}


// Instanciar classe development_db_error_log_array
$obj_framework = new framework_master();
$icons = $obj_framework->getIcons($masterMainDb);
?>


<form role="form" class="form-horizontal col-md-7">

	<?php if($obj) { ?>
        <div class="form-group">
            <label class="col-md-4">Id</label>
            <div class="col-md-8">
                <?= $obj->get_id() ?>
                <input type="hidden" id="id" name="id" value="<?= $obj->get_id() ?>" />
            </div>
        </div> <!-- /.form-group -->
    <?php } ?>

	<div class="form-group ">
        <label for="fk_icons" class="col-md-4">Icon</label>
        <div class="col-md-8">
            <select id="fk_icons" name="fk_icons" class="form-control">
            	<option value=""></option>
            	<?php if(is_array($icons))
    			foreach ( $icons as $tmp ) { ?>
                	<option value="<?= $tmp->get_id() ?>" <?= ($obj?(($obj->get_fk_icons()==$tmp->get_id())?('selected="selected"'):''):'') ?>><?= $tmp->get_name() ?></option>
                <?php } ?>
            </select>
        </div>
    </div> <!-- /.form-group -->

    <div class="form-group">
        <label class="col-md-4">Name</label>
        <div class="col-md-8">
            <input type="text" id="name" value="<?= ($obj?$obj->get_name():'') ?>" name="name" class="form-control" />
        </div>
    </div> <!-- /.form-group -->
    
    <div class="form-group">
        <label class="col-md-4">Description</label>
        <div class="col-md-8">
            <textarea id="description" name="description" class="form-control" rows="6"><?= ($obj?$obj->get_description():'') ?></textarea>
        </div>
    </div> <!-- /.form-group -->
    
   	<div class="form-group ">
        <label for="has_menus" class="col-md-4">Has Menus</label>
        <div class="col-md-8">
            <select id="has_menus" name="has_menus" class="form-control">
            	<option value="0" <?= ($obj?(($obj->get_has_menus()==0)?('selected="selected"'):''):'') ?>>No</option>
                <option value="1" <?= ($obj?(($obj->get_has_menus()==1)?('selected="selected"'):''):'') ?>>Yes</option>
            </select>
        </div>
    </div> <!-- /.form-group -->
    
    <div class="form-group">
        <label class="col-md-4">Priority</label>
        <div class="col-md-8">
            <input type="text" id="priority" value="<?= ($obj?$obj->get_priority():'') ?>" name="priority" class="form-control" />
        </div>
    </div> <!-- /.form-group -->

</form>