<?php //$masterMainDb,$masterSystemDb)
require_once(dirname(__FILE__)."/../../top.php"); // Carregamento do top 
$headerButtons['add'] = array();
$headerButtons['add']['enabled'] = true;
$headerButtons['add']['addMultiAddHeader'] = true;

/*MyFiles*/
include_once (DIR_ROOT . "myfiles/classes/myfiles.master.class.php");
$myfiles = new myfiles();
$myfiles->load($masterSystemDb); //abrir objecto
$myfiles_users_list = $myfiles->get_myfiles_users_list();

$total = $myfiles->total($masterSystemDb);
$total_user_size = $myfiles->get_total_user_size();
$total_system = $myfiles->get_total_system_size();
$percent_use = $myfiles->get_percent_use();

/*UPLOAD SELF PAGE*/
if($_POST['form_submit'] && !empty($_FILES['name'])){
	$myfiles->myfiles_submit($masterSystemDb,$_POST,$_FILES); //abrir objecto
?>
	<script>
		refreshAll(false);
    </script>";
<?php } ?>

<h4>Space <small><?= $total_user_size;?></small> of <small><?=$total_system;?></small></h4>
<div class="progress">
  <div class="progress-bar <?php switch ($percent_use){
	  		case $percent_use <= 60:
				print" progress-bar-success";
			break;
			case $percent_use > 60 && $percent_use <= 80:
				print" progress-bar-warning";
			break;
			case $percent_use > 80:
				print" progress-bar-danger";
			break;
  }?>" role="progressbar" aria-valuenow="<?=$percent_use?>" aria-valuemin="0" aria-valuemax="100" style="width: <?=$percent_use?>%"> <span class="sr-only"><?=$percent_use?> Use</span> </div>
</div>

<?php if(empty($myfiles_users_list)){ ?>
	<div class="alert alert-warning">MyFiles List is empty! <br> Use the "<strong>Upload File</strong>" to add new!</div>
<?php } ?>
<div align="right">
	<a class="btn btn-primary " data-toggle="modal" href="#Upload">Upload File</a>
</div>
<?php if(!empty($myfiles_users_list)){ ?>
<br />

    <table width="100%" border="1" class="table table-bordered table-hover table-striped">
      <tr>
        <th>Filename</th>
        <th>Size</th>
        <th width="10%">External</th>
        <th width="12%">&nbsp;</th>
      </tr>
      <?php foreach($myfiles_users_list as $myfiles_list){ ?>
      <tr>
        <td width="48%"><?=$myfiles_list->get_filename();?></td>
        <td width="21%"><?=myfiles::set_digital($myfiles_list->get_file_size());?></td>
        <td><?=$myfiles_list->get_external_access();?></td>
        <td><button class="btn btn-default icon-edit Edit multiAddHeader" data-toggle="modal" data-backdrop="static" id="" name="" data-target="#addActionSelector" data-myScriptGetForm="<?= (PATH_ROOT."myfiles/layout/myfiles_form_add.php") ?>" data-myScriptPostForm="<?= (PATH_ROOT."myfiles/scripts/myfiles_form_save.php") ?>" data-myId="edit:<?="id";?>"></button>
          <button class="btn btn-default optionButton icon-remove deleteSingleHeader" data-myId="<?=$myfiles_list->get_id();?>" data-myScriptPostForm="<?= (PATH_ROOT."myfiles/scripts/myfiles_form_delete.php") ?>"  />
          
          <!-- /btn-group --></td>
      </tr>
      <?php  }  ?>
    </table>
<?php } ?>

<!-- upload -->
<div id="Upload" class="modal fade" tabindex="-1" role="dialog"> 
  <!-- /.modal-dialog -->
  <div class="modal-dialog"> 
    <!-- /.modal-content -->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
        <?=utf8_encode("×");?>
        </button>
        <h4 class="modal-title">Upload</h4>
      </div>
      <div class="modal-body">
        <fieldset>
          <form method="post" id="validation-form" role="form" class="form-horizontal col-md-7" enctype="multipart/form-data">
            <div class="form-group">
              <label for="name2" class="col-lg-4">File:</label>
              <div class="col-lg-8"><input type="file" name="file" id="file" class="file_upload"/>
<?php /*?>                <iframe src="<?= (PATH_ROOT."myfiles/layout/frame_upload.php") ?>" width="500" height="50" frameborder="0"></iframe>
<?php */?>              </div>
            </div>
            <div class="form-group">
              <label for="name3" class="col-lg-4">External:</label>
              <div class="col-lg-8">
                <select name="external_access" id="external_access">
                  <option value="0">NO</option>
                  <option value="1">YES</option>
                </select>
                <input type="hidden" name="form_submit" id="form_submit"  value="1"/>
              </div>
            </div>
          </form>
        </fieldset>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button id="submit_btn" type="button" class="btn btn-primary">Upload File</button>
      </div>
    </div>
    <!-- /.modal-content --> 
  </div>
  <!-- /.modal-dialog --> 
</div>
<script>
$( document ).ready(function() {
	$( "#submit_btn" ).click(function() {
		document.getElementById('validation-form').submit();
	});
});
</script>
<?php require_once(DIR_ROOT."bottom.php"); ?>