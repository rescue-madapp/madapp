import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import LoginForm from "./login-screen/login-form";
import LogEvent from "./log-event/log-event"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
          <StatusBar />
          <stack.Navigator>
            <stack.Screen name="Login" component={LogEvent} options={{headerShown: false}} />
            </stack.Navigator>
        </NavigationContainer>
    );
}
