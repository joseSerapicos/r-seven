<?php
include_once(DIR_ROOT."lib/functions.php");

include_once(DIR_ROOT."master/classes/mysql_db.class.php");
include_once(DIR_ROOT."master/classes/system.class.php");

require_once(DIR_ROOT."administration/users/classes/user.class.php");
require_once(DIR_ROOT."administration/users/classes/users.master.class.php");
require_once(DIR_ROOT."administration/stores/classes/store.class.php");
require_once(DIR_ROOT."administration/modules_menus/classes/module.class.php");
require_once(DIR_ROOT."administration/modules_menus/classes/module_menu.class.php");
include_once(DIR_ROOT."administration/users_permissions/classes/users_stores_menus_permissions.master.class.php");

// Para descontinuar
include_once(DIR_ROOT."master/classes/store_module_setting.class.php");

include_once(DIR_ROOT."master/classes/main.master.class.php");
?>