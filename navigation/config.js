
import { createStackNavigator } from "react-navigation-stack";
import { BG_COLOR, WHITE, TINT_COLOR } from "../constants/Colors";

export const headerStyles = {
    headerStyle: {
        backgroundColor: BG_COLOR,
        borderBottomColor: 0
    },
    headerTitleStyle: {
        color: TINT_COLOR
    },
    headerTintColor: TINT_COLOR
};

export const createStack = (screen, title) =>
    createStackNavigator({
        Screen: {
            screen,
            navigationOptions: {
                title,
                ...headerStyles
            }
        }
    });