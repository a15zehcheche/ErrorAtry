import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Calendar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.dayContainer}>
                    <View style={styles.day}>
                        <Text>1</Text>
                    </View>
                    <View style={styles.day}>
                        <Text>2</Text>
                    </View>
                    <View style={styles.day}>
                        <Text>3</Text>

                    </View>
                    <View style={styles.day}>
                        <Text>4</Text>

                    </View>
                    <View style={styles.day}>
                        <Text>5</Text>

                    </View>
                    <View style={styles.day}>
                        <Text>6</Text>

                    </View>
                    <View style={styles.day}>
                        <Text>7</Text>

                    </View>
                </View>
                <View style={styles.calendar}>
                    <Text>
                        calendar
                    </Text>
                </View>
            </View>
        );

    }

}
const styles = StyleSheet.create({
    container: {
        flex: '1',
        flexDirection: 'row',
        backgroundColor: '#ccc',
        height: 50,
        alignItems: 'center',
    },
    dayContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    day: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 38,
        width: 38,
        marginHorizontal: 2,
        backgroundColor: 'red',
        borderRadius: 10
    },
    calendar: {
        flex:1,
        height: 50,
        
        backgroundColor: '#435',
        marginHorizontal: 2,
    },

});