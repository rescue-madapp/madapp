import { fetchTokenLogin, fetchTokenRegister, saveToken } from "../common/auth/token";

export default async function submitRegister(
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    birthDate: Date,
    city: string
) {
    const token = await fetchTokenRegister({
        email: username,
        password: password,
        grant_type: "password",
        first_name: firstName,
        last_name: lastName,
        birth_date: birthDate.toISOString(),
        user_city: city,
        user_street: 'street'
    });
    saveToken(token["access_token"]);
}
