import { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text} from "react-native";
import { Surface, Button, TextInput } from "react-native-paper";
import submitForm from "./login-submit";
import { FormField } from "../common/form-components";
import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';

export default function LogEvent() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [value, setValue] = React.useState('');

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
                תודה על ההשתתפות !
            </Text>

            <FormField
                formDataState={{ data: username, setData: setUsername }}
                label="הכנס קוד הרשמה"
            />

            <Text style={styles.boldText}>
                איך היה ?
            </Text>

            <SafeAreaView style={styles.container}>
                <SegmentedButtons
                    value={value}
                    onValueChange={setValue}
                    buttons={[
                    {
                        value: '1',
                        label: '1',
                    },
                    {
                        value: '2',
                        label: '2',
                    },
                    { 
                        value: '3',
                        label: '3' },
                    {
                        value: '4',
                        label: '4',
                    },
                    {
                        value: '5',
                        label: '5',
                    },
                    ]}
                />
            </SafeAreaView>

            <FormField
                formDataState={{ data: username, setData: setUsername }}
                label="ספר/י קצת יותר"
            />

            <Button
                style={{
                    backgroundColor: "#ff0000",
                    borderRadius: 4,
                    padding: 4,
                    marginBottom: 40,
                }}
                textColor="black"
                onPress={() => submitForm(username, password)}
            >
            סיום
            </Button>
        </Surface>

    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        maxWidth: 224,
        width: 224,
        marginBottom: 20,
        minWidth: 224,
        paddingHorizontal: 50,
        
    },
    form: {
      flex: 1,
      backgroundColor: "#fff",
      borderColor: "#ff0000",
      alignItems: "center",
      alignContent:"center",
      fontSize: 20,
      color: "red",
      marginBottom: 20,
      textAlign: "right",

    },
    boldText:{
        fontWeight: 'bold',
        textShadowColor: "red",
        textShadowOffset: {width: 5, height:5},
        textShadowRadius: 20,
        color: "#ff0000",
        borderRadius: 4,
        padding: 5,
        width: 224,
        marginBottom: 20,
        fontSize:25,
    },
  });

