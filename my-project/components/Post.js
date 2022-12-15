import React from "react";
import Image from "next/image";
import dots from "../asset/dots.png";
import message from "../asset/message.png";
import hearth from "../asset/hearth.png";
import comment from "../asset/comment.png";
import save from "../asset/save.png";

const Post = ({ username, ProfilePic, postPhoto, caption }) => {
  const comments = [
    {
      username: "nam",
      comment: "hoe le ddasas",
    },
    {
      username: "nam",
      comment: "hoe le ddasas",
    },
    {
      username: "nam",
      comment: "hoe le ddasas",
    },
  ];
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
              <p className="text-sm">qưerr</p>
            </div>
          </div>
          <div className="h-6 w-6">
            <Image src={dots} />
          </div>
        </div>
        {/*Photo */}
        <div className="">
          <img src={postPhoto.src} alt="" className="mx-auto" />
        </div>
        {/*button */}
        <div className="m-3">
          <div className="">
            <div className="flex justify-between ">
              <div className="flex space-x-4">
                <div className="Btn">
                  <Image src={hearth} />
                </div>
                <div className="Btn">
                  <Image src={comment} />
                </div>
                <div className="Btn">
                  <Image src={message} />
                </div>
              </div>
              <div className="Btn">
                <Image src={save} />
              </div>
            </div>

            <div className="mt-2 customfont">
              <p>20 likes</p>
            </div>
          </div>

          {/*Caption */}
          <div className="flex items-center mt-2">
            <p className="customfont mr-2 whitespace-nowrap">{username}</p>
            <p className="truncate">{caption}</p>
          </div>
          {/* view all comment*/}
          <p className="text-sm text-gray-500 mt-1 my-2">view 90 comment</p>

          {/*Comments */}
          <div className="">
            {comments.map((comment) => (
              <div className="max-w-24 overflow-y-auto flex justify-between">
                <div className="flex items-center truncate">
                  <p className="customfont mr-2">{comment.username}</p>
                  <p className="truncate mr-2">{comment.comment}</p>
                </div>
                <div className="h-3 w-3 shrink-0">
                  <Image src={hearth} />
                </div>
              </div>
            ))}
          </div>
          {/*input */}
        </div>
      </div>
    </div>
  );
};

export default Post;
