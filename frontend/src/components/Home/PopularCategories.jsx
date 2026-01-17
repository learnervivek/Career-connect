import React from "react";
import {
  MdOutlineDesignServices,
  MdOutlineWebhook,
  MdAccountBalance,
  MdOutlineAnimation,
} from "react-icons/md";
import { TbAppsFilled } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Graphics & Design",
      subTitle: "305 Open Positions",
      icon: <MdOutlineDesignServices />,
    },
    {
      id: 2,
      title: "Mobile App Development",
      subTitle: "500 Open Positions",
      icon: <TbAppsFilled />,
    },
    {
      id: 3,
      title: "Frontend Web Development",
      subTitle: "200 Open Positions",
      icon: <MdOutlineWebhook />,
    },
    {
      id: 4,
      title: "MERN STACK Development",
      subTitle: "1000+ Open Positions",
      icon: <FaReact />,
    },
    {
      id: 5,
      title: "Account & Finance",
      subTitle: "150 Open Positions",
      icon: <MdAccountBalance />,
    },
    {
      id: 6,
      title: "Artificial Intelligence",
      subTitle: "867 Open Positions",
      icon: <GiArtificialIntelligence />,
    },
    {
      id: 7,
      title: "Video Animation",
      subTitle: "50 Open Positions",
      icon: <MdOutlineAnimation />,
    },
    {
      id: 8,
      title: "Game Development",
      subTitle: "80 Open Positions",
      icon: <IoGameController />,
    },
  ];

  return (
    <div className="categoriesSection">
      <div className="categoriesContainer">
        <div className="categoriesHeader">
          <h2>Popular Job Categories</h2>
          <p>Explore opportunities across various industries</p>
        </div>

        <div className="categoriesGrid">
          {categories.map((element) => {
            return (
              <div className="categoryCard" key={element.id}>
                <div className="categoryIcon">{element.icon}</div>
                <h4>{element.title}</h4>
                <p className="jobCount">{element.subTitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
