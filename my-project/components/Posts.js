import React from "react";
import profile from "../asset/nouser.jpg";
import Post from "../components/Post";

const Posts = () => {
  const posts = [
    {
      id: "123",
      username: "Joe Doe",
      ProfilePic: profile,
      postPhoto: profile,
      caption: "Hollew form the caption",
    },
    {
      id: "1234",
      username: "Joe Doee",
      ProfilePic: profile,
      postPhoto: profile,
      caption: "Hollew form the caption",
    },
  ];
  return (
    <div className="mt-1 mx-1">
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          ProfilePic={post.ProfilePic}
          postPhoto={post.postPhoto}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
