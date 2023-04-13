import React from "react";
import NewChat from "@/components/NewChat";

type Props = {};

const SideBar = ({}: Props) => {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/*NewChat*/}
          <NewChat />
          <div>{/*Model Selection*/}</div>
          {/*Map through the CharTows*/}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
