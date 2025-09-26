import ThemedText from '@/components/ThemedText';
import ThemedView from '@/components/ThemedView';
import { Link } from 'expo-router';
import { Image, Platform, Pressable, StyleSheet, View } from 'react-native';
import SocialIcons from 'react-native-vector-icons/FontAwesome5';

import { Marquee } from "@animatereactnative/marquee";

import { FlatList, ScrollView } from 'react-native';
import { useProjectContext } from "../(portfolio)/projectcontext";
import projects from '../(portfolio)/projects';

import { Dimensions } from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';

const CarouselItem =({item, index, scrollX})=>{
  return(
    <ThemedView style={[styles.projectCard, index % 2 === 0 ? { marginTop: 0 } : { marginTop: 40 }]}>
      <Image style={styles.projImage} source={item.image} />
      <ThemedText style={styles.regText}>{item.title}</ThemedText>
      <ThemedText style={styles.regText}>{item.description}</ThemedText>
    </ThemedView>  
    )
}
  
const app = () => {
  const { width: screenWidth } = Dimensions.get('window');
  const { setSelectedProject } = useProjectContext();
  const scrollX = useSharedValue(0)
  const onScroll = useAnimatedScrollHandler({
    onScroll: e=>{
      scrollX.value = e.contentOffset.x
    }
  });

  const isWeb = Platform.OS === "web"
  const FlatListComponent = isWeb ? FlatList : Animated.FlatList

  return (
    
    <ThemedView style={styles.container}>
      <ScrollView>
        <ThemedView style={styles.overlay} pointerEvents="none" />

        <Image style={styles.bgImage} source={require("../../assets/images/bg.jpg")} />

        <ThemedText style={styles.heading}>carpe diem</ThemedText>
        <ThemedView>
          <View style={styles.row}>
            <Image source={require('../../assets/images/tshepo.jpg')} style={styles.image} />

            <ThemedView style={styles.column}>
              <ThemedText style={[styles.regText, { fontSize: 20 }]}>Tshepo Glen Mpofu</ThemedText>
              <ThemedText style={styles.regText}>21</ThemedText>
              <ThemedText style={styles.regText}>Black South African</ThemedText>
              <ThemedText style={styles.regText}>3rd Year Student at TUT</ThemedText>
            </ThemedView>
          </View>
        </ThemedView>

        <ThemedView style={styles.card}>
          <ThemedText style={styles.regText}>
            Born and raised in Hillbrow I've learned to be creative in everything that i do. I don't contribute my energy to projects i don't see as creative.

            Speaking of creativity, i make music :) and i think that side of moi helps me tap into more outlandish or eclectic programming project ideas.

            Gosh!! i know you resent long texts so enough chatter, look no further than below for my projects and social links
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.projContainer}>
          <FlatListComponent 
                data={projects} renderItem={({ item, index }) => 
                <Link key={item.title + index} href={item.page} asChild>
                    <Pressable onPress={() => setSelectedProject(index)}>
                      <CarouselItem item={item} index={index} scrollX={scrollX} />
                    </Pressable>
                </Link> 
              }
                showsHorizontalScrollIndicator={false}
                snapToInterval={370}  
                decelerationRate={"fast"}
                bounces={false}
                contentContainerStyle={{paddingHorizontal: (screenWidth-1000)/2}}
                onScroll={onScroll}
                scrollEventThrottle={16}
                horizontal={true}
              >                 
                                            
               
          </FlatListComponent>
        </ThemedView>
      
      
        <ThemedView style={styles.linksRow}>
          <Link href={'https://www.linkedin.com/in/tshepo-mpofu-6b37a3237/'} style={styles.iconLink}>
            <SocialIcons name="linkedin" size={30} style={styles.icon} />
          </Link>

          <Link href={'https://www.instagram.com/i.am.mgt/'} style={styles.iconLink}>
            <SocialIcons name="instagram" size={30} style={styles.icon} />
          </Link>

          <Link href={'https://github.com/Glen-Mpofu'} style={styles.iconLink}>
            <SocialIcons name="github" size={30} style={styles.icon} />
          </Link>
        </ThemedView>

        <Link href={'/work'} style={styles.techStackLink} asChild>
          <Pressable style={styles.button}>
            <ThemedText style={styles.buttonText}>Tech Stack</ThemedText>
          </Pressable>
        </Link>
      </ScrollView>
        <Marquee spacing={20} speed={1} style={{ position: "absolute", bottom: 0, width: "100%" }}>
          <ThemedView style={{ flexDirection: "row", paddingBottom: Platform.OS === "android" ? 10 : 0 }}>
            <ThemedText style={{ color: "red" }}>Eyes down here!</ThemedText>
            <ThemedText style={{ color: "black" }}>What do you call a programmer that get's invited to an all exclusive party? A Very Important Programmer. Nice! I knew you had brains</ThemedText>
          </ThemedView>
        </Marquee>
      
    </ThemedView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Platform.OS === "android" ? 50 : 0,
    
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
  },
  buttonText: {
    fontFamily: 'ChelaOne',
    textAlign: 'center',
  },
  card: {
    height: 150,
    width: 300,
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
  },
  linksRow: {
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    top: Platform.OS === "android" ? 60 : 30,
    right: 10,
  },
  icon: {
    marginHorizontal: 5,
    color: '#4B5320'
  },
  iconLink: {
    margin: 5
  },
  button: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  techStackLink: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
    position: "absolute",
    left: Platform.OS === "android" ? 0 : 30,
    top: Platform.OS === "android" ? 30 : 0,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "grey",
    opacity: 0.1,
  },
  bgImage: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.2,
    width: "100%",
    flex: 1,
    height: "100%"
  },
  projectCard: {
    width: 350,
    height: 500,
    margin: 10,
    borderRadius: 20, 
    shadowColor: "white",
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 10,
    elevation: 10
  },
  projImage: {
    flex: 1,
    width: 350,
    borderRadius: 20,
  },
  projContainer: {
    paddingRight: 10,
    paddingLeft: 10,
    flexDirection: "row",
    flex: 1,
    alignSelf: "center", 
    marginBottom: 30
  }
})

export default app