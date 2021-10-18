import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  const user = true;

  return (
    <>
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-twitter"></i>
          <i className="topIcon fab fa-youtube-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Home
              </Link>
            </li>

            <li className="topListItem">
              {" "}
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                About
              </Link>
            </li>
            <li className="topListItem">
              {" "}
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Contact
              </Link>
            </li>
            <li className="topListItem">
              {" "}
              <Link
                to="/write"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Write
              </Link>
            </li>
            <li className="topListItem">
              {" "}
              <Link
                to="/write"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {user && "logout"}
              </Link>
            </li>
          </ul>
        </div>
        <div className="topRight">
          <i className="topSearchIcon fab fa-searchengin"></i>
          {user ? (
            <img
              className="topImg"
              src="https://scontent.fdac135-1.fna.fbcdn.net/v/t1.6435-1/p320x320/122570512_155717616235707_4740575384334848521_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=pn-kDMlWlCgAX88Fq5v&_nc_ht=scontent.fdac135-1.fna&oh=82a5d392bc5c868c8cd4b2e5bc2957a6&oe=6190DB0C"
              alt=""
            />
          ) : (
            <>
              <ul className="topList">
                <li className="topListItem">
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Login
                  </Link>
                </li>
              </ul>
              <ul className="topList">
                <li className="topListItem">
                  <Link
                    to="/register"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </>
          )}

        </div>
      </div>
    </>
  );
};

export default TopBar;
