<?php
require_once (dirname ( __FILE__ ) . "/../../../top.php"); // Carregamento do top                                                    

/*Aviation*/
include_once (DIR_ROOT . "travel_agency/classes/aviation.master.class.php");

$aviation = new aviation();
$aviation->client_list($masterSystemDb);
$aviation_head = $aviation->get_aviation_head();

//echo "<pre>";print_r($aviation_head);echo "</pre>";

?>

<table width="100%" border="1" class="table table-bordered table-hover table-striped">
      <tr>
        <th width="2%">PNR</th>
        <th width="34%">Company</th>
        <th width="12%">Ticket</th>
        <th width="26%">Pax</th>
        <th width="13%">IATA</th>
        <th width="13%">Action</th>
      </tr>
      <?php foreach($aviation_head as $ahead){ ?>
      <tr>
        <td><?=$ahead->get_pnr();?></td>
        <td>&nbsp;
          <?=$ahead->get_general_company();?>
        </td>
        <td><?=$ahead->get_ticket();?></td>
      	<td><?=$ahead->get_pax();?></td>
        <td><?=$ahead->get_agency();?></td>
           <td> <button class="btn btn-default icon-edit" title="Edit" />
          <button class="btn btn-default icon-remove deleteSingle"  myId="" /></td>
      </tr>
      <?php  }  ?>
</table>


<?php require_once (DIR_ROOT."/bottom.php"); ?>