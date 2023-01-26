const express = require('express')
const router = express.Router();
const {registerUser, loginUser, handleRefreshToken} = require("../controller/authController")
const { createTokens, validateToken } = require('../middleware/jwt_token')


router.post("/register", registerUser)

router.post("/login", loginUser)
router.get("/refresh", handleRefreshToken)
// router.get("/logout", logout)

router.get("/profile", validateToken, (req, res) => {
    res.json({msg:"Welcome to our site, we are pleased to have you as our client, thank you."});
})

module.exports = router;

