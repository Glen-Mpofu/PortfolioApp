import { Link } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import SocialIcons from 'react-native-vector-icons/FontAwesome5';

const app = () => {
  return (
    <View styles={styles.container}>
      
      <Text style={styles.heading}>Porfolio</Text>
      
      <View>
        <View style={styles.row}>
          <Image source={require('../../assets/images/tshepo.jpg')} style={styles.image} />

          <View style={styles.column}>
            <Text style={styles.regText}>Tshepo</Text>
            <Text style={styles.regText}>21</Text>
            <Text style={styles.regText}>Black South African</Text>
          </View>

        </View>
      </View>

      <View style = {styles.card}>
        <Text style={styles.regText}>
          Born and raised in Hillbrow South Africa I've learned to be creative in everything that i do. I don't contribute my energy to projects i don't see as creative.

          Speaking of creativity, i make music :) and i think that side of moi helps me tap into more outlandish or eclectic programming project ideas.

          Gosh!! i know you resent long texts so enough chatter, look no further than below for my projects and social links
        </Text>
      </View>

      <View style = {styles.linksRow}>
        <Link href={'https://www.linkedin.com/in/tshepo-mpofu-6b37a3237/'}>
          <SocialIcons name = "linkedin" size = {30} color = "blue" style = {styles.icon}/>   
        </Link>

        <Link href={'https://www.instagram.com/i.am.mgt/'}>
          <SocialIcons name="instagram" size={30} color="#C13584" style={styles.icon} />
        </Link>

        <Link href={'https://github.com/Glen-Mpofu'}>
          <SocialIcons name = "github" size={30} color="black" style ={styles.icon}/>
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
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
    alignContent: 'center',

  },
  row: {
    flex: 1,
    flexDirection: 'row', 
    alignSelf: 'center'
  },
  column: {
    paddingTop: 20,
    flex: 1,
    flexDirection: 'column',
  },
  regText: {
    fontFamily: 'PTSans',
    textAlign: 'center',
  },
  card:{
    height: 150,
    width: 300,
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: 'brown',
  }, 
  linksRow: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  icon: {
    marginHorizontal: 5,
  },
})
export default app