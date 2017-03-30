<?php

/*Parameters sent by Submit*/
if(!empty($_POST)){
	include_once(DIR_ROOT."mylist/scripts/mylist_manage_form_save.php");
}

/*MyList*/
include_once (DIR_ROOT . "mylist/classes/mylist.master.class.php");

/*Configuraçoes Cliente*/
$mylist = new mylist();
$mylist->load_management_list($masterSystemDb); //abrir objecto

$mylist_difusion_management = $mylist->get_mylist_difusion_management();

//echo "<pre>";print_r($mylist_difusion_management);echo "</pre>";

?>
<?php if(empty($mylist_difusion_management)){ ?>
                                  <div class="alert alert-warning">MyList Management Content  is empty! <br />
Use the &quot;<strong>[+]</strong>&quot; to add new!</div>
                                  
<?php }else{ ?>
<table width="100%" border="1" class="table table-bordered table-hover table-striped">
  <tr>
    <th width="83%">Title</th>
    <th width="6%">Status</th>
    <th width="11%">&nbsp;</th>
  </tr>
  <?php foreach($mylist_difusion_management as $difusion_management){ ?>
  <tr>
    <td><?=$difusion_management->get_title();?></td>
    <td><?=$difusion_management->get_status();?></td>
    <td><!-- /btn-group -->
      <button class="btn btn-default icon-edit Edit multiAddHeader" data-toggle="modal" data-backdrop="static" id="" name="" data-target="#addActionSelector" data-myScriptGetForm="<?= (PATH_ROOT."mylist/layout/management/mylist_manage_form_add.php") ?>" data-myScriptPostForm="" data-myId="edit:<?=$difusion_management->get_id();?>"></button>
      <button class="btn btn-default optionButton icon-remove deleteSingleHeader" data-myId="<?=$difusion_management->get_id();?>" data-myScriptPostForm="<?= (PATH_ROOT."mylist/scripts/mylist_manage_form_delete.php") ?>"  />
    </td>
  </tr>
  <?php  }  ?>
</table>
<?php } ?>