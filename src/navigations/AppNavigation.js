import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import Login from "../containers/LoginScreen";

const AppStack = createStackNavigator();

export default function AppNav(){
    return(
        <AppStack.Navigator initialRouteName = 'Login'>
            <AppStack.Screen 
             name="Login"
             component={Login}
             options={{ headerShown: false }}
             />
        </AppStack.Navigator>
    );
}