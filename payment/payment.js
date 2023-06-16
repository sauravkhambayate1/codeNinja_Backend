const Razorpay = require('razorpay');
var instance = new Razorpay({
  key_id: 'rzp_test_vxXEO5AdtLOq8i',
  key_secret: 'WomZP3Oi16bLyDQcMrtuVf5d',
  });



  const createOrder=(req,res)=>{
          console.log("order",req.body);
    var options = {
      amount: req.body.amount,  // amount in the smallest currency unit
      currency: "INR",
      receipt: "rcp1"
    };
    instance.orders.create(options, function(err, order) {
      console.log( "order",order);
      res.send({orderId:order.id})
    });

  }


  const orderVerify=(req,res)=>{

    let body=req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;
   
     var crypto = require("crypto");
     var expectedSignature = crypto.createHmac('sha256', 'tuN6TxBwRXHZpaLPqSoAxUnY')
                                     .update(body.toString())
                                     .digest('hex');
                                     console.log("sig received " ,req.body.response.razorpay_signature);
                                     console.log("sig generated " ,expectedSignature);
     var response = {"signatureIsValid":"false"}
     if(expectedSignature === req.body.response.razorpay_signature)
      response={"signatureIsValid":"true"}
         res.send(response);
     };
   

  module.exports={createOrder,orderVerify}

  