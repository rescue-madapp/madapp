import { useState } from "react";
import { Image } from "expo-image";
import { Surface, Button } from "react-native-paper";
import submitForm from "./profile-submit";
import { FormField, SubmitButton } from "../common/form-components";
import {StyleSheet, View, Text} from 'react-native';
import theme from '../../theme';

export function ListItem() {
  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <Text style={styles.overview}>
          How now brown cow?
        </Text>
        <Text style={styles.title}>
          Lorum ipsum
        </Text>
      </View>
    </View>
  );
}


export default function ProfileForm({ navigation }) {
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
            <Text> האזור האישי </Text>
            <FormField
                formDataState={{ data: username, setData: setUsername }}
                label="שם פרטי"
            />
            <FormField
                formDataState={{ data: password, setData: setPassword }}
                label="שם משפחה"
                isPassword
            />
            <FormField
                formDataState={{ data: password, setData: setPassword }}
                label="עיר מגורים"
                isPassword
            />
            <FormField
                formDataState={{ data: password, setData: setPassword }}
                label="כתובת"
                isPassword
            />
            <SubmitButton
                action={() => navigation.navigate("Register")}
                actionParams={[]}
            >
                סיום וחזרה
            </SubmitButton>
        </Surface>
    );
}

const styles = StyleSheet.create({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#1E1E1E',
    flexDirection: 'row',
    padding: 12,
  },
  overview: {
    width: 168,
    height: 14,
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#A0A0A0',
    fontFamily: 'Noto Sans',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  title: {
    width: 168,
    height: 17,
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#DCDCDC',
    fontFamily: 'Noto Sans',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  content: {
    width: 168,
    height: 32,
  },
});