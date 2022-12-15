import React from "react";
import Image from "next/image";
import dots from "../asset/dots.png";

const Post = ({ username, ProfilePic, postPhoto, caption }) => {
  return (
    <div>
      <div className="border rounded-lg my-3">
        {/*Header */}
        <div className="flex items-center p-3">
          <div className="flex  items-center w-full">
            <div className="h-8 w-8 mr-3">
              <img src={ProfilePic.src} className="rounded-full" />
            </div>
            <div className="">
              <p className="font-semibold">{username}</p>
              <p className="text-sm">original Audio</p>
            </div>
          </div>
          <div className="h-6 w-6">
            <Image src={dots} />
          </div>
        </div>
        {/*Photo */}
        <div className="">
          <img src={postPhoto.src} alt="" />
        </div>
        {/*button */}
        {/*Caption */}
        {/*Comments */}
        {/*input */}
      </div>
    </div>
  );
};

export default Post;
