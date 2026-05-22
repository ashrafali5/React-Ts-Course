const Post = () => {
  //Generate a lot of posts
  const posts = Array.from({ length: 10000 }, (_, index) => `Post ${index + 1}`);
  return (
    <div>
      <h1>Post</h1>
      {posts.map((post) => (
        <div key={post} className="post">
          {post}
        </div>
      ))}
    </div>
  );
};

export default Post;
