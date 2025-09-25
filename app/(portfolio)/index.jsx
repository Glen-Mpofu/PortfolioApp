import ThemedText from '@/components/ThemedText';
import ThemedView from '@/components/ThemedView';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import SocialIcons from 'react-native-vector-icons/FontAwesome5';

import { Marquee } from "@animatereactnative/marquee";

const app = () => {
  return (
    <ThemedView style={styles.container}>
      
      <ThemedText style={styles.heading}>Porfolio</ThemedText>      
      <ThemedView>
        <View style={styles.row}>
          <Image source={require('../../assets/images/tshepo.jpg')} style={styles.image} />

          <ThemedView style={styles.column}>
            <ThemedText style={[styles.regText, { fontSize: 20}]}>Tshepo Glen Mpofu</ThemedText>
            <ThemedText style={styles.regText}>21</ThemedText>
            <ThemedText style={styles.regText}>Black South African</ThemedText>
            <ThemedText style={styles.regText}>3rd Year Student at TUT</ThemedText>
          </ThemedView>
        </View>
      </ThemedView>

      <ThemedView style = {styles.card}>
        <ThemedText style={styles.regText}>
          Born and raised in Hillbrow South Africa I've learned to be creative in everything that i do. I don't contribute my energy to projects i don't see as creative.

          Speaking of creativity, i make music :) and i think that side of moi helps me tap into more outlandish or eclectic programming project ideas.

          Gosh!! i know you resent long texts so enough chatter, look no further than below for my projects and social links
        </ThemedText>
      </ThemedView>

      <ThemedView style = {styles.linksRow}>
        <Link href={'https://www.linkedin.com/in/tshepo-mpofu-6b37a3237/'}>
          <SocialIcons name = "linkedin" size = {30} style = {styles.icon}/>   
        </Link>

        <Link href={'https://www.instagram.com/i.am.mgt/'}>
          <SocialIcons name="instagram" size={30} style={styles.icon} />
        </Link>

        <Link href={'https://github.com/Glen-Mpofu'}>
          <SocialIcons name = "github" size={30} style ={styles.icon}/>
        </Link>
      </ThemedView>

      <Link href={'/work'} style = {styles.workLink} asChild>
        <Pressable style={styles.button}>
          <ThemedText style = {styles.buttonText}>Work</ThemedText>
        </Pressable>
      </Link>

      <Marquee spacing={20} speed={1}>
        <ThemedView style={{flexDirection:"row"}}>
          <ThemedText style = {{color: "red"}}>Breaking News!</ThemedText>
          <ThemedText>Best programmer here. My Github has a bunch of projects you can reference that are not included in my portfolio. Feel free to browser around there and download whatever. The Link is above!</ThemedText>
        </ThemedView>
      </Marquee>

    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 50,
    marginBottom: 50
  },
  heading: {
    fontFamily: 'ChelaOne',
    fontSize: 42,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200,
    alignContent: 'center',
  },
  row: {
    flexDirection: 'row', 
    alignSelf: 'center'
  },
  column: {
    paddingTop: 20,
    flexDirection: 'column',
    justifyContent: "center"
  },
  regText: {
    fontFamily: 'PTSans',
    textAlign: 'center',
    color: '#4B391B'
  },
  buttonText: {
    fontFamily: 'ChelaOne',
    textAlign: 'center',
  },
  card:{
    height: 150,
    width: 300,
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
  }, 
  linksRow: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  icon: {
    marginHorizontal: 5,
    color: '#4B5320'
  },
  button:{
    width: 50,
    height: 50,
    
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  workLink: {
    flexDirection: 'row',
    alignSelf: 'center',
    margin: 20,
  }
})
export default app