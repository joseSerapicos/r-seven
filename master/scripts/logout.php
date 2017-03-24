<?php
require_once(dirname(__FILE__).'/../../top1_conf.php');

session_name("mygest");
session_start();

session_destroy();
header("location: ".PATH_ROOT."master/layout/login.php");

exit();
?>