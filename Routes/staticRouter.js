const express= require("express");
const router = express.Router();
const URL = require("../Models/url");
const { restrictTo } = require("../middlewares/auth");

router.get("/admin/urls",restrictTo(["ADMIN"]),async(req,res)=>{
    const allurls = await URL.find({});
    return res.render("Home",{
        urls : allurls,
        id: req.query.id
    });
});


router.get("/",restrictTo(["NORMAL","ADMIN"]), async(req,res)=>{
    const allurls = await URL.find({createdBy : req.user._id});
    return res.render("Home",{
        urls : allurls,
        id: req.query.id
    });
});

router.get("/signup",async(req,res)=>{
    return res.render("signup");
});

router.get("/login",async(req,res)=>{
    return res.render("login");
});

module.exports = router;