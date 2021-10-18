import React from "react";
import "./singlePost.css";
const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://studio.uxpincdn.com/studio/wp-content/uploads/2020/12/7-Best-Reasons-To-Use-React.js-Components-In-Your-Project.png.webp"
          alt=""
        />
        <div className="singlePostTitle">
          Lorem ipsum dolor, sit amet?
          <div className="signlePostEdit">
            <i className="SinglePostIcon far fa-edit"></i>
            <i className="SinglePostIcon far fa-trash-alt"></i>
          </div>
        </div>
        <div className="singlePostInfo">
          <span className="SinglePostAuthor">
          
            Author:<b> Ali Hussain</b>
          </span>
          <span className="SinglePostAuthor">
        
            <b>1 hour ago</b>
          </span>
          
        </div>
        <p className="singlePostDec">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            fuga aperiam accusantium laudantium nihil, fugiat exercitationem
            eveniet, iste et deserunt minima veniam error neque molestiae
            voluptate, omnis rem nostrum enim.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Corporis fuga aperiam accusantium
            laudantium nihil, fugiat exercitationem eveniet, iste et deserunt
            minima veniam error neque molestiae voluptate, omnis rem nostrum
            enim.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis fuga aperiam accusantium laudantium nihil, fugiat
            exercitationem eveniet, iste et deserunt minima veniam error neque
            molestiae voluptate, omnis rem nostrum enim.Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Corporis fuga aperiam accusantium
            laudantium nihil, fugiat exercitationem eveniet, iste et deserunt
            minima veniam error neque molestiae voluptate, omnis rem nostrum
            enim.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis fuga aperiam accusantium laudantium nihil, fugiat
            exercitationem eveniet, iste et deserunt minima veniam error neque
            molestiae voluptate, omnis rem nostrum enim.Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Corporis fuga aperiam accusantium
            laudantium nihil, fugiat exercitationem eveniet, iste et deserunt
            minima veniam error neque molestiae voluptate, omnis rem nostrum
            enim.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis fuga aperiam accusantium laudantium nihil, fugiat
            exercitationem eveniet, iste et deserunt minima veniam error neque
            molestiae voluptate, omnis rem nostrum enim.
          </p>
      </div>{" "}
    </div>
  );
};

export default SinglePost;
