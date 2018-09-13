import React from "react";
import { View, Text } from "react-native";


export default class HomeView extends React.Component {

    render() {
        return <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text>
                首页
            </Text>
        </View>
    }
}