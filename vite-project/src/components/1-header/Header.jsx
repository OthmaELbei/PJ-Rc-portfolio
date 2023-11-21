import React from "react";
import "./Header.css";
import { useState } from "react";
function Header() {
  const [showModel, setShowModel] = useState(false);
  return (
    <div>
      <header className="flex">
        <div className="Aa" />

        {/* Button for medie 700px  */}
        <button
          onClick={() => {
            setShowModel(true);
          }}
          className="menu icon-menu"
        ></button>
        {/* Button for medie 700px  */}
        {/* LINKS  */}

        <nav>
          <ul className="flex">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
          </ul>
        </nav>
        {showModel && (
          <div className="fexed">
            <ul className="modal">
              <li>
                <button
                  className="icon-close1"
                  onClick={() => {
                    setShowModel(false);
                  }}
                ></button>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Articles</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Speaking</a>
              </li>
              <li>
                <a href="">Uses</a>
              </li>
            </ul>
          </div>
        )}
        {/* == links == */}

        {/* button for light */}
        <button className="mode">
          <span className="icon-moon-o"></span>
        </button>
        {/* == button for light == */}
      </header>
    </div>
  );
}

export default Header;
