import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "🚀",
        })
      );
    }, 2000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c) => {
            return (
              <ChatMessage key={c.message} name={c.name} message={c.message} />
            );
          })}
        </div>
      </div>
      <form
        className="w-full p-3 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: generateRandomName(),
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-96 border border-red-400"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-4 py-1 mx-2 bg-green-200 rounded-lg">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
