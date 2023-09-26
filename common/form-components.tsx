import { useState, SetStateAction } from "react";
import { TextInput } from "react-native-paper";

type FormFieldProps = {
    formDataState: {
        data: string;
        setData: (value: SetStateAction<string>) => void;
    };
    label: string;
    isPassword?: boolean;
};

export function FormField(props: FormFieldProps): JSX.Element {
    return (
        <TextInput
            label={props.label}
            value={props.formDataState.data}
            onChangeText={(newData) => props.formDataState.setData(newData)}
            mode="outlined"
            textAlign="center"
            outlineColor="#ff0000"
            activeOutlineColor="#ff0000"
            style={{ marginBottom: 20 }}
            secureTextEntry={
                props.isPassword == undefined ? false : props.isPassword
            }
        />
    );
}
