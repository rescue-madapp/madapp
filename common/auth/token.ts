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
    full_name: string;
    username: string;
    password: string;
    birth_date: string;
    city: string;
    scope?: string;
    client_id?: string;
    client_secret?: string;
    grant_type: string;
};

type LoginResponse = {
    access_token: string;
    token_type: string;
};

export async function fetchToken(details: LoginDetails | RegisterDetails): Promise<string> {
    const url = [config.BASE_URL, config.AUTH_URL].join('');
    details.scope = '';
    details.client_id = '';
    details.client_secret = '';
    details.grant_type = '';
    const response = await fetch(url, {
        method: "POST",
        headers: new Headers({'accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded'}),
        // body: JSON.stringify(details),
        body: new URLSearchParams(details),
        redirect: 'follow',
    });
    return response.json();
}

export async function isTokenValid(token: string): Promise<boolean> {
    const url = [config.BASE_URL, config.AUTH_URL].join('');
    const response = await fetch(url, {
        method: "GET",
        headers: new Headers({'content-type': 'application/x-www-form-urlencoded'}),
        body: JSON.stringify({ Authorization: "Bearer" + token }),
    });
    return response.status == 200;
}

export async function saveToken(token: string) {
    await (setItemAsync("TOKEN", token));
}

export async function getToken(): Promise<string> {
    const data = await (getItemAsync("TOKEN"));
    return data;
}
