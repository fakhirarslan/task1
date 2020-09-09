const router = require('express').Router();
let User = require('../models/User');

router.route('/login').post((req, res) => {
   User.findOne({ email: req.body.email, password: req.body.password })
      .then(user => {
         if (user) {
            res.json({
               first_name: req.body.first_name,
               last_name: req.body.last_name,
               email: req.body.email,
               password: req.body.password,
               status: "User Exists!"
            });
         } else {
            res.json({ error: "User Does Not Exist!" });
         }
      })
});

router.route('/register').post((req, res) => {
   const first_name = req.body.first_name;
   const last_name = req.body.last_name;
   const email = req.body.email;
   const password = req.body.password;

   console.log(first_name);

   const userData = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
   };


   User.findOne({ email: email })
      .then(user => {
         if (!user) {
            User.create(userData)
               .then(user => {
                  res.json({ status: user.email + ' User Registered!' });
               })
               .catch(err => {
                  res.send('error: ' + err)
               })
         } else {
            res.json({ error: 'User Already Exists!' })
         }
      })
});

module.exports = router;