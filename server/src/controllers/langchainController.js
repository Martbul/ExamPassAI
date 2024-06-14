const router = require("express").Router();
const knowledgeService = require("../services/knowledgeService.js");
const axios = require("axios");
const { createWorker } = require("tesseract.js");

router.post("/askAQuestion", async (req, res) => {
  const images = req.body.images;
console.log('here');
  try {
    const worker = await createWorker("eng");
         const ret = await worker.recognize(images[0]);
    console.log('ret', ret.data.text);
     const extractedText = ret.data.text.replace(/\n/g, " ").trim();
         await worker.terminate();

      console.log(extractedText);
    res.json(extractedText);
  } catch (error) {
    console.log("err  " + error);
    return error;
  }
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
