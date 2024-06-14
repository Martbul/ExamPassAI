const mongoose = require("mongoose");

const KnowledgebaseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      minLength: [3, "title is too short"],
      maxLength: [70, "title is too long"],
    },

    images: {
      type: Array,
    },

    

    docs: {
      type: Array,
    },

    creator: { type: String, required: [true, "creator is required"] },
    knowledge: { type: Array },
  },
  {
    timestamps: true,
  }
);



const Knowledgebase = mongoose.model("Knowledgebase", KnowledgebaseSchema);


module.exports = Knowledgebase;
