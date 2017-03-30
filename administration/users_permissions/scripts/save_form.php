<?php require_once (dirname(__FILE__)."/../../../top_all.php"); ?>

<?php
// Obter post enviado por jquery
$post = false;
// Registo de erros
$errors = array();


// Atraves de serialize (formulario completo)
if(!empty($_POST['serialize_post']))
{
	parse_str($_POST['serialize_post'], $post);
	$post = cleanSlashesArray($post);


	// Variaveis
	$user = $post['user'];
	$store = $post['store'];
	$menus = array();
	$readPermissions = $post['checkRead'];
	$editPermissions = $post['checkEdit'];
	$addPermissions = $post['checkAdd'];
	
	if(is_array($readPermissions))
	foreach($readPermissions as $key => $readPermission)
	{
		$menus[$key] = (empty($menus[$key])?1:($menus[$key]+1));
	}
	if(is_array($editPermissions))
	foreach($editPermissions as $key => $editPermission)
	{
		$menus[$key] = (empty($menus[$key])?2:($menus[$key]+2));
	}
	if(is_array($addPermissions))
	foreach($addPermissions as $key => $addPermission)
	{
		$menus[$key] = (empty($menus[$key])?4:($menus[$key]+4));
	}
	
	if(!empty($user) && !empty($store))
	{
		$obj = new users_stores_menus_permissions_master();
		$obj->saveUserStorePermissions($masterSystemDb, $user, $store, $menus, $masterUserObj->get_username());
	}
}

// Output
$output = array();
$output['msg'] = array();
$output['msg']['type'] = "success";
$output['msg']['title'] = "Success";
$output['msg']['text'] = "This data has been saved!";

echo json_encode($output);
exit();
?>