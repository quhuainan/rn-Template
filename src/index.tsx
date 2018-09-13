
import * as React from "react";
import {
    StackNavigator,
} from "react-navigation";
import { HomeView } from "./view/home";

export default class RootView extends React.Component {
    render() {
        return (
            <Navigator />
        );
    }
}

const Navigator = StackNavigator({
    HomeView: { screen: HomeView }
})