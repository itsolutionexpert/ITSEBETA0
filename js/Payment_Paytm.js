<script type="application/javascript" crossorigin="anonymous" src="https://securegw-stage.paytm.in/merchantpgpui/checkoutjs/merchants/ITSolu68738884611046.js" onload="onScriptLoad();"> </script>
                        <script>
                            function onScriptLoad() {
                                var config = {
                                    "root": "",
                                    "flow": "DEFAULT",
                                    "data": {
                                        "orderId": "", /* update order id */
                                        "token": "", /* update token value */
                                        "tokenType": "TXN_TOKEN",
                                        "amount": "" /* update amount */
                                    },
                                    "handler": {
                                        "notifyMerchant": function (eventName, data) {
                                            console.log("notifyMerchant handler function called");
                                            console.log("eventName => ", eventName);
                                            console.log("data => ", data);
                                        }
                                    }
                                };

                                if (window.Paytm && window.Paytm.CheckoutJS) {
                                    window.Paytm.CheckoutJS.onLoad(function excecuteAfterCompleteLoad() {
                                        // initialze configuration using init method
                                        window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
                                            // after successfully updating configuration, invoke JS Checkout
                                            window.Paytm.CheckoutJS.invoke();
                                        }).catch(function onError(error) {
                                            console.log("error => ", error);
                                        });
                                    });
                                }
                            }
                        </script>