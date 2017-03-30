<?php require_once (dirname(__FILE__)."/../../../top_all.php"); ?>

<?php
// Include de classes
require_once(DIR_ROOT."development/menus_settings_info/classes/menu_setting_info.class.php");
require_once(DIR_ROOT."development/modules_menus_info/classes/modules_menus_info.master.class.php");
require_once(DIR_ROOT."administration/menus_settings/classes/menu_setting.class.php");


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
			$obj = new menu_setting($id);
			$obj->load($masterSystemDb);
			$menu = $obj->get_fk_modules_menus();
		}
	}
}

// Info para as combobox
$menuObj = new module_menu($menu);
$menuObj->load($masterSystemDb);
$usersMasterObj = new users_master();
$users = $usersMasterObj->getAllUsers($masterSystemDb, $masterUserObj->get_is_master_admin());
$stores = $masterMainObj->get_stores();
$modules_menusInfoMasterObj = new modules_menus_info_master();
$menu_settings_info = $modules_menusInfoMasterObj->getMenuSettings($masterMainDb, $menuObj->get_fk_mygest_modules_menus_info());
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
        <label for="fk_mygest_menus_settings_info" class="col-md-4">Setting</label>
        <div class="col-md-8">
            <select id="fk_mygest_menus_settings_info" name="fk_mygest_menus_settings_info" class="form-control" data-menuSetting="<?= ($obj?$obj->get_id():0) ?>">
                <?php
				if(is_array($menu_settings_info))
				foreach($menu_settings_info as $menu_setting_info) { ?>
                <option value="<?= $menu_setting_info->get_id() ?>" <?= ($obj?(($obj->get_fk_mygest_menus_settings_info()==$menu_setting_info->get_id())?('selected="selected"'):''):'') ?> data-menuSettingInfo="<?= $menu_setting_info->get_id() ?>"><?= "(".$menu_setting_info->get_id().") ".$menu_setting_info->get_var_name() ?></option>
                <?php } ?>
            </select>
        </div>
    </div> <!-- /.form-group -->
    
    <div class="form-group ">
        <label for="var_value" class="col-md-4">Value</label>
        <div class="col-md-8 valueInputLoad">
        	...
        </div>
    </div> <!-- /.form-group -->
    
    <div class="form-group ">
        <label for="fk_stores" class="col-md-4">Store</label>
        <div class="col-md-8">
            <select id="fk_stores" name="fk_stores" class="form-control">
            	<option value=""></option>
                <?php
				if(is_array($stores))
				foreach($stores as $store) { ?>
                <option value="<?= $store->get_id() ?>" <?= ($obj?(($obj->get_fk_stores()==$store->get_id())?('selected="selected"'):''):'') ?>><?= "(".$store->get_id().") ".$store->get_name() ?></option>
                <?php } ?>
            </select>
        </div>
    </div> <!-- /.form-group -->
    
    <div class="form-group ">
        <label for="fk_users" class="col-md-4">User</label>
        <div class="col-md-8">
            <select id="fk_users" name="fk_users" class="form-control">
            	<option value=""></option>
                <?php
				if(is_array($users))
				foreach($users as $user) { ?>
                <option value="<?= $user->get_id() ?>" <?= ($obj?(($obj->get_fk_users()==$user->get_id())?('selected="selected"'):''):'') ?>><?= "(".$user->get_id().") ".$user->get_name() ?></option>
                <?php } ?>
            </select>
        </div>
    </div> <!-- /.form-group -->
     
    <input type="hidden" id="fk_modules_menus" name="fk_modules_menus" value="<?= ($obj?$obj->get_fk_modules_menus():$menu) ?>" />

</form>


<!-- Javascript -->
<script>
	jQuery(document).ready(function() {
		$("#fk_mygest_menus_settings_info").change(function() {
			var menu_setting = ($(this).attr("data-menuSetting"));
			var menu_setting_info = ($("#fk_mygest_menus_settings_info :selected").attr("data-menuSettingInfo"));
			
		    var myIdObj = {'id': ("menu_setting:"+menu_setting+";menu_setting_info:"+menu_setting_info)};
            
            callScript((<?= PATH_ROOT ?>+"administration/menus_settings/layout/get_input_value.php"), "selector", ".valueInputLoad", myIdObj);			
		});
		$("#fk_mygest_menus_settings_info").change();
	});
</script>
<!-- /Javascript -->