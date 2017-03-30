<?php
require_once (dirname ( __FILE__ ) . "/../../../../top_all.php"); // Carregamento do top

// Redefinir header_buttons
require_once(DIR_ROOT."travel_agency/layout/bsp/detail/header_buttons.php");

$headerButtons['add'] = array();
//$headerButtons['add']['enabled'] = true;
$headerButtons['add']['addMultiAddHeader'] = true;

// Header
require_once(DIR_ROOT."header.php");


$post = json_decode(str_replace("\\", "", $_POST['json_post']));

// Includes : Ficheiros necessarios
//include_once (DIR_ROOT . "classes/development/development_framework.class.php");
//include_once (DIR_ROOT . "classes/development/development_framework_array.class.php");
//echo "<pre>";print_r($post);echo "</pre>";
/*AviationBSP*/
include_once (DIR_ROOT . "travel_agency/classes/aviation_bsp.master.class.php");

//$module = $_POST['post']['module']; //no futuro parametros de segurança
$bsp_id = $post->bsp_id;

/*Aviation BSP*/
$aviation_bsp = new aviation_bsp();

$aviation_bsp->head_detail($masterSystemDb,$bsp_id); //abrir objecto com detalhe
$aviation_bsp_list = $aviation_bsp->get_aviation_bsp_head();

$aviation_head_status = $aviation_bsp_list[0]->get_status(); //head status (principal)

$aviation_bsp_detail = $aviation_bsp_list[0]->get_aviation_bsp_detail(); //detalhe 
?>


<?php /*?><div class="main">
    <div class="container">
    	<div class="row">
			<div class="col-md-12">
            
            	<div class="widget stacked">
					<div class="widget-header">
						<i class="<?= ($obj_module?$obj_module->get_icon($db_main):'') ?>"></i>
						<h3><?= ($obj_module?$obj_module->get_name():'') ?><?= ($obj_menu?(' : '.$obj_menu->get_name()):'') ?></h3>
					</div><?php 

					<div class="widget-content">*/?>
                    <a id="back-to-back" href="#" style="display: block;" onclick='javascript: callScript("<?=PATH_ROOT?>content.php", "selector", "#load_main_menu");'><i class="icon-chevron-left"></i></a>
                        <table width="100%" border="1" class="table table-bordered table-hover table-striped">
                              <tr>
                                <th width="6%" valign="top">Numero<br />
                                  Documento</th>
                                <th width="1%" valign="top">D<br />
                                  C</th>
                                <th width="3%" valign="top">CPN<br />
VOID</th>
                                <th width="5%" valign="top">DATA<br />
                                  EMISS&Atilde;O</th>
                                <th width="5%" valign="top">VALOR BRUTO<br />
                                  CASH</th>
                                <th width="6%" valign="top">EXCL. TAXAS<br />
                                CREDITO</th>
                                <th width="7%" valign="top">IVA</th>
                                <th width="6%" valign="top">TAXAS</th>
                                <th width="8%" valign="top">COM<br />
                                PERC</th>
                                <th width="8%" valign="top">COMISSAO</th>
                                <th width="7%" valign="top">IVA<br />
                                COM</th>
                                <th width="9%" valign="top" title="AJUSTAMENTO COMERCIAL">ADJUST.<br />
                                Comercial</th>
                                <th width="10%" valign="top">LIQUIDO A<br />
                                PAGAR</th>
                                <th width="19%" valign="top">COMENTARIOS</th>
                                <th width="19%" valign="top">&nbsp;</th>
                              </tr>
                              <?php $company = "";
									$type = "";
							  		foreach($aviation_bsp_detail as $aviation_bsp_value){ ?>
                              	<?php if($aviation_bsp_value->get_company() != $company){
										$company = $aviation_bsp_value->get_company();
								?>
                                  <tr>
                                    <th colspan="15">Companhia: <?=$company;?></th>
                                  </tr>
                              	<?php } //end if($aviation_bsp_value->get_company() != $company)?>
                              
							  <?php if($aviation_bsp_value->get_type() != $type){ 
							  			$type = $aviation_bsp_value->get_type();
							  ?>
                              <tr>
                                <th colspan="15"><?=$type?></th>
                              </tr>
                              <?php } ?>
                          <tr>
                                <td <?php 
								switch ($aviation_bsp_value->get_status()){ 
									case "OK":
										print 'style="background-color:#E4FFB3"';
									break;
									case "PD":
										print 'style="background-color:#ffff99"';
									break;
								}?>><?=$aviation_bsp_value->get_doc_n();?></td>
                                <td><?=$aviation_bsp_value->get_dc();?></td>
                                <td><?=$aviation_bsp_value->get_cpn_void();?></td>
                                <td><?=$aviation_bsp_value->get_emission_date();?></td>
                                <td><?=$aviation_bsp_value->get_cash();?></td>
                                <td><?=$aviation_bsp_value->get_exp_rates_credit();?></td>
                                <td><?=$aviation_bsp_value->get_irs();?></td>
                                <td><?=$aviation_bsp_value->get_rates();?></td>
                                <td><?=$aviation_bsp_value->get_com_perc();?></td>
                                <td><?=$aviation_bsp_value->get_comission();?></td>
                                <td><?=$aviation_bsp_value->get_irs_com();?></td>
                                <td><?=$aviation_bsp_value->get_adj_comercial();?></td>
                                <td><?=$aviation_bsp_value->get_payment_value();?></td>
                                <td><?=$aviation_bsp_value->get_comments();?></td>
                                <td><?php 
									$user_text = $aviation_bsp_value->get_user_text(); 
									if($aviation_head_status <> "C"){
										
										if(!empty($user_text)){?>
											<button class="btn btn-default icon-info-sign" data-toggle="modal" data-backdrop="static" id="" name="" title="<?=$aviation_bsp_value->get_user_text();?>"></button>
											<?php } //end if(!empty ?>
										<button class="btn btn-default icon-edit Edit multiAddHeader" data-toggle="modal" data-backdrop="static" id="" name="" data-target="#addActionSelector" data-myScriptGetForm="<?= (PATH_ROOT."travel_agency/layout/bsp/detail/bsp_detail_spec.php") ?>" data-myScriptPostForm="<?= (PATH_ROOT."travel_agency/scripts/bsp_detail_spec_save.php") ?>" data-myId="edit:<?=$aviation_bsp_value->get_id();?>"></button>
								  <?php }else{ //if($aviation_head_status <> "C" 
								  			print $user_text;
								  		}
								  ?></td>
                              </tr>
                              <?php }  ?>
                      </table>
                    <?php /*?></div>
                </div>
                    
</div></div></div></div><?php */?>

<?php
require_once(DIR_ROOT."header_scripts.php");
require_once(DIR_ROOT."bottom.php"); ?>