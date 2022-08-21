import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.content}>
      <Text style={styles.titleText}>TimeAudit! Track, Write, Audit!</Text>
      <View
        style={styles.inputContainer }
      >
        <TextInput style={styles.textInput} placeholder='What do you want to add' />
        <Button title='Add now' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
  content: {
    padding: 10,
  },
  titleText: {
    margin: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#ff5f00",
    padding: 10,
  },
  inputContainer:{
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput:{
    borderWidth: 1,
    borderColor:'#cccccc',
    width:'70%',
    marginRight:10,
    padding:10
  }
});

// HMRC shiply
//083210
//a12001020
