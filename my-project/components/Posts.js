import React from "react";
import profile from "../asset/profile.png";
import Post from "../components/Post";

const Posts = () => {
  const posts = [
    {
      id: "123",
      username: "Nam hoang",
      ProfilePic: profile,
      postPhoto: profile,
      caption: "Hollew form the caption",
    },
    {
      id: "1234",
      username: "N",
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
