<?php
// Include das classes
require_once(DIR_ROOT."development/menus_settings_info/classes/menu_setting_info.class.php");
require_once(DIR_ROOT."development/modules_menus_info/classes/module_info.class.php");
require_once(DIR_ROOT."development/modules_menus_info/classes/module_menu_info.class.php");
require_once(DIR_ROOT."development/modules_menus_info/classes/modules_menus_info.master.class.php");

// Instanciar objecto
$modules_menusInfoMasterObj = new modules_menus_info_master();
$modules_info = $modules_menusInfoMasterObj->getAllModules($masterMainDb);
?>


<div class="panel-group accordion">
<?php if(is_array($modules_info))
foreach($modules_info as $module_info) { ?>

    <div class="panel panel-default">
        <div class="panel-heading">
            <h4 class="panel-title">
                <a class="accordion-toggle <?= $module_info->get_icon($masterMainDb) ?>" data-toggle="collapse" data-parent=".accordion" href="#collapse<?= $module_info->get_id() ?>">&nbsp;(<?= $module_info->get_id() ?>) <?= $module_info->get_name() ?></a>
            </h4>
        </div>
        <div id="collapse<?= $module_info->get_id() ?>" class="panel-collapse collapse">
            <div class="panel-body">
            
            	<?php
				// Obter menus
				$module_menus_info = $modules_menusInfoMasterObj->getModuleMenus($masterMainDb, $module_info->get_id());
				if( (is_array($module_menus_info)) && (count($module_menus_info)>0) ) { ?>
                
                <div class="bs-example">
					<ul id="myTab<?= $module_info->get_id() ?>" class="nav nav-tabs">
                	<?php
					$first = true;
					foreach($module_menus_info as $module_menu_info) { ?>
						<li <?= ($first?'class="active"':'') ?>><a href="#modules_menusmyTab<?= $module_menu_info->get_id() ?>" data-toggle="tab"><?= ("(".$module_menu_info->get_id().") ".$module_menu_info->get_name()) ?></a></li>
					<?php $first = false; } ?>
                    </ul>
                    
					<div class="tab-content">
						<?php
						$first = true;
						foreach($module_menus_info as $module_menu_info) { ?>
                            <div class="tab-pane fade<?= ($first?' active in':'') ?>" id="modules_menusmyTab<?= $module_menu_info->get_id() ?>">
                                
                                <div class="table-responsive">
                                <table class="table table-bordered table-hover table-striped">
                                <thead>
                                    <tr>
                                    	<th>Settings</th>
                                        <th colspan="6" class="alignRight">
                                        	<button class="btn btn-default icon-plus optionButton multiAddHeader" data-toggle="modal" data-backdrop="static" id="" name="" data-target="#addActionSelector" data-myScriptGetForm="<?= (PATH_ROOT."development/menus_settings_info/layout/get_form_settings.php") ?>" data-myScriptPostForm="<?= (PATH_ROOT."development/menus_settings_info/scripts/save_form_settings.php") ?>" data-myId="menu:<?= $module_menu_info->get_id() ?>"></button>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Id</th>
                                        <th>Var name</th>
                                        <th>Var type</th>
                                        <th>Var options</th>
                                        <th>Var default value</th>
                                        <th>Description</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                
                                <?php
                                // Obter settings
                                $menu_settings_info = $modules_menusInfoMasterObj->getMenuSettings($masterMainDb, $module_menu_info->get_id());
                                if( (is_array($menu_settings_info)) && (count($menu_settings_info)>0) ) {
                                foreach($menu_settings_info as $menu_setting_info) { ?>
                                
                                    <tr>
                                        <td><?= $menu_setting_info->get_id() ?></td>
                                        <td><?= $menu_setting_info->get_var_name() ?></td>
                                        <td><?= $menu_setting_info->get_var_type() ?></td>
                                        <td><?= $menu_setting_info->get_var_options() ?></td>
                                        <td><?= $menu_setting_info->get_var_default_value() ?></td>
                                        <td><?= $menu_setting_info->get_description() ?></td>
                                        <td class="alignRight"><button class="btn btn-default icon-pencil optionButton editSingleHeader" data-toggle="modal" data-backdrop="static" id="" name="" data-target="#addActionSelector" data-myScriptGetForm="<?= (PATH_ROOT."development/menus_settings_info/layout/get_form_settings.php") ?>" data-myScriptPostForm="<?= (PATH_ROOT."development/menus_settings_info/scripts/save_form_settings.php") ?>" data-myId="id:<?= $menu_setting_info->get_id() ?>"></button></td>
                                    </tr>
                                
                                <?php } }
                                else { ?>
                                    <tr>
                                        <td colspan="7">No settings in this menu!</td>
                                    </tr>
                                <?php } ?>
                                
                                </tbody>
                                </table>
                                </div> <!-- /.table-responsive -->

                            </div>
                        <?php $first = false; } // End foreach ?>
            		</div>
            	</div>
            	<?php } // End if ?>
            </div>
        </div>
    </div>

<?php } ?>
</div>