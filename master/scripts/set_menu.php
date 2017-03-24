<?php require_once (dirname(__FILE__)."/../../top1_conf.php"); ?>
<?php require_once (DIR_ROOT."top2_session.php"); ?>

<?php
$post = json_decode(str_replace("\\", "",$_POST['json_post']));

$masterModule = (empty($post->module)?false:(is_int(intval($post->module))?$post->module:false));
$masterMenu = (empty($post->menu)?false:(is_int(intval($post->menu))?$post->menu:false));
$_SESSION ['masterModule'] = $masterModule;
$_SESSION ['masterMenu'] = $masterMenu;
echo($masterModule);
?>