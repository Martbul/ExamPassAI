import { baseUrl, postRequest, getRequest } from "../utils/request";

export const askAQuestion = async (images, setAILearning,title,creator) => {
  setAILearning(true)
  try {
    //Getting response from OCR model
    const response = await postRequest(
    `${baseUrl}/langchain/askAQuestion`,
    JSON.stringify({ images })
  );

  if (response.error) {
    console.log("error", response);
    throw new Error(response);
  }
    //TODO: FIX THE FORM OF THE SAVED DATA (NOW: ARR>OBJ>ARR>STR; BEST:ARR>STR)
  //Saving responce to knowledgebase  
  const savedResponce = await postRequest(
    `${baseUrl}/knowledge/addKnowledge`,
    JSON.stringify({ knowledge:response,title,creator  })
  );


  if (savedResponce.error) {
    console.log("error response2", savedResponce);
    throw new Error(savedResponce);
  }
  
  
  } catch (error) {
    throw error
  }
  setAILearning(false)
  return response;
};


