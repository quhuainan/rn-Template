
import { View, Text } from "react-native";
import * as React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class RootView extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    入口文件
                </Text>
                <Icon.Button name="facebook" backgroundColor="#3b5998">
                    <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>Login with Facebook</Text>
                </Icon.Button>
            </View>

        );
    }
}