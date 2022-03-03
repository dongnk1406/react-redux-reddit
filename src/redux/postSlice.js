import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
    name: "post",
    initialState: {
        posts: [
            {
                id: 0,
                title: "",
                description: "",
                tag: 0,
                image: ""
            }
        ]
    },
    reducers: {
        createPost: (state, action) => {
            state.posts = [...state.posts, action.payload];
        },

        editPost: (state, action) => {
            console.log(action.payload.id);
            const indexPostEdit = state.posts.findIndex(post => post.id === action.payload.id);
            const newPost = [...state.posts];
            if (indexPostEdit < 0) return;
            newPost[indexPostEdit].title = action.payload.title;
            newPost[indexPostEdit].description = action.payload.description;
            newPost[indexPostEdit].tag = action.payload.tag;
            newPost[indexPostEdit].image = action.payload.image;
        },

        deletePost: (state, action) => {
            const indexPostDelete = state.posts.findIndex(post => post.id === action.payload);
            if (indexPostDelete < 0) return;
            const newPosts = [...state.posts];
            newPosts.splice(indexPostDelete, 1);
            state.posts = newPosts;
        }
    }
})

export const { createPost, editPost, deletePost } = postSlice.actions;
export default postSlice.reducer;