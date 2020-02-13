import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class NavigationBar extends Component {
    render() {
        return (
            <View style={styles.bar}>
                <View style={styles.itemContainer}>
                    <Text style={styles.item}>Question</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.item}>to do</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.item}>config</Text>
                </View>
            </View>
        );

    }

}
const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        height: 50,
        width: '100%',
        backgroundColor: '#ddd',
    },
    itemContainer: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    item: {
        
    }
});