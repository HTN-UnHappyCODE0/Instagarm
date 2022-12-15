import React from "react";
import Stories from "../components/Stories";
import Posts from "../components/Posts";

const Feed = () => {
  return (
    <div>
      <section>
        {/* Stories */}
        <Stories />
        {/* Posts */}
        <Posts />
      </section>

      <section>
        {/* MiniProfile */}
        {/* Suggestion */}
      </section>
    </div>
  );
};

export default Feed;
