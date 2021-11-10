import React from 'react'
import { SafeAreaView } from 'react-native'
import AddNewPost from '../Components/newPost/AddNewPost'

const NewPostScreen = () => {
    return (
        <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
            <AddNewPost />
        </SafeAreaView>
    )
}

export default NewPostScreen
