<?php require_once (dirname(__FILE__)."/../../../top_all.php"); ?>

<?php
// Include de classes
include_once(DIR_ROOT."[Filepath for classe]");


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
		$obj = new [Name of class]($post->id);
		$obj->load([Data base]);
	}
}

?>


<form role="form" class="form-horizontal col-md-7">
	<h2>Code here...</h2>
</form>