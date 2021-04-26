let state = {
  homepage: {
    posts: {
      allPosts: [
        {
          id: 1,
          user_id: 1,
          username: 'Elon Mask',
          time: '17:45',
          date: '21.01.2021',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fugiat maxime mollitia nemo quasi quo\n' +
            '        ratione sequi tempore tenetur totam! Dignissimos enim facilis ipsa, iste laborum laudantium odit omnis quam\n' +
            '        rerum sint vel veniam veritatis voluptas! Architecto blanditiis neque omnis?',
          likesCount: 2,
          comments: [],
          commentsCount: 0,
          avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Elon_Musk_-_The_Summit_2013.jpg/200px-Elon_Musk_-_The_Summit_2013.jpg'
        },
        {
          id: 2,
          user_id: 1,
          username: 'Elon Mask',
          time: '17:45',
          date: '21.01.2021',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fugiat maxime mollitia nemo quasi quo\n' +
            '        ratione sequi tempore tenetur totam! Dignissimos enim facilis ipsa, iste laborum laudantium odit omnis quam\n' +
            '        rerum sint vel veniam veritatis voluptas! Architecto blanditiis neque omnis?',
          likesCount: 2,
          comments: [],
          commentsCount: 0,
          avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Elon_Musk_-_The_Summit_2013.jpg/200px-Elon_Musk_-_The_Summit_2013.jpg'
        }
      ],
      newPostText: ''
    },
    friends: [],
    messages: {
      allMessages:[],
      newMessageText:''
    }
  }
}

export default state;
