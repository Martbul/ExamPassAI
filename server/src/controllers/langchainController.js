const router = require("express").Router();
const knowledgeService = require("../services/knowledgeService.js");
const axios = require("axios");
const { createWorker } = require("tesseract.js");
const fetch = require("node-fetch"); 



router.post("/askAQuestion", async (req, res) => {
  const imageUrls = req.body.images;
  console.log(imageUrls);
 
  const allDataFromImages = [];
  const worker = await createWorker('eng');
    for (const url of imageUrls){
      try {

       
        const ret = await worker.recognize(url);
        console.log(ret.data.text);
        allDataFromImages.push(ret.data.text)
       
      
        } catch (error) {
          console.error("Error during text recognition:", error);
          res.status(500).json({ error: error.message });
        }
    } 
    await worker.terminate();
    res.json({ allDataFromImages });
});



// router.post("/askAQuestion", async (req, res) => {
//   const images = req.body.images;
// console.log(req.body);
//   try {
//        const response = await axios.post(
//          "https://api-inference.huggingface.co/models/nlpconnect/vit-gpt2-image-captioning",
//          {
//            inputs: images,
//          },
//          {
//            headers: {
//              Authorization: `Bearer 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`,
//            },
//          }
//        );

//     res.json(response);
//   } catch (error) {
//     console.log("err  " + error);
//     return error;
//   }
// });




module.exports = router;
