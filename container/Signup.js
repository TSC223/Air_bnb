import React from "react" ;
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";


function SignUP ({navigation}) {

    return(
    <View>
        <Text style={styles.pagesContain}>
                SignUP
        </Text>
        <TouchableOpacity style={styles.btnALL1}
                title="Go to Home"
                underlayColor="blue"
                onPress={() => navigation.navigate("Home")}>
                     <Text style={{padding:10}}>Go to Home</Text>
        </TouchableOpacity>
    </View>
    )
}


const styles = StyleSheet.create({
    pagesContain: {
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

export default SignUP ;