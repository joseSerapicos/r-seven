<?php
include_once ('./top1_conf.php');

session_name ( "mygest" );
session_start ();

session_destroy ();
header ( "location: ".PATH_LAYOUT."general/login.php" );

exit ();
?>