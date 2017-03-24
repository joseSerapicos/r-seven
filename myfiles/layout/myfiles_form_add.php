<?php 
require_once(dirname( __FILE__ )."/../../top_all.php"); 
/*MyFiles*/
include_once (DIR_ROOT . "myfiles/classes/myfiles.master.class.php");
/*
$post = json_decode(str_replace("\\", "", $_POST['json_post']));
//echo "<pre>";print_r($post);echo "</pre>";

$page_post = explode(":",$post->id);

$page_edit 			= $page_post[0];
$myclick_id 	= $page_post[1];
*/

?>
<form action="<?=DIR_ROOT . "myfiles/scripts/myfiles_form_save.php";?>" id="validation-form" role="form" class="form-horizontal col-md-7" enctype="multipart/form-data">
<fieldset>

<div class="form-group">
  <label for="name2" class="col-lg-4">File:</label>
    <div class="col-lg-8">
      <input type="file" name="file" id="file" />
    </div>
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

</fieldset>
</form>