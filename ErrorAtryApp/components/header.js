import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';


export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.tittleContainer} >
                    <Text style={styles.tittle}>{this.props.name}</Text>
                </View>
                <View style={styles.optionContainer} >
                    <Text>Search</Text>
                </View>
                <View style={styles.optionContainer} >
                    <Text>Add</Text>
                </View>

            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#aaa',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 80,

    },

    tittleContainer: {
        flex: 4,
        backgroundColor: '#ddd',
        width: 50,
        height: 80,
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingTop:20,
    },
    tittle: {
        fontSize: 20,
    },
    optionContainer: {
        flex: 1,
        width: 50,
        height: 80,
        backgroundColor: '#ddd',
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:20,

    },

});