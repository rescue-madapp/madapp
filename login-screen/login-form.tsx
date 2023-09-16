import { useState } from "react";
import { Image } from "react-native";
import { Surface, TextInput, Button } from "react-native-paper";
import submitForm from "./login-submit";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Surface style={{backgroundColor: "#fff"}}>
      <Image
        source={require("./assets/mada_logo.png")}
        style={{ marginBottom: 50 }}
      />
      <TextInput
        label="שם משתמש"
        value={username}
        onChangeText={(username) => setUsername(username)}
        mode="outlined"
        textAlign="right"
        outlineColor="#ff0000"
        activeOutlineColor="#ff0000"
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
      />
      <Button style={{backgroundColor: "#ff0000", borderRadius: 4}} textColor="black" onPress={submitForm}>התחברות</Button>
    </Surface>
  );
}
