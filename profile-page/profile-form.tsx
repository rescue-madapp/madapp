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


export default function ProfileForm() {
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
            <Text style={{
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
            }}> האזור האישי </Text>
            <Text style={{
                padding: 1,
                width: 224,
                marginBottom: 2,
                fontSize:14,
                alignContent: 'center',
                alignItems: 'center',
            }}> שם </Text>
            <Text style={{
                borderWidth: 1,
                borderColor:"#ff0000",
                backgroundColor: "white",
                borderRadius: 4,
                padding: 5,
                width: 224,
                marginBottom: 20,
                fontSize:18,
                alignContent: 'center',
                alignItems: 'center',
            }}>ישראל ישראלי </Text>
            <Text style={{
                padding: 1,
                width: 224,
                marginBottom: 2,
                fontSize:14,
                alignContent: 'center',
                alignItems: 'center',
            }}> עיר מגורים </Text>
            <Text style={{
              borderWidth: 1,
              borderColor:"#ff0000",
              backgroundColor: "white",
              borderRadius: 4,
              padding: 5,
              width: 224,
              marginBottom: 20,
              fontSize:18,
              alignContent: 'center',
              alignItems: 'center',
          }}>תל אביב</Text>
            <Text style={{
                padding: 1,
                width: 224,
                marginBottom: 2,
                fontSize:14,
                alignContent: 'center',
                alignItems: 'center',
            }}> כתובת </Text><Text style={{
            borderWidth: 1,
            borderColor:"#ff0000",
            backgroundColor: "white",
            borderRadius: 4,
            padding: 5,
            width: 224,
            marginBottom: 20,
            fontSize:18,
            alignContent: 'center',
            alignItems: 'center',
        }}>אבן גבירול 126</Text>
            <SubmitButton
                action={() => null}
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
    alignContent: 'center',
    position: 'absolute',
    gap: 12,
    backgroundColor: '#1E1E1E',
    flexDirection: 'row',
    padding: 12,
  },
    form: {
        flex: 1,
        backgroundColor: "#fff",
        borderColor: "#ff0000",
        alignItems: "center",
        justifyContent: "center",
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