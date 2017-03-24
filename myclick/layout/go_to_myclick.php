<?php
require_once (dirname ( __FILE__ ) . "/../../top_all.php"); 


/*GET*/
$id = $_GET['id'];

/*MyClick*/
include_once (DIR_ROOT . "myclick/classes/myclick.master.class.php");

/*Configuraçoes Cliente*/
$myclick = new myclick();
$myclick->set_myclick_users_head_id($id); //set id
$myclick->load($masterMainDb,$masterSystemDb); //abrir objecto
$myclick_client_list = $myclick->get_myclick_user_list();
$myclick_client_list = $myclick_client_list[0]; //obj no 0




/*URL*/
$url = $myclick_client_list->get_mygest_myclick_head()->get_url();
/*METHOD*/
$method = $myclick_client_list->get_mygest_myclick_head()->get_method();
/*POSTFIELD*/
$postfield = $myclick_client_list->get_users_detail();
foreach($postfield as $field){
	
	$field_name = $field->get_mygest_myclick_detail()->get_field_name();
	$type = $field->get_mygest_myclick_detail()->get_type();
	switch ($type) {
		case "fixed":
			$field_value = $field->get_mygest_myclick_detail()->get_value();
			break;
		case "varchar":
		case "password":
		default:
			$field_value = $field->get_value();
			break;
	}
	$sent_data[$field_name] = $field_value; 
	
}
/* testar isto
$doc = new DOMDocument();
$doc->loadHTMLFile('http://www.cnn.com');
$title = $doc->getElementById('nav-us')->getAttribute('title');
echo $title; */
if($method=="POST"){
	
	echo "<form name=\"someform\" action=\"".$url."\" method=\"".$method."\">";
foreach ($sent_data as $key=>$value) {
    echo "<input type=\"hidden\" name=\"" . htmlspecialchars($key) . "\" value=\"" . htmlspecialchars($value) . "\" />";
}
echo "</form>";
	echo "<script>document.forms['someform'].submit();</script>";
	
}else if($method=="GET"){
	
	$query_string = http_build_query($sent_data);
    header('Location: '.$url.'?' . $sent_data);
}

?>


<div class="main">

	<div class="container">

		
		<div class="row" >
			<div class="col-md-12">
<div class="widget stacked">
	  <div class="widget-header">
						<i class="<?= ($obj_module?$obj_module->get_icon($db_main):'') ?>"></i>
						<h3><?= ($obj_module?$obj_module->get_name():'') ?><?= ($obj_menu?(' : '.$obj_menu->get_name()):'') ?></h3>
					</div>
	  Loading</div>
                    </div>
                    </div>



<?php require_once (DIR_ROOT."bottom.php"); ?>