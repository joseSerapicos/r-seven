<?php require_once (dirname(__FILE__)."/../../top1_conf.php");
include_once (DIR_ROOT."master/classes/mysql_db.class.php");
$self_page = $_SERVER['SERVER_NAME']. $_SERVER['REQUEST_URI'];


/*
// Acesso a base de dados principal (main)
$db_main = new mysql_db ( DB_HOST, DB_NAME, DB_USER, DB_PASS );
$db_main->connect_db ();
// Confiurar base de dados para log de erros
$db_main->set_db_error_log_obj($db_main);

include_once (DIR_ROOT."master/classes/countries.class.php");

$countries = new countries();
$countries->load_from_ip($db_main,$_SERVER['REMOTE_ADDR']);
$language = $countries->get_default_lang();

include_once (DIR_ROOT."langs/general/".strtolower($language).".inc.php");
include_once (DIR_ROOT."langs/errors/".strtolower($language).".inc.php");
*/

require_once (dirname(__FILE__)."/../classes/payme.master.class.php"); 

$hash_key = $_GET['hash'];

$hash_key = rawurldecode($hash_key);
$PayMe = new payme();
$PayMe->read_hash($hash_key); //abrir 

if(!$PayMe->get_error()){
	$payme_users_head = $PayMe->get_payme_users_head(); //Detalhe Nome/Desc/etc
	$payme_users_detail_html =  $PayMe->get_payme_users_detail_html(); //Detalhe Botoes
	
	$status = $payme_users_head->get_status();
}else{
	$status = "D";
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>PayMe! :: MyGest</title>

<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes">

<link href="/mygest/master/layout/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
<link href="/mygest/master/layout/css/bootstrap-responsive.min.css" rel="stylesheet"
	type="text/css" />

<link href="/mygest/master/layout/css/font-awesome.min.css" rel="stylesheet">
<link
	href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600"
	rel="stylesheet">

<link href="/mygest/master/layout/css/ui-lightness/jquery-ui-1.10.0.custom.min.css"
	rel="stylesheet">

<link href="/mygest/master/layout/css/base-admin-3.css" rel="stylesheet">
<link href="/mygest/master/layout/css/base-admin-3-responsive.css" rel="stylesheet">

<link href="/mygest/master/layout/css/pages/signin.css" rel="stylesheet" type="text/css">

<link href="/mygest/master/layout/css/custom.css" rel="stylesheet">

</head>

<body>

	<nav class="navbar navbar-inverse" role="navigation">

		<div class="container">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse"
					data-target=".navbar-ex1-collapse">
					<span class="sr-only">Toggle navigation</span> <i class="icon-cog"></i>
				</button>
			  <a class="navbar-brand"><img
					src="/mygest/master/layout/img/logo_mygest.png"></a>
			</div>
			<!-- /.navbar-collapse -->
		</div>
		<!-- /.container -->
	</nav>


<div class="widget header"></div>

	<div class="container">
		
        
		<div class="row" >
        <?php 
		switch ($status){
			case "C": ?>
            <div class="alert alert-success">Paid!</div>
            <?php
			break;
			case "O": ?>
            <div class="alert alert-info">Open</div>
            <?php
			break;
			case "PD": ?>
            <div class="alert alert-info">Pending from System</div>
            <?php
			break;
			case "F":?>
            <div class="alert alert-danger">Closed!</div>
            <?php
			break;
			case "D":?>
            <div class="alert alert-danger">Deleted or Not Exist!</div>
            <?php
			die();
			break;
		}
		
		?>
                <div class="col-md-8 col-xs-12">
    				<div class="widget stacked">
                        <div class="widget-header">
                            <h3>Description</h3>
                        </div>
                        
                        <div class="widget-content">
                            <b>Invoice:</b>
                            <?=$payme_users_head->get_id();?>
                            <br>
                            <b>Description:</b> <?=$payme_users_head->get_description();?>
                      </div>
                         <div class="widget-content">
                            <b>Value:</b>
                            <?=$payme_users_head->get_total();?> <?=$payme_users_head->get_currency_code();?>
                         </div>
                    </div>
                </div>
            <?php if($status == "O"){ ?>
			<div class="col-md-4 col-xs-12">
    				<div class="widget stacked">
                        <div class="widget-header">
                            <h3 style="text-align:center">Payment</h3>
                        </div>
                        <?php	/*Place Generated HTML from Payments */
						if($payme_users_detail_html){
							
								foreach($payme_users_detail_html as $detail_html){?>
                      <div class="widget-content" align="center">
                            <?=$detail_html->get_code();?>
                        </div>
                        <?php }//end foreach($payme_users_detail_html as $detail_html)
						} //end if(!$payme_users_detail_html?>
            	</div>
			</div>
            <?php } //end if($status == "O"?>
 		</div>
	</div>
 <!-- main -->
</body>
</html>