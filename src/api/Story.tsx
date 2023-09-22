import axios from "axios";
import React from "react";

interface StoryInfo {
  storyId: number;
}

export interface mergedResponse {
  storyId: number;
  storyScore: number;
  storyTitle: string;
  storyUrl: string;
  storyTimestamp: number;
  authorId: string;
  authorKarma: number;
  authorAmountPosted: number;
  authorCreated: number;
}

/**
 * This function fetches the story given its id
 * Then from the response of the story api it gets the user
 * and fetches the user information
 * then it merges the relevant information and returns it to the caller
 **/

const Story = async (props: StoryInfo): Promise<mergedResponse> => {
  let storyInformation: any;
  let userInformation: any;
  await axios
    .get(
      "https://hacker-news.firebaseio.com/v0/item/" + props.storyId + ".json",
    )
    .then((response) => {
      storyInformation = response.data;
    })
    .catch((err) => {
      console.error(err);
      return null;
    });

  const userName = storyInformation.by;

  await axios
    .get("https://hacker-news.firebaseio.com/v0/user/" + userName + ".json")
    .then((response) => {
      userInformation = response.data;
    })
    .catch((err) => {
      console.error(err);
      return null;
    });

  const result: mergedResponse = {
    storyId: storyInformation.id,
    storyScore: storyInformation.score,
    storyTitle: storyInformation.title,
    storyUrl: storyInformation.url,
    storyTimestamp: storyInformation.time,
    authorId: userInformation.id,
    authorKarma: userInformation.karma,
    authorAmountPosted: userInformation.submitted.length,
    authorCreated: userInformation.created,
  };

  return result;
};

export default Story;
