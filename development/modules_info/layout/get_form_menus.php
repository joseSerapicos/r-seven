<?php require_once (dirname(__FILE__)."/../../../top_all.php"); ?>

<?php
// Include de classes
require_once(DIR_ROOT."development/modules_info/classes/module_menu_info.class.php");


// Obter post enviado por jquery
$post = array();
// Objecto no caso de edit
$obj = false;

if(!empty($_POST['json_post']))
{
	$post = json_decode(str_replace("\\", "", $_POST['json_post']));
	
	$id = false;
	$module = false;
	
	// Percorrer object
	if(is_object($post))
	{
		$post = explode(":", $post->id);
		if($post[0] == "module") $module = $post[1]; // Adicionar (id do modulo)
		elseif($post[0] == "id") $id = $post[1]; // Editar (id do objecto)
		
		if($id) {
			$obj = new module_menu_info($id);
			$obj->load($masterMainDb);
		}
	}
}
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
    
   	<div class="form-group">
        <label class="col-md-4">Filepath Top</label>
        <div class="col-md-8">
            <input type="text" id="filepath_top" value="<?= ($obj?$obj->get_filepath_top():'') ?>" name="filepath_top" class="form-control" />
        </div>
    </div> <!-- /.form-group -->
    
    <div class="form-group">
        <label class="col-md-4">Filepath Content</label>
        <div class="col-md-8">
            <input type="text" id="filepath_content" value="<?= ($obj?$obj->get_filepath_content():'') ?>" name="filepath_content" class="form-control" />
        </div>
    </div> <!-- /.form-group -->
    
    <div class="form-group">
        <label class="col-md-4">Filepath Bottom</label>
        <div class="col-md-8">
            <input type="text" id="filepath_bottom" value="<?= ($obj?$obj->get_filepath_bottom():'') ?>" name="filepath_bottom" class="form-control" />
        </div>
    </div> <!-- /.form-group -->
   	
    
    <input type="hidden" id="fk_modules_info" name="fk_modules_info" value="<?= ($obj?$obj->get_fk_modules_info():$module) ?>" />

</form>