/* Chamada em jquery
$(document).ready(function() { }); */

/* Adicionar evento click em jquery
$(".call_script").click( function() { }); */

/* Obter atributo em jquery
var var_id = $(this).attr("my_id"); */


// Faz a chamada a scripts via post.
// Parametros:
// var_script : Script a ser executado
// var_return_type : Tipo de retorno ["function" (chamar funcao javascript apos retorno, enviando o retorno como parametro), "selector" (carregar elemento apos retorno, com o valor do retorno)]
// var_return_value : Nome da function a chamar ou do selector jquery para a tag a carregar (conforme parametro var_return_type)
// var_json_post : Dados a enviar via post encriptados com json ["array()" (array de dados a enviar via post), "false" (nao enviar dados)]
function callScript(var_script, var_return_type, var_return_value, var_json_post)
{
	//alert(var_script);
	jQuery.ajax({
		type: "POST",
	    url: var_script,
	    data: { json_post: (var_json_post?JSON.stringify(var_json_post):'') },

        beforeSend: function() {
		},
	    
		success: function(data) {
			//alert(data);
			switch(var_return_type) {
				case 'selector': $(var_return_value).html(data); break;
				case 'function': jQuery.globalEval(var_return_value+"("+data+")"); break;
			  	default: $(var_return_value).html(data);
			}
	    }
	/* }).done( function(data) { // FUNCAO ALTERNATIVA AO SUCECSS
		alert(data); */
	});
}


// Faz a chamada a scripts via post, com imagem de loading na pagina principal.
// Parametros:
// var_script : Script a ser executado
// var_return_type : Tipo de retorno ["function" (chamar funcao javascript apos retorno, enviando o retorno como parametro), "selector" (carregar elemento apos retorno, com o valor do retorno)]
// var_return_value : Nome da function a chamar ou do selector jquery para a tag a carregar (conforme parametro var_return_type)
// var_json_post : Dados a enviar via post encriptados com json ["array()" (array de dados a enviar via post), "false" (nao enviar dados)]
function callScriptWithLoading(var_script, var_return_type, var_return_value, var_json_post)
{
	// Iniciar loading
	$('#loading_skin').show();
		
	//alert(var_script);
	jQuery.ajax({
		type: "POST",
	    url: var_script,
	    data: { json_post: (var_json_post?JSON.stringify(var_json_post):'') },

        beforeSend: function() {
		},
	    
		success: function(data) {
			//alert(data);
			switch(var_return_type) {
				case 'selector': $(var_return_value).html(data); break;
				case 'function': jQuery.globalEval(var_return_value+"("+data+")"); break;
			  	default: $(var_return_value).html(data);
			}
			
			// Terminar loading
			$('#loading_skin').hide();
	    }
	/* }).done( function(data) { // FUNCAO ALTERNATIVA AO SUCECSS
		alert(data); */
	});
}


// Validacao de erros, feedback ao utilizador e refresh da pagina, para forms enviados via submit.
// var_returnForm : array em json com a seguinte estrutura: array('targetSelector' => ".addHeader", // Selector do objecto que disparou o processo, para voltar a ser aberta a dialog no processamento do retorno da validacao de forms enviados via submit (data-mymethodpostform="submit"). Apenas necessario quando usado: 'hasDialog' => "1".
//															'actionSelector' => "#addActionSelector", // Selector para o form. Apenas necessario quando usado: 'hasDialog' => "1".
//															'hasDialog' => "1", // Determina se o form se encontra numa dialog.
//															'msg' => array('type' => '', 'title' => '', 'text' => ''), // Mensagem a apresentar ao user.
//															'errors' => array('idElement1' => 'msgError', 'idElement2' => 'msgError', ...)) // Erros apresentar no formulario.
// var_post : array em json com o post dos dados que foram enviados via submit
function processReturnFormSubmit(var_returnForm, var_post)
{
	var targetSelector = false;
	if(!$.isEmptyObject(var_returnForm['targetSelector'])) {
		targetSelector = var_returnForm['targetSelector'];
	}
	var hasDialog = false;
	if(!$.isEmptyObject(var_returnForm['hasDialog'])) {
		hasDialog = var_returnForm['hasDialog'];
	}
	var hasErrors = false;
	if(!$.isEmptyObject(var_returnForm['errors'])) {
		hasErrors = true;
	}
	
	
	if(targetSelector && hasDialog && hasErrors) {
		// Variaveis
		var addHeader_selectorDialogBody = ("#addActionSelector .modal-dialog .modal-content .modal-body");
        var addHeader_selectorDialogSave = ("#addActionSelector .modal-dialog .modal-content .modal-footer button.addHeaderSaveForm");
		var addHeader_methodPostForm = $(targetSelector).attr("data-myMethodPostForm");
		var addHeader_scriptGetForm = $(targetSelector).attr("data-myScriptGetForm");
		var addHeader_scriptPostForm = $(targetSelector).attr("data-myScriptPostForm");
		var myId = $(this).attr("data-myId");
		var myIdObj = false
		if(myId) {
			myIdObj = {'id': myId};
		}
				
		// Load form.
		$(addHeader_selectorDialogBody).html('<div class="alignCenter"><img src="/mygest/master/layout/img/loading/4.gif" /></div>');
		$("#addActionSelector").modal('show');
		
		// Cria o fom.
		jQuery.ajax({
			type: "POST",
			url: addHeader_scriptGetForm,
			data: { json_post: (myIdObj?JSON.stringify(myIdObj):'') },
	
			beforeSend: function() {
			},
			
			success: function(data) {
				//alert(data);
				$(addHeader_selectorDialogBody).html(data);
				
				$(addHeader_selectorDialogSave).attr('data-myMethodPostForm', addHeader_methodPostForm);
				$(addHeader_selectorDialogSave).attr('data-myScriptPostForm', addHeader_scriptPostForm);
				
				// Carregar valores de post
				if(!$.isEmptyObject(var_post)) {
					$.each(var_post, function(index, value) {
						$('#'+index).val(value);
					});
				}		
				
				//alert("ssss");
				processReturnForm(var_returnForm);
				
			}
		/* }).done( function(data) { // FUNCAO ALTERNATIVA AO SUCECSS
			alert(data); */
		});
	}
	else {
		processReturnForm(var_returnForm);
	}
}


