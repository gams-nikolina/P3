import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    // View, text Component
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Prva aplikacija ☻</Text>
      </View>

      {/* Flexbox layout */}
      <View style={styles.jumbotron}>
        <View style={styles.container}>
          <Text style={styles.subtitle}>Labrador Retriever</Text>
        </View>
       
      </View>

      {/* Image component */}
      <Image
        style={styles.image}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/0/04/Labrador_Retriever_%281210559%29.jpg",
          
        }}
        
      />
     

      {/* button component */}
       <Button title="Izaberi" onPress={() => Alert.alert("Button pressed")}  style = {{color:'red'}}/>


      
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#689790",
    textAlign: 'center'
  },
  header: {
    borderBottomWidth: 2,
    padding: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: 'italic'
  },
  jumbotron: {
    flexDirection: "row",
    margin: 20,
  },
  image: {
    width: 300,
    height: 250,
    margin: 25,
    justifyContent: 'center',
    alignItems: 'center'
  
  }
});