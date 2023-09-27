export function submitRegister(
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    birthDate: Date,
    city: string
) {
    console.log(
        "username: '",
        username,
        "', password: '",
        password,
        "'.",
        birthDate
    );
}