// Recarrega o menu na div "main_load_menu_content"
function loadMainMenu()
{
	callScript("/mygest/content.php", "selector", "#load_main_menu", false);
}

// Faz refresh da pagina para carregar de acordo com nova store ou menu
// Parametros:
// var_data: Informacao retornada por alguns scripts de post. Pode ser enviado "false" quando chamada manualmente.
function refreshAll(var_data)
{
	window.location.replace("/mygest/index.php");
}


// Faz post de formularios, e envia o resultado para uma outra funcao em javascript, que mediante os resultados deve assinalar os erros ou terminar a operacao. Os resultados sao enviados no formato json_encode.
// Parametros:
// var_script : Script para onde deverao ser enviados os dados do formulario via post
// var_form_selector : Identificador do formulario do qual vao ser extraidos os dados para post;
// var_return_function_name : Nome da function a chamar para envio de resultados (array em json_encode)
function submitForm(var_script, var_form_selector, var_return_function_name)
{
	jQuery.ajax({
		type: "POST",
	    url: var_script,
	    data: { serialize_post: $(var_form_selector).serialize() },

        beforeSend: function() {
		},
	    
		success: function(data) {
			//alert(data);
			jQuery.globalEval(var_return_function_name+"("+data+")");
	    }
	/* }).done( function(data) { // FUNCAO ALTERNATIVA AO SUCECSS
		alert(data); */
	});
}


// Validacao de erros, feedback ao utilizador e refresh da pagina.
// var_data : array em json com a seguinte estrutura: array('targetSelector' => ".addHeader", // Selector do objecto que disparou o processo, para voltar a ser aberta a dialog no processamento do retorno da validacao de forms enviados via submit (data-mymethodpostform="submit"). Apenas necessario quando usado: 'hasDialog' => "1".
//															'actionSelector' => "#addActionSelector", // Selector para o form. Apenas necessario quando usado: 'hasDialog' => "1".
//															'hasDialog' => "1", // Determina se o form se encontra numa dialog.
//															'msg' => array('type' => '', 'title' => '', 'text' => ''), // Mensagem a apresentar ao user.
//															'errors' => array('idElement1' => 'msgError', 'idElement2' => 'msgError', ...)) // Erros apresentar no formulario.
function processReturnForm(var_data)
{
	// Selector principal
	var actionSelector = false;
	var actionSelectorObj = false;
	// Determina se estamos a usar um dialog
	var hasDialog = false;
	
	
	if(!$.isEmptyObject(var_data['actionSelector'])) {
		actionSelector = var_data['actionSelector'];
		actionSelectorObj = $(actionSelector);
	}
	if(!$.isEmptyObject(var_data['hasDialog'])) {
		hasDialog = var_data['hasDialog'];
	}


	// No errors
	if($.isEmptyObject(var_data['errors'])) {
		// Hide dialog
		if(hasDialog) {
			//actionSelectorObj.modal('hide'); // Nao funciona quando sao efectuados refresh parciais (instancia varias vezes o body)
			$('[data-dismiss="modal"]').click();
		}

		// Actualizar a pagina
		loadMainMenu();
	}
	else if(actionSelector) { // Errors
		$.each(var_data['errors'], function(index, value) {
			$('#'+index).tooltip({
				placement: 'right',
				title: value,
				trigger: 'manual'
			});
			$('#'+index).addClass('redBorder');
		});
		
		if(hasDialog) {
			$(actionSelector+" form *").tooltip('show');
			$(actionSelector+" form .tooltip .tooltip-inner").addClass('redTooltipInner');
			$(actionSelector+" form .tooltip .tooltip-arrow").addClass('redTooltipArrow');
			//$(actionSelector+" form .tooltip .tooltip-arrow").css("border-right-color", "#F00");
		}
		else
		{
			$(actionSelector+" *").tooltip('show');
			$(actionSelector+" .tooltip .tooltip-inner").addClass('redTooltipInner');
			$(actionSelector+" .tooltip .tooltip-arrow").addClass('redTooltipArrow');
			//$(actionSelector+" form .tooltip .tooltip-arrow").css("border-right-color", "#F00");
		}
	}
	
	// Show growl
	if(!$.isEmptyObject(var_data['msg'])) {
		$.msgGrowl({
			type: var_data['msg']['type'], //[info, success, warning, error]
			title: var_data['msg']['title'],
			text: var_data['msg']['text']
		});
	}
}