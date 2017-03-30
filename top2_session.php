<?php
session_name("mygest");
session_start();
if(empty($_SESSION['masterSystem']) || empty($_SESSION['masterUser'])) {
	session_destroy();
	header("location: ".PATH_ROOT."master/layout/login.php");
	exit();
}
?>