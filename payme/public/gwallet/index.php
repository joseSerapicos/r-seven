
<?php
require_once (dirname ( __FILE__ ) . "/../../../lib/jwt-master/JWT.php");//classe + direto
/*https://developers.google.com/wallet/digital/docs/tutorial*/

$sellerIdentifier = "05735407439750179467";
$sellerSecret = "_aQ2qq6lHNUUKqNmhl2a3Q";

$payload = array(
  "iss" => $sellerIdentifier,
  "aud" => "Google",
  "typ" => "google/payments/inapp/item/v1",
  "exp" => time() + 100600,
  "iat" => time(),
  "request" => array (
    "name" => "Invoice 23",
    "description" => "PayMe! Invoice: 23",
    "price" => "3",
    "currencyCode" => "EUR",
	"sellerData" => "DVP%2BRG3yhUZjrJX0fuqNc6bAxcJWNiKX5L2iWc2%2BeL9oKqN5CFIvuVhzLoq%2BUywn0i%2BeY1zZs518VZ7N%2BqvgTQ%3D%3D",
  ),
);
$gToken = JWT::encode($payload, $sellerSecret);

print_r($gToken);


?>

<script type="text/javascript" src="https://sandbox.google.com/checkout/inapp/lib/buy.js"></script>
<script type="text/javascript">
      function setup() {
        runDemoButton = document.getElementById("runDemoButton");
        runDemoButton.onclick = function() {
          google.payments.inapp.buy({
            parameters: {},
            jwt: "<?=$gToken?>",
            success: function() { window.alert('success') },
            failure: function() { window.alert('failure') }
          });
          return false;
        };
      
      }
      window.onload = setup;
    </script>
<input type="image"  src="../layout/img/gwallet_paybtn.png" value="buy" name="runDemoButton" id="runDemoButton"/>