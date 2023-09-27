import { useAsync } from 'react-async';
// import { router } from "expo-router";
import { fetchTokenLogin, saveToken } from "../common/auth/token";

export default async function submitForm(email: string, password: string) {
    const token = await fetchTokenLogin({username: email, password: password, grant_type: "password"});
    saveToken(token['access_token']);
    // router.push('/main-page/main-page')
}