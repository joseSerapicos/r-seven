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

	/* Header buttons */
	if(is_file($include_file_dir."header_buttons.php")) {
		// Header buttons
		include_once($include_file_dir."header_buttons.php");
	}
	/* /Header buttons */
}
/* /Includes automaticos ////////////////////////////////////////////////////////////////////*/


// Menu script
if( (!empty($include_file)) ) {
	if(is_file($include_file)) {
		include_once($include_file);
	}
}


/* Scripts que instanciam objectos apos refresh */ ?>
<script src="<?= PATH_ROOT ?>master/layout/js/Application.js"></script>
<?php /* /Scripts que instanciam objectos apos refresh */


/* Includes automaticos /////////////////////////////////////////////////////////////////////////*/
if(!empty($include_file_dir)) {
	/* Botoes do header que necessitam ser instanciados */
	if(is_file($include_file_dir."header_buttons.php")) {
		// Botoes do header que necessitam ser instanciados
		include_once(DIR_ROOT."header_scripts.php");
	}
	/* /Botoes do header que necessitam ser instanciados */
}
/* /Includes automaticos ////////////////////////////////////////////////////////////////////*/