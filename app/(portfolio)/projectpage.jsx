import ThemedText from '@/components/ThemedText';
import ThemedView from '@/components/ThemedView';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Image, Modal, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import projects from "../(portfolio)/projects";
const projectpage = () => {   
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)

    const {projectIndex} = useLocalSearchParams();
    const index = parseInt(projectIndex);
    const selectedProject = projects[index]

    if (typeof projectIndex !== 'string' || isNaN(index) || !selectedProject) {
      return (
        <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ThemedText variant='paragraphText'>No project selected. Please go back and choose a project.</ThemedText>
        </ThemedView>
      );
    }

    const openImageModal = (image) => {
        setSelectedImage(image);
        setModalVisible(true);
    }

    const closeImageModal = () => {
        setSelectedImage(null);
        setModalVisible(false);
    }
    return (
        <ScrollView style={styles.container}>

            <ThemedView style={styles.projectCard}>
                <ThemedText variant='paragraphText' style={styles.projectHeading}>{selectedProject.title}</ThemedText>
                <ThemedText variant='paragraphText' style={styles.projectText}>{selectedProject.fullAppDescription}</ThemedText>

                    <ThemedText variant='paragraphText' style={styles.projectHeading}>FEATURES</ThemedText>
                    <View style={{ marginBottom: 30}}>
                        {selectedProject.features.map((feature, index) =>
                            <ThemedText variant='paragraphText' style={styles.projectText}>* {feature}</ThemedText>
                        )}
                    </View>
                    
                    {/*images scroll view*/}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {selectedProject.imagesAndDescriptions.map(({image, description}, index) => (

                            <View style={styles.imageAndDesBox}>                                
                                <TouchableOpacity onPress={() => openImageModal(image)}>
                                    <Image source={image} style={styles.image} />
                                </TouchableOpacity>
                                <View style = {{width: 300, height: 500}}>
                                    <ThemedText variant='paragraphText' style={styles.projectText}>{description}</ThemedText>
                                </View>
                            </View>
                        ))}                           
                        
                    </ScrollView>
            </ThemedView>
            
            <Modal
                transparent={true}
                animationType="fade"
                visible={modalVisible}
                onRequestClose={closeImageModal}
            >
                <Pressable style={styles.modalOverlay} onPress={closeImageModal}>
                    <View>
                        {selectedImage && (
                            <Image source={selectedImage} style={styles.modalImage} />
                        )}
                    </View>
                </Pressable>
            </Modal>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    heading: {
        fontSize: 42,
        fontFamily: 'PirataOne',
        textAlign: 'center'
    },
    projectCard: {
        width: "100%",
        height: 1000,
        borderRadius: 50,
        flexDirection: 'column',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'black'
    },
    projectHeading: {
        fontFamily: 'PirataOne',
        fontSize: 25,
        textAlign: 'center'
    },
    projectText: {
        fontFamily: 'PirataOne',
        fontSize: 20,
        textAlign: 'center'
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 20,
        alignSelf: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#1B454B'
    },
    imageAndDesBox: {
        marginLeft: 6,
        marginRight: 6
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 20,
        elevation: 10,
    },
    modalImage: {
        width: 300,
        height: 300,
        borderRadius: 15,
    },
    //colors #391B4B, #1B454B, #4B1B45, #2D4B1B, #899499, #36454F	
})
export default projectpage