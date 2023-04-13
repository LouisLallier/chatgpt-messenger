import React from "react";
import { PlusIcon } from "@heroicons/react/20/solid";

type Props = {};

const NewChat = ({}: Props) => {
  return (
    <div className="border-gray-700 border chatRow">
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
};

export default NewChat;
