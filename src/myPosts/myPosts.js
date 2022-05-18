const myPosts = [
    { id:Math.random(),
        owner:"Reddit",
        content:{
            title:"Lorem Ipsum",
            description:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
            image:null,
            likes:[],
            comments:[{commentId:Math.random(),commentContent:"my first comment"}]
        }
    },
    { id:Math.random(),
        owner:"Reddit",
        content:{
            title:"Lorem Ipsum",
            description:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
            image:null,
            likes:[],
            comments:[{commentId:Math.random(),commentContent:"my first comment"}]
        }
    }
];

export default myPosts;