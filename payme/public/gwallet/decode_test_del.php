<?php
$s_array = 'a:1:{s:3:"jwt";s:579:"eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJHb29nbGUiLCJyZXF1ZXN0Ijp7Im5hbWUiOiJQaWVjZSBvZiBDYWtlIHh4IiwiZGVzY3JpcHRpb24iOiJWaXJ0dWFsIGNob2NvbGF0ZSBjYWtlIHRvIGZpbGwgeW91ciB2aXJ0dWFsIHR1bW15IiwicHJpY2UiOiIxMC41MCIsImN1cnJlbmN5Q29kZSI6IlVTRCIsInNlbGxlckRhdGEiOiJwYXlfc3lzdGVtOjIscGF5bWVfaWQ6MTIyNDI0NSJ9LCJyZXNwb25zZSI6eyJvcmRlcklkIjoiR1dER19TLmI3YmEyMTY4LTc2OTctNDk5OC1iZGNhLWRmN2VjOWE1ZjE5ZiJ9LCJ0eXAiOiJnb29nbGUvcGF5bWVudHMvaW5hcHAvaXRlbS92MS9wb3N0YmFjay9idXkiLCJhdWQiOiIwNTczNTQwNzQzOTc1MDE3OTQ2NyIsImlhdCI6MTM5NTE2ODk0MCwiZXhwIjoxMzk1MTY4OTYwfQ.J0PKZ2r1idTvSXNl2z-lCodIDsORYDuJRCg6xIpPuwQ";}';

$s_array = unserialize($s_array);
print_r($s_array);

require_once (dirname ( __FILE__ ) . "/../../../lib/jwt-master/JWT.php"); //classe + direto
/*https://developers.google.com/wallet/digital/docs/tutorial*/

$decode_data = $s_array['jwt'];
$sellerSecret = "_aQ2qq6lHNUUKqNmhl2a3Q";

$decoded = JWT::decode($decode_data, $sellerSecret);

if($decoded->iss == "Google"){ //If google replied
	$price = $decoded->request->price;
	$currencyCode = $decoded->request->currencyCode;
	$sellerData = $decoded->request->sellerData; //[sellerData] => masterSystem:2,payme_id:1224245
	list ($masterSystem, $payme_id) = split (',', $sellerData);
	
	$masterSystem = split (':',$masterSystem);
	$masterSystem = $masterSystem[1]; //2
	
	$payme_id = split (':',$payme_id);
	$payme_id = $payme_id[1]; //1224245
	
	$sucess = 1;
	//falta -> vai detectar os valores do payme e comprar com os do google
	
	
	if($sucess){
		print $decoded->response->orderId;
	}
}
/*stdClass Object
(
    [iss] => Google
    [request] => stdClass Object
        (
            [name] => Piece of Cake xx
            [description] => Virtual chocolate cake to fill your virtual tummy
            [price] => 10.50
            [currencyCode] => USD
            [sellerData] => pay_system:2,payme_id:1224245
        )

    [response] => stdClass Object
        (
            [orderId] => GWDG_S.b7ba2168-7697-4998-bdca-df7ec9a5f19f
        )

    [typ] => google/payments/inapp/item/v1/postback/buy
    [aud] => 05735407439750179467
    [iat] => 1395168940
    [exp] => 1395168960
)*/

/*Resposta de "OK" para a google*/


?>