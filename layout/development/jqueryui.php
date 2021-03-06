<?php require_once (dirname(__FILE__)."/../../php/general/top1_conf.php"); ?>


<style type="text/css">
#eq span {
	height: 175px;
	float: left;
	margin: 15px;
}
</style>


<div class="main">

    <div class="container">

    	

      <div class="row">
      	
      	<div class="col-md-12">
      		
      		<div class="widget stacked">
					
				<div class="widget-header">
					<i class="icon-tasks"></i>
					<h3>Sliders</h3>
				</div> <!-- /widget-header -->
				
				<div class="widget-content">
					
					<br />
					
					<div class="item-row">
						
				<div class="item-label">
					Default Slider
				</div> <!-- /item-label -->
				
				<div class="item-content">								
					<div id="defaultSlider"></div>
				</div> <!-- /item-content -->
				
			</div> <!-- /item-row -->
					
					
			<div class="item-row">
				
				<div class="item-label">
					Increment Slider
				</div> <!-- /item-label -->
				
				<div class="item-content">	
					<span>Donation amount ($50 increments):</span>
						<span id="incrementAmount" style="border:0; color:#f6931f; font-weight:bold;"></span>							
					<div id="incrementSlider" class="slider-primary" style="margin-top: 1em;"></div>
				</div> <!-- /item-content -->
				
			</div> <!-- /item-row -->
					
					
			<div class="item-row">
				
				<div class="item-label">
					Range Slider
				</div> <!-- /item-label -->
				
				<div class="item-content">								
					<span>Price range:</span>
						<span id="amount" style="border:0; color:#f6931f; font-weight:bold;"></span>

					<div id="rangeSlider" class="slider-secondary" style="margin-top: 1em;"></div>
				</div> <!-- /item-content -->
				
			</div> <!-- /item-row -->
					
					
			<div class="item-row">
				
				<div class="item-label">
					Minimum Value Slider
				</div> <!-- /item-label -->
				
				<div class="item-content">	
					<span>Maximum price:</span>
						<span id="rangeMinAmount" style="border:0; color:#f6931f; font-weight:bold;"></span>							
					<div id="rangeMinSlider" class="slider-tertiary" style="margin-top: 1em;"></div>
				</div> <!-- /item-content -->
				
			</div> <!-- /item-row -->
					
					
			<div class="item-row">
				
				<div class="item-label">
					Vertical Slider
				</div> <!-- /item-label -->
				
				<div class="item-content">								
					<div id="eq">
						<span>88</span>
						<span class="slider-primary">77</span>
						<span class="slider-secondary">55</span>
						<span class="slider-tertiary">33</span>
						<span class="">40</span>
						<span class="slider-primary">45</span>
						<span class="slider-secondary">70</span>
					</div>
				</div> <!-- /item-content -->
				
			</div> <!-- /item-row -->
					
				</div> <!-- /widget-content -->
					
			</div> <!-- /widget -->					
			
	    </div> <!-- /span12 -->     	
      	
      	
      </div> <!-- /row -->
      
      
      
      
      
       <div class="row">
      	
      	<div class="col-md-12">
      		
      		<div class="widget stacked">
					
				<div class="widget-header">
					<i class="icon-calendar"></i>
					<h3>Date Picker</h3>
				</div> <!-- /widget-header -->
				
				<div class="widget-content">
					
					<br />
				
				
				<h4>Basic Date Picker</h4>
				
				<br />
				
				<div id="datepicker-inline"></div>
				
				<br />
				<br />			
				<br />		
				
				<h4>Multi Date Picker</h4>
				
				<br />	
				
				<div id="datepicker-multi"></div>
					
				<br />
					
				</div> <!-- /widget-content -->
					
			</div> <!-- /widget -->					
			
	    </div> <!-- /span12 -->     	
      	
      	
      </div> <!-- /row -->
      

    </div> <!-- /container -->
    
</div> <!-- /main -->


<?php require_once (DIR_ROOT."layout/general/bottom.php"); ?>

<script src="<?= PATH_LAYOUT ?>general/js/plugins/validate/jquery.validate.js"></script>
<script src="<?= PATH_LAYOUT ?>general/js/demo/sliders.js"></script>