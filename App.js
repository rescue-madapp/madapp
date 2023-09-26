import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import LoginForm from "./login-screen/login-form";
import MainForm from "./main-screen/main-form";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
          <StatusBar />
          <stack.Navigator>
            <stack.Screen name="Main" component={MainForm} options={{headerShown: false}} />
            </stack.Navigator>
        </NavigationContainer>
    );
}
