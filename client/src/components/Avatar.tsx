import React from "react";
import SocialMediaBar from "./SocialMediaBar";

interface AvatarProps {
  name: string;
  title: string;
  imageSource: string;
}

const Avatar = ({ name, title, imageSource }: AvatarProps) => {
  return (
    <div className="text-center md:grid md:grid-cols-2 sm:flex sm:flex-col">
      <img
        src={imageSource}
        className="rounded-full w-48 mb-4 mx-4"
        alt="Avatar"
      />
      <div className="flex flex-col justify-center text-center">
        <h5 className="text-xl font-semibold leading-none mb-2 text-white">
          {name}
        </h5>
        <p className="text-lg font-semibold leading-none text-white whitespace-nowrap overflow-hidden anim-typewriter">
          {title}
        </p>
        <br></br>
        <h4 className="font-semibold leading-none mb-6">
          <SocialMediaBar />
        </h4>
      </div>
    </div>
  );
};

export default Avatar;
