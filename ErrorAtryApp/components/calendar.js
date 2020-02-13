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
                    <Text style={styles.fontStyle}>
                        calendar
                    </Text>
                </View>
            </View>
        );

    }

}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ccc',
        alignItems: 'center',
        width: '100%',
        height: 50,
    },
    dayContainer:{
        flexDirection: 'row',
        justifyContent:'space-around',
        width:'80%',
    },
    day: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        width: 35,
        backgroundColor: 'red',
        borderRadius: 10
    },
    calendar: {
        flex:1,
        height: 50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#435',
        marginHorizontal: 2,
    },
    fontStyle: {
        color:'#a3a3a3',
        fontSize:14,
    }

});