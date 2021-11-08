import { USERS } from "./users";

export const POSTS = [
    {
        imageurl: 'https://i.ibb.co/182bP1y/4k.png',
        user: USERS[0].user,
        likes: 9999,
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'GaurangPatel',
                comment: 'I am Awesome'
            },
            {
                user: 'Shivam Vora',
                comment: 'Devloper'
            }
        ]
    },
    {
        imageurl: 'https://i.ibb.co/182bP1y/4k.png',
        user: USERS[1].user,
        likes: 1111,
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'GaurangPatel',
                comment: 'I am Awesome'
            },
            {
                user: 'Shivam Vora',
                comment: 'Devloper'
            }
        ]
    }
]