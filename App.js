import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {
  const [name, setName] = useState("Apple"); 
  const [person, setPerson] = useState({name : "mario", age : 10 });

  const clickHandler = () =>
  {
    setName("Banana");
    setPerson({name : "luigi", age : 11});
  }

  return (
    <View style={styles.container}>      

      <View style={styles.body}>
        <Text style={styles.textStyle}>Hello World..</Text>
        <Text>My name is {name}...</Text>
        <Text>His name is {person.name} and age is {person.age}!</Text>
      </View>

      <Button title="click me" onPress={clickHandler}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  body:
  {
    backgroundColor : "yellow",
    padding : 20,
    margin : 10
  },

  textStyle:
  {
    fontSize : 20,
    fontWeight : "bold"
  }

});
