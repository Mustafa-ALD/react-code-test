import Story from "../api/Story";
import { Store } from "../redux/Store";
import {
  addRandomStory,
  resetRandomStories,
} from "../slices/RandomStoriesSlice";
import { useAppDispatch } from "./ReduxHooks";

/**
 * This hook takes the ids of 10 random stories (already determined)
 * it then sends each of these ids to the function responsible for fetching the information about the stories
 * then it saves the information for the 10 stories into redux
 */
const useFetchStories = () => {
  const randomStoriesIds = Store.getState().RandomStories.randomStoriesId;
  const dispatch = useAppDispatch();

  const fetchStories = () => {
    dispatch(resetRandomStories());

    randomStoriesIds.forEach((element) => {
      Story({ storyId: element }).then((response) => {
        dispatch(addRandomStory(response));
      });
    });
  };

  return { fetchStories };
};

export default useFetchStories;
