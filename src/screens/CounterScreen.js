import React, { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const CounterScreen = () => {
  const [count, setCount] = useState(0)
  return (
    <View>
      <Button title='Inrcease' onPress={() => setCount(count + 1)} />
      <Button title='Decrease' onPress={() => setCount(count - 1)} />
      <Text>Current count: {count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CounterScreen
