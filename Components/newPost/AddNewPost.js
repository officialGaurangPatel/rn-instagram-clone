import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = () => (
    <View style={styles.container}>
        <Header />
        <FormikPostUploader />
    </View>
)


const Header = () => (
    <View style={styles.headerContainer}>
        <TouchableOpacity>
            <Image style={{ width: 30, height: 30 }} source={{ uri: 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png' }} />
        </TouchableOpacity>
        <Text style={styles.headerText}>New Post</Text>
        <Text></Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,

    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontWeight: 700,
        color: '#fff',
        fontSize: 20,
        marginRight: 27.5
    }
})

export default AddNewPost
