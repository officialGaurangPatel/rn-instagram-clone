import { USERS } from "./users";

export const POSTS = [
    {
        imageurl: 'https://i.ibb.co/182bP1y/4k.png',
        user: USERS[0].user,
        likes: 9999,
        caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
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
        caption: 'Good Part of the day',
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