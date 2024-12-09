"use client";

import Stories from "react-insta-stories";

const StoriesComponent = () => {
  const stories = [
    {
      url: "https://github.com/shadcn.png",
      type: "image",
      duration: 1000,
    },
    {
      url: "https://github.com/shadcn.png",
      type: "image",
      duration: 1000,
    },
    {
      url: "https://github.com/shadcn.png",
      type: "image",
      duration: 1000,
    },
    {
      url: "https://github.com/shadcn.png",
      type: "image",
      duration: 1000,
    },
    {
      url: "https://github.com/shadcn.png",
      type: "image",
      duration: 1000,
    },
  ];

  return (
    <div className="w-full flex-1">
      <Stories stories={stories} width="100%" height="80vh" />
    </div>
  );
};

export default StoriesComponent;
