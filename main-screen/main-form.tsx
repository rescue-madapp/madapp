import { useState } from "react";
import {Text} from 'react-native';
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { Surface, Button } from "react-native-paper";
import { FormField } from "../common/form-components";

export default function MainForm() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return (
        <Surface style={styles.form} elevation={0}>
            <Image
                source={require("./assets/mada_logo.png")}
                style={{
                    marginBottom: 25,
                    height: 119,
                    width: 224,
                    margin: 15,
                }}
            />
            <Text style={styles.titleText} ברוכים הבאים/>
            <Image
                source={require("./assets/mada_kids.jpg")}
                style={{
                    marginBottom: 25,
                    height: 119,
                    width: 224,
                    margin: 15,
                }}
            />
            <Image
                source={require("./assets/blood_donations.jpg")}
                style={{
                    marginBottom: 25,
                    height: 119,
                    width: 224,
                    margin: 15,
                }}
            />  
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
    baseText: {
      fontFamily: 'Cochin',
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    }
  });