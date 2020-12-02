import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import ImageDetail from '../components/imageDetail'

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title='Forest'
        imageSource={require('../../assets/forest.jpg')}
        imageScore='50'
      />
      <ImageDetail
        title='Beach'
        imageSource={require('../../assets/beach.jpg')}
        imageScore='80'
      />
      <ImageDetail
        title='Mountain'
        imageSource={require('../../assets/mountain.jpg')}
        imageScore='95'
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default ImageScreen
