import axios from 'axios'
const API = axios.create({ baseURL: 'http://https://social-media2-590u.onrender.com:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const getTimelinePosts= (id)=> API.get(`/post/${id}/timeline`);
export const likePost=(id, userId)=>API.put(`/post/${id}/like`, {userId: userId})
export const deletePost=(postId, userId)=>API.delete(`/post/${postId}`, {
  data: { userId }, // Send userId in request body
});


// export const deletePost = async (postId, userId) => {
//   try {
//     const response = await axios.delete(`/post/${postId}`, {
//       data: { userId }, // Send userId in request body
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error deleting post:", error);
//     throw error;
//   }
// };
