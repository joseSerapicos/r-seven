/* Chamada em jquery
$(document).ready(function() { }); */

/* Adicionar evento click em jquery
$(".call_script").click( function() { }); */

/* Obter atributo em jquery
var var_id = $(this).attr("my_id"); */


// Faz a chamada a scripts via post.
// Parametros:
// var_script : Script a ser executado
// var_json_post : Dados a enviar via post encriptados com json;
// var_return_type : Tipo de retorno ["function" (chamar funcao javascript apos retorno, enviando o retorno como parametro), "tag" (carregar tag apos retorno, com o valor do retorno)]
// var_return_name : Nome da function a chamar ou do identificador jquery para a tag a carregar (conforme parametro var_return_type)
function call_script(var_script, var_json_post, var_return_type, var_return_name)
{
	//alert(var_script);
	jQuery.ajax({
		type: "POST",
	    url: var_script,
	    data: { json_post: JSON.stringify(var_json_post)},

        beforeSend: function() {
		},
	    
		success: function(data) {
			//alert(data);
			switch(var_return_type) {
				case 'tag': $(var_return_name).html(data); break;
				case 'function': jQuery.globalEval(var_return_name+"("+data+")"); break;
			  	//default: $(var_return_name).html(data); break;
			}
	    }
	/* }).done( function(data) { // FUNCAO ALTERNATIVA AO SUCECSS
		alert(data); */
	});
}


// Faz post de formularios, e envia o resultado para uma outra funcao em javascript, que mediante os resultados deve assinalar os erros ou terminar a operacao. Os resultados sao enviados no formato json_encode.
// Parametros:
// var_script : Script para onde deverao ser enviados os dados do formulario via post
// var_form_id : Identificador do formulario do qual vao ser extraidos os dados para post;
// var_return_function_name : Nome da function a chamar para envio de resultados (array em json_encode)
function submit_form(var_script, var_form_id, var_return_function_name)
{
	jQuery.ajax({
		type: "POST",
	    url: var_script,
	    data: { serialize_post: $("#"+var_form_id).serialize() },

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