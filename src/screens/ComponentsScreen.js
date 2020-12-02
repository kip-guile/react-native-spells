import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

const ComponentsScreen = () => {
    const hero = 'Leo Dan Brock'
    const king = <Text>King Orso</Text>
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native</Text>
            <Text style={styles.secondName}>My name is {hero}</Text>
            {king}
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    secondName: {
        fontSize: 20
    }
})

export default ComponentsScreen