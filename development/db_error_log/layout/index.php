<?php
include_once (DIR_ROOT."development/db_error_log/classes/development_db_error_log.class.php");
include_once (DIR_ROOT."development/db_error_log/classes/development_db_error_log_array.class.php");


// Instanciar classe development_db_error_log_array
$obj_db_error_log_array = new development_db_error_log_array ( $masterMainDb );
$db_error_log_array = $obj_db_error_log_array->get_development_db_error_log_array ();
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
    if (is_array ( $db_error_log_array ))
    if (count ( $db_error_log_array ) > 0) {
        foreach ( $db_error_log_array as $db_error_log ) { ?>
            <tr>
                <td><?= $db_error_log->get_id() ?></td>

                <td><?= $db_error_log->get_sql_error() ?></td>

                <td><?= $db_error_log->get_sql() ?></td>

                <td><?= $db_error_log->get_db_host() ?></td>

                <td><?= $db_error_log->get_db_name() ?></td>

                <td><?= $db_error_log->get_db_username() ?></td>

                <td><?= $db_error_log->get_insert_time() ?></td>
                
                <td><button class="btn btn-default icon-remove deleteSingleHeader" data-myId="<?= $db_error_log->get_id() ?>" /></td>
                
                <td><input type="checkbox" id="chk[<?= $db_error_log->get_id() ?>]" name="chk[<?= $db_error_log->get_id() ?>]" class="checkAllActionSelector" /></td>
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