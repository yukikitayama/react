import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Yuki" body="React is awesome!"/>
        <Post author="Kita" body="Check out the course." />
      </ul>
    </>
  );
};

export default PostsList;