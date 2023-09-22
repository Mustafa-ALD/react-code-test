import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TopStoriesId from "./api/TopStoriesId";
import { addTopStoriesId } from "./slices/TopStoriesSlice";
import useGetRandomStoryIds from "./hooks/GetNewRandomStoryIds";
import useFetchStories from "./hooks/FetchStories";
import { useAppDispatch } from "./hooks/ReduxHooks";

function App() {
  const dispatch = useAppDispatch();
  const { getRandomStoryIds } = useGetRandomStoryIds();
  const { fetchStories } = useFetchStories();

  useEffect(() => {
    TopStoriesId().then((result) => {
      dispatch(addTopStoriesId(result));
      getRandomStoryIds();
      fetchStories();
    });
  }, []);

  return (
    <div
      id="wrapping everything"
      className="overflow-hidden bg-white h-screen justify-center items-center text-black flex flex-wrap"
    >
      <div
        id="header div"
        className="flex h-10 w-full justify-center items-center text-4xl font-bold font-serif"
      >
        10 Random Hacker News
      </div>
      <div id="body div" className="h-5/6">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
