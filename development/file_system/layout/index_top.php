<?php include_once(dirname(__FILE__)."/../../../top.php"); ?>

<script src="<?= PATH_ROOT ?>lib/jquery.treeview/jquery.treeview.js" type="text/javascript"></script>

<link rel="stylesheet" href="<?= PATH_ROOT ?>lib/jquery.treeview/jquery.treeview.css" />

<style type="text/css">
div.browser_local {
	border:1px solid #D5D5D5;
	border-radius:4px;
	margin-right:16px;
	padding:8px;
	float: left;
	width: 32%;
	overflow:auto;
}

div.browser_children {
	cursor:pointer;
	padding-left:4px;
	vertical-align:text-top;
}

div.load_content_local {
	border: 1px solid #D5D5D5;
	border-radius: 4px;
	padding:8px;
	overflow:auto;
}
</style>