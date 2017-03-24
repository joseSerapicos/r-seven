<?php 
require_once(dirname( __FILE__ )."/../../top_all.php");

//PayMe
include_once (DIR_ROOT . "payme/classes/payme.master.class.php");


$post = json_decode(str_replace("\\", "", $_POST['json_post']));

//$payme_head_id = $post->id;

/*Formulários*/
$payme = new payme();
$payme->payme_type($masterMainDb,$masterSystemDb);

$payme_files = $payme->get_payme_type();
//echo "<pre>";print_r($payme_files);echo "</pre>";

/*
$post = json_decode(str_replace("\\", "", $_POST['json_post']));

$myclick_head_id = $post->id;
*/


/*
/*Configuracoes existentes no sistema principal
$myclick = new myclick();
$myclick->set_myclick_head_id($myclick_head_id);
$myclick->set_showDetail(true);
$myclick->load_list($masterMainDb,$masterSystemDb); //abrir objecto
$get_myclick_head_list = $myclick->get_myclick_head_list(); //abre a head_list

$selected_myclick = $get_myclick_head_list[0]->get_mygest_myclick_detail();//detalhe do objecto apenas com os campos necessarios

*/

?>

<form action="/" id="validation-form" role="form" class="form-horizontal col-md-7" novalidate="novalidate">
<fieldset>
	<!-- Email-->
    <div class="form-group">
    <label for="name" class="col-lg-4">Email</label>
        <div class="col-lg-8">
            <input type="text" class="form-control" name="email" id="email" value="">
        </div>
    </div>
    <!-- Description-->
    <div class="form-group">
    <label for="name" class="col-lg-4">Description:</label>
        <div class="col-lg-8">
          <textarea name="description" class="form-control" id="description"></textarea>
        </div>
    </div>
    <!-- Total-->
    <div class="form-group">
    <label for="name" class="col-lg-4">Total Value:</label>
        <div class="col-lg-6">
            <input type="text" class="form-control" name="total_value" id="total_value" value="">
        </div>
    </div>
    <!-- Currency-->
	<div class="form-group">
    <label for="name" class="col-lg-4">Currency-Code:</label>
        <div class="col-lg-5">
          <select name="currency_code" id="currency_code" class="form-control">
            <option value="USD">USD</option>
              <option value="EUR">EUR</option>
          </select>
        </div>
    </div>
    <!-- PayTypes-->
    <div class="form-group">
    <label for="name" class="col-lg-4">Pay Types:</label>
        <div class="col-lg-8">
          	<?php foreach ($payme_files as $payme_fields){?>
            <label>
                <input type="checkbox" name="pay_type[<?=$payme_fields->get_code();?>]" value="1"> <?=$payme_fields->get_name();?>
            </label>
            <?php } ?>
            
        </div>
    </div>
</fieldset>
</form>