<style>
.optionButtonEdit {
	float:right;
	margin-right:6px;
	position:relative;
	top:-6px;
}
</style>


<?php
// Include das classes
require_once(DIR_ROOT."/development/modules_info/classes/module_menu_info.class.php");
require_once(DIR_ROOT."/development/modules_info/classes/module_info.class.php");
require_once(DIR_ROOT."/development/modules_info/classes/modules_info.master.class.php");

// Instanciar objecto
$modulesInfoMasterObj = new modules_info_master();
$modules_info = $modulesInfoMasterObj->getAllModules($masterMainDb);
?>


<div class="panel-group accordion">
<?php if(is_array($modules_info))
foreach($modules_info as $module_info) { ?>

    <div class="panel panel-default">
        <div class="panel-heading">
            <h4 class="panel-title">
                <a class="accordion-toggle <?= $module_info->get_icon($masterMainDb) ?>" data-toggle="collapse" data-parent=".accordion" href="#collapse<?= $module_info->get_id() ?>">&nbsp;(<?= $module_info->get_id() ?>) <?= $module_info->get_name($masterMainDb) ?><button class="btn btn-default icon-pencil optionButtonEdit editSingleHeader" data-myId="<?= $module_info->get_id() ?>" data-toggle="modal" data-backdrop="static" data-target="#addActionSelector"></button><div class="clear"></div></a>
            </h4>
        </div>
        <div id="collapse<?= $module_info->get_id() ?>" class="panel-collapse collapse">
            <div class="panel-body">

							<div class="bs-example">
								<ul id="myTab<?= $module_info->get_id() ?>" class="nav nav-tabs">
									<li class="active"><a href="#modules_menusmyTab<?= $module_info->get_id() ?>" data-toggle="tab">Menus</a></li>
									<li class=""><a href="#modules_settingsmyTab<?= $module_info->get_id() ?>" data-toggle="tab">Settings</a></li>
								</ul>
								<div class="tab-content">
									<div class="tab-pane fade active in" id="modules_menusmyTab<?= $module_info->get_id() ?>">
										
										<div class="table-responsive">
										<table class="table table-bordered table-hover table-striped">
										<thead>
                                        	<tr>
                                                <th colspan="7" class="alignRight">
                                                	<button class="btn btn-default icon-plus optionButton multiAddHeader" data-toggle="modal" data-backdrop="static" id="" name="" data-target="#addActionSelector" data-myScriptGetForm="<?= (PATH_ROOT."development/modules_info/layout/get_form_menus.php") ?>" data-myScriptPostForm="<?= (PATH_ROOT."development/modules_info/scripts/save_form_menus.php") ?>" data-myId="module:<?= $module_info->get_id() ?>"></button>
                                                </th>
                                            </tr>
											<tr>
                                                <th>Id</th>
                                                <th>Name</th>
												<th>Description</th>
                                                <th>Filepath Top</th>
                                                <th>Filepath Content</th>
                                                <th>Filepath Bottom</th>
                    	                        <th>Options</th>
                                            </tr>
										</thead>
										<tbody>
										
                                        <?php
                                        // Obter menus
										$module_menus_info = $modulesInfoMasterObj->getModuleMenus($masterMainDb, $module_info->get_id());
										if( (is_array($module_menus_info)) && (count($module_menus_info)>0) ) {
										foreach($module_menus_info as $module_menu_info) { ?>
                                        
                                            <tr>
                                                <td><?= $module_menu_info->get_id() ?></td>
                                                <td><?= $module_menu_info->get_name() ?></td>
                                                <td><?= $module_menu_info->get_description() ?></td>
                                                <td><?= $module_menu_info->get_filepath_top() ?></td>
                                                <td><?= $module_menu_info->get_filepath_content() ?></td>
                                                <td><?= $module_menu_info->get_filepath_bottom() ?></td>
                                                <td class="alignRight"><button class="btn btn-default icon-pencil optionButton editSingleHeader" data-toggle="modal" data-backdrop="static" id="" name="" data-target="#addActionSelector" data-myScriptGetForm="<?= (PATH_ROOT."development/modules_info/layout/get_form_menus.php") ?>" data-myScriptPostForm="<?= (PATH_ROOT."development/modules_info/scripts/save_form_menus.php") ?>" data-myId="id:<?= $module_menu_info->get_id() ?>"></button></td>
                                            </tr>
                                        
                                        <?php } }
										else { ?>
                                        	<tr>
                                                <td colspan="7">No menus in this module!</td>
                                            </tr>
                                        <?php } ?>
                                        
										</tbody>
										</table>
										</div> <!-- /.table-responsive -->
									
									</div>
                                    
									<div class="tab-pane fade" id="modules_settingsmyTab<?= $module_info->get_id() ?>">
										<strong>Profile</strong>
										<p>Food truck fixie locavore, accusamus mcsweeney's marfa
											nulla single-origin coffee squid. Exercitation +1 labore
											velit, blog sartorial PBR leggings next level wes anderson
											artisan four loko farm-to-table craft beer twee. Qui photo
											booth letterpress, commodo enim craft beer mlkshk aliquip
											jean shorts ullamco ad vinyl cillum PBR. Homo nostrud
											organic, assumenda labore aesthetic magna delectus mollit.
											Keytar helvetica VHS salvia yr, vero magna velit sapiente
											labore stumptown. Vegan fanny pack odio cillum wes anderson
											8-bit, sustainable jean shorts beard ut DIY ethical culpa
											terry richardson biodiesel. Art party scenester stumptown,
											tumblr butcher vero sint qui sapiente accusamus tattooed echo
											park.</p>
									</div>
								</div>
							</div>
            
            </div>
        </div>
    </div>

<?php } ?>
</div>