import React, { useState }  from "react" ;
import { Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';

// PAGES IMPORTATION =>>>
import SignIN from "./container/Signin" ;
import SignUP from "./container/Signup" ; 
import HomeScreen from "./container/Home" ;
import About from "./container/About" ;



const Stack = createStackNavigator();


function App() {
  return (
    <>
    
    <NavigationContainer>
      <Stack.Navigator>


      <Stack.Screen 
        name="SigniN" 
        component={SignIN} 
        options={{title:"Rejoingnez-nous"}} />

        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{title:"Acceuil"}} />

        <Stack.Screen 
        name="About" 
        component={About} 
        options={{title:"À propos"}} /> 

        <Stack.Screen 
        name="SignUP" 
        component={SignUP} 
        options={{title:"Inscrivez-vous"}} />

      </Stack.Navigator>
    </NavigationContainer>
 
    </>
  );
}

export default App ;