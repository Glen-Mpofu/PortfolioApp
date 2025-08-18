import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const app = () => {
  return (
    <View>
      <Text style = {styles.heading}>Porfolio</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'ChelaOne', 
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center'
  }  
})
export default app