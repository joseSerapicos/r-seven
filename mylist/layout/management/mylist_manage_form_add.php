<?php 
require_once(dirname( __FILE__ )."/../../../top_all.php"); 
/*MyClick*/
include_once (DIR_ROOT . "mylist/classes/mylist_difusion_head.class.php");


$post = json_decode(str_replace("\\", "", $_POST['json_post']));
//echo "<pre>";print_r($post);echo "</pre>";

$page_post = explode(":",$post->id);

$page_edit 	= $page_post[0];
$mylist_id 	= $page_post[1];



switch ($page_edit){
	case "edit":
	
		$mylist_difusion_head = new mylist_difusion_head();
		$mylist_difusion_head->load($masterSystemDb,$mylist_id);
		
		$mylist_difusion_head_id = $mylist_difusion_head->get_id();
		$title = $mylist_difusion_head->get_title();
		$body = $mylist_difusion_head->get_body();
		
	break;
	default: //add
		$mylist_difusion_head_id = 0;
		$title = "";
		$body = "";
}

?>
<script src="/mygest/lib/ckeditor/ckeditor.js"></script>

<form action="" id="validation-form" role="form" class="form-horizontal col-md-7" novalidate="novalidate" method="post">
  <fieldset>
    <input type="hidden" name="mylist_difusion_head_id" id="mylist_difusion_head_id" value="<?=$mylist_difusion_head_id?>">
    <div class="form-group">
      <label for="name" class="col-lg-4">Title:</label>
      <div class="col-lg-8">
        <input type="text" class="form-control" name="title" id="title" value="<?=$title;?>">
      </div>
    </div>
    <div class="form-group">
      <label for="name" class="col-lg-4">Body:</label>
      <div class="col-lg-8" style="width:540px;">
        <textarea name="body" class="form-control" id="body"><?=$body;?></textarea>
      </div>
    </div>
  </fieldset>
</form>
<script>

var roxyFileman = '<?="/mygest/lib/ckeditor/plugins/fileman/index.html"?>'; 

   CKEDITOR.replace( 'body',{filebrowserBrowseUrl:roxyFileman, 
                                filebrowserUploadUrl:roxyFileman,
                                filebrowserImageBrowseUrl:roxyFileman+'?type=image',
                                filebrowserImageUploadUrl:roxyFileman+'?type=image'}); 


		</script>