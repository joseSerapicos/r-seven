<?php
// User permission
$masterPermission = $masterMainObj->get_permission();

// User Permissions Master
$usersPermissionsMasterObj = new users_stores_menus_permissions_master();

// Users
$usersMasterObj = new users_master();
$users = $usersMasterObj->getAllUsers($masterSystemDb, $masterUserObj->get_is_master_admin());
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
				// Stores
				$stores = array();
				$stores = $usersPermissionsMasterObj->getUserStores($masterSystemDb, $masterUserObj->get_id(), $masterUserObj->get_is_master_admin());
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
										// Modulos
										$modules = array();
										$modules = $usersPermissionsMasterObj->getUserStoreModules($masterSystemDb, $masterUserObj->get_id(), $store->get_id(), $masterUserObj->get_is_master_admin());
										if(is_array($modules))
										foreach($modules as $module)
										{
											// Menus
                                			$menus = $usersPermissionsMasterObj->getUserStoreModuleMenus($masterSystemDb, $masterUserObj->get_id(), $store->get_id(), $module->get_id(), $masterUserObj->get_is_master_admin());
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
											<?php printMenus($masterSystemDb, $usersPermissionsMasterObj, $user->get_id(), $store->get_id(), $module->get_id(), $menus); ?>
											</li>    
										<?php } ?>
									</form>
									</ul>
                                    </div>
                                    <div class="modal-footer">
                                    <?php if($masterPermission['edit'] || $masterPermission['add']) { ?>
                                    	<button type="button" class="btn btn-primary userPermissionsSave" data-myFormSelector="#frmUser<?= $user->get_id() ?>Store<?= $store->get_id() ?>">Save</button>
                                    <?php } ?>
                         			</div>
                                    
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
function printMenus($masterSystemDb, $usersPermissionsMasterObj, $user, $store, $module, $menus)
{
	if(is_array($menus))
	{
		if(count($menus)>0)
		{ ?>
			<ul>
            <?php
			foreach($menus as $menu)
			{
				$permissions = $usersPermissionsMasterObj->getUserMenuPermission($masterSystemDb, $user, $store, $menu->get_id());
				?>
				<li>
                	<span class="file">
                    	<div class="treeviewTitle">
							<?= $menu->get_name() ?>
                        </div>
                        <div>
                        	<input type="checkbox" id="checkRead[<?= $menu->get_id() ?>]" name="checkRead[<?= $menu->get_id() ?>]" class="checkAllRead<?= $module ?> userPermissionsLegendRead" <?= ($permissions['read']?'checked="checked"':'') ?> />
                        	<input type="checkbox" id="checkEdit[<?= $menu->get_id() ?>]" name="checkEdit[<?= $menu->get_id() ?>]" class="checkAllEdit<?= $module ?> userPermissionsLegendEdit" <?= ($permissions['edit']?'checked="checked"':'') ?> />
							<input type="checkbox" id="checkAdd[<?= $menu->get_id() ?>]" name="checkAdd[<?= $menu->get_id() ?>]" class="checkAllAdd<?= $module ?> userPermissionsLegendAdd" <?= ($permissions['add']?'checked="checked"':'') ?> />
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