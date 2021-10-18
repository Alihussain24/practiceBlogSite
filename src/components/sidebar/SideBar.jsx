import React from "react";
import "./sideBar.css";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <span className="sidebBarTitle">About Me</span>
        <div className="sidebarItem">
          <img
            src="https://scontent.fdac135-1.fna.fbcdn.net/v/t1.6435-1/p320x320/122570512_155717616235707_4740575384334848521_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=pn-kDMlWlCgAX88Fq5v&_nc_ht=scontent.fdac135-1.fna&oh=82a5d392bc5c868c8cd4b2e5bc2957a6&oe=6190DB0C"
            alt=""
            className="sideBarImg"
          />
          <p className="sideDec">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            sequi consequatur soluta voluptates aperiam nihil atque ipsa
            doloribus velit vel. Sequi fugit nam aliquam aut.
          </p>
        </div> 
        <span className="sidebBarTitle">Categories</span>
        <div className="sidebarItem">
     
          <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Development</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>{" "}
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
          </ul>
        </div>

        <div className="sidebarItemSocial ">
          <span className="sidebBarTitle">Follow Me</span>
          <i className="ss fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter"></i>
          <i className="sidebarIcon fab fa-youtube-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </>
  );
};
export default SideBar;
