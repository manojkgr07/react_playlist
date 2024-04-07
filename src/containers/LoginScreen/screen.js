import React from "react";

import { Button, StyleSheet, Text, TouchableOpacity, View,Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TextInput } from "react-native-gesture-handler";

function LoginScreen({checkvalue,username,password,userHandler,passHandler,loginHandler,errormsg,toggleModal,isVisible}){
    return(
        <SafeAreaView style= {styles.container}>
            <View style={styles.headerContainer}>
                <Text style = {styles.loginText}>Login</Text>
            </View>

            <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
       onRequestClose={()=>toggleModal(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <View style={{paddingTop:hp('2%')}}>
            <Text style={{color:"black",fontSize:15,fontWeight:"bold"}}>{errormsg}</Text>
            </View>
           
            <View style={{paddingTop:hp('3%')}}>
            <Button title="Close" onPress={()=>toggleModal(false)}/>
            </View>
            
          </View>
        </View>
      </Modal>

            <View style={styles.usertextFieldContainer}>
                <TextInput 
                style={styles.userinput}
                placeholder="Username"
                placeholderTextColor="white"
                value={username}
                onChangeText={(value)=>userHandler(value)}
                />
            </View>

            <View style={styles.passtextFieldContainer}>
                <TextInput 
                style={styles.passinput}
                placeholder="Password"
                placeholderTextColor="white"
                value={password}
                onChangeText={(value)=>passHandler(value)}
                />
            </View>

           <TouchableOpacity style={styles.buttonContainer} onPress={()=>loginHandler()}>
            <Text style={styles.loginButtonContainer}>Login</Text>
           </TouchableOpacity>
            
        </SafeAreaView>
    );

   
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"grey",
        alignItems:"center"
    },
    headerContainer:{
        paddingTop:hp('5%'),
        alignItems:'center'
    },
    loginText:{
        color:"white",
        fontSize:32,
        fontWeight:"bold"
    },
    usertextFieldContainer:{
        //flex:1,
       paddingTop:hp('10%'),
       
        alignItems:"center"
    },
    userinput: {
        height: hp('8%'),
        width: wp('80%'),
        borderColor: 'white',
        borderRadius:15,
        color:"white",
        fontSize:20,
        borderWidth: 2,
        paddingHorizontal: 10,
      },
      passtextFieldContainer:{
       // flex:1,
       paddingTop:hp('5%'),
       
        alignItems:"center"
    },
    passinput: {
        height: hp('8%'),
        width: wp('80%'),
        color:"white",
        fontSize:20,
        borderColor: 'white',
        borderRadius:15,
        borderWidth: 2,
        paddingHorizontal: 10,
      },
      buttonContainer: { height: hp('8%'),
      width: wp('70%'),backgroundColor:"darkblue",marginTop:hp('10%'),borderRadius:15,alignItems:"center",justifyContent:"center"},
      loginButtonContainer: {color:"white",fontSize:20,fontWeight:"bold"},
});

export default LoginScreen


