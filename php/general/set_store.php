<?php require_once (dirname(__FILE__)."/top1_conf.php"); ?>
<?php require_once (DIR_ROOT."php/general/top2_session.php"); ?>

<?php
$post = json_decode(str_replace("\\", "",$_POST['json_post']));
$store_id = (empty($post)?0:(is_int(intval($post))?$post:0));
$_SESSION ['store'] = $store_id;
echo($store_id);
?>