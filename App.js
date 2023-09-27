import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ProfileForm from "./profile-page/profile-form";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
          <StatusBar />
          <stack.Navigator>
            <stack.Screen name="Profile" component={ProfileForm} options={{headerShown: false}} />
            </stack.Navigator>
        </NavigationContainer>
    );
}
