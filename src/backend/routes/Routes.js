const express = require('express');
const router = express.Router();
const middle= require("../controllers/middle");
const getController = require("../controllers/getControllers");
const postController= require("../controllers/postControllers");
const otpController= require("../controllers/otpController");

router.route("/").get(middle.redirect, getController.index);

router.route("/signup").get(middle.redirect, getController.signup);
router.route("/signup").post(postController.signup);

router.route("/login").get(middle.redirect, getController.login);
router.route("/login").post(postController.login);

router.route('/logout').get(postController.logout);

router.route("/aboutApollo").get(middle.redirect, getController.aboutApollo);

router.route("/appoinment").get(middle.redirect, getController.appoinment);

router.route("/contact").get(middle.redirect, getController.contactUs);

router.route("/doctor").get(middle.redirect, getController.doctor);

router.route("/doctor-profile").get(middle.redirect, getController.doctor_profile);

router.route("/FAQ").get(middle.redirect, getController.FAQ);

router.route("/hospital").get(middle.redirect, getController.hospital);

router.route("/newPassword").get(middle.redirect, getController.newPassword);

router.route("/OTP").get(middle.redirect, getController.OTP);

router.route("/phoneLogin").get(middle.redirect, getController.phoneLogin);

router.route("/otpRequest").post(otpController.otpRequest,getController.OTP);
router.route("/otpValidation").post(otpController.otpValidation);

router.route("/query").get(middle.redirect, getController.query);

router.route("/treatments").get(middle.redirect, getController.treatments);

router.route("/tvastraPlus").get(middle.redirect, getController.tvastraPlus);

module.exports = router;