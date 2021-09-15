const express = require('express');
const router = express.Router();
const middle= require("../controllers/middle");
const mainController = require("../controllers/MainController");
const signupController= require("../controllers/SignupController");
const otpController= require("../controllers/otpController");

router.get('/', (req, res) => {
  res.render('index', {session: req.session});
});

router.route("/signup").get(middle.redirect, mainController.signup);
router.route("/signup").post(signupController.signup);

router.route("/login").get(middle.redirect, mainController.login);
router.route("/login").post(signupController.login);

router.route('/logout').get(signupController.logout);

router.get('/aboutApollo', (req, res) => {
  res.render('aboutApollo', {session: req.session});
});

router.get('/aboutUs', (req, res) => {
  res.render('aboutUs', {session: req.session});
});

router.get('/appoinment', (req, res) => {
  res.render('appoinment', {session: req.session});
});

router.get('/contact', (req, res) => {
  res.render('contact', {session: req.session});
});

router.get('/doctor', (req, res) => {
  res.render('doctor', {session: req.session});
});

router.get('/doctor-profile', (req, res) => {
  res.render('doctor-profile', {session: req.session});
});

router.get('/FAQ', (req, res) => {
  res.render('FAQ', {session: req.session});
});

router.get('/hospital', (req, res) => {
  res.render('hospital', {session: req.session});
});

router.get('/newPassword', (req, res) => {
  res.render('newPassword', {session: req.session});
});

router.get('/OTP', (req, res) => {
  res.render('OTP', {session: req.session});
});

router.get('/phoneLogin', (req, res) => {
  res.render('phoneLogin', {session: req.session});
});

router.route("/otpRequest").post(otpController.otpRequest,mainController.OTP);
router.route("/otpValidation").post(otpController.otpValidation,mainController.index);

router.get('/query', (req, res) => {
  res.render('query', {session: req.session});
});

router.get('/treatments', (req, res) => {
  res.render('treatments', {session: req.session});
});

router.get('/tvastraPlus', (req, res) => {
  res.render('tvastraPlus', {session: req.session});
});

module.exports = router;