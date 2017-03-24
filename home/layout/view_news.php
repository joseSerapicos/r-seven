<?php
require_once(dirname( __FILE__ )."/../../top_all_with_lang.php"); 

/*Listagem de Noticias*/
include_once (DIR_ROOT."home/classes/news.master.class.php"); // Carregamento do top 

/*Parametros POST*/

$post = json_decode(str_replace("\\", "", $_POST['json_post']));
$id_news = addslashes($post->id_news);
$masterModule = addslashes($post->module_id);

/*Classe News*/
$news = new news_master();

if(!empty($id_news)){
	$news_list = $news->get_news_by_id($masterMainDb,$id_news,$masterUserObj);
}else{
	$news_list = $news->get_news_by_module($masterMainDb,$masterUserObj->get_username(),$masterMainObj,$masterUserObj,$masterModule);

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
						<i class="<?= ($masterModuleObj?$masterModuleObj->get_icon($masterMainDb):'') ?>"></i>
						<h3><?= ($masterModuleObj?$masterModuleObj->get_name():'') ?><?= ($masterMenuObj?(' : '.$masterMenuObj->get_name()):'') ?> - Noticias</h3>
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
										    <td><?=utf8_encode($news->description);?></td>
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



<?php require_once (DIR_ROOT."bottom_no_layout.php"); ?>