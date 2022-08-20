import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.content}>
      <Text style={styles.titleText}>TimeAudit! Track, Write, Audit!</Text>
      <View
        style={styles.auditInput}
      >
        <TextInput placeholder='What do you want to add' />
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
  auditInput:{
    flexDirection: "row",
    justifyContent: 'space-between',
  }
});

// HMRC shiply
//083210
//a12001020
