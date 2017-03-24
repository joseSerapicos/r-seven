<?php
// Top
//require_once(dirname(__FILE__)."/top_all_with_lang.php"); // Nao necessita, ja se encontra carregado no index

// Path
$include_file = ($masterMenuObj?($masterMenuObj->get_filepath_content()):($masterModuleObj?($masterModuleObj->get_filepath_content()):(false)));
$include_file = ($include_file?(DIR_ROOT.$include_file):false);
$include_file_dir = ($include_file?(substr($include_file, 0, (strrpos($include_file, "/")+1))):false);

// Header buttons
if( (!empty($include_file_dir)) ) {
	if(is_file($include_file_dir."header_buttons.php")) {
		include_once($include_file_dir."header_buttons.php");
	}
}

// Header
include_once(DIR_ROOT."header.php");
?>