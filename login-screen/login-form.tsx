import { useState } from "react";
import { Image } from "expo-image";
import { Surface, TextInput, Button } from "react-native-paper";
import submitForm from "./login-submit";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <Surface style={{ backgroundColor: "#fff" }} elevation={0}>
      <Image
        source={require("./assets/mada_logo.png")}
        style={{ marginBottom: 50, height: 119, width: 224, margin: 30 }}
      />
      <TextInput
        label="שם משתמש"
        value={username}
        onChangeText={(username) => setUsername(username)}
        mode="outlined"
        textAlign="right"
        outlineColor="#ff0000"
        activeOutlineColor="#ff0000"
        style={{ marginBottom: 20 }}
      />
      <TextInput
        label="סיסמה"
        value={password}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry
        mode="outlined"
        textAlign="right"
        outlineColor="#ff0000"
        activeOutlineColor="#ff0000"
        style={{ marginBottom: 20 }}
      />
      <Button
        style={{ backgroundColor: "#ff0000", borderRadius: 4, padding: 5 }}
        textColor="black"
        onPress={submitForm}
      >
        התחברות
      </Button>
    </Surface>
  );
}
