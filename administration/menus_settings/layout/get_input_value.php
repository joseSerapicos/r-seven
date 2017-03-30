<?php require_once (dirname(__FILE__)."/../../../top_all.php"); ?>

<?php
// Include de classes
require_once(DIR_ROOT."development/menus_settings_info/classes/menu_setting_info.class.php");
require_once(DIR_ROOT."administration/menus_settings/classes/menu_setting.class.php");


if(!empty($_POST['json_post']))
{
	$post = json_decode(str_replace("\\", "", $_POST['json_post']));
	$post = explode(";", $post->id);
	$post_menu_setting = explode(":", $post[0]);
	$post_menu_setting_info = explode(":", $post[1]);
	
	if(!empty($post_menu_setting_info[1])) {
		
		$obj = false;
		if(!empty($post_menu_setting[1])) {
			$obj = new menu_setting($post_menu_setting[1]);
			$obj->load($masterSystemDb);
		}

		$menu_setting_info = new menu_setting_info($post_menu_setting_info[1]);
		$menu_setting_info->load($masterMainDb);
		
		$var_type = $menu_setting_info->get_var_type();
		$var_options = $menu_setting_info->get_var_options();
		$var_options_array = array();
		if(!empty($var_options)) {
			$var_options_array = explode(";", $var_options);
		}
		$var_value = $menu_setting_info->get_var_default_value();
		if($obj) {
			if($obj->get_fk_mygest_menus_settings_info() == $post_menu_setting_info[1]) {
				$var_value = $obj->get_var_value();
			}
		}
		
		
		switch($var_type) {
			case 'text':	?>
							<input type="text" id="var_value" value="<?= ($var_value) ?>" name="var_value" class="form-control" />
							<?php
							break;
			case 'enum':	?>
							<select id="var_value" name="var_value" class="form-control">
								<?php
								if(is_array($var_options_array) && (count($var_options_array)>0))
								foreach($var_options_array as $var_option_array) { ?>
									<option value="<?= $var_option_array ?>" <?= (($var_value==$var_option_array)?('selected="selected"'):'') ?>><?= $var_option_array ?></option>
								<?php } ?>
							</select>
							<?php
							break;
		}
	}
}
?>