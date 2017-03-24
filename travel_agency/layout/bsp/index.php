<?php
//require_once (dirname ( __FILE__ ) . "/../../../top.php"); // Carregamento do top                                                    

if(!empty($_POST)){
	include_once(DIR_ROOT."travel_agency/scripts/bsp_form_save.php");
}

/*AviationBSP*/
include_once (DIR_ROOT . "travel_agency/classes/aviation_bsp.master.class.php");

/*Aviation BSP*/
$aviation_bsp = new aviation_bsp();

$aviation_bsp->head($masterSystemDb); //abrir objecto
//echo "<pre>";print_r($aviation_bsp);
$aviation_bsp_list = $aviation_bsp->get_aviation_bsp_head();
//echo "<pre>";print_r($aviation_bsp_list);
?>

<table width="100%" border="1" class="table table-bordered table-hover table-striped">
  <tr>
    <th width="66%">Name</th>
    <th width="10%">Date From</th>
    <th width="10%">Date To</th>
    <th width="14%">&nbsp;</th>
  </tr>
  <?php foreach($aviation_bsp_list as $aviation_bsp){ ?>
  <tr>
    <td><a class="news-item-title" onclick='javascript: callScript("<?=PATH_ROOT?>travel_agency/layout/bsp/detail/index.php", "selector", "#load_main_menu", <?= json_encode(array("bsp_id" => $aviation_bsp->get_id())) ?>);'><?=$aviation_bsp->get_name();?></td>
    <td><?=$aviation_bsp->get_date_in();?></td>
    <td><?=$aviation_bsp->get_date_out();?></td>
    <td><?php /*?><button class="btn btn-default icon-edit Edit multiAddHeader" data-toggle="modal" data-backdrop="static" id="" name="" data-target="#addActionSelector" data-myScriptGetForm="<?= (PATH_ROOT."mylist/layout/management/mylist_manage_form_add.php") ?>" data-myScriptPostForm="" data-myId="edit:<?=$difusion_management->get_id();?>"></button><?php */?>
      <button class="btn btn-default optionButton icon-remove deleteSingleHeader" data-myId="<?=$aviation_bsp->get_id();?>" data-myScriptPostForm="<?= (PATH_ROOT."travel_agency/scripts/bsp_form_delete.php") ?>"  />
      </td>
  </tr>
  <?php }  ?>
</table>
<?php require_once (DIR_ROOT."/bottom.php"); ?>
