<?php require_once (dirname(__FILE__)."/../../php/general/top1_conf.php"); ?>

<link href="<?= PATH_LAYOUT ?>general/css/pages/reports.css" rel="stylesheet">


<div class="main">

    <div class="container">
    	
      <div class="row">
      
      	<div class="col-md-12">
      		
      		<div class="widget big-stats-container stacked">
      			
      			<div class="widget-content">
      				
		      		<div id="big_stats" class="cf">
						<div class="stat">								
							<h4>Pending Sales Today</h4>
							<span class="value">12</span>								
						</div> <!-- .stat -->
						
						<div class="stat">								
							<h4>Completed Sales Today</h4>
							<span class="value">23</span>								
						</div> <!-- .stat -->
						
						<div class="stat">								
							<h4>Returned Items Today</h4>
							<span class="value">2</span>								
						</div> <!-- .stat -->
						
						<div class="stat">								
							<h4>Something Else</h4>
							<span class="value">13</span>								
						</div> <!-- .stat -->
					</div>
				
				</div> <!-- /widget-content -->
				
			</div> <!-- /widget -->
      		
      	</div> <!-- /span12 -->	
      	
  	  </div> <!-- /row -->

      <div class="row">
      	
      	<div class="col-md-6">
      		
      		<div class="widget stacked">
					
				<div class="widget-header">
					<i class="icon-star"></i>
					<h3>Quick Stats</h3>
				</div> <!-- /widget-header -->
				
				<div class="widget-content">
					
					<div id="pie-chart" class="chart-holder"></div>
					
				</div> <!-- /widget-content -->
					
			</div> <!-- /widget -->
			
      		
      		
      		
	    </div> <!-- /span6 -->
      	
      	
      	<div class="col-md-6">
      		
      		<div class="widget stacked">
						
				<div class="widget-header">
					<i class="icon-list-alt"></i>
					<h3>Recent News</h3>
				</div> <!-- /widget-header -->
				
				<div class="widget-content">
					
					<div id="bar-chart" class="chart-holder"></div>
					
				</div> <!-- /widget-content -->
			
			</div> <!-- /widget -->
								
	      </div> <!-- /span6 -->
      	
      </div> <!-- /row -->
      
      
      
      
		<div class="row">
      	
      		<div class="col-md-4">
      		
      			<div class="widget stacked widget-table">
					
					<div class="widget-header">
						<span class="icon-list-alt"></span>
						<h3>Top Referrers</h3>
					</div> <!-- .widget-header -->
					
					<div class="widget-content">
						<table class="table table-bordered table-striped">
							
							<thead><tr>								
								<th>Referrer</th>
								<th>Uniques</th>								
							</tr></thead>
					
						<tbody><tr>
							<td class="description"><a href="http://google.com">http://google.com</a></td>
							<td class="value"><span>1123</span></td>
						</tr>
						<tr>
							<td class="description"><a href="http://yahoo.com">http://yahoo.com</a></td>
							<td class="value"><span>927</span></td>
						</tr>
						<tr>
							<td class="description"><a href="http://themeforest.net">http://themeforest.net</a></td>
							<td class="value"><span>834</span></td>
						</tr>
						<tr>
							<td class="description"><a href="http://codecanyon.net">codecanyon.net</a></td>
							<td class="value"><span>625</span></td>
						</tr>
						<tr>
							<td class="description"><a href="http://graphicriver.net">http://graphicriver.net</a></td>
							<td class="value"><span>593</span></td>
						</tr>
						
						<tr>
							<td class="description"><a href="http://bing.com">http://bing.com</a></td>
							<td class="value"><span>324</span></td>
						</tr>
						
						
					</tbody></table>
						
					</div> <!-- .widget-content -->
					
				</div> <!-- /widget -->	
      			
  			</div> <!-- /span4 -->
  			
  			
  			
  			<div class="col-md-4">
  				
  				<div class="widget stacked widget-table">
					
					<div class="widget-header">
						<span class="icon-file"></span>
						<h3>Most Visited Pages</h3>
					</div> <!-- .widget-header -->
					
					<div class="widget-content">
						<table class="table table-bordered table-striped">
							
							<thead><tr>								
								<th>Page</th>
								<th>Visits</th>								
							</tr></thead>
					
						<tbody><tr>
							<td class="description"><a href="javascript:;">Homepage</a></td>
							<td class="value"><span>1123</span></td>
						</tr>
						<tr>
							<td class="description"><a href="javascript:;">Portfolio</a></td>
							<td class="value"><span>927</span></td>
						</tr>
						<tr>
							<td class="description"><a href="javascript:;">Services</a></td>
							<td class="value"><span>834</span></td>
						</tr>
						<tr>
							<td class="description"><a href="javascript:;">Contact Us</a></td>
							<td class="value"><span>625</span></td>
						</tr>
						<tr>
							<td class="description"><a href="javascript:;">Testimonials</a></td>
							<td class="value"><span>593</span></td>
						</tr>
						
						<tr>
							<td class="description"><a href="javascript:;">Signup</a></td>
							<td class="value"><span>456</span></td>
						</tr>
						
						
					</tbody></table>
						
					</div> <!-- .widget-content -->
					
				</div>
  				
  			</div> <!-- /span4 -->
  			
  			
  			
  			<div class="col-md-4">
  				
  				<div class="widget stacked widget-table">
					
					<div class="widget-header">
						<span class="icon-external-link"></span>
						<h3>Browsers</h3>
					</div> <!-- .widget-header -->
					
					<div class="widget-content">
						<table class="table table-bordered table-striped">
							
							<thead><tr>								
								<th>Browser</th>
								<th>Visits</th>								
							</tr></thead>
					
						<tbody><tr>
							<td class="description">Firefox</td>
							<td class="value"><span>1123</span></td>
						</tr>
						<tr>
							<td class="description">Chrome</td>
							<td class="value"><span>927</span></td>
						</tr>
						<tr>
							<td class="description">Internet Explorer</td>
							<td class="value"><span>834</span></td>
						</tr>
						<tr>
							<td class="description">Safari</td>
							<td class="value"><span>625</span></td>
						</tr>
						<tr>
							<td class="description">Opera</td>
							<td class="value"><span>593</span></td>
						</tr>
						
						<tr>
							<td class="description">Netscape</td>
							<td class="value"><span>123</span></td>
						</tr>
						
						
					</tbody></table>
						
					</div> <!-- .widget-content -->
					
				</div>
  				
  			</div> <!-- /span4 -->
      	
		</div> <!-- /row -->
      
      
    </div> <!-- /container -->
    
</div> <!-- /main -->


<?php require_once (DIR_ROOT."layout/general/bottom.php"); ?>

<script src="<?= PATH_LAYOUT ?>general/js/plugins/flot/jquery.flot.js"></script>
<script	src="<?= PATH_LAYOUT ?>general/js/plugins/flot/jquery.flot.pie.js"></script>
<script src="<?= PATH_LAYOUT ?>general/js/plugins/flot/jquery.flot.orderBars.js"></script>
<script	src="<?= PATH_LAYOUT ?>general/js/plugins/flot/jquery.flot.resize.js"></script>

<script src="<?= PATH_LAYOUT ?>general/js/charts/pie.js"></script>
<script src="<?= PATH_LAYOUT ?>general/js/charts/bar.js"></script>