<?php 
require_once(dirname( __FILE__ )."/../../top_all.php"); 
/*MyClick*/
include_once (DIR_ROOT . "myclick/classes/myclick.master.class.php");

$post = json_decode(str_replace("\\", "", $_POST['json_post']));

$myclick_head_id = $post->id;

/*Configura�oes existentes no sistema principal*/
$myclick = new myclick();
$myclick->set_myclick_head_id($myclick_head_id);
$myclick->set_showDetail(true);
$myclick->load_list($masterMainDb,$masterSystemDb); //abrir objecto
$get_myclick_head_list = $myclick->get_myclick_head_list(); //abre a head_list

$selected_myclick = $get_myclick_head_list[0]->get_mygest_myclick_detail();//detalhe do objecto apenas com os campos necessarios

//echo "<pre>";print_r($selected_myclick);echo "</pre>";
?>
<form action="/" id="validation-form" role="form" class="form-horizontal col-md-7" novalidate="novalidate">
<fieldset>
<?php foreach ($selected_myclick as $fmyclick){ 
   switch ($fmyclick->get_type()){
     case "password":
     print '<div class="form-group">';
     print '<label for="name" class="col-lg-4">'.$fmyclick->get_name().'</label>';
     print '	<div class="col-lg-8">';
     print '		<input type="password" class="form-control" name="name" id="'.$fmyclick->get_field_name().'" value="'.$fmyclick->get_value().'">';
     print '	</div>';
     print '</div>';
     break;
     
     case "varchar":
     print '<div class="form-group">';
     print '<label for="name" class="col-lg-4">'.$fmyclick->get_name().'</label>';
     print '	<div class="col-lg-8">';
     print '		<input type="text" class="form-control" name="name" id="'.$fmyclick->get_field_name().'" value="'.$fmyclick->get_value().'">';
     print '	</div>';
     print '</div>';
     break;
     
     case "fixed";
     print "<input type='hidden' name='".$fmyclick->get_field_name()."' id='".$fmyclick->get_field_name()."' value='".$fmyclick->get_value()."' />";
     break;
   }
?>


<?php } ?>
</fieldset>
</form>