import React, { useState } from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus, FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Jobs",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "91220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];

  const handleSearch = () => {
    if (searchTerm || location) {
      navigate(`/job/getall?search=${searchTerm}&location=${location}`);
    }
  };

  return (
    <>
      <div className="heroSection">
        <div className="heroBackground">
          <div className="heroContent">
            <div className="container">
              <div className="heroTitle">
                <h1>Find Your Dream Job Today</h1>
                <p>Discover the perfect job opportunity that matches your skills and ambitions</p>
              </div>

              <div className="searchContainer">
                <div className="searchBox">
                  <div className="searchInput">
                    <FaSearch className="searchIcon" />
                    <input
                      type="text"
                      placeholder="Job title, keywords..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                    />
                  </div>

                  <div className="locationInput">
                    <FaMapMarkerAlt className="locationIcon" />
                    <input
                      type="text"
                      placeholder="Location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                    />
                  </div>

                  <button className="searchBtn" onClick={handleSearch}>
                    <FaSearch /> Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="statsContainer">
          <div className="container">
            <div className="statsGrid">
              {details.map((element) => {
                return (
                  <div className="statCard" key={element.id}>
                    <div className="statIcon">{element.icon}</div>
                    <div className="statContent">
                      <h4>{element.title}</h4>
                      <p>{element.subTitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
