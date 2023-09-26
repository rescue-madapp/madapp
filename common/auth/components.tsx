import { Link, router } from "expo-router";
import { getToken, isTokenValid } from "./token";
import { View } from "react-native";
import { LinkProps } from "expo-router/build/link/Link";

function ValidateToken(): boolean {
    // Returns whether the token was valid or not
    if (!isTokenValid(getToken())) {
        router.push("/login-screen/login-form");
        return false;
    }
    return true;
}

export function SafeLink(props: LinkProps) {
    return (
        <View>
            <ValidateToken />
            <Link {...props} />
        </View>
    );
}
