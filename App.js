import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

//#region View Text and Style

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Hellow World..</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create(
//   {
//     container : 
//     {
//       flex : 1,
//       backgroundColor : "#fff",
//       alignItems : "center",
//       justifyContent : "center"
//     },
    
//     header:
//     {
//       padding : 20,
//       backgroundColor : "yellow"
//     },

//     title:
//     {
//       fontSize : 20,
//       fontWeight : "bold",
//     }
//   }
// );

//#endregion

//#region UseState

// export default function App(){

//   const [name, setName] = useState("Apple");
  
//   const clickHandler = () =>
//   {
//     setName("Banana");
//   }

//   return(
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text>Hello my name is {name}...</Text>
//       </View>
      
//       <View style={styles.button}>
//         <Button title="click me" onPress={clickHandler}></Button>
//       </View>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container :
//   {
//     flex : 1,
//     backgroundColor : "white",
//     alignItems : "center",
//     justifyContent : "center",
//   },
  
//   header :
//   {
//     fontSize : 30,
//     fontWeight : "bold",
//     backgroundColor : "#81ef97",
//     padding : 20
//   },

//   button:
//   {
//     margin : 20
//   }
  
// });

//#endregion

//#region TextInput

// export default function APP(){
  
//   const [person, setPerson] = useState({name : "mario", age : 20});

//   return(

//     <View style={styles.container}>
      
//       <View style={styles.title}>
//         <Text style={styles.textStyle}>My name is {person.name} and age is {person.age}..</Text>
//       </View>

//       <View style={styles.nameInput}>
//         <Text>Enter Name : </Text>
//         <TextInput 
//           style={styles.input} 
//           placeholder="e.g. Apple"
//           onChangeText={(val)=>setPerson({name : val, age : person.age})}        
//         />
//       </View>

//       <View style={styles.ageInput}>
//         <Text>Enter Age : </Text>
//         <TextInput 
//           style={styles.input} 
//           placeholder="e.g. 12" 
//           keyboardType="numeric"
//           onChangeText={(val) => setPerson({name : person.name, age : val})}
//         />
//       </View>

//     </View>

//   );
// }

// const styles = StyleSheet.create({
  
//   container :
//   {
//     flex : 1,
//     backgroundColor : "#fff",
//     alignItems : "center",
//     justifyContent : "center"
//   },

//   title :
//   {
//     backgroundColor : "#7fffd4",
//     margin : 10,
//     padding : 20,
//   },

//   textStyle:
//   {
//     fontSize : 20,
//     fontWeight : "bold"
//   },

//   nameInput :
//   {
//     backgroundColor : "#9af",
//     margin : 10,
//     padding : 20
    
//   },

//   ageInput :
//   {
//     backgroundColor : "#f4ab25",
//     margin : 10,
//     padding : 20
//   },

//   input:
//   {
//     borderWidth : 1,
//     borderColor : "#911",
//     padding : 8,
//     margin : 10,
//     width : 200
//   }

// });

//#endregion

//#region List and ScrollView

export default function App(){

  const [people, setPeople] = useState([
    {name : "apple",  key : "1"},
    {name : "banana", key : "2"},
    {name : "orange", key : "3"},
    {name : "melon",  key : "4"},
    {name : "peach",  key : "5"},
    {name : "berry",  key : "6"},
    {name : "pear",   key : "7"},
  ]);

  return(
    <View style={styles.test}>

      <View style={styles.header}>
        <Text style={styles.title}>List and ScrollView example</Text>
      </View>

      <View style={styles.listContainter}>

        <ScrollView>
          {people.map((item)=>
            (
              <View key={item.key}>
                  <Text style={styles.item}>{item.name}</Text>
              </View>
            ))
          }
        </ScrollView>

      </View>

    </View>



  );
}

const styles = StyleSheet.create({

  test:
  {
    flex : 1
  },
  listContainter :
  {
    //flex : 1,
    backgroundColor : "#e9c",
    paddingBottom : 40,
    paddingHorizontal : 20
  },
  
  header : 
  {
    marginTop : 50,
    marginBottom : 20,
    backgroundColor : "#4dd",
    padding : 10,
    alignItems : "center"
  },
  
  title:
  {
    fontSize : 20,
    fontWeight : "bold"
  },

  item:
  {
    marginTop : 24,
    padding : 20,
    backgroundColor : "yellow",
    fontSize : 24
  }


});

//#endregion