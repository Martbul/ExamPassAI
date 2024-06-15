import { Text, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";


const KnowledgeBaseCardHome = ({ item,setSelectedKnowedgeBase }) => {
  return (
    <>
      <TouchableOpacity
        className="bg-secondary w-40 h-14 rounded-2xl justify-center items-center"
        onPress={() => setSelectedKnowedgeBase(item.title)}
      >
        <Text style={{ fontWeight: "bold", fontSize: 12, color: "white" }}>
          {item.title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default KnowledgeBaseCardHome;
