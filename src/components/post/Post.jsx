import React from "react";
import "./post.css";
const Post = () => {
  return (
    <div className="post">
      <img
        src="https://thumbs.dreamstime.com/b/dates-deadlines-banner-computer-calendar-clock-hourglass-dates-deadlines-banner-computer-calendar-clock-99195545.jpg"
        alt=""
        className=""
      />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">JavaScript</span>
          <span className="postCat">React</span>
        </div>

        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>

      </div>
      <p className="postDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At praesentium, voluptates placeat minus dolore in adipisci rerum libero veritatis corrupti, quo necessitatibus illum suscipit molestiae nostrum aut error culpa odio.Lorem ipsum dolor sit amet consectetur, adipisicing elit. At praesentium, voluptates placeat minus dolore in adipisci rerum libero veritatis corrupti, quo necessitatibus illum suscipit molestiae nostrum aut error culpa odio.Lorem ipsum dolor sit amet consectetur, adipisicing elit. At praesentium, voluptates placeat minus dolore in adipisci rerum libero veritatis corrupti, quo necessitatibus illum suscipit molestiae nostrum aut error culpa odio.</p>
    </div>
  );
};

export default Post;
