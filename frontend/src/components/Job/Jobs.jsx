import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Context } from "../../main";
import { FaBriefcase, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Get search parameters from URL
    const search = searchParams.get("search") || "";
    const loc = searchParams.get("location") || "";
    setSearchTerm(search);
    setLocation(loc);
  }, [searchParams]);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:4000/api/v1/job/getall", {
          withCredentials: true,
        })
        .then((res) => {
          setJobs(res.data.jobs || []);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const filtered = jobs.filter((job) => {
      const matchesSearch = searchTerm === "" ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesLocation = location === "" ||
        job.city.toLowerCase().includes(location.toLowerCase()) ||
        job.country.toLowerCase().includes(location.toLowerCase());

      return matchesSearch && matchesLocation;
    });
    setFilteredJobs(filtered);
  }, [searchTerm, location, jobs]);

  if (!isAuthorized) {
    navigateTo("/");
  }

  return (
    <section className="jobsPage">
      {/* Jobs Container */}
      <div className="container">
        <div className="jobsInfo">
          <p className="jobCount">Showing <span>{filteredJobs.length}</span> jobs</p>
        </div>

        <div className="jobsGrid">
          {filteredJobs && filteredJobs.length > 0 ? (
            filteredJobs.map((element) => {
              return (
                <Link
                  to={`/job/${element._id}`}
                  key={element._id}
                  className="jobCard"
                >
                  <div className="jobCardHeader">
                    <div className="jobTitle">
                      <FaBriefcase className="jobIcon" />
                      <div>
                        <h3>{element.title}</h3>
                        <p className="company">{element.companyName || "Company"}</p>
                      </div>
                    </div>
                    <span className="badge">{element.category}</span>
                  </div>

                  <div className="jobCardBody">
                    <div className="jobDetail">
                      <FaMapMarkerAlt className="icon" />
                      <p>{element.country}</p>
                    </div>
                    <div className="jobDetail">
                      <FaClock className="icon" />
                      <p>{element.jobType || "Full Time"}</p>
                    </div>
                  </div>

                  <div className="jobCardFooter">
                    <span className="salary">{element.salary || "Competitive"}</span>
                    <span className="viewBtn">View Details →</span>
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="noJobs">
              <p>No jobs found matching your search</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
