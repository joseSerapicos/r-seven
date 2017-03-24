<?php
session_name ( "mygest" );
session_start ();
if (empty ( $_SESSION ['system'] ) || empty ( $_SESSION ['user'] )) {
	session_destroy ();
	header ( "location: ".PATH_LAYOUT."general/login.php" );
	exit ();
}
?>