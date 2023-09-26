import { config } from "../consts";

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

export async function fetchToken(details: LoginDetails | RegisterDetails) {
    const url = [config.BASE_URL, config.AUTH_URL].join();
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(details),
    });
    return response.json();
}

export async function isTokenValid(token: string): Promise<boolean> {
    const url = [config.BASE_URL, config.AUTH_URL].join();
    const response = await fetch(url, {
        method: "GET",
        body: JSON.stringify({ token: token }),
    });
    return response.status == 200;
}
