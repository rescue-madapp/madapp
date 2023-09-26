import { router } from "expo-router";
import { fetchToken, saveToken } from "../common/auth/token";

export default function submitForm(email: string, password: string) {
    const token = fetchToken({email: email, password: password, grant_type: "password"});
    saveToken(token);
    router.push('/main-page/main-page')
}