import { Posts } from "./dbConnect"

export const getAllPosts = async () => {
    const posts = await (await Posts()).find().toArray()
    return posts
}

export const getPostBySlug = async (query) => {
    const post = await (await Posts()).findOne(query)
    return post
}

export const getImageLink = async () => {
    const image = await (await Posts()).distinct("image")
    return image
}

export const createPost = async (newPost) => {
    const post = await (await Posts()).insert(newPost)
    return post
}
