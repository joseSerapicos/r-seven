<?php 
require_once(dirname( __FILE__ )."/../../../top_all.php"); 
/*MyFiles*/
include_once (DIR_ROOT . "travel_agency/classes/aviation_bsp.master.class.php");
/*
$post = json_decode(str_replace("\\", "", $_POST['json_post']));
//echo "<pre>";print_r($post);echo "</pre>";

$page_post = explode(":",$post->id);

$page_edit 			= $page_post[0];
$myclick_id 	= $page_post[1];
*/

?>
<script>
  $(function() {
    $( "#date_in" ).datepicker();
	$( "#date_in" ).datepicker( "option", "dateFormat", "yy-mm-dd" );
	$( "#date_out" ).datepicker();
	$( "#date_out" ).datepicker( "option", "dateFormat", "yy-mm-dd" );
  });
</script>
<form action="" id="validation-form" role="form" class="form-horizontal col-md-7" novalidate="novalidate" method="post"  enctype="multipart/form-data">
<fieldset>
<div class="form-group">
      <label for="name" class="col-lg-4">Description:</label>
      <div class="col-lg-8">
        <input type="text" class="form-control" name="name" id="name">
      </div>
    </div>
<div class="form-group">
      <label for="name" class="col-lg-4">Date From:</label>
      <div class="col-lg-6">
        <input type="text" class="form-control" name="date_in" id="date_in">
      </div>
    </div>
<div class="form-group">
      <label for="name" class="col-lg-4">Date To:</label>
      <div class="col-lg-6">
        <input type="text" class="form-control" name="date_out" id="date_out">
      </div>
    </div>
<div class="form-group">
  <label for="name2" class="col-lg-4">File:</label>
    <div class="col-lg-8">
      <input type="file" name="file" id="file" />
    </div>
</div>
</fieldset>
</form>