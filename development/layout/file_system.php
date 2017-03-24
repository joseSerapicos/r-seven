<?php
require_once (dirname ( __FILE__ ) . "/../general/top.php"); // Carregamento do top

// Includes : Ficheiros necessarios
include_once (DIR_ROOT . "classes/development/development_file_system.class.php");
include_once (DIR_ROOT . "classes/development/development_file_system_array.class.php");
?>

<link rel="stylesheet" href="<?= PATH_ROOT ?>lib/jquery.treeview/jquery.treeview.css" />

<style type="text/css">
div.browser_local {
	background-color: #FFFFFF;
	padding: 12px;
	float: left;
	width: 24%;
	overflow:auto;
}

div.browser_children {
	cursor:pointer;
	padding-left:4px;
	vertical-align:text-top;
}

div.load_content_local {
	background-color: #FFFFFF;
	padding: 12px;
	position:relative;
	left: 12px;
	overflow:auto;
}
</style>


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
				<li><span class="<?= $obj_file_system->get_type() ?>"><div class="browser_children" onclick='javascript: call_script("<?= PATH_ROOT ?>php/development/file_system_post.php", <?= json_encode($obj_file_system->get_id()) ?>, "tag", "#load_content");'><?= $obj_file_system->get_name() ?></div></span>
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
$obj_file_system_array = new development_file_system_array($db_main);
$obj_file_system_array->set_load_description(false); // Nao necessita carregar as descricoes, sao carregadas no ficheiro de post
$file_system_array = $obj_file_system_array->get_development_file_system_array();
//echo("<pre>"); print_r($file_system_array);

?>


<div id="main" class="main">

<div class="ui-corner-all browser_local">				

<ul id="browser" class="filetree">


<?php
if(is_array($file_system_array))
foreach($file_system_array as $file_system)
{
	$obj_file_system = $file_system['obj'];
	?>
	<li><span class="<?= $obj_file_system->get_type() ?>"><div class="browser_children" onclick='javascript: call_script("<?= PATH_ROOT ?>php/development/file_system_post.php", <?= json_encode($obj_file_system->get_id()) ?>, "tag", "#load_content");'><?= $obj_file_system->get_name() ?></div></span>
	<?php print_file_system($file_system['children']); ?>
	</li>
<?php } ?>


</ul>



</div>

<div id="load_content" class="ui-corner-all load_content_local">
Select a folder or file...
</div>

<div class="clear"></div>

</div>


<!-- Javascript -->

<script src="<?= PATH_ROOT ?>lib/jquery.treeview/lib/jquery.js" type="text/javascript"></script>
<script src="<?= PATH_ROOT ?>lib/jquery.treeview/lib/jquery.cookie.js" type="text/javascript"></script>
<script src="<?= PATH_ROOT ?>lib/jquery.treeview/jquery.treeview.js" type="text/javascript"></script>

<script type="text/javascript">
<!--
$(document).ready(function() {

	// Instanciar a treeview
	$("#browser").treeview({
		collapsed: true
	});
	
});
//-->	
</script>

<?php require_once (DIR_ROOT."layout/general/bottom_basic.php"); ?>