<?php
// Instanciar objecto
$usersMasterObj = new users_master();
$users = $usersMasterObj->getAllUsers($masterSystemDb);
?>

					
<div class="table-responsive">
    <table class="table table-bordered table-hover table-striped">
    <thead>
        <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Language</th>
            <th>Name</th>
            <th>Email</th>
            <th>Enabled</th>
            <th>Options</th>
        </tr>
    </thead>
    <tbody>
    
    <?php
    if( (is_array($users)) && (count($users)>0) ) {
    foreach($users as $user) { ?>
    
        <tr>
            <td><?= $user->get_id() ?></td>
            <td><?= $user->get_username() ?></td>
            <td><?= $user->get_language_description($masterMainDb) ?></td>
            <td><?= $user->get_name() ?></td>
            <td><?= $user->get_email() ?></td>
            <td><?= (($user->get_enabled()>0)?'Yes':'No') ?></td>
            <td class="alignRight">
                <button class="btn btn-default icon-pencil optionButton editSingleHeader" data-toggle="modal" data-backdrop="static" id="" name="" data-target="#addActionSelector" data-myScriptGetForm="<?= (PATH_ROOT."administration/users/layout/get_form_users.php") ?>" data-myScriptPostForm="<?= (PATH_ROOT."administration/users/scripts/save_form_users.php") ?>" data-myId="<?= $user->get_id() ?>"></button>
                <button class="btn btn-default optionButton icon-remove deleteSingleHeader" data-myId="<?= $user->get_id() ?>" data-myScriptPostForm="<?= (PATH_ROOT."administration/users/scripts/delete_form_users.php") ?>" />
            </td>
        </tr>
    
    <?php } }
    else { ?>
        <tr>
            <td colspan="7">No users defined!</td>
        </tr>
    <?php } ?>
    
    </tbody>
    </table>
</div> <!-- /.table-responsive -->