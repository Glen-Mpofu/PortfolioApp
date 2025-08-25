import ThemedText from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, View, useColorScheme } from 'react-native';
import { useProjectContext } from "../(portfolio)/projectcontext";
import projects from '../(portfolio)/projects';
/*
  AutoPrintR
  RideWise
  A Picture of Heaven
  My Virtual Closet  
*/
  

const work = () => {
  const { setSelectedProjectIndex } = useProjectContext();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
      <ScrollView style={styles.container}>
        <ThemedText variant = "paragraphText" style={styles.heading} >Projects</ThemedText>

        <ThemedText variant = "paragraphText" style={styles.cardHeading}>NB. These are not the only projects i've done. There's plenty more but these are the ones i'm most proud of!!</ThemedText>
        <ScrollView style={styles.projectsRow} horizontal={true}
          showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        >
          {projects.map((project, index) => (

            <Link href={project.page} style={styles.buttonLink} onPress={() => setSelectedProjectIndex(index)}>
              <View style={styles.card}>
                <ThemedText variant = "paragraphText" style={styles.cardHeading} >{project.title}</ThemedText>
                <ThemedText variant = "paragraphText" style={styles.cardText}>{project.description}</ThemedText>
                <Image source={project.image} style={styles.image} />
              </View>
            </Link>
            
          ))}

        </ScrollView>
          
        <View>
          <ThemedText variant = "paragraphText" style={styles.techStackHeading}>Tech Stack Summary</ThemedText>
          <View>
            <ThemedText variant = "paragraphText" style={styles.techStackText}>Java</ThemedText>
            <ThemedText variant = "paragraphText" style={styles.techStackText}>JavaFX</ThemedText>
            <ThemedText variant = "paragraphText" style={styles.techStackText}>HTML</ThemedText>
            <ThemedText variant = "paragraphText" style={styles.techStackText}>React Native</ThemedText>
            <ThemedText variant = "paragraphText" style={styles.techStackText}>React.js</ThemedText>
            <ThemedText variant = "paragraphText" style={styles.techStackText}>Kotlin</ThemedText>
            <ThemedText variant = "paragraphText" style={styles.techStackText}>CSS</ThemedText>
            <ThemedText variant = "paragraphText" style={styles.techStackText}>SQL/PLSQL/SQL Lite</ThemedText>
            <ThemedText variant = "paragraphText" style={styles.techStackText}>MongoDB Basics</ThemedText>
            <ThemedText variant = "paragraphText" style={styles.techStackText}>Postgresql Basics</ThemedText>
            <ThemedText variant = "paragraphText" style={styles.techStackText}>Python Basics</ThemedText>
          </View>
        </View>

        <Link href={"/"} style = {styles.buttonLink} asChild>
          <Pressable style={styles.button}> 
            <ThemedText variant = "paragraphText" style = {styles.techStackText}>Home</ThemedText>
          </Pressable>
        </Link>

        </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderStyle: 'dotted',
    borderColor: '#1B454B',
    borderWidth: 2,
    paddingTop: 50,
  },
  projectsRow: {
    flexDirection: 'row'
  },
  card: {
    height: 320,
    width: 300,
    borderRadius: 50,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'black'
  },
  heading: {
    fontFamily: 'ChelaOne',
    fontSize: 42,
    textAlign: 'center'
  },
  cardHeading: {
    textAlign: 'center',
    fontFamily: 'Lobster',
    fontSize: 20,
  },
  cardText: {
    textAlign: 'center',
    fontFamily: 'Lobster',
    fontSize: 15,
    marginBottom: 5
  },
  techStackHeading: {
    fontFamily: 'PirataOne',
    fontSize: 20,
    textAlign: 'center'
  },
  techStackText: {
    fontFamily: 'PirataOne',
    fontSize: 15,
    textAlign: 'center'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
    alignSelf: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black'
  },
  button: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonLink: {
    flexDirection: 'row',
    alignSelf: 'center',
    margin: 20,
  }
  //colors #391B4B, #1B454B, #4B1B45, #2D4B1B, #899499, #36454F	
})

export default work