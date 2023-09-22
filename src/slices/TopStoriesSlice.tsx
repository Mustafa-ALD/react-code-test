import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux/Store";

/**
 * This slice is responsible for holding the ids of the top 500 stories
 * This is to ensure that we only ask for the top 500 stories once
 */
export const TopStoriesSlice = createSlice({
  name: "TopStories",
  initialState: {
    value: [] as number[],
  },
  reducers: {
    addTopStoriesId: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addTopStoriesId } = TopStoriesSlice.actions;

export const selectTopStories = (state: RootState) => state.TopStories.value;

export default TopStoriesSlice.reducer;
