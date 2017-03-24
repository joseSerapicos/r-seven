<?php
include_once (DIR_ROOT."home/classes/news.master.class.php");


/*Listagem de Noticias*/
$news = new news_master();
$news_list = $news->news_new($masterMainDb, $masterUserObj->get_username(), $masterMainObj, $masterUserObj);
$news_array = $news->get_news_new_array();
//echo "<pre>";print_r($news_array);echo "</pre>";
?>

		<!-- main -->

		<div class="main">



			<div class="container">



				<div class="row">



					<div class="col-md-6 col-xs-12">



						<div class="widget widget-nopad stacked">



							<div class="widget-header">

								<i class="icon-list-alt"></i>

								<h3>Noticias</h3>

							</div>

							<!-- /widget-header -->



							<div class="widget-content">



								<ul class="news-items">
									<?php foreach($news_array as $knews=>$vnews){ 
											if(is_array($vnews)){
												foreach($vnews as $news_inside){
													$id_news =  $news_inside->id;
													$description = $news_inside->description;
													$fk_modules_info = (($news_inside->fk_modules_info)?$news_inside->fk_modules_info:'0'); //senao existir é 0
													
													?>
                                    
								  <li>


<?php // ?>
										<div class="news-item-detail">
										  <a class="news-item-title" onclick='javascript: callScript("<?=PATH_ROOT?>home/layout/view_news.php", "selector", "#load_main_menu", <?=json_encode(array("id_news"=>$news_inside->id));?>);'><?=htmlentities($news_inside->title)?></a> (<a class="news-item-title" onclick='javascript: callScript("<?=PATH_ROOT?>home/layout/view_news.php", "selector", "#load_main_menu", <?=json_encode(array("module_id"=>$fk_modules_info));?>);'>about: <?=$knews?></a>)

											<p class="news-item-preview"><?=substr(htmlentities($description),0,200)?><?php if(strlen($description)>200){print "...";}?></p>
										</div>
										<div class="news-item-date">

				<?=date("d-m-Y",strtotime($news_inside->insert_time))?>
										</div>

									</li>
                                    
                                    <?php }
											} //end if(is_array($vnews)){
												} //end foreach($news_array as $knews=>$vnews)?>

									</li>

								</ul>



							</div>

							<!-- /widget-content -->



						</div>

						<!-- /widget -->





					</div>

					<!-- /span6 -->

<?php



/*

 * <div class="col-md-6"> <div class="widget stacked"> <div class="widget-header"> <i class="icon-bookmark"></i> <h3>Quick Shortcuts</h3> </div> <!-- /widget-header --> <div class="widget-content"> <div class="shortcuts"> <a href="javascript:;" class="shortcut"> <i class="shortcut-icon icon-list-alt"></i> <span class="shortcut-label">Apps</span> </a> <a href="javascript:;" class="shortcut"> <i class="shortcut-icon icon-bookmark"></i> <span class="shortcut-label">Bookmarks</span> </a> <a href="javascript:;" class="shortcut"> <i class="shortcut-icon icon-signal"></i> <span class="shortcut-label">Reports</span> </a> <a href="javascript:;" class="shortcut"> <i class="shortcut-icon icon-comment"></i> <span class="shortcut-label">Comments</span> </a> <a href="javascript:;" class="shortcut"> <i class="shortcut-icon icon-user"></i> <span class="shortcut-label">Users</span> </a> <a href="javascript:;" class="shortcut"> <i class="shortcut-icon icon-file"></i> <span class="shortcut-label">Notes</span> </a> <a href="javascript:;" class="shortcut"> <i class="shortcut-icon icon-picture"></i> <span class="shortcut-label">Photos</span> </a> <a href="javascript:;" class="shortcut"> <i class="shortcut-icon icon-tag"></i> <span class="shortcut-label">Tags</span> </a> </div> <!-- /shortcuts --> </div> <!-- /widget-content --> </div> <!-- /widget -->

 */



?>


		<div class="col-md-6">

						<div class="widget stacked">



							<div class="widget-header">

								<i class="icon-signal"></i>

								<h3>Files</h3>

							</div>

							<!-- /widget-header -->



							<div class="widget-content">

								<div id="area-chart" class="chart-holder"></div>

							</div>

							<!-- /widget-content -->



						</div>

						<!-- /widget -->



					</div>

					<!-- /span6 -->



				</div>

				<!-- /row -->



			</div>

			<!-- /container -->



		</div>

		<!-- /main -->


		<!-- extra -->

		<div class="extra">



			<div class="container">



				<div class="row">



					<div class="col-md-3">



						<h4>About</h4>



						<ul>

							<li><a href="javascript:;">About Us</a></li>

							<li><a href="javascript:;">Twitter</a></li>

							<li><a href="javascript:;">Facebook</a></li>

							<li><a href="javascript:;">Google+</a></li>

						</ul>



					</div>

					<!-- /span3 -->



					<div class="col-md-3">



						<h4>Support</h4>



						<ul>

							<li><a href="javascript:;">Frequently Asked Questions</a></li>

							<li><a href="javascript:;">Ask a Question</a></li>

							<li><a href="javascript:;">Video Tutorial</a></li>

							<li><a href="javascript:;">Feedback</a></li>

						</ul>



					</div>

					<!-- /span3 -->



					<div class="col-md-3">



						<h4>Legal</h4>



						<ul>

							<li><a href="javascript:;">License</a></li>

							<li><a href="javascript:;">Terms of Use</a></li>

							<li><a href="javascript:;">Privacy Policy</a></li>

							<li><a href="javascript:;">Security</a></li>

						</ul>



					</div>

					<!-- /span3 -->



					<div class="col-md-3">



						<h4>Settings</h4>



						<ul>

							<li><a href="javascript:;">Consectetur adipisicing</a></li>

							<li><a href="javascript:;">Eiusmod tempor </a></li>

							<li><a href="javascript:;">Fugiat nulla pariatur</a></li>

							<li><a href="javascript:;">Officia deserunt</a></li>

						</ul>



					</div>

					<!-- /span3 -->



				</div>

				<!-- /row -->



			</div>

			<!-- /container -->



		</div>

		<!-- /extra -->