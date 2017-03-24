<?php require_once (dirname(__FILE__)."/../../top_simple.php");
include_once (DIR_ROOT."master/classes/mysql_db.class.php");
// Acesso a base de dados principal (main)
$db_main = new mysql_db ( DB_HOST, DB_NAME, DB_USER, DB_PASS );
$db_main->connect_db ();
// Confiurar base de dados para log de erros
$db_main->set_db_error_log_obj($db_main);

include_once (DIR_ROOT . "master/classes/countries.class.php");

$countries = new countries();
$countries->load_from_ip($db_main,$_SERVER['REMOTE_ADDR']);
$language = $countries->get_default_lang();

include_once (DIR_ROOT . "langs/general/".strtolower($language).".inc.php");

/*SUBMIT*/
if(!empty($_POST['system']) &&  !empty($_POST['username'])){
	print "submited";
}

?>



<div class="account-container stacked">

	

	<div class="content clearfix">

		
		<form id="frm_reset" action="">

			<h1><?=LOST_PASSWORD?></h1>

            

			<div class="login-fields">



					<p><?=LOST_TXT?></p>



					<div class="field">

						<label for="system"><?=SYSTEM?>:</label> <input type="text"

							id="system" name="system" value="" placeholder="<?=SYSTEM?>"

							class="form-control input-lg id-field"  required/>

					</div>

					<!-- /system -->

					

					<div class="field">

						<label for="username"><?=USERNAME?>:</label> <input type="text"

							id="username" name="username" value="" placeholder="<?=USERNAME?>"

							class="form-control input-lg username-field" required />

					</div>

					<!-- /field -->



				</div> <!-- /login-fields -->

			

			<div class="login-actions">

				

				<span class="login-checkbox">

				</span>

									

				<button class="login-action btn btn-primary"><?=BTN_REQUEST?></button>

				

			</div> <!-- .actions -->

			

		</form>

		

	</div> <!-- /content -->

	

</div> <!-- /account-container -->





<!-- Text Under Box --><!-- /login-extra -->

	<!-- /login-extra -->



	<!-- Le javascript
================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
    <script src="<?= PATH_ROOT ?>lib/functions.js"></script>
	<script src="./js/libs/jquery-1.9.1.min.js"></script>
	<script src="./js/libs/jquery-ui-1.10.0.custom.min.js"></script>
	<script src="./js/libs/bootstrap.min.js"></script>

	<script src="./js/Application.js"></script>

	<script src="./js/demo/signin.js"></script>
    
    <script type="text/javascript">
    
	$("#frm_reset").submit( function() {

		submit_form("<?= PATH_ROOT ?>php/master/forms/request_reset.php", "frm_reset", "frm_reset_return");
		
		return(false);
	}); 
    
	function frm_reset_return(var_data)
	{

		switch(var_data['status'])
		{
			case 0:	
					$("#system").removeClass("id-field");
					$("#system").addClass("id-field_error");
					$("#username").removeClass("username-field");
					$("#username").addClass("username-field_error");
					break;
			case 1: alert('Enviado com Sucesso');
					break;
		}
	}
	
    </script>





</body>

</html>

