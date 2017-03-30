<?php require_once (dirname(__FILE__)."/../../../top_all.php"); ?>

<?php
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
		$obj = new user($post->id);
		$obj->load($masterSystemDb);
	}
}


// Instanciar classe
$usersMasterObj = new users_master();
$languages = $usersMasterObj->getAllLanguages($masterMainDb);
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
        <label for="fk_mygest_languages" class="col-md-4">Language</label>
        <div class="col-md-8">
            <select id="fk_mygest_languages" name="fk_mygest_languages" class="form-control">
            	<option value=""></option>
            	<?php if(is_array($languages))
    			foreach ( $languages as $language ) { ?>
                	<option value="<?= $language['id'] ?>" <?= ($obj?(($obj->get_fk_mygest_languages()==$language['id'])?('selected="selected"'):''):'') ?>><?= $language['description'] ?></option>
                <?php } ?>
            </select>
        </div>
    </div> <!-- /.form-group -->

    <div class="form-group">
        <label class="col-md-4">Username</label>
        <div class="col-md-8">
            <input type="text" id="username" value="<?= ($obj?$obj->get_username():'') ?>" name="username" class="form-control" />
        </div>
    </div> <!-- /.form-group -->
    
    <div class="form-group">
        <label class="col-md-4">Password</label>
        <div class="col-md-8">
            <input type="password" id="password" value="<?= ($obj?'********':'') ?>" name="password" class="form-control" />
        </div>
    </div> <!-- /.form-group -->
    
    <div class="form-group">
        <label class="col-md-4">Confirm Password</label>
        <div class="col-md-8">
            <input type="password" id="confirm_password" value="<?= ($obj?'********':'') ?>" name="confirm_password" class="form-control" />
        </div>
    </div> <!-- /.form-group -->
    
    <div class="form-group">
        <label class="col-md-4">Name</label>
        <div class="col-md-8">
            <input type="text" id="name" value="<?= ($obj?$obj->get_name():'') ?>" name="name" class="form-control" />
        </div>
    </div> <!-- /.form-group -->
    
    <div class="form-group">
        <label class="col-md-4">Email</label>
        <div class="col-md-8">
            <input type="text" id="email" value="<?= ($obj?$obj->get_email():'') ?>" name="email" class="form-control" />
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