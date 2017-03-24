<?php
require_once (dirname ( __FILE__ ) . "/../../top.php"); // Carregamento do top                                                    

// Includes : Ficheiros necessarios
//include_once (DIR_ROOT . "classes/development/development_framework.class.php");
//include_once (DIR_ROOT . "classes/development/development_framework_array.class.php");
?>

<table width="100%" border="1" class="table table-bordered table-hover table-striped">
										  <tr>
										    <th width="52%">Client</th>
										    <th width="22%">Payment Method</th>
										    <th width="11%">Status</th>
										    <th width="15%">Action</th>
									      </tr>
										  <?php //foreach($myclick_client_list as $client_list){ ?>
										  <tr>
										    <td>id - nome</td>
										    <td>xpto</td>
										    <td>
                                              <button class="btn btn-default icon-remove-sign" status="removed" myId="" />
                                              <button class="btn btn-success icon-ok-sign" status="paid" myId="" />
                                              <button class="btn btn-warning icon-minus-sign" status="deleted" myId="" />
										      <!-- /btn-group --></td>
                                               <td> <button class="btn btn-default icon-edit" title="Edit" />
                                              <button class="btn btn-default icon-envelope sendEmail"  myId="" />
                                              <button class="btn btn-default icon-remove deleteSingle"  myId="" /></td>
									      </tr>
										  <?php //}  ?>
								  </table>

<?php require_once (DIR_ROOT."/bottom.php"); ?>