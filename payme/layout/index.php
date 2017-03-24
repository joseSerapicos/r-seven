<?php
require_once (dirname ( __FILE__ ) . "/../../top.php"); // Carregamento do top                                                    
/*PayMe!*/

include_once (DIR_ROOT . "payme/classes/payme.master.class.php");
$payme = new payme();
$payme->client_list($masterMainDb,$masterSystemDb);
$payme_users_head = $payme->get_payme_users_head();

//echo "<pre>";print_r($payme_users_head);echo "</pre>";
?>
<div id="helpDiv" style="<?="display:none"?>;" class="alert alert-info">PayMe is the automatic paying system. blablabla</div>
<table width="100%" border="1" class="table table-bordered table-hover table-striped">
										  <tr>
										    <th width="2%">Id</th>
										    <th width="34%">Client</th>
										    <th width="12%">Total Value</th>
										    <th width="26%">Payment Method</th>
										    <th width="13%">Status</th>
										    <th width="13%">Action</th>
									      </tr>
										  <?php foreach($payme_users_head as $puser){ ?>
										  <tr>
										    <td><?=$puser->get_id();?></td>
										    <td>id - nome (<?=$puser->get_email();?>)</td>
										    <td><?=$puser->get_total();?> <?=$puser->get_currency_code();?></td>
										    <td>
<?php /*
<div class="btn-group" id="paypal">
									<button type="button" class="btn btn-default">PayPal</button>
									<button type="button" class="btn btn-default icon-remove-circle" >
									</button>
								</div>
  */?>                              
                                					Paypal,Google Wallet, Internal
                                            
                                            </td>
										    <td>
                                            	<?php switch ($puser->get_status()){
														case "O":
															print "Open";
														break;
														case "C": //Paid - Complete
															print '<div class="btn btn-success icon-ok-sign" status="paid" myId="" title="'.$puser->get_status_desc().'" /></div>';
														break;
														case "PD": //Blocked to client
															print 'Pending';
														break;
														case "F": //failed - Error
															print '<button class="btn btn-warning icon-minus-sign" status="deleted" myId="" title="'.$puser->get_status_desc().'"/>';
														break;
														case "D":
															print '<button class="btn btn-default icon-remove-sign" status="removed" myId="" title="'.$puser->get_status_desc().'"/>';
														break;
														
												}
												?>
                                              
                                              
                                              
										      <!-- /btn-group --></td>
                                               <td> <button class="btn btn-default icon-edit" title="Edit" />
                                              <button class="btn btn-default icon-envelope sendEmail"  myId="" />
                                              <button class="btn btn-default icon-remove deleteSingle"  myId="" /></td>
									      </tr>
										  <?php }  ?>
								  </table>
<script>
$(document).ready(function() {
	$("#helpbtn").click( function(event) {
		$("#helpDiv").toggle();
	});
});
</script>
<?php require_once (DIR_ROOT."/bottom.php"); ?>