import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { mergedResponse } from "../api/Story";

interface SquareBoiInformation {
  squareBoiObject: mergedResponse;
}

/**
 * This is a component which is responsible for building the square of each news article
 */
const SquareBoi = (props: SquareBoiInformation) => {
  console.log(props.squareBoiObject.storyUrl);
  if (!props.squareBoiObject.storyUrl) {
    return <div></div>;
  }
  let storyUrl = new URL(props.squareBoiObject.storyUrl);
  const storyTimestamp = new Date(props.squareBoiObject.storyTimestamp * 1000);
  const authorCreated = new Date(props.squareBoiObject.authorCreated * 1000);

  const tooltipInfo: string =
    "name: " +
    props.squareBoiObject.authorId +
    " score: " +
    props.squareBoiObject.authorKarma +
    " created: " +
    authorCreated.toDateString() +
    " Amount of posts: " +
    props.squareBoiObject.authorAmountPosted;

  return (
    <a href={props.squareBoiObject.storyUrl}>
      <div className="text-left font-serif min-w-fit m-5 hover:bg-gray-200 hover:text-gray-600 p-2 h-full flex flex-wrap">
        <div id="title and url">
          <div>{storyUrl.hostname}</div>
          <div className="font-bold text-xl">
            {props.squareBoiObject.storyTitle}
          </div>
        </div>
        <div className="w-full flex flex-wrap">
          <div className="flex font-bold text-sm w-full">
            <div className="w-1/2">{storyTimestamp.toDateString()}</div>
            <div className="w-1/5 text-center">|</div>
            <div className="w-1/3 text-right">
              {props.squareBoiObject.storyScore} Points
            </div>
          </div>
          <div className="text-white text-sm w-full">
            <Tooltip title={tooltipInfo}>
              <div className="flex bg-gray-500 w-fit px-4 rounded-full">
                by &nbsp;&nbsp;&nbsp;{" "}
                <div className="font-bold">
                  {props.squareBoiObject.authorId}
                </div>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </a>
  );
};

export default SquareBoi;
