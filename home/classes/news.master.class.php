<?php
/* FILE_INFO \___________________________________________________
|  
|  NAME: news.master.class.php
|  PATH: classes
|  DESCRIPTION: Classe Master da News
|
|  AUTHOR: Adriano Mendes/ Jose Serapicos
|  CREATE DATE: 15JAN2014
|  MODIFICATION DATE: 15JAN2014
|____________________________________________________________*/


class news_master {
		
	private $error;
	
	// ////////////////
	// Constructor //
	// //////////////
	
	// Default //
	public function __construct() {
		$args = func_get_args ();
		$num_args = func_num_args ();
		$method = "__construct" . $num_args;
		
		if (method_exists ( $this, $method ))
			call_user_func_array ( array (
					$this,
					$method 
			), $args );
		else
			die ( "CONSTRUCT '" . $method . "' NOT DEFINED!" );
	}
	
	// 0 Args //
	public function __construct0() {

		$this->error = false;
	}
	
	// ////////////////
	// Set methods //
	// //////////////
	
	// ////////////////
	// Get methods //
	// //////////////
	
	// Retorna array//
	
	public function get_news_new_array() {
		return ($this->news_new_array);
	}
	
	public function get_error() {
		return ($this->error);
	}
	// ////////////////
	// All methods //
	// //////////////
	
	// Carrega toda informacao a partir da base de dados //
	public function news_new($client_db,$username,$obj_general,$obj_user) {
		
		$this->error = false;
		
		/*Includes*/
		include_once (dirname(__FILE__) . "/news.mygest.class.php");
		//include_once (dirname(__FILE__) . "/news.class.php");
		
		$modules = $obj_general->get_modules($_SESSION['store'],$client_db);
		$client_lang_id = $obj_user->get_fk_mygest_languages();
		
		/*Carrega Noticias sem modulo definido*/
		$obj_news =  new news();
		$client_lang_id;
		$news_info = $obj_news->get_info_by_module($client_db,0,1,$client_lang_id);
		$news_array = $obj_news->get_info_by_module_array();
		$add_news['ALL'] = $news_array;
		
		//echo "<pre>";print_r($modules);echo "</pre>";
		/*Carrega Noticias de Modulos Activos*/
		foreach($modules as $module){
			$module_id = $module->get_fk_mygest_modules_info();
			$module_name = $module->get_name();
			
			$obj_news =  new news();
			$news_info = $obj_news->get_info_by_module($client_db,$module_id,1,$client_lang_id);
			$news_array = $obj_news->get_info_by_module_array();
			
			$add_news[$module_name] = $news_array;
			//$add_news[$module_id]['name'] = $module_name;
		}
		
		/*Modulo principal home*/

		$error = false;
		
		if($error){
			$this->error = "news.master.class error";
			return (false);
		}else{
			//adiciona no Objecto
			$this->news_new_array = $add_news; 
			return (true);
		}
		
	}
	public function get_news_by_id($client_db,$news_id,$obj_user) {
		$this->error = false;
		
		/*Includes*/
		include_once (dirname(__FILE__) . "/news.mygest.class.php");
		
		
		$client_lang_id = $obj_user->get_fk_mygest_languages(); //vem pelo obj_user
		
		$obj_news =  new news();

		$news_info = $obj_news->get_info_by_id($client_db,$news_id,1,$client_lang_id);
		//echo "<pre>";print_r($news_info);echo "</pre>";
		$news_array = $obj_news->get_info_by_id_array();
		//echo "<pre>";print_r($news_array);echo "</pre>";
		
		$error = false;
		
		if($error){
			$this->error = "news.master.class error";
			return (false);
		}else{
			//adiciona no Objecto
			$this->news_new_array = $news_array; 
			return (true);
		}
		
	}
	public function get_news_by_module($client_db,$username,$obj_general,$obj_user,$module_id) {
		
		$this->error = false;
		
		/*Includes*/
		include_once (dirname(__FILE__) . "/news.mygest.class.php");
		//include_once (dirname(__FILE__) . "/news.class.php");
		
		
		/* Param segurança
		
		$modules = $obj_general->get_modules($_SESSION['store'],$client_db);
		
		foreach($modules as $module){
			$moduleid = $module->get_fk_mygest_modules_info();
			
		}*/
		
		//echo "<pre>";print_r($modules);
		$client_lang_id = $obj_user->get_fk_mygest_languages();
		
		/*Carrega Noticias sem modulo definido*/
		$obj_news =  new news();

		$news_info = $obj_news->get_info_by_module($client_db,$module_id,1,$client_lang_id);
		//echo "<pre>";print_r($news_info);echo "</pre>";
		$news_array = $obj_news->get_info_by_module_array();
		//echo "<pre>";print_r($news_array);echo "</pre>";
		
		/*Modulo principal home*/

		$error = false;
		
		if($error){
			$this->error = "news.master.class error";
			return (false);
		}else{
			//adiciona no Objecto
			$this->news_new_array = $news_array; 
			return (true);
		}
		
	}
	
	
	// Destructor //
	public function __destruct() {
	}
}

?>