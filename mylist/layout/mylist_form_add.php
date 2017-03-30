<?php 
require_once(dirname( __FILE__ )."/../../top_all.php"); 
/*MyClick*/
include_once (DIR_ROOT . "mylist/classes/mylist_difusion_list.class.php");

$post = json_decode(str_replace("\\", "", $_POST['json_post']));
//echo "<pre>";print_r($post);echo "</pre>";

$page_post = explode(":",$post->id);

$page_edit 	= $page_post[0];
$mylist_id 	= $page_post[1];



switch ($page_edit){
	case "edit":
		$mylist_difusion_list = new mylist_difusion_list();
		$mylist_difusion_list->load($masterSystemDb,$mylist_id);
		
		$email = $mylist_difusion_list->get_email();
		$reference_1 = $mylist_difusion_list->get_reference_1();
		$reference_2 = $mylist_difusion_list->get_reference_2();
	break;
	default: //add
		$mylist_id = 0;
		$email = "";
		$reference_1 = "";
		$reference_2 = "";
}

?>
<form action="/" id="validation-form" role="form" class="form-horizontal col-md-7" novalidate="novalidate">
<fieldset>
<input type="hidden" name="mylist_id" id="mylist_id" value="<?=$mylist_id?>">

<div class="form-group">
    <label for="name" class="col-lg-4">Email:</label>
        <div class="col-lg-8">
            <input type="text" class="form-control" name="email" id="email" value="<?=$email;?>">
        </div>
</div>
<div class="form-group">
    <label for="name" class="col-lg-4">Ref_1:</label>
        <div class="col-lg-8">
            <input type="text" class="form-control" name="reference_1" id="reference_1" value="<?=$reference_1;?>">
        </div>
</div>
<div class="form-group">
    <label for="name" class="col-lg-4">Ref_2:</label>
        <div class="col-lg-8">
            <input type="text" class="form-control" name="reference_2" id="reference_2" value="<?=$reference_2;?>">
        </div>
</div>
</fieldset>
</form>