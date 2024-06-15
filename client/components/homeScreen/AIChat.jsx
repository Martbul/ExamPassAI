import { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
} from "react-native";
import { askAQuestion } from "../../services/langchainServices";
import * as Progress from "react-native-progress";
import { icons } from "../../constants";
import { AuthContext } from "../../contexts/AuthContext";

export const AIChat = ({ selectedKnowedgeBase, title, creator }) => {
  const { user, setCurrentKnowledgebaseAIstate, currentKnowledgebaseAIstate } = useContext(AuthContext);
  let { images } = selectedKnowedgeBase;

  const [aiResponse, setAiResponse] = useState(null);
  const [isAILearning, setAILearning] = useState(false);
  const [input, setInput] = useState({
    oldMessages: [],
    newMessage: "",
  });


  const teachAI = async () => {
    try {
      await AIresponse();
      setCurrentKnowledgebaseAIstate(false);
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };

  const AIresponse = async () => {
    console.log(input);
    console.log(oldMessages);
    const result = await askAQuestion(images, setAILearning, title, creator);
    setAiResponse(result.allDataFromImages);
  };
  //TODO: when user adds new image or file change some
  //TODO: state to indicate update in the knowledgebase,
  //TODO: then show button for "text me", then after fetching the
  //TODO: new data from images and documents state is chandged to
  //TODO: "Up to data/teached", then the data from images and docs is saved to DB
  return (
    <>
      <View className="bg-gray-900 h-full">
        {isAILearning && (
          <>
            <Progress.Circle size={90} indeterminate={true} />
            <Text className="text-white">LEARNING!!!</Text>
          </>
        )}

        {currentKnowledgebaseAIstate === true && (
          <View className='flex w-full justify-center items-center mt-20'>
                <View className="flex bg-white w-60 h-20 justify-center items-center rounded-xl ">
            <TouchableOpacity onPress={teachAI}>
              <View className="flex items-center justify-center ">
                <Text className='text-2xl font-bold'>Click to teach AI</Text>
                <Text className='text-center'>Detected changes in Knowledgebase</Text>
              </View>
            </TouchableOpacity>
          </View>
          </View>
      
        )}

        {/* <Text className="text-white text-center font-psemibold">
          AiResult: {aiResponse ? <Text>{aiResponse}</Text> : null}
        </Text> */}

        <View style={styles.inner}>
          <View style={styles.input}>
            <TouchableOpacity>
              <TextInput
                placeholder="Ask me anything..."
                autoFocus
                handleChangeText={(e) =>
                  setInput((prevInput) => ({
                    ...prevInput,
                    oldMessages: [...prevInput, e],
                    newMessage: e,
                  }))
                }
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Image source={icons.send} className="w-5 h-5" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 10,
  },
  inner: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  input: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 30,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 6,
    backgroundColor: "white",
    borderTopWidth: 0,
    borderColor: "#gray",
    width: "90%",
    borderRadius: 30,
  },
});
