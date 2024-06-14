const router = require("express").Router();
const knowledgeService = require("../services/knowledgeService.js");
const axios = require("axios");
const { createWorker } = require("tesseract.js");
const fetch = require("node-fetch"); // Import node-fetch for fetching images via URL

router.post("/askAQuestion", async (req, res) => {
  const imageUrls = req.body.images;

  try {
    if (!imageUrls || imageUrls.length === 0) {
      throw new Error("No image URLs provided.");
    }

    const worker = createWorker();

    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");

    const results = [];
    for (let i = 0; i < imageUrls.length; i++) {
      const imageUrl = imageUrls[i];
      const imageResponse = await fetch(imageUrl); // Fetch the image from Firebase URL
      const imageBuffer = await imageResponse.buffer(); // Convert fetched image to buffer
      const {
        data: { text },
      } = await worker.recognize(imageBuffer); // Recognize text from image buffer
      const extractedText = text.replace(/\n/g, " ").trim(); // Clean up recognized text
      console.log(`Recognized text from image ${i + 1}:`, extractedText);
      results.push(extractedText);
    }

    await worker.terminate();

    res.json(results);
  } catch (error) {
    console.error("Error during text recognition:", error);
    res.status(500).json({ error: error.message });
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
