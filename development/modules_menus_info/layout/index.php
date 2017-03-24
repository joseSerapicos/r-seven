<?php
// Include das classes
require_once(DIR_ROOT."/development/modules_menus_info/classes/module_menu_info.class.php");
require_once(DIR_ROOT."/development/modules_menus_info/classes/module_info.class.php");
require_once(DIR_ROOT."/development/modules_menus_info/classes/modules_menus_info.master.class.php");

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
                <a class="accordion-toggle <?= $module_info->get_icon($masterMainDb) ?> accordionTitle" data-toggle="collapse" data-parent=".accordion" href="#collapse<?= $module_info->get_id() ?>">&nbsp;(<?= $module_info->get_id() ?>) <?= $module_info->get_name() ?></a><button class="btn btn-default icon-pencil optionButtonAccordion editSingleHeader" data-myId="<?= $module_info->get_id() ?>" data-toggle="modal" data-backdrop="static" data-target="#addActionSelector"></button><div class="clear"></div>
            </h4>
        </div>
        <div id="collapse<?= $module_info->get_id() ?>" class="panel-collapse collapse">
            <div class="panel-body">
					
                <div class="table-responsive">
                <table class="table table-bordered table-hover table-striped">
                <thead>
                    <tr>
                    	<th>Menus</th>
                        <th colspan="7" class="alignRight">
                            <button class="btn btn-default icon-plus optionButton multiAddHeader" data-toggle="modal" data-backdrop="static" id="" name="" data-target="#addActionSelector" data-myScriptGetForm="<?= (PATH_ROOT."development/modules_menus_info/layout/get_form_menus.php") ?>" data-myScriptPostForm="<?= (PATH_ROOT."development/modules_menus_info/scripts/save_form_menus.php") ?>" data-myId="module:<?= $module_info->get_id() ?>"></button>
                        </th>
                    </tr>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Filepath Top</th>
                        <th>Filepath Content</th>
                        <th>Filepath Bottom</th>
                        <th>Priority</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                
                <?php
                // Obter menus
                $module_menus_info = $modules_menusInfoMasterObj->getModuleMenus($masterMainDb, $module_info->get_id());
                if( (is_array($module_menus_info)) && (count($module_menus_info)>0) ) {
                foreach($module_menus_info as $module_menu_info) { ?>
                
                    <tr>
                        <td><?= $module_menu_info->get_id() ?></td>
                        <td><?= $module_menu_info->get_name() ?></td>
                        <td><?= $module_menu_info->get_description() ?></td>
                        <td><?= $module_menu_info->get_filepath_top() ?></td>
                        <td><?= $module_menu_info->get_filepath_content() ?></td>
                        <td><?= $module_menu_info->get_filepath_bottom() ?></td>
                        <td><?= $module_menu_info->get_priority() ?></td>
                        <td class="alignRight"><button class="btn btn-default icon-pencil optionButton editSingleHeader" data-toggle="modal" data-backdrop="static" id="" name="" data-target="#addActionSelector" data-myScriptGetForm="<?= (PATH_ROOT."development/modules_menus_info/layout/get_form_menus.php") ?>" data-myScriptPostForm="<?= (PATH_ROOT."development/modules_menus_info/scripts/save_form_menus.php") ?>" data-myId="id:<?= $module_menu_info->get_id() ?>"></button></td>
                    </tr>
                
                <?php } }
                else { ?>
                    <tr>
                        <td colspan="8">No menus in this module!</td>
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