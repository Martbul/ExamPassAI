import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { askAQuestion } from "../../services/langchainServices";
import { generateText } from "../../aiModels/langchain";
import * as Progress from 'react-native-progress';
export const CarValuation = ({ selectedKnowedgeBase,title,creator }) => {
  const [aiResponse, setAiResponse] = useState(null);
  const [isAILearning, setAILearning] = useState(false);

  let { images } = selectedKnowedgeBase;

  const AIresponse = async () => {
    const result = await askAQuestion(images, setAILearning,title,creator);
    
    setAiResponse(result.allDataFromImages);
  };
  //TODO: when user adds new image or file change some 
  //TODO: state to indicate update in the knowledgebase,
  //TODO: then show button for "text me", then after fetching the 
  //TODO: new data from images and documents state is chandged to 
  //TODO: "Up to data/teached", then the data from images and docs is saved to DB 
  return (
    <>
    {isAILearning && (<>
      <Progress.Circle size={90} indeterminate={true} />
      <Text className="text-white">LEARNING!!!</Text>
    </>)}
    <View>
    <TouchableOpacity 
    className='flex w-24 h-8 bg-white justify-center items-center'
    onPress={()=>AIresponse()}>
      
      <Text > Teach Me!</Text>
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
