<?php require_once "top_simple.php"; 
include_once (DIR_ROOT . "classes/general/mysql_db.class.php");
// Acesso a base de dados principal (main)
$db_main = new mysql_db ( DB_HOST, DB_NAME, DB_USER, DB_PASS );
$db_main->connect_db ();
// Confiurar base de dados para log de erros
$db_main->set_db_error_log_obj($db_main);

include_once (DIR_ROOT . "classes/general/countries.class.php");

$countries = new countries();
$countries->load_from_ip($db_main,$_SERVER['REMOTE_ADDR']);
$language = $countries->get_default_lang();

include_once (DIR_ROOT . "langs/general/".strtolower($language).".inc.php");


?>


<div class="account-container stacked">

	

	<div class="content clearfix">

		

		<form action="./index.html" method="post">

		

			<h1><?=RESET_PASSWORD?></h1>

            

			<div class="login-fields">



					<p><?=RESET_TXT?></p>



					<div class="field">

						<label for="system"><?=SYSTEM?>:</label> <input type="text"

							id="system" name="system" value="" placeholder="<?=SYSTEM?>"

							class="form-control input-lg id-field"  required/>

					</div>

					<!-- /system -->

					

					<div class="field">

						<label for="password"><?=PASSWORD?>:</label> <input type="text"

							id="password" name="password" value="" placeholder="<?=PASSWORD?>"

							class="form-control input-lg email-field" required />

					</div>

					<!-- /field -->



				</div> <!-- /login-fields -->

			

			<div class="login-actions">

				

				<span class="login-checkbox">

				</span>

									

				<button class="login-action btn btn-primary"><?=BTN_SAVE?></button>

				

			</div> <!-- .actions -->

			

		</form>

		

	</div> <!-- /content -->

	

</div> <!-- /account-container -->





<!-- Text Under Box --><!-- /login-extra -->







</body>

</html>

