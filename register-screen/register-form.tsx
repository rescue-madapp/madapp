import { Surface, Button } from "react-native-paper";
import { StyleSheet } from "react-native";
import { Image } from "expo-image";
import { useState } from "react";
import { FormDateField, FormField, SubmitButton } from "../common/form-components";
import submitRegister from "./register-submit";

export default function RegisterForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [birthDate, setBirthDate] = useState(new Date());
    const [city, setCity] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Surface style={styles.form}>
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
                formDataState={{ data: firstName, setData: setFirstName }}
                label="שם פרטי"
            />
            <FormField
                formDataState={{ data: lastName, setData: setLastName }}
                label="שם משפחה"
            />
            <FormField
                formDataState={{ data: username, setData: setUsername }}
                label="שם משתמש"
            />
            <FormDateField
                formDataState={{ data: birthDate, setData: setBirthDate }}
                label="תאריך לידה"
            />
            <FormField
                formDataState={{ data: city, setData: setCity }}
                label="עיר מגורים"
            />
            <FormField
                formDataState={{ data: password, setData: setPassword }}
                label="סיסמה"
                isPassword
            />
            <SubmitButton
                action={submitRegister}
                actionParams={[
                    firstName,
                    lastName,
                    username,
                    password,
                    birthDate,
                    city,
                ]}
            >
                הירשם
            </SubmitButton>
        </Surface>
    );
}

const styles = StyleSheet.create({
    form: {
        backgroundColor: "#fff",
        borderColor: "#ff0000",
        alignItems: "center",
        justifyContent: "center",
    },
});
