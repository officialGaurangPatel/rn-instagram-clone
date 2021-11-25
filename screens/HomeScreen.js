import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { POSTS } from '../Components/data/posts';
import BottomTabs, { bottomTabsIcons } from '../Components/home/BottomTabs';
import Header from '../Components/home/Header'
import Post from '../Components/home/Post'
import Stories from '../Components/home/Stories'
import db from '../firebase';

const HomeScreen = ({ navigation }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collectionGroup('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
        // <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <Stories />
            <ScrollView>
                {posts.map((post, index) => (
                    <Post key={index} post={post} />
                ))
                }
            </ScrollView>
            <BottomTabs icons={bottomTabsIcons} />
        </SafeAreaView>
        // </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor: 'black',
        flex: 1
    }
})

export default HomeScreen
