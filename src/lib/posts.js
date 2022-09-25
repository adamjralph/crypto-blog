import { Posts } from "./dbConnect";

export const getAllPosts = async () => {
  const posts = await (await Posts()).find().toArray();
  return posts;
};

export const createPost = async (newPost) => {
  const post = await (await Posts()).insert(newPost);
  return post;
};
