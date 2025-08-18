import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const app = () => {
  return (
    <View styles={styles.container}>
      <Text style={styles.heading}>Porfolio</Text>

      <View style={styles.row}>
        <Image source={require('../../assets/images/tshepo.jpg')} style={styles.image} />

        <View style={styles.column}>
          <Text style={styles.regText}>Tshepo</Text>
          <Text style={styles.regText}>21</Text>
          <Text style={styles.regText}>Black South African</Text>
        </View>

      </View>

      <Text style={styles.regText}>
        Born and raised in Hillbrow South Africa I've learned to be creative in everything that i do. I don't contribute my energy to projects i don't see as creative.

        Speaking of creativity, i make music :) and i think that side of moi helps me tap into more outlandish or eclectic programming project ideas.

        Gosh!! i know you resent long texts so enough chatter, look no further than <Link href="/skills">here</Link>
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'brown',
  },
  heading: {
    fontFamily: 'ChelaOne',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  column: {
    paddingTop: 20,
    flex: 1,
    flexDirection: 'column',
  },
  regText: {
    fontFamily: 'PTSans',
  }
})
export default app