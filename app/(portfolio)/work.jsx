import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
/*
  AutoPrintR
  RideWise
  A Picture of Heaven
  My Virtual Closet
  
*/
const work = () => {
  return (
    //use a loop to display all the projects
    <ScrollView style = {styles.container}>
      <Text style = {styles.heading}>Projects</Text>

      <View style={styles.projectsRow}>
        <View style = {styles.card}>         
          <Text style = {styles.cardHeading}>Project Name</Text>
          <Text style = {styles.cardText}>Project Description</Text>

          <Image source={require('../../assets/images/AutoPrintR Logo Design.png')} style = {styles.image}/>
        </View>        
      </View>  

      <View>
        <Text style = {styles.techStackHeading}>Tech Stack Summary</Text>     

        <View>
          <Text style={styles.techStackText}>Java</Text>
          <Text style={styles.techStackText}>JavaFX</Text>
          <Text style={styles.techStackText}>HTML</Text>
          <Text style={styles.techStackText}>React Native</Text>
          <Text style={styles.techStackText}>HTML</Text>
          <Text style={styles.techStackText}>CSS</Text>
          <Text style={styles.techStackText}>SQL/PLSQL</Text>
          <Text style={styles.techStackText}>MongoDB</Text>
          <Text style={styles.techStackText}>Postgresql</Text>
        </View>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    borderStyle: 'dotted',
    borderColor: '#36454F', 
    borderWidth: 2,
    paddingTop: 50
  }, 
  projectsRow:{
    flexDirection: 'row',
  }, 
  card: {
    height: 300,
    width: 300,
    backgroundColor: 'grey',
    borderRadius: 50, 
    margin: 20,
    backgroundColor: '#C0C0C0'
  },
  heading: {
    fontFamily: 'ChelaOne',
    fontSize: 42,
    textAlign: 'center',
    color: '#2D4B1B'
  },
  cardHeading:{
    textAlign: 'center',
    fontFamily: 'Lobster',
    fontSize: 20,
    color: '#1B2D4B'
  },
  cardText:{
    textAlign: 'center',
    fontFamily: 'Lobster',
    fontSize: 15,
    color: '#1B2D4B'
  },
  techStackHeading:{
    fontFamily: 'PirataOne',
    color: '#1B454B', 
    fontSize: 20,
    textAlign: 'center'
  },
  techStackText:{
    fontFamily: 'PirataOne',
    color: '#1B454B',
    fontSize: 15,
    textAlign: 'center'
  },
  image:{
    width: 200,
    height: 200,
    borderRadius: 20,
    alignSelf: 'center'
  }
  //colors #391B4B, #1B454B, #4B1B45, #2D4B1B, #899499, #36454F	
})

export default work