import { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text} from "react-native";
import { Surface, Button } from "react-native-paper";
import submitForm from "./login-submit";
import { FormField } from "../common/form-components";

export default function LogEvent() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return (
        <Surface style={styles.form} elevation={0}>
            <Image
                source={{uri: 'https://hadera.mynet.co.il/picserver/mynet/wcm_upload/wcm_mynet_pic/crop_images/2019/05/14/483862/478769_0_0_969_730_large.jpg'}}
                style={{
                    marginBottom: 50,
                    height: 119,
                    width: 224,
                    margin: 30,
                }}
            />
            <Text style={styles.boldText}>
                קורס החייאה
            </Text>
            <FormField
                formDataState={{ data: username, setData: setUsername }}
                label="שם מfmfשתמש"
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

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
    },
    form: {
      flex: 1,
      backgroundColor: "#fff",
      borderColor: "#ff0000",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 20,
      color: "red",
    },
    boldText:{
        fontSize: 20,
        color: "#ff0000",
    },
  });