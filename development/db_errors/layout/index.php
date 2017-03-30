<?php
include_once (DIR_ROOT."development/db_errors/classes/db_error.class.php");
include_once (DIR_ROOT."development/db_errors/classes/db_errors.master.class.php");


// Instanciar classe
$obj_db_errors = new db_errors_master( $masterMainDb );
$db_errors = $obj_db_errors->get_db_errors();
?>


<form id="deleteAllActionSelector" name="deleteAllActionSelector">
<table class="table table-bordered table-striped">
    
<thead><tr>
    <th>ID</th>

    <th>SQL error</th>

    <th>SQL</th>

    <th>DB host</th>

    <th>DB name</th>

    <th>DB username</th>

    <th>Insert time</th>
    
    <th>Options</th>
    
    <th></th>
</tr></thead>

<tbody>
    <?php
    if (is_array ( $db_errors ))
    if (count ( $db_errors ) > 0) {
        foreach ( $db_errors as $db_error ) { ?>
            <tr>
                <td><?= $db_error->get_id() ?></td>

                <td><?= $db_error->get_sql_error() ?></td>

                <td><?= $db_error->get_sql() ?></td>

                <td><?= $db_error->get_db_host() ?></td>

                <td><?= $db_error->get_db_name() ?></td>

                <td><?= $db_error->get_db_username() ?></td>

                <td><?= $db_error->get_insert_time() ?></td>
                
                <td class="alignRight"><button class="btn btn-default optionButton icon-remove deleteSingleHeader" data-myId="<?= $db_error->get_id() ?>"></button></td>
                
                <td><input type="checkbox" id="chk[<?= $db_error->get_id() ?>]" name="chk[<?= $db_error->get_id() ?>]" class="checkAllActionSelector" /></td>
            </tr>
        <?php
        }
    } else { ?>
        <tr>
            <td colspan="9">Database error log is empty!</td>
        </tr>
    <?php } ?>
</tbody>
</table>
</form>