<?php
require_once (dirname ( __FILE__ ) . "/../../top.php"); // Carregamento do top

$headerButtons['add'] = array();
$headerButtons['add']['enabled'] = true;
$headerButtons['add']['addMultiAddHeader'] = true;

/*MyList*/
include_once (DIR_ROOT . "mylist/classes/mylist.master.class.php");

/*Configuraçoes Cliente*/
$mylist = new mylist();
$mylist->load_list($masterSystemDb); //abrir objecto

$mylist_difusion_list = $mylist->get_mylist_difusion_list();
//echo "<pre>";print_r($mylist_difusion_list);echo "</pre>";

?>


<table width="100%" border="1" class="table table-bordered table-hover table-striped">
  <tr>
    <th width="47%">Email</th>
    <th width="22%">Reference_1</th>
    <th width="19%">Reference_2</th>
    <th width="12%">&nbsp;</th>
  </tr>
  <?php foreach($mylist_difusion_list as $difusion_list){ ?>
  <tr>
    <td><?=$difusion_list->get_email();?></td>
    <td><?=$difusion_list->get_reference_1();?></td>
    <td><?=$difusion_list->get_reference_2();?></td>
    <td><!-- /btn-group -->
     <button class="btn btn-default icon-edit Edit multiAddHeader" data-toggle="modal" data-backdrop="static" id="" name="" data-target="#addActionSelector" data-myScriptGetForm="<?= (PATH_ROOT."mylist/layout/mylist_form_add.php") ?>" data-myScriptPostForm="<?= (PATH_ROOT."mylist/scripts/mylist_form_save.php") ?>" data-myId="edit:<?=$difusion_list->get_id();?>"></button>
    <button class="btn btn-default optionButton icon-remove deleteSingleHeader" data-myId="<?= $difusion_list->get_id() ?>" data-myScriptPostForm="<?= (PATH_ROOT."mylist/scripts/mylist_form_delete.php") ?>"  />
     </td>
  </tr>
  <?php }  ?>
</table>



<?php require_once (DIR_ROOT."bottom.php"); ?>