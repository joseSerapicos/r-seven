<?php
// Top
require_once(dirname(__FILE__)."/top_all.php");

// Path
$include_file = ($masterMenuObj?($masterMenuObj->get_filepath_content($masterMainDb)):($masterModuleObj?($masterModuleObj->get_filepath_content($masterMainDb)):(false)));
$include_file = ($include_file?(DIR_ROOT.$include_file):false);
$include_file_dir = ($include_file?(substr($include_file, 0, (strrpos($include_file, "/")+1))):false);

/* Includes automaticos /////////////////////////////////////////////////////////////////////////*/
if(!empty($include_file_dir)) {
	/* Lang file */
	$lang = $masterMainObj->get_lang();
	if( (!empty($lang)) ) {
		$include_file_lang = ($include_file_dir."../langs/".$lang.".inc.php");
		if(is_file($include_file_lang)) {
			include_once($include_file_lang);
		}
	}
	/* /Lang file */

	/* Header buttons and Header */
	if(is_file($include_file_dir."header_buttons.php")) {
		// Header buttons
		include_once($include_file_dir."header_buttons.php");
		// Header
		include_once(DIR_ROOT."header.php");
	}
	/* /Header buttons and Header */
}
/* /Includes automaticos ////////////////////////////////////////////////////////////////////*/
?>