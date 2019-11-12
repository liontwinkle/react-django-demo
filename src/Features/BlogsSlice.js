import { createSlice } from "redux-starter-kit";
import { getBlogs } from "../API";

const initialState = {
  blogs: {},
  error: null
};

const blogDetails = createSlice({
  name: "blogDetails",
  initialState: initialState,
  reducers: {
    getBlogDetailsSuccess(state, action) {
      state.blogs = action.payload;
      state.error = null;
    },
    getBlogDetailsFailed(state, action) {
      state.blogs = {};
      state.error = action.payload;
    }
  }
});

export const {
  getBlogDetailsSuccess,
  getBlogDetailsFailed
} = blogDetails.actions;

export default blogDetails.reducer;

export const fetchBlogs = pageUrl => async dispatch => {
  try {
    const blogDetails = await getBlogs(pageUrl);
    dispatch(getBlogDetailsSuccess(blogDetails));
  } catch (err) {
    dispatch(getBlogDetailsFailed(err.toString()));
  }
};
