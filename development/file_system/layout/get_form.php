<?php require_once (dirname(__FILE__)."/../../../top_all.php"); ?>

<?php
include_once(DIR_ROOT."development/file_system/classes/file_system.class.php");
include_once(DIR_ROOT."development/file_system/classes/file_system.master.class.php");


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
		$obj = new file_system($post->id);
		$obj->load($masterMainDb);
	}
}

$obj_file_system_array = new file_system_master();
$file_system_array = $obj_file_system_array->getAllFolder($masterMainDb);
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
        <label for="type" class="col-md-4">Type</label>
        <div class="col-md-8">
            <select id="type" name="type" class="form-control">
                <option value="file" <?= ($obj?(($obj->get_type()=='file')?('selected="selected"'):''):'') ?>>File</option>
                <option value="folder" <?= ($obj?(($obj->get_type()=='folder')?('selected="selected"'):''):'') ?>>Folder</option>
            </select>
        </div>
      </div> <!-- /.form-group -->

    <div class="form-group ">
        <label for="fk_file_system" class="col-md-4">Parent</label>
        <div class="col-md-8">
            <select id="fk_file_system" name="fk_file_system" class="form-control">
                <option value="0"></option>
                <?php if(is_array($file_system_array))
				foreach($file_system_array as $file_system) { ?>
                    <option value="<?= $file_system->get_id() ?>" <?= ($obj?(($obj->get_fk_file_system()==$file_system->get_id())?('selected="selected"'):''):'') ?>><?= $file_system->get_name() ?></option>
                <?php } ?>
            </select>
        </div>
      </div> <!-- /.form-group -->
</form>