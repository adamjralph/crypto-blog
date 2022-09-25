import { createPost, getAllPosts } from "../../lib/posts";

export const get = async () => {
  const posts = await getAllPosts();
  if (!posts) {
    return Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }

  return new Response(JSON.stringify(posts), {
    status: 200,
  });
};

export const post = async ({ request }) => {
  const newPost = await request.json();
  const post = await createPost(newPost);
  return new Response(JSON.stringify(post), {
    status: 200,
  });
};
