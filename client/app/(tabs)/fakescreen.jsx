import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const Fakescreen = () => {
  
  return (
    <SafeAreaView style={styles.safeArea} className='h-full'>
       
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.view} className=''>
        {/* Your content here */}
      </View>
      <TouchableOpacity 
      style={styles.button}
      onPress={()=>router.push('/(ai)/dashboard')}
      >
        <Text style={styles.buttonText}>Continue Cheating</Text>
      </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: 'black',
  },
  view: {
    flex: 1,
    backgroundColor: 'black',
    height: '100%',

  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    marginTop:750,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
});
export default Fakescreen;
