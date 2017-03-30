<div class="panel-group accordion">
<?php
// User permission
$masterPermission = $masterMainObj->get_permission();

$modules = $masterMainObj->get_modules();
if(is_array($modules))
foreach($modules as $module) { ?>

    <div class="panel panel-default">
        <div class="panel-heading">
            <h4 class="panel-title">
                <a class="accordion-toggle <?= $module->get_icon($masterMainDb) ?>" data-toggle="collapse" data-parent=".accordion" href="#collapse<?= $module->get_id() ?>">&nbsp;(<?= $module->get_id() ?>) <?= $module->get_name() ?></a>
            </h4>
        </div>
        <div id="collapse<?= $module->get_id() ?>" class="panel-collapse collapse">
            <div class="panel-body">
            
            	<?php
				// Obter menus
				$module_menus = $masterMainObj->get_moduleMenus($module->get_id());
				if( (is_array($module_menus)) && (count($module_menus)>0) ) { ?>
                
                <div class="bs-example">
					<ul id="myTab<?= $module->get_id() ?>" class="nav nav-tabs">
                	<?php
					$first = true;
					foreach($module_menus as $module_menu) { ?>
						<li <?= ($first?'class="active"':'') ?>><a href="#modules_menusmyTab<?= $module_menu->get_id() ?>" data-toggle="tab"><?= ("(".$module_menu->get_id().") ".$module_menu->get_name()) ?></a></li>
					<?php $first = false; } ?>
                    </ul>
                    
					<div class="tab-content">
						<?php
						$first = true;
						foreach($module_menus as $module_menu) { ?>
                            <div class="tab-pane fade<?= ($first?' active in':'') ?>" id="modules_menusmyTab<?= $module_menu->get_id() ?>">
                                
                                <div class="table-responsive">
                                <table class="table table-bordered table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th colspan="6" class="alignRight">
                                        	<?php if($masterPermission['add']) { ?>
                                        	<button class="btn btn-default icon-plus optionButton multiAddHeader" data-toggle="modal" data-backdrop="static" id="" name="" data-target="#addActionSelector" data-myScriptGetForm="<?= (PATH_ROOT."administration/menus_settings/layout/get_form_settings.php") ?>" data-myScriptPostForm="<?= (PATH_ROOT."administration/menus_settings/scripts/save_form_settings.php") ?>" data-myId="menu:<?= $module_menu->get_id() ?>"></button>
                                            <?php } ?>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Id</th>
                                        <th>Setting</th>
                                        <th>Value</th>
                                        <th>Store</th>
                                        <th>User</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                
                                <?php
                                // Obter settings
								$modules_menusMasterObj = new modules_menus_master();
                                $menu_settings = $modules_menusMasterObj->getMenuSettings($masterSystemDb, $module_menu->get_id());
                                if( (is_array($menu_settings)) && (count($menu_settings)>0) ) {
                                foreach($menu_settings as $menu_setting) {
									$menu_setting_info = new menu_setting_info($menu_setting->get_fk_mygest_menus_settings_info());
									$menu_setting_info->load($masterMainDb);
									$store = new store($menu_setting->get_fk_stores());
									$store->load($masterSystemDb);
									$user = new user($menu_setting->get_fk_users());
									$user->load($masterSystemDb);
									
									?>
                                
                                    <tr>
                                        <td><?= $menu_setting->get_id() ?></td>
                                        <td><?= $menu_setting_info->get_var_name() ?></td>
                                        <td><?= $menu_setting->get_var_value() ?></td>
                                        <td><?= $store->get_name() ?></td>
                                        <td><?= $user->get_name() ?></td>
                                        <td class="alignRight">
                                        	<button class="btn btn-default icon-pencil optionButton editSingleHeader" data-toggle="modal" data-backdrop="static" id="" name="" data-target="#addActionSelector" data-myScriptGetForm="<?= (PATH_ROOT."administration/menus_settings/layout/get_form_settings.php") ?>" data-myScriptPostForm="<?= (PATH_ROOT."administration/menus_settings/scripts/save_form_settings.php") ?>" data-myId="id:<?= $menu_setting->get_id() ?>"></button>
                                        
											<?php if($masterPermission['add']) { ?>
                        					<button class="btn btn-default optionButton icon-remove deleteSingleHeader" data-myId="<?= $menu_setting->get_id() ?>" data-myScriptPostForm="<?= (PATH_ROOT."administration/menus_settings/scripts/delete_form_settings.php") ?>"></button>
                            				<?php } ?>
                                        </td>
                                    </tr>
                                
                                <?php } }
                                else { ?>
                                    <tr>
                                        <td colspan="6">No settings in this menu!</td>
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


