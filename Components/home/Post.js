import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
// import { Divider } from 'react-native-elements'
import { Divider } from 'react-native-elements';

const postFooterIcons = [
    {
        name: 'Like',
        imageurl: "https://img.icons8.com/material-outlined/60/ffffff/filled-like.png",
        likedimageurl: "https://img.icons8.com/ios-glyphs/90/fa314a/filled-like.png"
    },
    {
        name: 'Comment',
        imageurl: "https://img.icons8.com/material-outlined/24/ffffff/comments--v1.png"
    },
    {
        name: 'Share',
        imageurl: "https://img.icons8.com/external-those-icons-fill-those-icons/24/ffffff/external-share-network-sharing-those-icons-fill-those-icons.png"
    },
    {
        name: 'Save',
        imageurl: 'https://img.icons8.com/ios/50/ffffff/save--v1.png'
    },
]
const Post = ({ post }) => {
    console.log(post);
    return (
        <View style={{ marginBottom: 30 }}>
            <Divider orientation="horizontal" width={2} />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <PostFooter post={post} />
                <Likes post={post} />
                <Caption post={post} />
                <Comments post={post} />
            </View>
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

const PostImage = ({ post }) => (
    <View style={{ width: '100%', height: 450 }}>
        <Image source={{ uri: post.imageurl }} style={{ height: '100%', resizeMode: 'cover' }} />
    </View>
)

const PostFooter = ({ post }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', width: '32%' }}>
            <Icon imgStyle={styles.footerIcon} imgurl={postFooterIcons[0].imageurl} />
            <Icon imgStyle={styles.footerIcon} imgurl={postFooterIcons[1].imageurl} />
            <Icon imgStyle={styles.footerIcon} imgurl={postFooterIcons[2].imageurl} />
        </View>
        <View>
            <Icon imgStyle={styles.footerIcon} imgurl={postFooterIcons[3].imageurl} />
        </View>
    </View>
)

const Icon = ({ imgStyle, imgurl }) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{ uri: imgurl }} />
    </TouchableOpacity>
)

const Likes = ({ post }) => (
    <View style={{ flexDirection: 'row', marginTop: 4 }}>
        <Text style={{ color: 'white', fontWeight: '600' }}>{post.likes.toLocaleString('en')} Likes</Text>
    </View>
)

const Caption = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        <Text style={{ color: 'white' }}>
            <Text style={{ fontWeight: '700' }}>{post.user}</Text>
            <Text style={{ marginLeft: 5 }}>{post.caption}</Text>
        </Text>
    </View>
)

const Comments = ({ post }) => (
    <View></View>
)
const styles = StyleSheet.create({
    stories: {
        height: 35,
        width: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#ff8501'
    },

    footerIcon: {
        width: 33,
        height: 33,
        marginLeft: 5
    }
})

export default Post
