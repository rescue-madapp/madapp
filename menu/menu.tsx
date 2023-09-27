import { useState } from "react";
import { IconButton, Surface } from "react-native-paper";
import { BottomNavigation, Text } from "react-native-paper";
import LoginForm from "../login-screen/login-form";

const HomeRoute = () => <Text>hi</Text>;

export function BottomMenu() {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {
            key: "home",
            title: "דף הבית",
            focusedIcon: "home",
            unfocusedIcon: "home-outline",
        },
    ]);
    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
    });
    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            compact={false}
            style={{ width: "100%", paddingTop: 0 , marginTop:0}}
        />
    );
}
