<?php include_once(dirname(__FILE__)."/../../../top.php"); ?>

<script src="<?= PATH_ROOT ?>lib/jquery.treeview/jquery.treeview.js" type="text/javascript"></script>

<link rel="stylesheet" href="<?= PATH_ROOT ?>lib/jquery.treeview/jquery.treeview.css" />

<style type="text/css">
.treeviewDiv {
	padding-left:8px;
	padding-right:8px;	
}
.treeviewTitle {
	padding-left:8px;
	padding-right:8px;
	float:left;
}
.userPermissionsLegendRead {
	outline-style:solid;
	outline-color:#C9302C;
	outline-width:1px;
	position:relative;
	top:2px;
	margin-right:8px !important;
}
.userPermissionsLegendEdit {
	outline-style:solid;
	outline-color:#E8A300;
	outline-width:1px;
	position:relative;
	top:2px;
	margin-right:8px !important;
}
.userPermissionsLegendAdd {
	outline-style:solid;
	outline-color:#449D44;
	outline-width:1px;
	position:relative;
	top:2px;
	margin-right:8px !important;
}
.userPermissionsLegendTitle {
	font-weight:bolder;
	margin-right:8px !important;
}
</style>