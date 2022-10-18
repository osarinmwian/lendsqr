import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LoginScreen from './screens/LoginScreen';
import HomeScreen from "./screens/HomeScreen";

const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
  return (
    <Tab.Navigator
      safeAreaInsets={{
        bottom: 10
      }}
      labelled={false}
      barStyle={{
        backgroundColor: "#FFFFFF",
        justifyContent: "space-between",
      }}
      activeColor="#147DF5"
      inactiveColor="#979797"
      style={{ width: "100%" }}
    >
      <Tab.Screen
        component={HomeScreen}
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color}) => (
            <MaterialCommunityIcons name="home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        component={LoginScreen}
        name="Login"
        options={{
          headerShown: false,
          tabBarIcon: ({ color}) => (
            <MaterialCommunityIcons
              name="login"
              size={26}
              color={color}
            />
          ),
        }}
      />
     
    </Tab.Navigator>
  );
};

export default HomeNavigation