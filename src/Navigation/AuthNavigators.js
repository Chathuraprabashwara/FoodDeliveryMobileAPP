import React from "react";
import {
  createNativeStackNavigator,
  
} from "@react-navigation/native-stack";
import { TransitionPresets } from '@react-navigation/stack';
import SignInWelcomeScreen from "../screens/authScreens/SignInWelcomeScreen";
import SignInScreen from "../screens/authScreens/SignInScreens";
import HomeScreen from "../screens/HomeScreen";
import RootClientTabs from "./ClientTabs";

const Auth = createNativeStackNavigator();

export default function Authstack() {
  return (
    <Auth.Navigator 
    >
      <Auth.Screen
        name="SignInWelcomeScreen"
        component={SignInWelcomeScreen}
        options={{
          headerShown: false,
         ...TransitionPresets.ModalPresentationIOS
        }}     
      />
      <Auth.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
         ...TransitionPresets.ModalPresentationIOS
        }}
      />
       <Auth.Screen
        name="RootClientTabs"
        component={RootClientTabs}
        options={{
          headerShown: false,
         ...TransitionPresets.ModalPresentationIOS
        }}
      />
    </Auth.Navigator>
  );
}
