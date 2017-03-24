<?php
/*MyClick*/

include_once (DIR_ROOT . "myclick/classes/myclick.master.class.php");

$headerButtons['add'] = array();
$headerButtons['add']['enabled'] = true;
$headerButtons['add']['addMultiAddHeader'] = true;

/*Configuraçoes Cliente*/
$myclick = new myclick();
$myclick->load($masterMainDb,$masterSystemDb); //abrir objecto
$myclick_client_list = $myclick->get_myclick_user_list();
//echo "<pre>";print_r($myclick_client_list);echo "</pre>";


/*Configuraçoes existentes no sistema principal*/
$myclick = new myclick();
//$myclick->set_showDetail(true);
$myclick->load_list($masterMainDb,$masterSystemDb); //abrir objecto
$myclick_load_list = $myclick->get_myclick_head_list();
//echo "<pre>";print_r($myclick_load_list);echo "</pre>";

/*
echo("<pre><h3>module:</h3>");
print_r($obj_module);
echo("<h3>menu:</h3>");
print_r($obj_menu);
echo("</pre>");
*/
?>


			<div class="bs-example">
								<ul id="myTab" class="nav nav-tabs">
									<li class="active"><a href="#myclick_list" data-toggle="tab">MyClick List</a></li>
									<li class=""><a href="#click_list" data-toggle="tab">Click List Avaliable</a></li>
			  </ul>
								<div class="tab-content">
                                <div class="tab-pane fade active in" id="myclick_list">
                                  <?php if(empty($myclick_client_list)){ ?>
                                  <div class="alert alert-warning">MyClick List is empty! <br />
                                  Use the &quot;<strong>Click List Avaliable</strong>&quot; to add new!</div>
								  <?php }else{ ?>
										<table width="100%" border="1" class="table table-bordered table-hover table-striped">
										  <tr>
										    <th colspan="2">Name</th>
										    <th width="10%">Category</th>
										    <th width="9%">Version in Server</th>
										    <th width="12%">&nbsp;</th>
									      </tr>
										  <?php foreach($myclick_client_list as $client_list){ ?>
										  <tr>
										    <td width="13%" align="center"><img src="myclick/layout/img/<?=$client_list->get_mygest_myclick_head()->get_logo();?>" /></td>
										    <td width="56%">										      <?=$client_list->get_mygest_myclick_head()->get_name();?></td>
										    <td><?=$client_list->get_mygest_myclick_head()->get_cat();?></td>
										    <td>Version: <?=$client_list->get_version();?></td>
										    <td>
                                              <button class="btn btn-default icon-circle-arrow-right Go" onClick="window.open('myclick/go_to_myclick.php?id=<?=$client_list->get_mygest_myclick_head()->get_id();?>')" title="Go" />
                                              <button class="btn btn-default icon-edit Edit"  title="Edit" />
                                              <button class="btn btn-default icon-remove deleteSingle"  myId="<?= $client_list->get_id() ?>" id="deleteSingle" />
										      <!-- /btn-group --></td>
									      </tr>
										  <?php }  ?>
								  </table>
                                  <?php } //end if(empty($myclick_client_list)){ ?>
								  <p>&nbsp; </p>
								  </div>
                                  <!-- /div myclick_list -->
								  <div class="tab-pane fade" id="click_list">
								    <table width="100%" border="1" class="table table-bordered table-hover table-striped">
								      <tr>
								        <th colspan="2">Name</th>
								        <th width="10%">Category</th>
									      <th width="10%">Version in Server</th>
									      <th width="6%">&nbsp;</th>
								        </tr>
                                        	<?php foreach($myclick_load_list as $value){ ?>
										  <tr>
										    <td width="13%" align="center"><img src="myclick/layout/img/<?=$value->get_logo();?>" /></td>
										    <td width="61%"><?=$value->get_name();?></td>
										    <td><?=$value->get_cat();?></td>
										    <td>Version <?=$value->get_version();?></td>
										    <td>
                                                <button class="btn btn-default icon-plus optionButton multiAddHeader" data-toggle="modal" data-backdrop="static" id="" name="" data-target="#addActionSelector" data-myScriptGetForm="<?= (PATH_ROOT."myclick/layout/myclick_form_add.php") ?>" data-myScriptPostForm="<?= (PATH_ROOT."myclick/scripts/myclick_form_save.php") ?>" data-myId="<?=$value->get_id();?>"></button>
								<!-- /btn-group --></td>
									    </tr>
                                        <?php }//end foreach ?>
                                        
								    </table>
							      </div>
                                  <!-- /div click_list -->			  
			  </div>
			  </div>

<script>
<!--
/*
$(document).ready(function() {
	
	$(".deleteSingle").click( function(event) {
		// Evita que outras accoes definidas sejam executadas
		event.preventDefault() 
		
		
		var myId = $(this).attr("myId");
		var myIdObj = {'myId': myId};
		var myIdJson = ({'chk_del': myIdObj});
		call_script("<?= PATH_ROOT ?>php/myclick/delete_myclick.php", myIdJson, "function", "finishProcess");
		
		// Evita que outras accoes definidas sejam executadas
		//return(false);
	});
	
});
*/
//-->

</script>