import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { askAQuestion } from "../../services/langchainServices";
import { generateText } from "../../aiModels/langchain";

export const CarValuation = ({ selectedKnowedgeBase }) => {
  const [aiResponse, setAiResponse] = useState(null);

  let { images } = selectedKnowedgeBase;
  const AIresponse = async () => {
    const result = await askAQuestion(images);
    setAiResponse(result);
  };
  //TODO: when user adds new image or file change some 
  //TODO: state to indicate update in the knowledgebase,
  //TODO: then show button for "text me", then after fetching the 
  //TODO: new data from images and documents state is chandged to 
  //TODO: "Up to data/teached", then the data from images and docs is saved to DB 

  // useEffect(() => {
    
   
  // }, []);

  return (
    <>
    <View>
    <TouchableOpacity
    onPress={()=>AIresponse()}>
      
      <Text> Teach Me!</Text>
    </TouchableOpacity>
    </View>
      <View>
       

        <Text className="text-white text-center font-psemibold">
          AiResult: {aiResponse ? <Text>{aiResponse}</Text> : null}
        </Text>
      </View>
    </>
  );
};
