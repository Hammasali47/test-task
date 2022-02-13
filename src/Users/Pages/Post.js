import React, { useState } from "react";
import AddButton from "../Components/AddButton";
import PostContent from "../Components/postContent";
import SearchButton from "../Components/SearchButton";

const Post = () => {
  const [postData, setPostData] = useState();
  const sendData = (data) => {
    setPostData([...data]);
  };

  return (
    <div>
      <AddButton sendData={sendData} />
      <SearchButton />
      {postData && (
        <PostContent
          postData={postData}
          setPostData={setPostData}
          sendData={sendData}
        />
      )}
    </div>
  );
};

export default Post;
