import { useLoaderData } from "react-router-dom";

import Post from "./Post";
import styles from "./PostsList.module.css";

const PostsList = () => {
  const posts = useLoaderData();

  return (
    <>
      <ul className={styles.posts}>
        {posts.length > 0 &&
          posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
      </ul>
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

export default PostsList;
