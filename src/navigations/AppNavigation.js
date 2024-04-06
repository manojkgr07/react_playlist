import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../containers/LoginScreen";
import ProductList from "../containers/ProductScreen";
import ProductDetails from "../containers/ProductDetails";

const AppStack = createStackNavigator();

export default function AppNav() {
    return (
        <AppStack.Navigator initialRouteName='Login'>
            <AppStack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />

            <AppStack.Screen name="ProductList"
                component={ProductList}
                options={{ headerShown: false }}
            />

            <AppStack.Screen name="ProductDetails"
                component={ProductDetails}
                options={{ headerShown: false }}
            />
        </AppStack.Navigator>
    );
}