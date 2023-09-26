import { getItemAsync, setItemAsync } from "expo-secure-store";
import { useAsync, useFetch } from "react-async";
import { config } from "../../consts";

// The type parameter names are in snake case,
// in order to be parsed correctly by the Python server.

type LoginDetails = {
    username: string;
    password: string;
    grant_type: string;
};

type RegisterDetails = {
    first_name: string;
    last_name: string;
    username: string;
    password: string;
    birth_date: string;
    city: string;
};

export function fetchToken(details: LoginDetails | RegisterDetails) {
    const url = [config.BASE_URL, config.AUTH_URL].join();
    const { data, error } = useFetch<Response>(url, {
        method: "POST",
        body: JSON.stringify(details),
    });
    return data.json();
}

export function isTokenValid(token: string): boolean {
    const url = [config.BASE_URL, config.AUTH_URL].join();
    const { data, error } = useFetch<Response>(url, {
        method: "GET",
        body: JSON.stringify({ Authorization: "Bearer" + token }),
    });
    return data.status == 200;
}

export function saveToken(token: string): void {
    useAsync(setItemAsync("TOKEN", token));
}

export function getToken(): string {
    const { data, error } = useAsync<string>(getItemAsync("TOKEN"));
    if (data) return data;
    throw error;
}
