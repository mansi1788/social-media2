// import React, { useState, useEffect } from "react";
// import './Posts.css';
// import { getTimelinePosts } from "../../actions/postAction";
// import Post from '../Post/Post';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from "react-router-dom";

// const Posts = () => {
//   const params = useParams();
//   const dispatch = useDispatch();
  
//   const { user } = useSelector((state) => state.authReducer.authData);
//   const { posts, loading } = useSelector((state) => state.postReducer);

//   const [postsState, setPostsState] = useState([]);

//   useEffect(() => {
//     if (user?._id) {
//       dispatch(getTimelinePosts(user._id));
//     }
//   }, [user?._id, dispatch]);  

//   useEffect(() => {
//     setPostsState(posts); // Sync local state with Redux state
//   }, [posts]);

//   const handlePostDelete = (postId) => {
//     setPostsState((prevPosts) => prevPosts.filter((post) => post._id !== postId));
//   };

//   // Handle loading state
//   if (loading) return <div>Loading posts...</div>;
//   if (!user) return <div>Loading user data...</div>;
//   if (!postsState || postsState.length === 0) return <div>No posts available</div>;

//   if (params.id) {
//     postsState = postsState.filter((post) => post.userId === params.id);
//   }

//   return (
//     <div className="Posts">
//       {postsState.map((post) => (
//         <Post key={post._id} data={post} onDelete={handlePostDelete} />
//       ))}
//     </div>
//   );
// };

// export default Posts;



import React, { useState, useEffect } from "react";
import './Posts.css';
import { getTimelinePosts } from "../../actions/postAction";
import Post from '../Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

const Posts = () => {
  const params = useParams();
  const dispatch = useDispatch();
  
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);

  const [postsState, setPostsState] = useState([]);

  useEffect(() => {
    if (user?._id) {
      dispatch(getTimelinePosts(user._id));
    }
  }, [user?._id, dispatch]);  

  useEffect(() => {
    setPostsState(posts); // Sync local state with Redux state
  }, [posts]);

  const handlePostDelete = (postId) => {
    setPostsState((prevPosts) => prevPosts.filter((post) => post._id !== postId));
  };

  const filteredPosts = params.id 
  ? postsState.filter((post) => post.userId === params.id) 
  : postsState;


  // Handle loading state
  if (loading) return <div>Loading posts...</div>;
  if (!user) return <div>Loading user data...</div>;
  if (!postsState || postsState.length === 0) return <div>No posts available</div>;

  // if (params.id) {
  //   postsState = postsState.filter((post) => post.userId === params.id);
  // }

  return (
    <div className="Posts">
      {filteredPosts.map((post) => (
        <Post key={post._id} data={post} onDelete={handlePostDelete} />
      ))}
    </div>
  );
  
};

export default Posts;

