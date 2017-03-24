<?php 
require_once(dirname( __FILE__ )."/../../top_all.php"); 
/*MyClick*/
include_once (DIR_ROOT . "myclick/classes/myclick.master.class.php");

$post = json_decode(str_replace("\\", "", $_POST['json_post']));
//echo "<pre>";print_r($post);echo "</pre>";

$page_post = explode(":",$post->id);

$page_edit 			= $page_post[0];
$myclick_id 	= $page_post[1];


switch ($page_edit){
	case "add":
		/*Configuraçoes existentes no sistema principal*/
		$myclick = new myclick();
		$myclick->set_myclick_head_id($myclick_id);
		$myclick->set_showDetail(true);
		$myclick->load_list($masterMainDb,$masterSystemDb); //abrir objecto
		$get_myclick_head_list = $myclick->get_myclick_head_list(); //abre a head_list
		$selected_myclick = $get_myclick_head_list[0]->get_mygest_myclick_detail();//detalhe do objecto apenas com os campos necessarios
		$myclick_head_id = $myclick_id;
	break;
	case "edit":
		/*Configuraçoes existentes no sistema principal*/
		$myclick = new myclick();
		$myclick->set_myclick_users_head_id($myclick_id);
		$myclick->load($masterMainDb,$masterSystemDb); //abrir objecto
		$myclick_user_list = $myclick->get_myclick_user_list();
		$myclick_user_list = $myclick_user_list[0];		
		$myclick_head_id = $myclick_user_list->get_fk_mygest_myclick_head();
		$myclick_user_detail = $myclick_user_list->get_users_detail(); 
		
		/*Use in form*/
		$myclick_users_head_id = $myclick_user_list->get_id(); //id interno do edit
		$description = $myclick_user_list->get_description(); //id interno do edit

	break;
	default:
		die();
}


//echo "<pre>";print_r($selected_myclick);echo "</pre>";
?>
<form action="/" id="validation-form" role="form" class="form-horizontal col-md-7" novalidate="novalidate">
<fieldset>
<input type="hidden" name="myclick_head_id" value="<?=$myclick_head_id;?>" />

<?php 

switch ($page_edit){
	case "add":
		print '<div class="form-group">
				<label for="name" class="col-lg-4">Description</label>
					<div class="col-lg-8">
						<input type="text" class="form-control" name="description" id="description" value="'.$get_myclick_head_list[0]->get_name().'">
					</div>
				</div>';
		foreach ($selected_myclick as $fmyclick){ 
		   switch ($fmyclick->get_type()){
			 case "password":
			 print '<div class="form-group">';
			 print '<label for="name" class="col-lg-4">'.$fmyclick->get_name().'</label>';
			 print '	<div class="col-lg-8">';
			 print '		<input type="password" class="form-control" name="'.$fmyclick->get_field_name().'" id="'.$fmyclick->get_field_name().'" value="'.$fmyclick->get_value().'">';
			 print '	</div>';
			 print '</div>';
			 break;
			 
			 case "varchar":
			 print '<div class="form-group">';
			 print '<label for="name" class="col-lg-4">'.$fmyclick->get_name().'</label>';
			 print '	<div class="col-lg-8">';
			 print '		<input type="text" class="form-control" name="'.$fmyclick->get_field_name().'" id="'.$fmyclick->get_field_name().'" value="'.$fmyclick->get_value().'">';
			 print '	</div>';
			 print '</div>';
			 break;
			 
			 case "fixed";
			 print "<input type='hidden' name='".$fmyclick->get_field_name()."' id='".$fmyclick->get_field_name()."' value='".$fmyclick->get_value()."' />";
			 break;
		   }
		} 
		break;
	case "edit":
		print "<input type='hidden' name='myclick_users_head_id' id='myclick_users_head_id' value='".$myclick_users_head_id."' />";
		print '<div class="form-group">
				<label for="name" class="col-lg-4">Description</label>
					<div class="col-lg-8">
						<input type="text" class="form-control" name="description" id="description" value="'.$description.'">
					</div>
				</div>';		
		foreach($myclick_user_detail as $ud_click){
			$form_value = $ud_click->get_value();
			$selected_myclick = $ud_click->get_mygest_myclick_detail();
			//echo "<pre>";print_r($selected_myclick);echo "</pre>";
			switch ($selected_myclick->get_type()){
				
				 case "password":
				 print '<div class="form-group">';
				 print '<label for="name" class="col-lg-4">'.$selected_myclick->get_name().'</label>';
				 print '	<div class="col-lg-8">';
				 print '		<input type="password" class="form-control" name="'.$selected_myclick->get_field_name().'" id="'.$selected_myclick->get_field_name().'" value="'.myclick::decrypt_password($masterMainDb,$masterSystemDb,$masterSystemObj,$form_value).'">';
				 print '	</div>';
				 print '</div>';
				 break;
				 
				 case "varchar":
				 print '<div class="form-group">';
				 print '<label for="name" class="col-lg-4">'.$selected_myclick->get_name().'</label>';
				 print '	<div class="col-lg-8">';
				 print '		<input type="text" class="form-control" name="'.$selected_myclick->get_field_name().'" id="'.$selected_myclick->get_field_name().'" value="'.$form_value.'">';
				 print '	</div>';
				 print '</div>';
				 break;
				 
				 case "fixed";
				 print "<input type='hidden' name='".$selected_myclick->get_field_name()."' id='".$selected_myclick->get_field_name()."' value='".$form_value."' />";
				 break;
			   }
		}
	
	break;
}


?>
</fieldset>
</form>