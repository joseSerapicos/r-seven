<?php
// Include das classes
require_once(DIR_ROOT."/administration/users/classes/user.class.php");
require_once(DIR_ROOT."/administration/users/classes/users.master.class.php");
require_once(DIR_ROOT."/administration/stores/classes/store.class.php");
require_once(DIR_ROOT."/administration/stores/classes/stores.master.class.php");
require_once(DIR_ROOT."/administration/modules_menus/classes/module_menu.class.php");
require_once(DIR_ROOT."/administration/modules_menus/classes/module.class.php");
require_once(DIR_ROOT."/administration/modules_menus/classes/modules_menus.master.class.php");

// Users
$usersMasterObj = new users_master();
$users = $usersMasterObj->getAllUsers($masterSystemDb);

// Stores
$storesMasterObj = new stores_master();
$stores = $storesMasterObj->getAllStores($masterSystemDb);

// Modulos
$modules_menusMasterObj = new modules_menus_master();
$modules = $modules_menusMasterObj->getAllModules($masterSystemDb);
?>


<div class="panel-group accordion">
<?php if(is_array($users))
foreach($users as $user) { ?>

    <div class="panel panel-default">
        <div class="panel-heading">
            <h4 class="panel-title">
                <a class="accordion-toggle" data-toggle="collapse" data-parent=".accordion" href="#collapse<?= $user->get_id() ?>">&nbsp;(<?= $user->get_id() ?>) <?= $user->get_name() ?></a>
            </h4>
        </div>
        <div id="collapse<?= $user->get_id() ?>" class="panel-collapse collapse">
            <div class="panel-body">
            
                <div>
                	<span class="userPermissionsLegendTitle">Legend:</span>
                    Read&nbsp;<input type="checkbox" class="userPermissionsLegendRead" />
                    Edit&nbsp;<input type="checkbox" class="userPermissionsLegendEdit" />
                    Add&nbsp;<input type="checkbox" class="userPermissionsLegendAdd" />
                </div>
                <div class="clear"></div>
                <br />
                
                
            	<?php
				// Obter stores
				if( (is_array($stores)) && (count($stores)>0) ) { ?>
                
                <div class="bs-example">
					<ul id="myTab<?= $user->get_id() ?>" class="nav nav-tabs">
                	<?php
					$first = true;
					foreach($stores as $store) { ?>
						<li <?= ($first?'class="active"':'') ?>><a href="#storesTabUser<?= $user->get_id() ?>Store<?= $store->get_id() ?>" data-toggle="tab"><?= ("(".$store->get_id().") ".$store->get_name()) ?></a></li>
					<?php $first = false; } ?>
                    </ul>
                    
					<div class="tab-content">
						<?php
						$first = true;
						foreach($stores as $store) { ?>
                            <div class="tab-pane fade<?= ($first?' active in':'') ?>" id="storesTabUser<?= $user->get_id() ?>Store<?= $store->get_id() ?>">

									<div class="treeviewDiv">
									<ul class="treeview filetree">
									<form id="frmUser<?= $user->get_id() ?>Store<?= $store->get_id() ?>">
                                    	<input type="hidden" id="user" name="user" value="<?= $user->get_id() ?>" />
                                    	<input type="hidden" id="store" name="store" value="<?= $store->get_id() ?>" />
										<?php
										if(is_array($modules))
										foreach($modules as $module)
										{
											// Menus
                                			$menus = $modules_menusMasterObj->getModuleMenus($masterSystemDb, $module->get_id());
											?>
                                            
											<li>
												<span class="folder">
													<div class="treeviewTitle">
														<?= $module->get_name() ?>
													</div>
													<div>
                                                    	<input type="checkbox" class="multiCheckAllHeader userPermissionsLegendRead" data-myActionSelector=".checkAllRead<?= $module->get_id() ?>" data-myChecked="0" />
                                                        <input type="checkbox" class="multiCheckAllHeader userPermissionsLegendEdit" data-myActionSelector=".checkAllEdit<?= $module->get_id() ?>" data-myChecked="0" />
														<input type="checkbox" class="multiCheckAllHeader userPermissionsLegendAdd" data-myActionSelector=".checkAllAdd<?= $module->get_id() ?>" data-myChecked="0" />
													</div>
													<div class="clear"></div>
												</span>
											<?php printMenus($menus, $module->get_id()); ?>
											</li>    
										<?php } ?>
									</form>
									</ul>
                                    </div>
                                    <div class="modal-footer"><button type="button" class="btn btn-primary userPermissionsSave" data-myFormSelector="#frmUser<?= $user->get_id() ?>Store<?= $store->get_id() ?>">Save</button></div>
                                    
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




<?php
/* Functions */
// Constroi de forma recursiva o browser
function printMenus($menus, $module)
{
	if(is_array($menus))
	{
		if(count($menus)>0)
		{ ?>
			<ul>
            <?php
			foreach($menus as $menu)
			{
				?>
				<li>
                	<span class="file">
                    	<div class="treeviewTitle">
							<?= $menu->get_name() ?>
                        </div>
                        <div>
                        	<input type="checkbox" id="checkRead[<?= $menu->get_id() ?>]" name="checkRead[<?= $menu->get_id() ?>]" class="checkAllRead<?= $module ?> userPermissionsLegendRead" />
                        	<input type="checkbox" id="checkEdit[<?= $menu->get_id() ?>]" name="checkEdit[<?= $menu->get_id() ?>]" class="checkAllEdit<?= $module ?> userPermissionsLegendEdit" />
							<input type="checkbox" id="checkAdd[<?= $menu->get_id() ?>]" name="checkAdd[<?= $menu->get_id() ?>]" class="checkAllAdd<?= $module ?> userPermissionsLegendAdd" />
                        </div>
                        <div class="clear"></div>
                    </span>
                </li>
			<?php } ?>
            </ul>
        <?php } ?>
    <?php }
}
/* /Functions */
?>




<script>
<!--
$(document).ready(function() {

	// Instanciar a treeview
	$(".treeview").treeview({
		collapsed: true
	});
	
	
	// Faz submit do form associado.
	$(".userPermissionsSave").click( function() {
		var myFormSelector = $(this).attr('data-myFormSelector');
		submitForm("<?= PATH_ROOT ?>administration/users_permissions/scripts/save_form.php", myFormSelector, "processReturnForm");
	});
});
//-->	
</script>