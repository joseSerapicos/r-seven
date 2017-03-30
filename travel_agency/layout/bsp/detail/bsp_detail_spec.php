<?php 
require_once(dirname( __FILE__ )."/../../../../top_all.php"); 

/*BSP*/
include_once (DIR_ROOT . "travel_agency/classes/aviation_bsp_detail.class.php");

$post = json_decode(str_replace("\\", "", $_POST['json_post']));
//echo "<pre>";print_r($post);echo "</pre>";

$page_post = explode(":",$post->id);

$page_edit 				= $page_post[0];
$aviation_bsp_detail_id = $page_post[1];


switch ($page_edit){
	case "edit":
	
		$aviation_bsp_detail = new aviation_bsp_detail();
		$aviation_bsp_detail->load($masterSystemDb,$aviation_bsp_detail_id);
		
		$status = $aviation_bsp_detail->get_status();
		$user_text = $aviation_bsp_detail->get_user_text();
		
	break;
	default:
		die();
}


//echo "<pre>";print_r($selected_myclick);echo "</pre>";
?>
<form action="/" id="validation-form" role="form" class="form-horizontal col-md-7" novalidate="novalidate">
<fieldset>
<input type="hidden" name="aviation_bsp_detail_id" id="aviation_bsp_detail_id" value="<?=$aviation_bsp_detail_id;?>" />
<div class="form-group">
      <label for="user_text" class="col-lg-4">User Text:</label>
      <div class="col-lg-8">
        <textarea id="user_text" name="user_text" class="form-control" ><?=$user_text;?></textarea>
      </div>
    </div>
<div class="form-group">
      <label for="status" class="col-lg-4">Status:</label>
      <div class="col-lg-6">
        <select name="status" id="status">
          <option value="PD" <?php if($status == "PD") print 'selected="selected"'; ?>>PD</option>
          <option value="OK" <?php if($status == "OK") print 'selected="selected"'; ?>>OK</option>
        </select>
      </div>
    </div>
</fieldset>
</form>