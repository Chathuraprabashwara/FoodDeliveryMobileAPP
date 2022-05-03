import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import HomeScreen from "../screens/HomeScreen";
import { colors, parameters } from "../global/styles";
import SearchScreen from "../screens/SearchScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import MyOrderScreen from "../screens/MyOrderScreen";
const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {
  return (
    <ClientTabs.Navigator
      tabBarOptions={{
        activeTintColor: colors.buttons,
      }}
    >
      <ClientTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
        }}
      />
      <ClientTabs.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" type="material" color={color} size={size} />
          ),
        }}
      />

      <ClientTabs.Screen
        name="MyOrderScreen"
        component={MyOrderScreen}
        options={{
          headerShown: false,
          tabBarLabel: "My Orders",
          tabBarIcon: ({ color, size }) => (
            <Icon name="view-list" type="material" color={color} size={size} />
          ),
        }}
      />

<ClientTabs.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{
          headerShown: false,
          tabBarLabel: "My Account",
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" type="material" color={color} size={size} />
          ),
        }}
      />
    </ClientTabs.Navigator>
  );
}
