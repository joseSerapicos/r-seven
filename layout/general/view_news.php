<?php
require_once (dirname ( __FILE__ ) . "/top.php")
; 

/*Listagem de Noticias*/
include_once (DIR_ROOT. "/classes/general/news.master.class.php"); // Carregamento do top 

/*Parametros POST*/
$id_news = addslashes($_POST['post']['id_news']);
$module_id = addslashes($_POST['post']['module_id']);

/*Classe News*/
$news = new news_master();

if(!empty($id_news)){
	$news_list = $news->get_news_by_id($db_main,$id_news,$obj_user);
}else{
	$news_list = $news->get_news_by_module($db_main,$obj_user->get_username(),$obj_general,$obj_user,$module_id);

}
$new_list_array = $news->get_news_new_array();

//echo "<pre>";print_r($new_list_array);echo "</pre>";
?>


<div class="main">

	<div class="container">

		
		<div class="row" >
			<div class="col-md-12">
<div class="widget stacked">
					<div class="widget-header">
						<i class="<?= ($obj_module?$obj_module->get_icon($db_main):'') ?>"></i>
						<h3><?= ($obj_module?$obj_module->get_name():'') ?><?= ($obj_menu?(' : '.$obj_menu->get_name()):'') ?> - Noticias</h3>
					</div>
                    
                    <div class="widget-content">

			<div class="bs-example">
            <?php foreach($new_list_array as $news){ ?>
            <table width="100%" border="1" class="table table-bordered table-hover table-striped">
										  <tr>
										    <th width="17%">Title</th>
										    <td width="83%"><?=htmlentities($news->title);?></td>
									      </tr>
										  <tr>
										    <th>Description</th>
										    <td><?=htmlentities($news->description);?></td>
		      </tr>
										  <tr>
										    <th>Date</th>
										    <td><?=date("d-m-Y",strtotime($news->insert_time))?></td>
		      </tr>
								  </table>
			<?php } ?>
                                  <!-- /div click_list -->			  
			  </div>
			  </div>
      </div>
                    </div>
                    </div>
                    </div>



<?php require_once (DIR_ROOT."layout/general/bottom.php"); ?>