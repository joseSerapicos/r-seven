<?php
// Includes : Ficheiros necessarios
include_once(DIR_ROOT."development/file_system/classes/development_file_system.class.php");
include_once(DIR_ROOT."development/file_system/classes/development_file_system.master.class.php");
?>


<?php
/* Functions */
// Constroi de forma recursiva o browser
function print_file_system($var_file_system_array)
{
	if(is_array($var_file_system_array))
	{
		if(count($var_file_system_array)>0)
		{ ?>
			<ul>
            <?php
			foreach($var_file_system_array as $file_system)
			{
				$obj_file_system = $file_system['obj'];
				?>
				<li>
                	<span class="<?= $obj_file_system->get_type() ?>">
                    	<div class="browser_children" onclick='javascript: callScript("<?= PATH_ROOT ?>development/file_system/scripts/get_description.php", "selector", "#load_content", <?= json_encode($obj_file_system->get_id()) ?>);' style="float:left; margin-right:16px;">
							<?= $obj_file_system->get_name() ?>
                        </div>
                        <div style="float:right">
                        	<button style="margin-right:8px;" class="btn btn-default icon-pencil editSingleHeader" data-myId="<?= $obj_file_system->get_id() ?>" data-toggle="modal" data-backdrop="static" data-target="#addActionSelector"></button>
                    		<button style="margin-right:8px;" class="btn btn-default icon-remove deleteSingleHeader" data-myId="<?= $obj_file_system->get_id() ?>"></button>
               				<input type="checkbox" id="chk[<?= $obj_file_system->get_id() ?>]" name="chk[<?= $obj_file_system->get_id() ?>]" class="checkAllActionSelector" />
                        </div>
                        <div class="clear"></div>
                    </span>
                <?php print_file_system($file_system['children']); ?>
                </li>
			<?php } ?>
            </ul>
        <?php } ?>
    <?php }
}
/* /Functions */
?>


<?php
// Instanciar classe development_framework_array
$obj_file_system_array = new development_file_system_master();
$file_system_array = $obj_file_system_array->getAll($masterMainDb);
//echo("<pre>"); print_r($file_system_array);
?>


<div class="browser_local">

    <ul id="browser" class="filetree">
    <form id="deleteAllActionSelector" name="deleteAllActionSelector">
        <?php
        if(is_array($file_system_array))
        foreach($file_system_array as $file_system)
        {
            $obj_file_system = $file_system['obj'];
            ?>
            <li>
                <span class="<?= $obj_file_system->get_type() ?>">
                    <div class="browser_children" onclick='javascript: callScript("<?= PATH_ROOT ?>development/file_system/scripts/get_description.php", "selector", "#load_content", <?= json_encode($obj_file_system->get_id()) ?>);' style="float:left; margin-right:16px;">
                        <?= $obj_file_system->get_name() ?>
                    </div>
                    <div style="float:right">
                        <button style="margin-right:8px;" class="btn btn-default icon-pencil editSingleHeader" data-myId="<?= $obj_file_system->get_id() ?>" data-toggle="modal" data-backdrop="static" data-target="#addActionSelector"></button>
                        <button style="margin-right:8px;" class="btn btn-default icon-remove deleteSingleHeader" data-myId="<?= $obj_file_system->get_id() ?>"></button>
                        <input type="checkbox" id="chk[<?= $obj_file_system->get_id() ?>]" name="chk[<?= $obj_file_system->get_id() ?>]" class="checkAllActionSelector" />
                    </div>
                    <div class="clear"></div>
                </span>
            <?php print_file_system($file_system['children']); ?>
            </li>
        <?php } ?>
    </form>
    </ul>

</div>

<div id="load_content" class="load_content_local">
    Select a folder or file...
</div>

<div class="clear"></div>


<script>
<!--
$(document).ready(function() {

	// Instanciar a treeview
	$("#browser").treeview({
		collapsed: true
	});
});
//-->	
</script>