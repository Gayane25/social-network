for running server run commands-
 - cd backend
 - npm run dev

available urls -
    - for registration   - localhost:8000/api/auth/registration
           POST   body       -  {
                                       username: String | required,
                                       password: String | minLength:4, maxLength:10 | required,
                                  }

           response body      -  {
                                          _id,followers, followings, username, token
                                 }
    - for login          -  localhost:8000/api/auth/login
            GET     body       -  {
                                       username, password
                                   }

            response body      -  {
                                      _id,followers, followings, username, token
                                  }
    - for creating post  -  localhost:8000/api/posts
           POST    headers    - {
                                    authorization: "Bearer <token of user>"
                                 }
           POST    body        -  {
                                        owner: String | required,
                                        content_title: String | required,
                                        content_description: String | required,
                                        content_image_url: String | required
                                   }
    - for getting all posts    -  localhost:8000/api/posts
              GET   headers    - {
                                    authorization: "Bearer <token of user>"
                                 }
              GET    body        -  {
                                           owner: String | required,
                                           content_title: String | required,
                                           content_description: String | required,
                                           content_image_url: String | required
                                      }
    - for getting single post  -  localhost:8000/api/posts/:postId
              GET   headers    - {
                                    authorization: "Bearer <token of user>"
                                 }

    - for following user  -  localhost:8000/api/user/:id/follow
              PATCH   headers  - {
                                    authorization: "Bearer <token of user>"
                                }
    - for unfollowing user  -  localhost:8000/api/user/:id/unfollow
              PATCH   headers  - {
                                    authorization: "Bearer <token of user>"
                                }
