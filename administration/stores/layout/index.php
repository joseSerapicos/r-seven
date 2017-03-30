<?php
// Include das classes
require_once(DIR_ROOT."/administration/stores/classes/stores.master.class.php");

// Instanciar objecto
$storesMasterObj = new stores_master();
$stores = $storesMasterObj->getAllStores($masterSystemDb);
?>

					
<div class="table-responsive">
    <table class="table table-bordered table-hover table-striped">
    <thead>
        <tr>
            <th>Id</th>
            <th>Master store</th>
            <th>Name</th>
            <th>Legal name</th>
            <th>NIF</th>
            <th>RNAVT</th>
            <th>Address (1)</th>
            <th>Address (2)</th>
            <th>Address (3)</th>
            <th>Postal code</th>
            <th>Country</th>
            <th>Email</th>
            <th>Web page</th>
            <th>Phone (1)</th>
            <th>Phone (2)</th>
            <th>Phone (3)</th>
            <th>Enabled</th>
            <th>Options</th>
        </tr>
    </thead>
    <tbody>
    
    <?php
    if( (is_array($stores)) && (count($stores)>0) ) {
    foreach($stores as $store) { ?>
    
        <tr>
            <td><?= $store->get_id() ?></td>
            <td><?= $store->get_fk_stores() ?></td>
            <td><?= $store->get_name() ?></td>
            <td><?= $store->get_legal_name() ?></td>
            <td><?= $store->get_nif() ?></td>
            <td><?= $store->get_rnavt() ?></td>
            <td><?= $store->get_address_1() ?></td>
            <td><?= $store->get_address_2() ?></td>
            <td><?= $store->get_address_3() ?></td>
            <td><?= $store->get_postal_code() ?></td>
            <td><?= $store->get_country() ?></td>
            <td><?= $store->get_email() ?></td>
            <td><?= $store->get_web_page() ?></td>
            <td><?= $store->get_phone_1() ?></td>
            <td><?= $store->get_phone_2() ?></td>
            <td><?= $store->get_phone_3() ?></td>
            <td><?= (($store->get_enabled()>0)?'Yes':'No') ?></td>
            <td class="alignRight">
                <button class="btn btn-default icon-pencil optionButton editSingleHeader" data-toggle="modal" data-backdrop="static" id="" name="" data-target="#addActionSelector" data-myScriptGetForm="<?= (PATH_ROOT."administration/stores/layout/get_form_stores.php") ?>" data-myScriptPostForm="<?= (PATH_ROOT."administration/stores/scripts/save_form_stores.php") ?>" data-myId="<?= $store->get_id() ?>"></button>
                <button class="btn btn-default optionButton icon-remove deleteSingleHeader" data-myId="<?= $store->get_id() ?>" data-myScriptPostForm="<?= (PATH_ROOT."administration/stores/scripts/delete_form_stores.php") ?>" />
            </td>
        </tr>
    
    <?php } }
    else { ?>
        <tr>
            <td colspan="18">No stores defined!</td>
        </tr>
    <?php } ?>
    
    </tbody>
    </table>
</div> <!-- /.table-responsive -->