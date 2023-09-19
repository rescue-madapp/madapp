import { useState } from "react";
import { Image } from "expo-image";
import { Surface, Button } from "react-native-paper";
import submitForm from "./login-submit";
import { FormField } from "../common/form-components";

export default function LoginForm() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return (
        <Surface style={{ backgroundColor: "#fff" }} elevation={0}>
            <Image
                source={require("./assets/mada_logo.png")}
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
            <Button
                style={{
                    backgroundColor: "#ff0000",
                    borderRadius: 4,
                    padding: 5,
                }}
                textColor="black"
                onPress={() => submitForm(username, password)}
            >
                התחברות
            </Button>
        </Surface>
    );
}
