<?php require_once (dirname(__FILE__)."/../../../top_all.php"); ?>

<?php
// Include de classes
require_once(DIR_ROOT."development/menus_settings_info/classes/menu_setting_info.class.php");


// Obter post enviado por jquery
$post = array();
// Objecto no caso de edit
$obj = false;
// Modulo
$menu = false;

if(!empty($_POST['json_post']))
{
	$post = json_decode(str_replace("\\", "", $_POST['json_post']));
	$id = false;
	
	
	// Percorrer object
	if(is_object($post))
	{
		$post = explode(":", $post->id);
		if($post[0] == "menu") $menu = $post[1]; // Adicionar (id do menu)
		elseif($post[0] == "id") $id = $post[1]; // Editar (id do objecto)
		
		if($id) {
			$obj = new menu_setting_info($id);
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
        <label class="col-md-4">Var name</label>
        <div class="col-md-8">
            <input type="text" id="var_name" value="<?= ($obj?$obj->get_var_name():'') ?>" name="var_name" class="form-control" />
        </div>
    </div> <!-- /.form-group -->
    
    <div class="form-group ">
        <label for="var_type" class="col-md-4">Var type</label>
        <div class="col-md-8">
            <select id="var_type" name="var_type" class="form-control">
            	<option value=""></option>
                <option value="enum" <?= ($obj?(($obj->get_var_type()=='enum')?('selected="selected"'):''):'') ?>>enum</option>
                <option value="text" <?= ($obj?(($obj->get_var_type()=='text')?('selected="selected"'):''):'') ?>>text</option>
            </select>
        </div>
    </div> <!-- /.form-group -->
    
    <div class="form-group">
        <label class="col-md-4">Var options</label>
        <div class="col-md-8">
            <input type="text" id="var_options" value="<?= ($obj?$obj->get_var_options():'') ?>" name="var_options" class="form-control" />
        </div>
    </div> <!-- /.form-group -->
    
    <div class="form-group">
        <label class="col-md-4">Var default value</label>
        <div class="col-md-8">
            <input type="text" id="var_default_value" value="<?= ($obj?$obj->get_var_default_value():'') ?>" name="var_default_value" class="form-control" />
        </div>
    </div> <!-- /.form-group -->
    
    <div class="form-group">
        <label class="col-md-4">Description</label>
        <div class="col-md-8">
            <textarea id="description" name="description" class="form-control" rows="6"><?= ($obj?$obj->get_description():'') ?></textarea>
        </div>
    </div> <!-- /.form-group -->
    
    <input type="hidden" id="fk_modules_menus_info" name="fk_modules_menus_info" value="<?= ($obj?$obj->get_fk_modules_menus_info():$menu) ?>" />

</form>