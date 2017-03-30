<?php 
require_once(dirname( __FILE__ )."/../../top_all.php");

//PayMe
include_once (DIR_ROOT . "payme/classes/payme.master.class.php");


$post = json_decode(str_replace("\\", "", $_POST['json_post']));

//echo "<pre>";print_r($post);echo "</pre>";

$page_post = explode(":",$post->id);

$page_edit 	= $page_post[0];
$payme_id 	= !empty($page_post[1])?$page_post[1]:false;


/*Formulários*/
$payme = new payme();
$payme->payme_edit($masterMainDb,$masterSystemDb,$payme_id);
$field = $payme->get_field();

//echo "<pre>";print_r($field);echo "</pre>"; 

?>

<form action="/" id="validation-form" role="form" class="form-horizontal col-md-7" novalidate="novalidate">
  <fieldset>
    <?php foreach($field as $fkey => $fvalue){ ?>
        <?php switch ($fvalue['type']){
				case "text":
					print '<div class="form-group">';
					print '<label for="name" class="col-lg-4">'.$fvalue['label'].'</label>';
					print '<div class="col-lg-8">';
					print '<input type="text" class="form-control" name="'.$fvalue['name'].'" id="'.$fvalue['name'].'" value="'.$fvalue['value'].'" ';
					if($fvalue['readonly']){
						print 'readonly="readonly"';
					}
					print '>';
					print '</div>';
					print '</div>';
				break;
				case "textarea":
					print '<div class="form-group">';
					print '<label for="name" class="col-lg-4">'.$fvalue['label'].'</label>';
					print '<div class="col-lg-8">';
					print '<textarea name="'.$fvalue['name'].'" class="form-control" id="'.$fvalue['name'].'" ';
					if($fvalue['readonly']){
						print 'readonly="readonly"';
					}
					print '>'.$fvalue['value'].'</textarea>';
					print '</div>';
					print '</div>';
				break;
				case "select":
					print '<div class="form-group">';
					print '<label for="name" class="col-lg-4">'.$fvalue['label'].'</label>';
					print '<div class="col-lg-5">';
					print '<select name="'.$fvalue['name'].'" id="'.$fvalue['name'].'" class="form-control"';
					if($fvalue['disabled']){
						print 'disabled="disabled"';
					}
					print '>';
					$select_value = "";
					foreach($fvalue['value'] as $select){
						print '<option value="'.$select['value'].'" ';
						if($select['selected']){
							$select_value = $select['value']; //select value for disabled
							print 'selected="selected"';
						}
						print' >'.$select['value'].'</option>';
					}
						print '</select>';
					if($fvalue['disabled']){
						print '<input type="hidden" name="'.$fvalue['name'].'" id="'.$fvalue['name'].'" value="'.$select_value.'"/>';
					}
					print '</div>';
					print '</div>';
				break;
				case "checkbox":
					print '<div class="form-group">';
					print '<label for="name" class="col-lg-4">'.$fvalue['label'].'</label>';
					print '<div class="col-lg-8">';
					
					foreach($fvalue['name'] as $checkbox){
						print '<input type="checkbox" name="'.$checkbox['name'].'" value="'.$checkbox['value'].'" ';
						if(!empty($checkbox['checked'])){
							print 'checked="checked" ';
						}
						if($checkbox['disabled']){
							print 'disabled="disabled" ';
						}
						print '> '.$checkbox['label'].'';
						
						if($checkbox['disabled']){
							print '<input type="hidden" name="'.$checkbox['name'].'" id="'.$checkbox['name'].'" value="'.$checkbox['value'].'"/>';
					}
					}
					
					print '</div>';
					print '</div>';
				break;
				case "hidden":
					print '<input type="hidden" name="'.$fvalue['name'].'" id="'.$fvalue['name'].'" value="'.$fvalue['value'].'"/>';
				break;
			
		}?>

    <?php  } ?>
  </fieldset>
</form>