<?php 
require_once(dirname( __FILE__ )."/../../top_all.php");

//PayMe
include_once (DIR_ROOT . "payme/classes/payme.master.class.php");


$post = json_decode(str_replace("\\", "", $_POST['json_post']));

//echo "<pre>";print_r($post);echo "</pre>";

$page_post = explode(":",$post->id);

print $page_edit 	= $page_post[0];
print $payme_id 	= $page_post[1];


/*Formulários*/
$payme = new payme();
$payme->payme_edit($masterMainDb,$masterSystemDb);
$field = $payme->get_field();
echo "<pre>";print_r($field);echo "</pre>"; 
//$payme_files = $payme->get_payme_type();

switch ($page_edit){
	case "edit":
		
	break;
	default: //add

}

?>

<form action="/" id="validation-form" role="form" class="form-horizontal col-md-7" novalidate="novalidate">
<fieldset>
	<?php foreach($field as $fkey => $fvalue){ ?>
      <div class="form-group">
    <label for="name" class="col-lg-4"><?=$fvalue['label'];?></label>
        <div class="col-lg-8">
        <?php switch ($fvalue['type']){
				case "text":
					print '<input type="text" class="form-control" name="'.$fvalue['name'].'" id="'.$fvalue['name'].'" value="'.$fvalue['value'].'">';
				break;
				case "textarea":
					print '<textarea name="'.$fvalue['name'].'" class="form-control" id="'.$fvalue['name'].'">'.$fvalue['value'].'</textarea>';
				break;
				case "select":
					print '<select name="'.$fvalue['name'].'" id="'.$fvalue['name'].'" class="form-control">';
					foreach($fvalue['value'] as $select){
						print '<option value="'.$select['value'].'" ';
						if($select['selected']){
							print 'selected="selected"';
						}
						print' >'.$select['value'].'</option>';
					}
						print '</select>';
				break;
				case "checkbox":
					foreach($fvalue['name'] as $checkbox){
						print '<input type="checkbox" name="'.$checkbox['name'].'" value="'.$checkbox['value'].'" ';
						if(!empty($checkbox['checked'])){
							print 'checked="checked"';
						}
						print '> '.$checkbox['label'].'';
					}
				break;
			
		}?>
           
        </div>
    </div>
    
    <?php  } ?>
    
	
</fieldset>
</form>