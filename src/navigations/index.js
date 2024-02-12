import React from "react";
import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNav from "./AppNavigation";


const Stack = createStackNavigator();

const navigation = () =>{
    return(
       <NavigationContainer>
            <AppNav/>
       </NavigationContainer>
    );
}

export default navigation;