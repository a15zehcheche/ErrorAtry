import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Calendar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={day}>
                    <Text>1</Text>
                </View>
                <View style={day}>
                    <Text>2</Text>
                </View>
                <View style={day}>
                    <Text>3</Text>

                </View>
                <View style={day}>
                    <Text>4</Text>

                </View>
                <View style={day}>
                    <Text>5</Text>

                </View>
                <View style={day}>
                    <Text>6</Text>

                </View>
                <View style={day}>
                    <Text>7</Text>

                </View>
                <View style={calendar}>calendar</View>
            </View>
        );

    }

}
const styles = StyleSheet.create({
    container: {

    },
    day: {

    },
    calendar: {

    },

});