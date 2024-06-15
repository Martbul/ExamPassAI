import { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  TextInput,
  Image,
} from "react-native";
import { askAQuestion } from "../../services/langchainServices";
import * as Progress from "react-native-progress";
import { icons } from "../../constants";

export const AIChat = ({ selectedKnowedgeBase, title, creator }) => {
  let { images } = selectedKnowedgeBase;

  const [aiResponse, setAiResponse] = useState(null);
  const [isAILearning, setAILearning] = useState(false);
  const [input, setInput] = useState({
    oldMessages: [],
    newMessage: "",
  });

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
      {isAILearning && (
        <>
          <Progress.Circle size={90} indeterminate={true} />
          <Text className="text-white">LEARNING!!!</Text>
        </>
      )}

      <View>
        <TouchableOpacity
          className="flex w-24 h-8 bg-white justify-center items-center"
          onPress={() => AIresponse()}
        >
          <Text> Teach Me!</Text>
        </TouchableOpacity>
      </View>

      {/* <Text className="text-white text-center font-psemibold">
          AiResult: {aiResponse ? <Text>{aiResponse}</Text> : null}
        </Text> */}

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner} >
          <View style={styles.input} >
            <TouchableOpacity>
              <TextInput
                placeholder="Ask me anything..."
                autoFocus
                handleChangeText={(e) =>
                  setInput((prevInput) => ({
                    ...prevInput,
                    oldMessages: [...prevInput.oldMessages, e],
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
      </TouchableWithoutFeedback>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
   
  input: {
    display: "flex",
    flexDirection:'row',
    marginBottom: 30,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 6,
    backgroundColor: "gray",
    borderTopWidth: 0,
    borderColor: "#gray",
    width: "90%",
    borderRadius: 30,
  },
});
