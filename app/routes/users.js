var express = require('express');
var router = express.Router();


router.use(bodyParser());

router.post(

  // Route
  '/user',

  // Form filter and validation middleware
  form(
    field("username").trim().required().is(/^[a-z]+$/),
    field("password").trim().required().is(/^[0-9]+$/),
    field("email").trim().isEmail()
   ),

   // Express request-handler now receives filtered and validated data
   function(req, res){
     if (!req.form.isValid) {
       // Handle errors
       console.log(req.form.errors);

     } else {
       // Or, use filtered form data from the form object:
       console.log("Username:", req.form.username);
       console.log("Password:", req.form.password);
       console.log("Email:", req.form.email);
     }
  }
);

module.exports = router;
