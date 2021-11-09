import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
// import { Divider } from 'react-native-elements'
import { Divider } from 'react-native-elements';

const Post = ({ post }) => {
    console.log(post);
    return (
        <View style={{ marginBottom: 30 }}>
            <Divider orientation="vertical" width={5} color='white' />
            <PostHeader post={post} />
        </View>
    )
}

const PostHeader = ({ post }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={{ uri: post.profile_picture }} style={styles.stories} />
            <Text style={{ color: 'white', fontWeight: 600, marginLeft: 6, alignItems: 'center' }}>{post.user}</Text>
        </View>
        <Text style={{ color: 'white', fontWeight: '900' }}>...</Text>
    </View>
)
const styles = StyleSheet.create({
    stories: {
        height: 35,
        width: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#ff8501'
    }
})

export default Post
