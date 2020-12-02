import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Logen Ninefingers</Text>
      <Button
        onPress={() => props.navigation.navigate('Components')}
        title='Go to components Demo'
      />
      <Button
        title='Go to List Demo'
        onPress={() => props.navigation.navigate('List')}
      />
      <Button
        title='Go to Image Screen'
        onPress={() => props.navigation.navigate('Image')}
      />
      <Button
        title='Go to Counter Screen'
        onPress={() => props.navigation.navigate('Counter')}
      />
      <Button
        title='Go to Color Screen'
        onPress={() => props.navigation.navigate('Color')}
      />
      <Button
        title='Go to Dynamic Color Screen'
        onPress={() => props.navigation.navigate('DynamicColor')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
})

export default HomeScreen
