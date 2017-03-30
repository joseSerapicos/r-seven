<?php
// User permission
$masterPermission = $masterMainObj->get_permission();

// Instanciar objecto
$modules_menusMasterObj = new modules_menus_master();
$modules = $modules_menusMasterObj->getAllModules($masterSystemDb);
?>


<div class="panel-group accordion">
<?php if(is_array($modules))
foreach($modules as $module) { ?>

    <div class="panel panel-default">
        <div class="panel-heading">
            <h4 class="panel-title">
                <a class="accordion-toggle <?= $module->get_icon($masterMainDb) ?> accordionTitle" data-toggle="collapse" data-parent=".accordion" href="#collapse<?= $module->get_id() ?>">&nbsp;(<?= $module->get_id() ?>) <?= $module->get_name() ?></a><button class="btn btn-default icon-pencil optionButtonAccordion editSingleHeader" data-myId="<?= $module->get_id() ?>" data-toggle="modal" data-backdrop="static" data-target="#addActionSelector"></button><div class="clear"></div>
            </h4>
        </div>
        <div id="collapse<?= $module->get_id() ?>" class="panel-collapse collapse">
            <div class="panel-body">
					
                <div class="table-responsive">
                <table class="table table-bordered table-hover table-striped">
                <thead>
                    <tr>
                    	<th>Menus</th>
                        <th colspan="7" class="alignRight">
                        	<?php if($masterPermission['add']) { ?>
                            <button class="btn btn-default icon-plus optionButton multiAddHeader" data-toggle="modal" data-backdrop="static" id="" name="" data-target="#addActionSelector" data-myScriptGetForm="<?= (PATH_ROOT."administration/modules_menus/layout/get_form_menus.php") ?>" data-myScriptPostForm="<?= (PATH_ROOT."administration/modules_menus/scripts/save_form_menus.php") ?>" data-myId="module:<?= $module->get_id() ?>"></button>
                            <?php } ?>
                        </th>
                    </tr>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                
                <?php
                // Obter menus
                $module_menus = $modules_menusMasterObj->getModuleMenus($masterSystemDb, $module->get_id());
                if( (is_array($module_menus)) && (count($module_menus)>0) ) {
                foreach($module_menus as $module_menu) { ?>
                
                    <tr>
                        <td><?= $module_menu->get_id() ?></td>
                        <td><?= $module_menu->get_name() ?></td>
                        <td><?= $module_menu->get_description($masterMainDb) ?></td>
                        <td><?= $module_menu->get_priority() ?></td>
                        <td class="alignRight">
                        	<button class="btn btn-default icon-pencil optionButton editSingleHeader" data-toggle="modal" data-backdrop="static" id="" name="" data-target="#addActionSelector" data-myScriptGetForm="<?= (PATH_ROOT."administration/modules_menus/layout/get_form_menus.php") ?>" data-myScriptPostForm="<?= (PATH_ROOT."administration/modules_menus/scripts/save_form_menus.php") ?>" data-myId="id:<?= $module_menu->get_id() ?>"></button>
                            <?php if($masterPermission['add']) { ?>
                        	<button class="btn btn-default optionButton icon-remove deleteSingleHeader" data-myId="<?= $module_menu->get_id() ?>" data-myScriptPostForm="<?= (PATH_ROOT."administration/modules_menus/scripts/delete_form_menus.php") ?>"></button>
                            <?php } ?>
                        </td>
                    </tr>
                
                <?php } }
                else { ?>
                    <tr>
                        <td colspan="5">No menus in this module!</td>
                    </tr>
                <?php } ?>
                
                </tbody>
                </table>
                </div> <!-- /.table-responsive -->

            </div>
        </div>
    </div>

<?php } ?>
</div>