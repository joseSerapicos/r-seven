<?php
require_once (dirname(__FILE__)."/../../../top_all.php"); // Carregamento do top

/* Header buttons */
$headerButtons = array();
// conf
$headerButtons['conf'] = array();
$headerButtons['conf']['type'] = "table";
$headerButtons['conf']['addScripts'] = false; // Adiciona os scripts para os botoes
// add
$headerButtons['add'] = array();
$headerButtons['add']['enabled'] = false;
// deleteAll
$headerButtons['deleteAll'] = array();
$headerButtons['deleteAll']['enabled'] = false;
// checkAll
$headerButtons['checkAll'] = array();
$headerButtons['checkAll']['enabled'] = false;
/* /Header buttons */

require_once (DIR_ROOT."top.php"); // Carregamento do top

// Includes : Ficheiros necessarios
include_once (DIR_ROOT . "development/framework/classes/icon.class.php");
include_once (DIR_ROOT . "development/framework/classes/framework.master.class.php");

// Instanciar classe development_db_error_log_array
$obj_framework = new framework_master();
$icons = $obj_framework->getIcons($masterMainDb);
?>

<!-- Icons -->
<table class="table table-bordered table-striped">    
<thead><tr>						
    <th>ID</th>
    <th>Name</th>
    <th>Icon</th>
    <th>ID</th>
    <th>Name</th>
    <th>Icon</th>
    <th>ID</th>
    <th>Name</th>
    <th>Icon</th>
    <th>ID</th>
    <th>Name</th>
    <th>Icon</th>
</tr></thead>

<tbody>
    <?php
    $td_number = 0;
    if(is_array($icons))
    foreach ( $icons as $tmp ) {
        if($td_number==0) echo('<tr>'); ?>
        
        <td><?= $tmp->get_id() ?></td>
        <td><?= $tmp->get_name() ?></td>
        <td><i class="<?= $tmp->get_name() ?>"></i></td>

        <?php
        $td_number++;
        if($td_number==4)
        {
            echo('</tr>');
            $td_number=0;
        }
    }
    
    // Acertar colunas no final
    if($td_number>0)
    {
        for($td_number;$td_number<4;$td_number++)
        {
            echo("<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>");
        }
        echo("</tr>");
    }?>
</tbody>
</table>


<?php require_once(DIR_ROOT."bottom.php"); ?>