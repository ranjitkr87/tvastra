const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

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

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/query', (req, res) => {
  res.render('query');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/treatments', (req, res) => {
  res.render('treatments');
});

router.get('/tvastraPlus', (req, res) => {
  res.render('tvastraPlus');
});

module.exports = router;