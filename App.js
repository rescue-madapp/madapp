import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import LoginForm from "./login-screen/login-form";

export default function App() {
    return (
        <View>
            <StatusBar />
            <LoginForm />
        </View>
    );
}
