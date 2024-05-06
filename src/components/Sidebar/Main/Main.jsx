/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { assets } from "../../../assets/assets";
import "./Main.css";
import { Context } from "../../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Google Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Developer How can i help you today?</span>
              </p>
            </div>
            <div className="cards">
              <div className="card" onClick={() => onSent("Tell me about the weather")}>
                <p>Tell me about the weather</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card" onClick={() => onSent("Tell me about react and vite")}>
                <p>Tell me about react and vite</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card" onClick={() => onSent("What is the meaning of life")}>
                <p>What is the meaning of life</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card" onClick={() => onSent("where should i go when i have a day off")}>
                <p>where should i go when i have a day off</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="What are you thinking?"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input?<img src={assets.send_icon} alt="" onClick={() => onSent()} />:null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display some incorrect information sometime, it is a demo
            aiGPT, so make sure to double check its responese.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
