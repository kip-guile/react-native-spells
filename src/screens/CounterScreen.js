import React, { useReducer } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return state
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <View>
      <Button
        title='Inrcease'
        onPress={() => dispatch({ type: 'increment' })}
      />
      <Button
        title='Decrease'
        onPress={() => dispatch({ type: 'decrement' })}
      />
      <Text>Current count: {state}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CounterScreen
