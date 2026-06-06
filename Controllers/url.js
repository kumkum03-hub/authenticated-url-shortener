const {nanoid} = require("nanoid")
const URL = require("../Models/url")

async function handleGenerateNewShortUrl(req,res) {

    const body = req.body

    if(!body.url){
        return res.status(404).json({
            error : "url is required"
        })
    }

    const shortId = nanoid(8)

    await URL.create({
        shortId : shortId,
        redirectUrl : body.url,
        visitHistory : [],
        createdBy : req.user._id
    })

    return res.redirect(`/?id=${shortId}`);
   

}

async function handleGetAnalytics(req,res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});

    return res.json({
        totalClicks : result.visitHistory.length,
        analytics : result.visitHistory
    })
}


module.exports = {
    handleGenerateNewShortUrl,
    handleGetAnalytics
}