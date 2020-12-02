import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Button title={`increase ${color}`} onPress={onIncrease} />
      <Button title={`decrease ${color}`} onPress={onDecrease} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default ColorCounter
