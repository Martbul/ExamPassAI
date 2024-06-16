import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    chatView: {
        marginTop:20,
        borderTopRightRadius:50,
        borderTopLeftRadius:50,
     
      
      backgroundColor: "#171717",
    },
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
        display: 'flex',
        

      flexDirection: "row",
      marginBottom: 120,
      padding: 10,
      justifyContent: "space-between",
      alignItems: "center",
      marginHorizontal: 6,
      backgroundColor: "#2f2f2f",
      borderTopWidth: 0,
      borderColor: "#2f2f2f",
      width: "90%",
      borderRadius: 30,
    },
    tInput: {
        display: 'flex',
        flex:1,
      color: "#959495",
    },
  });
  