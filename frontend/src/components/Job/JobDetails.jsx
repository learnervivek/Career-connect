import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main";
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaFileAlt, FaCalendar, FaDollarSign, FaTrash, FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import { formatDate } from "../../utils/formatDate";
import { API_ENDPOINTS } from "../../config/api";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(false);
  const navigateTo = useNavigate();

  const { isAuthorized, user } = useContext(Context);

  useEffect(() => {
    axios
      .get(API_ENDPOINTS.getJob(id), {
        withCredentials: true,
      })
      .then((res) => {
        setJob(res.data.job);
      })
      .catch((error) => {
        navigateTo("/notfound");
      });
  }, []);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this job? This action cannot be undone.")) {
      setLoading(true);
      try {
        await axios.delete(API_ENDPOINTS.deleteJob(id), {
          withCredentials: true,
        });
        toast.success("Job deleted successfully");
        navigateTo("/myjobs");
      } catch (error) {
        toast.error(error.response?.data?.message || "Failed to delete job");
        setLoading(false);
      }
    }
  };

  if (!isAuthorized) {
    navigateTo("/login");
    return null;
  }

  const isJobOwner = user && user._id === job.postedBy;

  return (
    <section className="jobDetailPage">
      <div className="jobDetailContainer">
        {/* Header */}
        <div className="detailHeader">
          <div className="headerContent">
            <div className="headerTop">
              <div className="titleSection">
                <FaBriefcase className="headerIcon" />
                <div>
                  <h1>{job.title}</h1>
                  <p className="company">{job.companyName || "Company"}</p>
                </div>
              </div>
              <span className="badge">{job.category}</span>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="detailsGrid">
          <div className="detailCard">
            <FaMapMarkerAlt className="icon" />
            <div>
              <p className="label">Location</p>
              <p className="value">{job.location || `${job.city}, ${job.country}`}</p>
            </div>
          </div>

          <div className="detailCard">
            <FaDollarSign className="icon" />
            <div>
              <p className="label">Salary</p>
              <p className="value">
                {job.fixedSalary ? job.fixedSalary : `${job.salaryFrom} - ${job.salaryTo}`}
              </p>
            </div>
          </div>

          <div className="detailCard">
            <FaClock className="icon" />
            <div>
              <p className="label">Job Type</p>
              <p className="value">{job.jobType || "Full Time"}</p>
            </div>
          </div>

          <div className="detailCard">
            <FaCalendar className="icon" />
            <div>
              <p className="label">Posted On</p>
              <p className="value">{formatDate(job.jobPostedOn)}</p>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="descriptionSection">
          <h2>
            <FaFileAlt /> Job Description
          </h2>
          <div className="descriptionContent" dangerouslySetInnerHTML={{ __html: job.description }} />
        </div>

        {/* Apply Button */}
        {user && user.role === "Employer" ? (
          <div className="employerActions">
            {isJobOwner ? (
              <div className="actionButtons">
                <Link to={`/job/me`} className="editBtn">
                  <FaEdit /> Edit Job
                </Link>
                <button
                  onClick={handleDelete}
                  disabled={loading}
                  className="deleteBtn"
                >
                  <FaTrash /> {loading ? "Deleting..." : "Delete Job"}
                </button>
              </div>
            ) : (
              <div className="employerMessage">
                <p>You are signed in as an Employer</p>
              </div>
            )}
          </div>
        ) : (
          <Link to={`/application/${job._id}`} className="applyBtn">
            Apply Now
          </Link>
        )}
      </div>
    </section>
  );
};

export default JobDetails;
