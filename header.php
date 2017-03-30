<?php /* Header buttons example */
//$headerButtons = array();
// conf
//$headerButtons['conf'] = array();
//$headerButtons['conf']['type'] = "default"; // ["default", "table"]
//$headerButtons['conf']['addScripts'] = true; // Adiciona os scripts para os botoes
// add
//$headerButtons['add'] = array();
//$headerButtons['add']['enabled'] = true;
//$headerButtons['add']['id'] = false;
//$headerButtons['add']['class'] = false;
//$headerButtons['add']['methodPostForm'] = "script"; // ["script", "submit"]
//$headerButtons['add']['scriptGetForm'] = (PATH_ROOT."layout/get_form.php"); // Script com o form a ser carregado
//$headerButtons['add']['scriptPostForm'] = (PATH_ROOT."scripts/save_form.php"); // Script para onde deve ser enviado o post do form
//$headerButtons['add']['addEditSingleHeader'] = true; // Se "true", adiciona os scripts para "editSingleHeader"
//$headerButtons['add']['addMultiAddHeader'] = false; // Se "true", adiciona os scripts para "multiAddHeader" Ex:
/*<button class="btn btn-default icon-plus optionButton multiAddHeader" data-toggle="modal" data-backdrop="static" id="" name="" data-target="#addActionSelector" data-myMethodPostForm="script" data-myScriptGetForm="<?= (PATH_ROOT."layout/get_form.php") ?>" data-myScriptPostForm="<?= (PATH_ROOT."scripts/save_form.php") ?>" data-myId="parent:<?= $parent->get_id() ?>"></button>*/
// deleteAll
//$headerButtons['deleteAll'] = array();
//$headerButtons['deleteAll']['enabled'] = true; // Activar button
//$headerButtons['deleteAll']['id'] = false;
//$headerButtons['deleteAll']['class'] = false;
//$headerButtons['deleteAll']['actionSelector'] = "#deleteAllActionSelector"; // Selector para o form a ser afectado
//$headerButtons['deleteAll']['scriptPostForm'] = (PATH_ROOT."scripts/delete_form.php"); // Script para onde deve ser enviado o post do form
//$headerButtons['deleteAll']['addDeleteSingleHeader'] = true; // Se "true", adiciona os scripts para "deleteSingleHeader" Ex:
/*<button class="btn btn-default icon-remove optionButton deleteSingleHeader" id="" name="" data-myId="<?= $obj->get_id() ?>" data-myScriptPostForm="<?= (PATH_ROOT."scripts/delete_form.php") ?>"></button>*/
//$headerButtons['deleteAll']['addMultiDeleteAllHeader'] = false; // Se "true", adiciona os scripts para "multiDeleteAllHeader" Ex:
/*<input type="checkbox" class="multiCheckAllHeader" data-myActionSelector="actionSelectorMultiCheckAllHeader" data-myChecked="0" />*/
// checkAll
//$headerButtons['checkAll'] = array();
//$headerButtons['checkAll']['enabled'] = true; // Activar button
//$headerButtons['checkAll']['id'] = false;
//$headerButtons['checkAll']['class'] = false;
//$headerButtons['checkAll']['actionSelector'] = ".checkAllActionSelector"; // Selector para as checkbox que devem ser afectadas
//$headerButtons['checkAll']['addMultiCheckAllHeader'] = false; // Se "true", adiciona os scripts para "multiCheckAllHeader"
/* /Header buttons example */ ?>


<div class="main">
    <div class="container">
    	<div class="row">
			<div class="col-md-12">
            
            	<div class="widget stacked<?= ((is_array($headerButtons['conf']) && ($headerButtons['conf']['type']=='table'))?' widget-table':'') ?>">
					<div class="widget-header">
						<i class="<?= ($masterModuleObj?$masterModuleObj->get_icon($masterMainDb):'') ?>"></i>
						<h3>
							<?php
							echo($masterModuleObj?$masterModuleObj->get_name():'') ?><?= ($masterMenuObj?(' : '.$masterMenuObj->get_name()):'');
							// User permission
							$masterPermission = $masterMainObj->get_permission();
							printPermission($masterPermission); ?>
                        </h3>
						
						<?php /* Buttons do header /////////////////////////////////////////////////////////////////////////*/
						if(is_array($headerButtons)) { ?>
							<div class="options_menu">
							
                            <?php
							if(is_array($headerButtons['add']) && $headerButtons['add']['enabled'] && $masterPermission['add']) { ?>
								<button class="btn btn-default icon-plus addHeader <?= ($headerButtons['add']['class']?$headerButtons['add']['class']:'') ?>" data-toggle="modal" data-backdrop="static" id="<?= ($headerButtons['add']['id']?$headerButtons['add']['id']:'') ?>" name="<?= ($headerButtons['add']['id']?$headerButtons['add']['id']:'') ?>" data-target="#addActionSelector" data-myMethodPostForm="<?= (($headerButtons['add']['methodPostForm']=='submit')?$headerButtons['add']['methodPostForm']:'script') ?>" data-myScriptGetForm="<?= $headerButtons['add']['scriptGetForm'] ?>" data-myScriptPostForm="<?= $headerButtons['add']['scriptPostForm'] ?>"></button>
							<?php } ?>
                            
                            <?php
							if(is_array($headerButtons['deleteAll']) && $headerButtons['deleteAll']['enabled'] && $masterPermission['add']) { ?>
								<button class="btn btn-default icon-remove deleteAllHeader <?= ($headerButtons['deleteAll']['class']?$headerButtons['deleteAll']['class']:'') ?>" id="<?= ($headerButtons['deleteAll']['id']?$headerButtons['deleteAll']['id']:'') ?>" name="<?= ($headerButtons['deleteAll']['id']?$headerButtons['deleteAll']['id']:'') ?>" data-myActionSelector="<?= ($headerButtons['deleteAll']['actionSelector']?$headerButtons['deleteAll']['actionSelector']:'') ?>" data-myScriptPostForm="<?= $headerButtons['deleteAll']['scriptPostForm'] ?>"></button>
							<?php } ?>
                            
                            <?php
							if(is_array($headerButtons['help']) && $headerButtons['help']['enabled']) { ?>
								<button class="btn btn-default icon-question-sign helpHeader <?= ($headerButtons['help']['class']?$headerButtons['help']['class']:'') ?>" id="<?= ($headerButtons['help']['id']?$headerButtons['help']['id']:'') ?>" name="<?= ($headerButtons['help']['id']?$headerButtons['help']['id']:'') ?>" data-myActionSelector="<?= ($headerButtons['help']['actionSelector']?$headerButtons['help']['actionSelector']:'') ?>" data-myChecked="0"></button>
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