import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import React from "react";
// import AppNavigator from './navigator/AppNavigator';
import { enableScreens } from "react-native-screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const Inp = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Inp.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Inp.Screen name="Home" component={Home} />
        <Inp.Screen name="Main" component={Main} />
        <Inp.Screen name="User" component={User} />
        <Inp.Screen name="Sign" component={Signup} />
        <Inp.Screen name="Login" component={Login} />
        <Inp.Screen name="Forgot" component={ForgotPassword} />
        <Inp.Screen name="Messanger" component={Messanger} />

        {/* <Inp.Screen name ="Login" component={Login}/> */}
      </Inp.Navigator>
    </NavigationContainer>
  );
}
