import axios from "axios";
import React from "react";

/**
 * This function gets the ids of the top 500 stories from hacker news
 */
const TopStoriesId = async (): Promise<number[]> => {
  let result: number[] = [];

  await axios
    .get("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then((response) => {
      result = response.data as number[];
    })
    .catch((err) => {
      console.error(err);
    });
  return result;
};

export default TopStoriesId;
