import React from "react";
import { View, Text, Button, StyleSheet, ScrollView, TouchableHighlight, TouchableOpacity } from "react-native";


function About ({navigation}) {
    return (
      <View>  
      
        <Text style={styles.pagesContain1}>
              ABOUT
        </Text>
        <TouchableOpacity style={styles.btnALL1}
                title="Go to Home"
                underlayColor="blue"
                onPress={() => navigation.navigate("Home")}>
                     <Text style={{padding:10}}>Go to About</Text>
        </TouchableOpacity>
              
  
      
      </View>
    );
  }
 
  const styles = StyleSheet.create({
    pagesContain1: {
      backgroundColor: '#fff',
      alignItems: 'center',
      textAlign:"center",
      marginBottom:35,
      padding:25,
    },
    btnALL1 : {
    height:44,
    margin:15,
    alignItems:"center",
    borderWidth:4,    
    color:"white",
    },
  });

export default About ;