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
import styles from "./AIchatStyles";
export const AIChat = ({ selectedKnowedgeBase, title, creator }) => {
  const { setCurrentKnowledgebaseAIstate, currentKnowledgebaseAIstate } =
    useContext(AuthContext);
  let { images } = selectedKnowedgeBase;

  const [aiResponse, setAiResponse] = useState(null);
  const [isAILearning, setAILearning] = useState(false);
  const [input, setInput] = useState({
    oldMessages: [],
    newMessage: "",
  });

  const teachAI = async () => {
    try {
      await extractDataFromImages();
      setCurrentKnowledgebaseAIstate(false);
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };

  const extractDataFromImages = async () => {
    const result = await askAQuestion(images, setAILearning, title, creator);
    setAiResponse(result.allDataFromImages);
  };

  const handleAIchat = async () => {
    console.log(input.newMessage);
    console.log(input.oldMessages);
    //const aiResponse = await askAI(input.newMessage)
  };

  const handleChangeText = (text) => {
    setInput((prevInput) => ({
      ...prevInput,
      newMessage: text,
    }));
  };

  const handleSubmit = () => {
    setInput((prevInput) => ({
      oldMessages: [...prevInput.oldMessages, prevInput.newMessage],
      newMessage: '',
    }));

    handleAIchat()
  };

  return (
    <>
      <View className=" h-full" style={styles.chatView}>
        {isAILearning && (
          <>
            <Progress.Circle size={90} indeterminate={true} />
            <Text className="text-white">LEARNING!!!</Text>
          </>
        )}

        {currentKnowledgebaseAIstate === true && (
          <View className="flex w-full justify-center items-center mt-20">
            <View className="flex bg-white w-60 h-20 justify-center items-center rounded-xl ">
              <TouchableOpacity onPress={teachAI}>
                <View className="flex items-center justify-center ">
                  <Text className="text-2xl font-bold">Click to teach AI</Text>
                  <Text className="text-center">
                    Detected changes in Knowledgebase
                  </Text>
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
            <TouchableOpacity className="flex flex-1">
            <TextInput
        style={styles.tInput}
        placeholder="Ask me anything..."
        placeholderTextColor="#959495"
        autoFocus
        value={input.newMessage}
        onChangeText={handleChangeText}
      />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSubmit}>
              <View>
                <Image source={icons.sendCircle} className="w-9 h-9" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
