import React from "react";
import Button from "@mui/material/Button";
import SquareBoi from "../components/SquareBoi";
import { selectRandomStories } from "../slices/RandomStoriesSlice";
import useGetRandomStoryIds from "../hooks/GetNewRandomStoryIds";
import { useAppSelector } from "../hooks/ReduxHooks";
import useFetchStories from "../hooks/FetchStories";

/**
 * This is the page in the body which is responsible for displaying the 10 random stories
 * This page also incldues a refresh button
 * 
 * Current issue:
 *  Pressing the refresh button multiple times before the stories show up
 */
const Home = () => {
  const { getRandomStoryIds } = useGetRandomStoryIds();
  const { fetchStories } = useFetchStories();
  const stories = useAppSelector(selectRandomStories);

  return (
    <div className="flex h-full text-center justify-center items-center flex-wrap">
      <div className="w-full">
        <Button
          variant="contained"
          onClick={() => {
            getRandomStoryIds();
            fetchStories();
          }}
        >
          Refresh
        </Button>
      </div>
      <div className="grid grid-cols-3 h-full overflow-x-auto py-10 my-10">
        {stories.map((element) => (
          <div key={element.storyId}>
            {" "}
            {<SquareBoi squareBoiObject={element} />}{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
