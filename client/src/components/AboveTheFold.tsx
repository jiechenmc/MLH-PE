import React from "react";
import Avatar from "./Avatar";
import ViewResumeButton from "./ViewResumeButton";
import avatarImage from "../assets/headshot.webp";
import { ReactComponent as DownArrow } from "../assets/DownArrow.svg";

const AboveTheFold = () => {
  return (
    <div className="snap-center p-12 text-center relative overflow-hidden bg-no-repeat bg-cover bg-[url('/src/assets/bg_image.webp')] h-screen">
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col grow-0">
            <h2 className="font-semibold">
              <Avatar
                name="Jie Chen"
                title="CS Student at Stony Brook"
                imageSource={avatarImage}
              />
            </h2>
            <ViewResumeButton />
            <div className="appearance-none flex justify-center items-end mt-5">
              <DownArrow className="animate-bounce w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboveTheFold;
