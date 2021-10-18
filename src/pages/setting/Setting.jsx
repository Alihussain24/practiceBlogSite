import React from "react";
import "./setting.css";
import Sidebar from "../../components/sidebar/SideBar";
const Setting = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://scontent.fdac135-1.fna.fbcdn.net/v/t1.6435-1/p320x320/122570512_155717616235707_4740575384334848521_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=pn-kDMlWlCgAX88Fq5v&_nc_ht=scontent.fdac135-1.fna&oh=82a5d392bc5c868c8cd4b2e5bc2957a6&oe=6190DB0C"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Ali Hussain" name="name" />
          <label>Email</label>
          <input type="email" placeholder="mdalihussain446@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Setting;
