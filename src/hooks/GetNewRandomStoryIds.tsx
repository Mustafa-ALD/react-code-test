import React from "react";
import {
  replaceRandomStoriesId,
  selectRandomStoriesId,
} from "../slices/RandomStoriesSlice";
import { Store } from "../redux/Store";
import { useAppDispatch, useAppSelector } from "./ReduxHooks";

/**
 * This hook is responsible for getting 10 random ids from the top 500 stories
 * The ids are then saved into redux
 * This hook is also responsible for making sure that
 * there are no duplicate ids when it picks the 10 random ids
 */
const useGetRandomStoryIds = () => {
  const idStore = Store.getState().TopStories.value;
  const dispatch = useAppDispatch();

  const getRandomStoryIds = () => {
    let randomListOfIds: number[] = [] as number[];
    let randomIdPosition: number = 0;
    let randomId: number = 0;
    const len: number = idStore.length;

    if (len < 1) {
      return;
    }

    for (let i = 0; i < 10; i++) {
      randomIdPosition = Math.floor(Math.random() * len);
      randomId = idStore[randomIdPosition];
      if (randomListOfIds.includes(randomId)) {
        i--;
      } else {
        randomListOfIds.push(randomId);
      }
    }

    dispatch(replaceRandomStoriesId(randomListOfIds));
  };

  return { getRandomStoryIds };
};

export default useGetRandomStoryIds;
