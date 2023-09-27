import { getItemAsync, setItemAsync } from "expo-secure-store";
import { useAsync, useFetch } from "react-async";
import { config } from "../../consts";

// The type parameter names are in snake case,
// in order to be parsed correctly by the Python server.

type LoginDetails = {
    username: string;
    password: string;
    grant_type: string;
    scope?: string;
    client_id?: string;
    client_secret?: string;
};

type RegisterDetails = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    birth_date: string;
    user_city: string;
    user_street: string;
    scope?: string;
    client_id?: string;
    client_secret?: string;
    grant_type: string;
};

type LoginResponse = {
    access_token: string;
    token_type: string;
};
const permitted = [
    "username",
    "password",
    "scope",
    "client_id",
    "client_secret",
];

const translateRegisterObject = (toTranslate) => {
    let toReturn = "";
    for (const [key, value] of Object.entries(toTranslate)) {
        if (!(key in permitted)) {
            toReturn = toReturn.concat([key, value].join("="));
            toReturn = toReturn.concat("&");
        }
    }
    return toReturn;
};

const getPermittedObject = (original) => {
    let toReturn = {};
    for (const [key, value] of Object.entries(original)) {
        toReturn[key] = value;
    }
    return toReturn;
};

export async function fetchTokenLogin(details: LoginDetails): Promise<string> {
    const url = [config.BASE_URL, config.AUTH_URL].join("");
    details.scope = "";
    details.client_id = "";
    details.client_secret = "";
    details.grant_type = "";
    const response = await fetch(url, {
        method: "POST",
        headers: new Headers({
            accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        }),
        // body: JSON.stringify(details),
        body: new URLSearchParams(details),
        redirect: "follow",
    });
    return response.json();
}

export async function fetchTokenRegister(
    details: RegisterDetails
): Promise<string> {
    console.log(details);
    console.log(translateRegisterObject(details));
    const newDetails = getPermittedObject(details);
    const url = [
        [config.BASE_URL, config.REGISTER_URL].join(""),
        translateRegisterObject(details).slice(0, -1),
    ].join("?");
    details.scope = "";
    details.client_id = "";
    details.client_secret = "";
    details.grant_type = "";
    const response = await fetch(url, {
        method: "POST",
        headers: new Headers({
            accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        }),
        // body: JSON.stringify(details),
        body: new URLSearchParams(newDetails),
        redirect: "follow",
    });
    return response.json();
}

export async function isTokenValid(token: string): Promise<boolean> {
    const url = [config.BASE_URL, config.AUTH_URL].join("");
    const response = await fetch(url, {
        method: "GET",
        headers: new Headers({
            "content-type": "application/x-www-form-urlencoded",
        }),
        body: JSON.stringify({ Authorization: "Bearer" + token }),
    });
    return response.status == 200;
}

export async function saveToken(token: string) {
    await setItemAsync("TOKEN", token);
}

export async function getToken(): Promise<string> {
    const data = await getItemAsync("TOKEN");
    return data;
}
