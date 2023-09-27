import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import LogEvent from "./log-event/log-event"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterForm from "./register-screen/register-form";
import LoginForm from "./login-screen/login-form";
import ProfileForm from "./profile-page/profile-form";
import MainScreen from "./main-screen/main-screen";


const stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
          <StatusBar />
          <stack.Navigator>
            <stack.Screen name="Main" component={MainScreen} options={{headerShown: false}} />
            <stack.Screen name="Profile" component={ProfileForm} options={{headerShown: false}} />
            <stack.Screen name="Log Event" component={LogEvent} options={{headerShown: false}} />
            <stack.Screen name="Login" component={LoginForm} options={{headerShown: false}} />
            <stack.Screen name="Register" component={RegisterForm} options={{headerShown: false}} />
            </stack.Navigator>
        </NavigationContainer>
    );
}
