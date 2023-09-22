import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux/Store";
import { mergedResponse } from "../api/Story";

/**
 * This slice is part of redux
 * This slice is responsible for the stories and their ids
 * But it only contains the ids and the stories of the 10 random stories that have been picked
 * It has 4 reducers to ensure that it works
 */
export const RandomStoriesSlice = createSlice({
  name: "RandomStories",
  initialState: {
    randomStories: [] as mergedResponse[],
    randomStoriesId: [] as number[],
  },
  reducers: {
    addRandomStory: (state, action) => {
      state.randomStories.push(action.payload);
    },
    resetRandomStories: (state) => {
      state.randomStories = [];
    },
    replaceRandomStories: (state, action) => {
      state.randomStories = action.payload;
    },
    replaceRandomStoriesId: (state, action) => {
      state.randomStoriesId = action.payload;
    },
  },
});

export const {
  addRandomStory,
  resetRandomStories,
  replaceRandomStories,
  replaceRandomStoriesId,
} = RandomStoriesSlice.actions;

export const selectRandomStories = (state: RootState) =>
  state.RandomStories.randomStories;
export const selectRandomStoriesId = (state: RootState) =>
  state.RandomStories.randomStoriesId;

export default RandomStoriesSlice.reducer;
