import { configureStore } from "@reduxjs/toolkit";
import { TopStoriesSlice } from "../slices/TopStoriesSlice";
import { RandomStoriesSlice } from "../slices/RandomStoriesSlice";

/**
 * This is part of the redux setup
 */
export const Store = configureStore({
  reducer: {
    TopStories: TopStoriesSlice.reducer,
    RandomStories: RandomStoriesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;

export type AppDispatch = typeof Store.dispatch;
