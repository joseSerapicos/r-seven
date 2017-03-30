<?php
// Percorre array de forma recursiva para retirar as slashes dos elementos.
// Input:
//    $var_array: array a percorrer.
function cleanSlashesArray($var_array)
{
	$old = array("\\\\\'", '\"'); // Necessario apos serialize em JQuery
	$new   = array("'", '"');

	if(is_array($var_array))
	foreach($var_array as $key => $value)
	{
		$new_value = false;
		
		if(is_array($value)) {
			$new_value = cleanSlashesArray($value);
		}
		else {
			$new_value = str_replace($old, $new, $value);
		}
		$var_array[$key] = $new_value;
	}
	return($var_array);
}


// Imprime as permissoes.
// Input:
//    $var_permission: array com as permissoes.
function printPermission($var_permission)
{
	$spanHtml = " [";
	$spanTitle = "Permission: ";
	
	if($var_permission['read']) { $spanHtml .= "R"; $spanTitle .= "Read "; }
	if($var_permission['edit']) { $spanHtml .= "E"; $spanTitle .= "Edit "; }
	if($var_permission['add']) { $spanHtml .= "A"; $spanTitle .= "Add "; }
	$spanHtml .= "]";
	
	echo('<span title="'.$spanTitle.'">'.$spanHtml.'</span>');
    
    return(true);
}