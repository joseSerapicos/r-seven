<?php /* Buttons do header /////////////////////////////////////////////////////////////////////////*/
/* EXAMPLE
$headerButtons = array();
// conf
$headerButtons['conf'] = array();
$headerButtons['conf']['type'] = "large"; // ["small", "large", "smallTable", "largeTable"]
$headerButtons['conf']['addScripts'] = true; // Adiciona os scripts para os botoes
// add
$headerButtons['add'] = array();
$headerButtons['add']['enabled'] = true;
$headerButtons['add']['id'] = false;
$headerButtons['add']['class'] = false;
$headerButtons['add']['scriptGetForm'] = (PATH_ROOT."layout/get_form.php");
$headerButtons['add']['scriptPostForm'] = (PATH_ROOT."scripts/save_form.php");
$headerButtons['add']['addEditSingleHeader'] = true; // Se "true", e "$headerButtons['conf']['addScripts'] = true", adiciona os scripts para "editSingleHeader"
// deleteAll
$headerButtons['deleteAll'] = array();
$headerButtons['deleteAll']['enabled'] = true;
$headerButtons['deleteAll']['id'] = false;
$headerButtons['deleteAll']['class'] = false;
$headerButtons['deleteAll']['actionSelector'] = "#deleteAllActionSelector";
$headerButtons['deleteAll']['scriptPostForm'] = (PATH_ROOT."scripts/delete_form.php");
$headerButtons['deleteAll']['addDeleteSingleHeader'] = true; // Se "true", e "$headerButtons['conf']['addScripts'] = true", adiciona os scripts para "deleteSingleHeader"
// checkAll
$headerButtons['checkAll'] = array();
$headerButtons['checkAll']['enabled'] = true;
$headerButtons['checkAll']['id'] = false;
$headerButtons['checkAll']['class'] = false;
$headerButtons['checkAll']['actionSelector'] = ".checkAllActionSelector";
/EXAMPLE */
/* /Buttons do header /////////////////////////////////////////////////////////////////////////*/ ?>


<div class="main">
    <div class="container">
    	<div class="row">
			<div class="col-md-12">
            
            	<div class="widget stacked<?= ((is_array($headerButtons['conf']) && ( ($headerButtons['conf']['type']=='smallTable') || ($headerButtons['conf']['type']=='largeTable') ))?' widget-table':'') ?>">
					<div class="widget-header">
						<i class="<?= ($masterModuleObj?$masterModuleObj->get_icon($masterMainDb):'') ?>"></i>
						<h3><?= ($masterModuleObj?$masterModuleObj->get_name():'') ?><?= ($masterMenuObj?(' : '.$masterMenuObj->get_name()):'') ?></h3>
						
						<?php /* Buttons do header /////////////////////////////////////////////////////////////////////////*/
						if(is_array($headerButtons)) { ?>
							<div class="options_menu">
							
                            <?php
							if(is_array($headerButtons['add']) && $headerButtons['add']['enabled']) { ?>
								<button class="btn btn-default icon-plus addHeader <?= ($headerButtons['add']['class']?$headerButtons['add']['class']:'') ?>" data-toggle="modal" data-backdrop="static" id="<?= ($headerButtons['add']['id']?$headerButtons['add']['id']:'') ?>" name="<?= ($headerButtons['add']['id']?$headerButtons['add']['id']:'') ?>" data-target="#addActionSelector"></button>
							<?php } ?>
                            
                            <?php
							if(is_array($headerButtons['deleteAll']) && $headerButtons['deleteAll']['enabled']) { ?>
								<button class="btn btn-default icon-remove deleteAllHeader <?= ($headerButtons['deleteAll']['class']?$headerButtons['deleteAll']['class']:'') ?>" id="<?= ($headerButtons['deleteAll']['id']?$headerButtons['deleteAll']['id']:'') ?>" name="<?= ($headerButtons['deleteAll']['id']?$headerButtons['deleteAll']['id']:'') ?>" data-myActionSelector="<?= ($headerButtons['deleteAll']['actionSelector']?$headerButtons['deleteAll']['actionSelector']:'') ?>"></button>
							<?php } ?>
                            
							<?php
							if(is_array($headerButtons['checkAll']) && $headerButtons['checkAll']['enabled']) { ?>
								<button class="btn btn-default icon-ok checkAllHeader <?= ($headerButtons['checkAll']['class']?$headerButtons['checkAll']['class']:'') ?>" id="<?= ($headerButtons['checkAll']['id']?$headerButtons['checkAll']['id']:'') ?>" name="<?= ($headerButtons['checkAll']['id']?$headerButtons['checkAll']['id']:'') ?>" data-myActionSelector="<?= ($headerButtons['checkAll']['actionSelector']?$headerButtons['checkAll']['actionSelector']:'') ?>" data-myChecked="0"></button>
							<?php } ?>
                        
							</div>
                            <div class="clear"></div>
						<?php } // End if
						/* /Buttons do header /////////////////////////////////////////////////////////////////////////*/ ?>
                    </div>

					<div class="widget-content">