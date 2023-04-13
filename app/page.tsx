import React from "react";
import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

type Props = {};

const HomePage = ({}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center text-white h-screen px-2">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col mb-5 justify-center items-center">
            <SunIcon className="h-10 w-10" />
            {/*    sun ICON*/}
            <h2 className="">Examples</h2>
          </div>
          <div className="space-y-2">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="infoText">"Explain Something to me"</p>
            <p className="infoText">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              "What is the difference between a dog and a cat?"
            </p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="infoText">"What is the color of the sun ?"</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col mb-5 justify-center items-center">
            <BoltIcon className="h-10 w-10" />
            {/*    sun ICON*/}
            <h2 className="">Capabilities</h2>
          </div>
          <div className="space-y-2">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="infoText">Change the ChatGPT Model to use</p>
            <p className="infoText">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Messages are stored in Firebase's Firestore
            </p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="infoText">
              Hot Toast notification when ChatGPT is thinking !
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col mb-5 justify-center items-center">
            <ExclamationTriangleIcon className="h-10 w-10" />
            {/*    sun ICON*/}
            <h2 className="">Limitations</h2>
          </div>
          <div className="space-y-2">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="infoText">
              May occasionally generate incorrect informations
            </p>
            <p className="infoText">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              May occasionally generate harmful instruction or biased content
            </p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="infoText">
              Limited knowledge of world and events after 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
