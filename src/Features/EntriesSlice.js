import { createSlice } from "redux-starter-kit";
import { getEntries } from "../API";

const initialState = {
  entries: {},
  error: null
};

const entryDetails = createSlice({
  name: "entryDetails",
  initialState: initialState,
  reducers: {
    getEntryDetailsSuccess(state, action) {
      state.entries = action.payload;
      state.error = null;
    },
    getEntryDetailsFailed(state, action) {
      state.entries = {};
      state.error = action.payload;
    }
  }
});

export const {
  getEntryDetailsSuccess,
  getEntryDetailsFailed
} = entryDetails.actions;

export default entryDetails.reducer;

export const fetchEntries = pageUrl => async dispatch => {
  try {
    const entryDetails = await getEntries(pageUrl);
    dispatch(getEntryDetailsSuccess(entryDetails));
  } catch (err) {
    dispatch(getEntryDetailsFailed(err.toString()));
  }
};
