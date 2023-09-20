import { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { Surface, Button } from "react-native-paper";
import submitForm from "./login-submit";
import { FormField, SubmitButton } from "../common/form-components";

export default function LoginForm({ navigation }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return (
        <Surface style={styles.form} elevation={0}>
            <Image
                source={require("../common/assets/mada_logo.png")}
                style={{
                    marginBottom: 50,
                    height: 119,
                    width: 224,
                    margin: 30,
                }}
            />
            <FormField
                formDataState={{ data: username, setData: setUsername }}
                label="שם משתמש"
            />
            <FormField
                formDataState={{ data: password, setData: setPassword }}
                label="סיסמה"
                isPassword
            />
            <SubmitButton
                action={submitForm}
                actionParams={[username, password]}
            >
                התחברות
            </SubmitButton>
            <SubmitButton
                action={() => navigation.navigate("Register")}
                actionParams={[]}
            >
                הרשמה
            </SubmitButton>
        </Surface>
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
