const express = require('express');
const router = express.Router();
const middle= require("../controllers/middle");
const mainController = require("../controllers/MainController");
const signupController= require("../controllers/SignupController");

router.get('/', (req, res) => {
  res.render('index');
});

router.route("/signup").get(middle.redirect, mainController.signup);
router.route("/signup").post(signupController.signup);

router.route("/login").get(middle.redirect, mainController.login);
router.route("/login").post(signupController.login);

router.route('/logout').get(signupController.logout);

router.get('/aboutApollo', (req, res) => {
  res.render('aboutApollo');
});

router.get('/aboutUs', (req, res) => {
  res.render('aboutUs');
});

router.get('/appoinment', (req, res) => {
  res.render('appoinment');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.get('/doctor', (req, res) => {
  res.render('doctor');
});

router.get('/doctor-profile', (req, res) => {
  res.render('doctor-profile');
});

router.get('/doctor', (req, res) => {
  res.render('doctor');
});

router.get('/FAQ', (req, res) => {
  res.render('FAQ');
});

router.get('/hospital', (req, res) => {
  res.render('hospital');
});

router.get('/query', (req, res) => {
  res.render('query');
});

router.get('/treatments', (req, res) => {
  res.render('treatments');
});

router.get('/tvastraPlus', (req, res) => {
  res.render('tvastraPlus');
});

module.exports = router;