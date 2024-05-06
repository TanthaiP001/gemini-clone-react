import "./Sidebar.css";
import { assets } from "../../assets/assets";
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";

const Sidebar = () => {
  // eslint-disable-next-line no-unused-vars
  const [extended, setExtended] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }  


  return (
    <div className="sidebar">
      <div className="top">
        <img
          src={assets.menu_icon}
          className="menu"
          onClick={() => setExtended(!extended)}
        />
        <div className="new-chat" onClick={()=>newChat()}>
          <img src={assets.plus_icon} />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item, index) => {
              return (
                <div className="recent-entry" key={index} onClick={()=>loadPrompt(item)}>
                  <img src={assets.message_icon} />
                  <p>{item.slice(0,18)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
