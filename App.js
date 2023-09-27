import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import LoginForm from "./login-screen/login-form";
import RegisterForm from "./register-screen/register-form";

export default function App() {
    return (
        <View style={styles.form}>
            <StatusBar />
            <LoginForm />
            <RegisterForm />
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        backgroundColor: "#fff",
        borderColor: "#ff0000",
        alignItems: "center",
        justifyContent: "center",
    },
});