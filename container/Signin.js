import React, { useState }  from "react" ;
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";



function SignIN ({}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation() ;


   return(
       <>
    <KeyboardAwareScrollView style={{backgroundColor:"#212121"}}>
        <Text style={styles.pagesContain}>
            SigniN
        </Text>
            
            <View style={{alignItems:"center"}}>
        <Image style={styles.loGo} source={require("../assets/airbnbLogo.png")}/>
            </View>
            <View style={{alignItems:"center"}}>
            <Text style={{color:"white",fontSize:12,margin:15}}>
                Entrez votre mot de passe pour vous connecter
            </Text>
            </View>

            <View style={styles.forMInput}>
                <Text style={styles.textInpuT}>Email</Text>
                <TextInput style={styles.inputZone}
                onChangeText={text => {
                setEmail(text);
                }}
                value={email}
                />
                <Text style={styles.textInpuT}>Login</Text>
                <TextInput style={styles.inputZone}
                onChangeText={text => {
                setPassword(text);
                }}
                value={password}
                />
            </View>

        
        <TouchableOpacity style={styles.btnALL1} 
                title="Go to Home"
                underlayColor="blue"
                onPress={() => navigation.navigate("SignUP")}>
                     <Text style={{padding:10,color:"#eb5a62"}}>Go to create account</Text>
        </TouchableOpacity>    
    </KeyboardAwareScrollView>

    </>
    )
}

const styles = StyleSheet.create({
    loGo : {
        width:80,
        height:80,
    },
    pagesContain: {
      backgroundColor: 'black',
      color:"#cbf000",
      fontSize:20,
      alignItems: 'center',
      textAlign:"center",
      marginBottom:35,
      padding:25,
    },
    btnALL1 : {
    height:44,
    margin:15,
    top:55,
    alignItems:"center",
    borderWidth:1,    
    color:"red",
    },


    forMInput : {
        alignItems:"center",
        top:-20,
        
    },
    textInpuT : {
        marginTop:45,
        color:"#cbf000",
        textAlign:"center",
        fontSize:17,
    },
    inputZone : {
     borderBottomWidth:4,
     borderColor:"black",
     width:"60%",
     height:34,
     color:"white",

    }
  });
export default SignIN ;