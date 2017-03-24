<?php
require_once (dirname ( __FILE__ ) . "/../../general/top.php"); // Carregamento do top                                                    

// Includes : Ficheiros necessarios
//include_once (DIR_ROOT . "classes/development/development_framework.class.php");
//include_once (DIR_ROOT . "classes/development/development_framework_array.class.php");

/*AviationBSP*/
include_once (DIR_ROOT . "classes/travel_agency/bsp/aviation_bsp.master.class.php");

$module = $_POST['post']['module']; //no futuro parametros de segurança
$bsp_id = $_POST['post']['bsp_id'];

/*Aviation BSP*/
$aviation_bsp = new aviation_bsp();

$aviation_bsp->head_detail($db_system,$bsp_id); //abrir objecto com detalhe
$aviation_bsp_list = $aviation_bsp->get_aviation_bsp_head();
$aviation_bsp_list = $aviation_bsp_list[0]->get_aviation_bsp_detail();

//echo "<pre>";print_r($aviation_bsp_list);
?>


<div class="main">
    <div class="container">
    	<div class="row">
			<div class="col-md-12">
            
            	<div class="widget stacked">
					<div class="widget-header">
						<i class="<?= ($obj_module?$obj_module->get_icon($db_main):'') ?>"></i>
						<h3><?= ($obj_module?$obj_module->get_name():'') ?><?= ($obj_menu?(' : '.$obj_menu->get_name()):'') ?></h3>
					</div>

					<div class="widget-content">
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
                                <th width="9%" valign="top">ADJUSTAMENTO<br />
                                Comercial</th>
                                <th width="10%" valign="top">LIQUIDO A<br />
                                PAGAR</th>
                                <th width="19%" valign="top">COMENTARIOS</th>
                              </tr>
                              <?php $company = "";
									$type = "";
							  		foreach($aviation_bsp_list as $aviation_bsp_value){ ?>
                              	<?php if($aviation_bsp_value->get_company() != $company){
										$company = $aviation_bsp_value->get_company();
								?>
                                  <tr>
                                    <th colspan="14">Companhia: <?=$company;?></th>
                                  </tr>
                              	<?php } //end if($aviation_bsp_value->get_company() != $company)?>
                              
							  <?php if($aviation_bsp_value->get_type() != $type){ 
							  			$type = $aviation_bsp_value->get_type();
							  ?>
                              <tr>
                                <th colspan="14"><?=$type?></th>
                              </tr>
                              <?php } ?>
                          <tr>
                                <td><?=$aviation_bsp_value->get_doc_n();?></td>
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
                              </tr>
                              <?php }  ?>
                      </table>
                    </div>
                </div>
                    
</div></div></div></div>



<?php require_once (DIR_ROOT."layout/general/bottom.php"); ?>