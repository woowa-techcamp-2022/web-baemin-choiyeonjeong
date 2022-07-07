const express = require("express");
const router = express.Router();

router.get("/agree", (req, res, next) => {
  res.render("agree", { title: "회원가입" });
});

router.get("/certification", (req, res, next) => {
  res.send("휴대폰 인증번호");
});

router.get("/personaldetails", (req, res, next) => {
  res.send("상세정보");
});

module.exports = router;