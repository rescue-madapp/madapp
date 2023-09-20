import { any } from "prop-types";
import { useState, SetStateAction } from "react";
import { Button, TextInput } from "react-native-paper";
import { DatePickerInput } from "react-native-paper-dates";
import { boolean } from "yargs";

type FormFieldProps = {
    formDataState: {
        data: string;
        setData: (value: SetStateAction<string>) => void;
    };
    label: string;
    isPassword?: boolean;
    onFocus?: () => void;
};

type DateFieldProps = {
    formDataState: {
        data: Date;
        setData: (value: SetStateAction<Date>) => void;
    };
    label: string;
    isPassword?: boolean;
    onFocus?: () => void;
};

type SubmitButtonProps = {
    children: React.ReactNode;
    action: (...actionParams: any[]) => void;
    actionParams: any[];
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
            style={{ marginBottom: 20, width: 224 }}
            secureTextEntry={
                props.isPassword == undefined ? false : props.isPassword
            }
            onFocus={props.onFocus}
        />
    );
}

export function FormDateField(props: DateFieldProps): JSX.Element {
    return(
    <DatePickerInput
        locale="he"
        label={props.label}
        value={props.formDataState.data}
        onChange={(newData) => props.formDataState.setData(newData)}
        inputMode="start"
        style={{marginBottom: 20, width: 200}}
        mode="outlined"
        outlineColor="#ff0000"
        activeOutlineColor="#ff0000"
    />
    );
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
    children,
    action,
    actionParams,
}) => {
    return (
        <Button
            style={{
                backgroundColor: "#ff0000",
                borderRadius: 4,
                padding: 5,
                width: 224,
            }}
            textColor="black"
            onPress={() => action(...actionParams)}
        >
            {children}
        </Button>
    );
};
