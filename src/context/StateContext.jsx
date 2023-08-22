import React, { createContext, useState } from "react";

import Image1 from "../assets/Blogs/Image1.png";
import Image2 from "../assets/Blogs/Image2.png";
import Image3 from "../assets/Blogs/Image3.png";
import Image4 from "../assets/Blogs/Image4.png";
import Image5 from "../assets/Blogs/Image5.png";
import Image6 from "../assets/Blogs/Image6.png";

const StateContext = createContext();
export default StateContext;

export const StateProvider = ({ children }) => {
  const [activeTag, setActiveTag] = useState("All");

  const blogData = [
    {
      id: 1,
      tagName: "Engineering",
      img: Image1,
      time: "5 min read",
      title: "What is a Decentralized Autonomous Organization ?",
      short_content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id: 2,
      tagName: "Blockchain",
      img: Image2,
      time: "5 min read",
      title: "What is a Decentralized Autonomous Organization ?",
      short_content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id:3,
      tagName: "Announcements",
      img: Image3,
      time: "5 min read",
      title: "What is a Decentralized Autonomous Organization ?",
      short_content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id:4,
      tagName: "People",
      img: Image4,
      time: "5 min read",
      title: "What is a Decentralized Autonomous Organization ?",
      short_content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id:5,
      tagName: "NFT",
      img: Image5,
      time: "5 min read",
      title: "What is a Decentralized Autonomous Organization ?",
      short_content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id: 6,
      tagName: "Engineering",
      img: Image6,
      time: "5 min read",
      title: "What is a Decentralized Autonomous Organization ?",
      short_content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id:7,
      tagName: "Engineering",
      img: Image1,
      time: "5 min read",
      title: "What is a Decentralized Autonomous Organization ?",
      short_content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id: 8,
      tagName: "Blockchain",
      img: Image2,
      time: "5 min read",
      title: "What is a Decentralized Autonomous Organization ?",
      short_content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id: 9,
      tagName: "Announcements",
      img: Image3,
      time: "5 min read",
      title: "What is a Decentralized Autonomous Organization ?",
      short_content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id: 10,
      tagName: "People",
      img: Image4,
      time: "5 min read",
      title: "What is a Decentralized Autonomous Organization ?",
      short_content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id: 11,
      tagName: "Engineering",
      img: Image5,
      time: "5 min read",
      title: "What is a Decentralized Autonomous Organization ?",
      short_content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id: 12,
      tagName: "Engineering",
      img: Image6,
      time: "5 min read",
      title: "What is a Decentralized Autonomous Organization ?",
      short_content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id: 13,
      tagName: "Engineering",
      img: Image6,
      time: "5 min read",
      title: "What is a Decentralized Autonomous Organization ?",
      short_content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id: 14,
      tagName: "Engineering",
      img: Image6,
      time: "5 min read",
      title: "What is a Decentralized Autonomous Organization ?",
      short_content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id: 15,
      tagName: "Engineering",
      img: Image6,
      time: "5 min read",
      title: "What is a Decentralized Autonomous Organization ?",
      short_content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
  ];

  const [openModal, setOpenModal] = useState(false)


  const contextData = {
    activeTag,
    setActiveTag,
    blogData,
    openModal,
    setOpenModal,
  };

  return (
    <StateContext.Provider value={contextData}>
      {children}
    </StateContext.Provider>
  );
};
