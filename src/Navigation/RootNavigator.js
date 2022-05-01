import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import Authstack from "./AuthNavigators";

export default function RootNavigator(){
    return(
        <NavigationContainer>
            <Authstack 
            />
        </NavigationContainer>
    )
}