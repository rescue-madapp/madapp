import { useState } from "react";
import { IconButton, Surface } from "react-native-paper";
import { BottomNavigation, Text } from "react-native-paper";
import MainForm from "../main-screen/main-form";
import ProfileForm from "../profile-page/profile-form";
import LogEvent from "../log-event/log-event";

const MainRoute = () => <MainForm />;
const ProfileRoute = () => <ProfileForm />;
const LogRoute = () => <LogEvent />;

export function BottomMenu() {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {
            key: "main",
            title: "בית",
            focusedIcon: "home",
            unfocusedIcon: "home-outline",
        },
        {
            key: "profile",
            title: "פרופיל",
            focusedIcon: "account",
            unfocusedIcon: "account-outline",
        },
        {
            key: "log",
            title: "הזן מפגש",
            focusedIcon: "pencil",
            unfocusedIcon: "pencil-outline",
        },
    ]);
    const renderScene = BottomNavigation.SceneMap({
        main: MainRoute,
        profile: ProfileRoute,
        log: LogRoute,
    });
    return (
        <BottomNavigation
            navigationState={{ index: index, routes: routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            compact={false}
        />
    );
}
