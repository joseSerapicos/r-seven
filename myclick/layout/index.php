<?php
/*MyClick*/

include_once (DIR_ROOT . "myclick/classes/myclick.master.class.php");


/* Redefinir header buttons */
// add
$headerButtons['add'] = array();
$headerButtons['add']['enabled'] = true;
$headerButtons['add']['id'] = false;
$headerButtons['add']['class'] = false;
$headerButtons['add']['scriptGetForm'] = (PATH_ROOT."myclick/layout/get_form.php");
$headerButtons['add']['scriptPostForm'] = (PATH_ROOT."myclick/scripts/save_form.php");
$headerButtons['add']['addEditSingleHeader'] = true; // Se "true", e "$headerButtons['conf']['addScripts'] = true", adiciona os scripts para "editSingleHeader"
/* /Redefinir header buttons */




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
										    <th width="56%">Name</th>
										    <th width="15%">Category</th>
										    <th width="15%">Version in Server</th>
										    <th width="14%">&nbsp;</th>
									      </tr>
										  <?php foreach($myclick_client_list as $client_list){ ?>
										  <tr>
										    <td><?=$client_list->get_mygest_myclick_head()->get_name();?></td>
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
								        <th width="60%">Name</th>
									      <th width="17%">Category</th>
									      <th width="17%">Version in Server</th>
									      <th width="6%">&nbsp;</th>
								        </tr>
                                        	<?php foreach($myclick_load_list as $value){ ?>
										  <tr>
										    <td><?=$value->get_name();?></td>
										    <td><?=$value->get_cat();?></td>
										    <td>Version <?=$value->get_version();?></td>
										    <td>
												<button class="btn btn-default icon-plus Add editSingleHeader" data-myId="<?= 0 ?>" data-toggle="modal" data-backdrop="static" data-target="#addActionSelector" title="Add" />
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