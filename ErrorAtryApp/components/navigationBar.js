import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class NavigationBar extends Component {
    render() {
        return (
            <View style={styles.bar}>
                <View style={styles.item}></View>
                <View style={styles.item}></View>
                <View style={styles.item}></View>
            </View>
        );

    }

}
const styles = StyleSheet.create({
    bar: {
        flexDirection:'row',
        height: 50,
        width: '100%',
    },
    itemContainer: {

    },
    item: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
    }
});