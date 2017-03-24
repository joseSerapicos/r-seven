<?php require_once(dirname(__FILE__)."/../../top1_conf.php"); ?>
<?php require_once (DIR_ROOT."top2_session.php"); ?>

<?php
$post = json_decode(str_replace("\\", "",$_POST['json_post']));
$masterStore = (empty($post)?0:(is_int(intval($post))?$post:0));
$_SESSION ['masterStore'] = $masterStore;
echo($masterStore);
?>