import { baseUrl, postRequest, getRequest } from "../utils/request";
//TODO: za da bachka importa trqbva da e v survura!!!


// export const askAQuestion = async (images, setAILearning,title,creator) => {
//   setAILearning(true)
//   try {
//     const response_0 = await fetch(images[0]);
//     const exampleImage = await response_0.blob();
    						
// const app = await client("https://llava.hliu.cc/");
// const result = await app.predict("Extract the human readable text from the image", [		
// 				"Hello!!", // string  in 'parameter_3' Textbox component
// 				exampleImage, 	// blob in 'parameter_11' Image component		
// 				"default", // string  in 'Preprocess for non-square image' Radio component
// 	]);
//   setAILearning(false)
//   console.log(result.data);
//   return result;
//   } catch (error) {
//     throw error
//   }
 
 
// };


  // export const askAQuestion = async (images, setAILearning,title,creator) => {
  //   setAILearning(true)
  //   try {
      
  //     const response = await postRequest(
  //     `${baseUrl}/langchain/askAQuestion`,
  //     JSON.stringify({ images })
  //   );
  //   console.log('--ai-response--',response);

  //   if (response.error) {
  //     console.log("error", response);
  //     throw new Error(response);
  //   }
    
  //   const savedResponce = await postRequest(
  //     `${baseUrl}/knowledge/addKnowledge`,
  //     JSON.stringify({ knowledge:response.allDataFromImages,title,creator  })
  //   );


  //   if (savedResponce.error) {
  //     console.log("error response2", savedResponce);
  //     throw new Error(savedResponce);
  //   }
  //   setAILearning(false)
  //   return response;
  //   } catch (error) {
  //     throw error
  //   }
  
  
  // };


