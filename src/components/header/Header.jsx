import React from "react";
import "./headerCss.css";

const Header = () => {
  return (
      <>
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitle1">React & Node</span>
        <span className="headerTitle2">Blog</span>
      </div>
     
    </div>
     <img src="https://www.tutorialrepublic.com/lib/images/javascript-illustration.png" alt="" className="headerImg" />
     </>    
  );
};

export default Header;
