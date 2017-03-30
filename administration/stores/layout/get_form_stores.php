<?php require_once (dirname(__FILE__)."/../../../top_all.php"); ?>

<?php
// Include de classes
require_once(DIR_ROOT."/administration/stores/classes/stores.master.class.php");


// Obter post enviado por jquery
$post = array();
// Objecto no caso de edit
$obj = false;

if(!empty($_POST['json_post']))
{
	$post = json_decode(str_replace("\\", "", $_POST['json_post']));

	// Percorrer object
	if(is_object($post))
	{
		$obj = new store($post->id);
		$obj->load($masterSystemDb);
	}
}


// Instanciar classe
$storesMasterObj = new stores_master();
$stores = $storesMasterObj->getAllStores($masterSystemDb);
?>


<form role="form" class="form-horizontal col-md-7">

	<?php if($obj) { ?>
        <div class="form-group">
            <label class="col-md-4">Id</label>
            <div class="col-md-8">
                <?= $obj->get_id() ?>
                <input type="hidden" id="id" name="id" value="<?= $obj->get_id() ?>" />
            </div>
        </div> <!-- /.form-group -->
    <?php } ?>

	<div class="form-group ">
        <label for="fk_stores" class="col-md-4">Master store</label>
        <div class="col-md-8">
            <select id="fk_stores" name="fk_stores" class="form-control">
            	<option value=""></option>
            	<?php if(is_array($stores))
    			foreach ( $stores as $store ) { ?>
                	<option value="<?= $store->get_id() ?>" <?= ($obj?(($obj->get_fk_stores()==$store->get_id())?('selected="selected"'):''):'') ?>><?= $store->get_name() ?></option>
                <?php } ?>
            </select>
        </div>
    </div> <!-- /.form-group -->

    <div class="form-group">
        <label class="col-md-4">Name</label>
        <div class="col-md-8">
            <input type="text" id="name" value="<?= ($obj?$obj->get_name():'') ?>" name="name" class="form-control" />
        </div>
    </div> <!-- /.form-group -->
    
    <div class="form-group">
        <label class="col-md-4">Legal name</label>
        <div class="col-md-8">
            <input type="text" id="legal_name" value="<?= ($obj?$obj->get_legal_name():'') ?>" name="legal_name" class="form-control" />
        </div>
    </div> <!-- /.form-group -->
    
    <div class="form-group">
        <label class="col-md-4">NIF</label>
        <div class="col-md-8">
            <input type="text" id="nif" value="<?= ($obj?$obj->get_nif():'') ?>" name="nif" class="form-control" />
        </div>
    </div> <!-- /.form-group -->
    
    <div class="form-group">
        <label class="col-md-4">RNAVT</label>
        <div class="col-md-8">
            <input type="text" id="rnavt" value="<?= ($obj?$obj->get_rnavt():'') ?>" name="rnavt" class="form-control" />
        </div>
    </div> <!-- /.form-group -->
    <div class="form-group">
        <label class="col-md-4">Address (1)</label>
        <div class="col-md-8">
            <input type="text" id="address_1" value="<?= ($obj?$obj->get_address_1():'') ?>" name="address_1" class="form-control" />
        </div>
    </div> <!-- /.form-group -->
    <div class="form-group">
        <label class="col-md-4">Address (2)</label>
        <div class="col-md-8">
            <input type="text" id="address_2" value="<?= ($obj?$obj->get_name():'') ?>" name="address_2" class="form-control" />
        </div>
    </div> <!-- /.form-group -->
    <div class="form-group">
        <label class="col-md-4">Address (3)</label>
        <div class="col-md-8">
            <input type="text" id="address_3" value="<?= ($obj?$obj->get_name():'') ?>" name="address_3" class="form-control" />
        </div>
    </div> <!-- /.form-group -->
    <div class="form-group">
        <label class="col-md-4">Postal code</label>
        <div class="col-md-8">
            <input type="text" id="postal_code" value="<?= ($obj?$obj->get_postal_code():'') ?>" name="postal_code" class="form-control" />
        </div>
    </div> <!-- /.form-group -->
    <div class="form-group">
        <label class="col-md-4">Country</label>
        <div class="col-md-8">
            <input type="text" id="country" value="<?= ($obj?$obj->get_country():'') ?>" name="country" class="form-control" />
        </div>
    </div> <!-- /.form-group -->
    <div class="form-group">
        <label class="col-md-4">Email</label>
        <div class="col-md-8">
            <input type="text" id="email" value="<?= ($obj?$obj->get_name():'') ?>" name="email" class="form-control" />
        </div>
    </div> <!-- /.form-group -->
    <div class="form-group">
        <label class="col-md-4">Web page</label>
        <div class="col-md-8">
            <input type="text" id="web_page" value="<?= ($obj?$obj->get_web_page():'') ?>" name="web_page" class="form-control" />
        </div>
    </div> <!-- /.form-group -->
    <div class="form-group">
        <label class="col-md-4">Phone (1)</label>
        <div class="col-md-8">
            <input type="text" id="phone_1" value="<?= ($obj?$obj->get_phone_1():'') ?>" name="phone_1" class="form-control" />
        </div>
    </div> <!-- /.form-group -->
    <div class="form-group">
        <label class="col-md-4">Phone (2)</label>
        <div class="col-md-8">
            <input type="text" id="phone_2" value="<?= ($obj?$obj->get_phone_2():'') ?>" name="phone_2" class="form-control" />
        </div>
    </div> <!-- /.form-group -->
    
    <div class="form-group">
        <label class="col-md-4">Phone (3)</label>
        <div class="col-md-8">
            <input type="text" id="phone_3" value="<?= ($obj?$obj->get_phone_3():'') ?>" name="phone_3" class="form-control" />
        </div>
    </div> <!-- /.form-group -->
    
	<div class="form-group ">
        <label for="enabled" class="col-md-4">Enabled</label>
        <div class="col-md-8">
            <select id="enabled" name="enabled" class="form-control">
            	<option value="0" <?= ($obj?(($obj->get_enabled()==0)?('selected="selected"'):''):'') ?>>No</option>
                <option value="1" <?= ($obj?(($obj->get_enabled()==1)?('selected="selected"'):''):'') ?>>Yes</option>
            </select>
        </div>
    </div> <!-- /.form-group -->

</form>