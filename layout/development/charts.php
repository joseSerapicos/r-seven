<?php require_once (dirname(__FILE__)."/../../php/general/top1_conf.php"); ?>


<link href="<?= PATH_LAYOUT ?>general/js/plugins/cirque/cirque.css" rel="stylesheet">

<style type="text/css">
.chart-holder {
	height: 325px;
}

.cirque-stats {
	text-align: center;
}

.cirque-stats .cirque-container {	
	margin-top: 1.5em;
	margin-bottom: 1.5em;	
	margin-right: 2em;
	margin-left: 2em;
}
</style>

    
<div class="main">
	
	<div class="container">

		
	
		<div class="row">
		
			<div class="col-md-6">
			
					<div class="widget stacked">
						
						<div class="widget-header">
							<i class="icon-bar-chart"></i>
							<h3>Bar Chart</h3>
						</div> <!-- /widget-header -->
						
						<div class="widget-content">
						
							<div id="bar-chart" class="chart-holder"></div> <!-- /bar-chart -->
						
						</div> <!-- /widget-content -->
					
					</div> <!-- /widget -->		
				
			</div> <!-- /.span6 -->
				
		
			<div class="col-md-6">
			    
			    <div class="widget stacked">
					
					<div class="widget-header">
						<i class="icon-bar-chart"></i>
						<h3>Cirque Stats</h3>
					</div> <!-- /widget-header -->
					
					<div class="widget-content">
						
						<div class="cirque-stats">
							<div class="ui-cirque" data-value="2875" data-total="3245" data-arc-color="#FF9900" data-label="ratio"></div>
					        <div class="ui-cirque" data-value="13" data-arc-color="#222222"></div>
					        <div class="ui-cirque" data-value="63" data-total="225" data-arc-color="#888888" data-label="ratio"></div>
					        <div class="ui-cirque" data-value="40" data-arc-color="#222222"></div>
							<div class="ui-cirque" data-value="72" data-arc-color="#888888" data-label="ratio"></div>
					        <div class="ui-cirque" data-value="57" data-arc-color="#FF9900"></div>
					    </div> <!-- /.cirque-stats -->
					
					</div> <!-- /widget-content -->
				
				</div> <!-- /widget -->	
			    
			</div> <!-- /.span6 -->
			
		</div> <!-- /.row -->
		
		
		<div class="row">			
			
			<div class="col-md-6">				
			
				<div class="widget stacked">
					
					<div class="widget-header">
						<i class="icon-bar-chart"></i>
						<h3>Area Chart</h3>
					</div> <!-- /widget-header -->
					
					<div class="widget-content">
					
						<div id="area-chart" class="chart-holder"></div> <!-- /area-chart -->
					
					</div> <!-- /widget-content -->
				
				</div> <!-- /widget -->	
			    
			</div> <!-- /.span6 -->
				
				
				
			
			<div class="col-md-6">	
			
				<div class="widget stacked">
					
					<div class="widget-header">
						<i class="icon-bar-chart"></i>
						<h3>Pie Chart</h3>
					</div> <!-- /widget-header -->
					
					<div class="widget-content">
					
						<div id="pie-chart" class="chart-holder"></div> <!-- /pie-chart -->
					
					</div> <!-- /widget-content -->
				
				</div> <!-- /widget -->			
			
			</div> <!-- /span6 -->
			
		</div> <!-- /.row -->
		
		
		
			<div class="row">	
		
			<div class="col-md-6">
			
				<div class="widget stacked">
					
					<div class="widget-header">
						<i class="icon-bar-chart"></i>
						<h3>Donut Chart</h3>
					</div> <!-- /widget-header -->
					
					<div class="widget-content">
					
						<div id="donut-chart" class="chart-holder"></div> <!-- /bar-chart -->
					
					</div> <!-- /widget-content -->
				
				</div> <!-- /widget -->			
			
			</div> <!-- /span6 -->
				
				
		
			<div class="col-md-6">
			
				<div class="widget stacked">
					
					<div class="widget-header">
						<i class="icon-bar-chart"></i>
						<h3>Line Chart</h3>
					</div> <!-- /widget-header -->
					
					<div class="widget-content">
					
						<div id="line-chart" class="chart-holder"></div> <!-- /line-chart -->
					
					</div> <!-- /widget-content -->
				
				</div> <!-- /widget -->				
			
			</div> <!-- /span6 -->
		
		
		</div> <!-- /row -->
	
	
	</div> <!-- /container -->
    
</div> <!-- /main -->


<?php require_once (DIR_ROOT."layout/general/bottom.php"); ?>

<script src="<?= PATH_LAYOUT ?>general/js/plugins/cirque/cirque.js"></script>

<script src="<?= PATH_LAYOUT ?>general/js/plugins/flot/jquery.flot.js"></script>
<script	src="<?= PATH_LAYOUT ?>general/js/plugins/flot/jquery.flot.pie.js"></script>
<script src="<?= PATH_LAYOUT ?>general/js/plugins/flot/jquery.flot.orderBars.js"></script>
<script	src="<?= PATH_LAYOUT ?>general/js/plugins/flot/jquery.flot.resize.js"></script>

<script src="<?= PATH_LAYOUT ?>general/js/charts/bar.js"></script>
<script src="<?= PATH_LAYOUT ?>general/js/charts/donut.js"></script>
<script src="<?= PATH_LAYOUT ?>general/js/charts/line.js"></script>
<script src="<?= PATH_LAYOUT ?>general/js/charts/pie.js"></script>
<script src="<?= PATH_LAYOUT ?>general/js/charts/area.js"></script>