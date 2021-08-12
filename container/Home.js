import React from "react";
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from "react-native";


function HomeScreen ({navigation}) {
       return (
      <>  
        <View>
            <Text style={styles.pagesContain}>
              Page Home
            </Text>git
                
                
                <TouchableOpacity style={styles.btnALL}
                title="Go to About"
                underlayColor="blue"
                onPress={() => navigation.navigate("About")}>
                     <Text style={{padding:10}}>Go to About</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnALL}
                title="Go to About"
                underlayColor="blue"
                onPress={() => navigation.navigate("SigniN")}>
                     <Text style={{padding:10}}>Go to SigniN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnALL}
                title="Go to About"
                underlayColor="blue"
                onPress={() => navigation.navigate("SignUP")}>
                     <Text style={{padding:10}}>Go to SignuP</Text>
                </TouchableOpacity>
        </View>
  
      
      </>
    );
  }
  
  const styles = StyleSheet.create({
    pagesContain: {
      backgroundColor: '#fff',
      alignItems: 'center',
      textAlign:"center",
      marginBottom:35,
      padding:25,
    },
    btnALL : {
    height:44,
    margin:15,
    alignItems:"center",
    borderWidth:4,    
    color:"white",
    },
  });

  export default HomeScreen ;