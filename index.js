const express = require("express");
const path = require("path");
const app = express()
const cookieParser = require("cookie-parser");
const PORT = 8001;
const {connectToMongoDb} = require("./connect");
const URL = require("./Models/url");
const { checkForAuthentication,restrictTo } = require("./middlewares/auth")

//routes
const urlRoute = require("./Routes/url");
const staticRoute = require("./Routes/staticRouter");
const userRoute = require("./Routes/user");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthentication);

//mongodb connection

connectToMongoDb("mongodb://127.0.0.1:27017/ShortUrlDb")
.then(()=>{
    console.log("mongodb connnected successfully")
})

//set view engine

app.set("view engine","ejs");
app.set("views", path.resolve("./Views"));
//Router 

app.use("/url",restrictTo(["NORMAL","ADMIN"]),urlRoute);
app.use("/",staticRoute);
app.use("/user",userRoute);

app.get("/url/:shortId",async(req,res)=>{
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate({
        shortId
    },
    {$push: {
        visitHistory : {
            timestamp : Date.now()
        },
    }}
)

    if(!entry) return res.status(404).json({ error: "Short URL not found" });
    res.redirect(entry.redirectUrl)
})

app.get("/test" , async(req,res)=>{

    const allUrls = await URL.find({});
    return res.render("Home" , {
        urls : allUrls
    });
})



app.listen(PORT,()=>console.log(`Server stareted at : ${PORT}`))