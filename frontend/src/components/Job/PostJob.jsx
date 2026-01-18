import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main";
import { FaBriefcase } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { API_ENDPOINTS } from "../../config/api";

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [fixedSalary, setFixedSalary] = useState("");
  const [salaryType, setSalaryType] = useState("default");

  const { isAuthorized, user } = useContext(Context);

  const handleJobPost = async (e) => {
    e.preventDefault();
    if (salaryType === "Fixed Salary") {
      setSalaryFrom("");
      setSalaryFrom("");
    } else if (salaryType === "Ranged Salary") {
      setFixedSalary("");
    } else {
      setSalaryFrom("");
      setSalaryTo("");
      setFixedSalary("");
    }
    await axios
      .post(
        API_ENDPOINTS.postJob,
        fixedSalary.length >= 4
          ? {
            title,
            companyName,
            description,
            category,
            country,
            city,
            location,
            fixedSalary,
          }
          : {
            title,
            companyName,
            description,
            category,
            country,
            city,
            location,
            salaryFrom,
            salaryTo,
          },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate();
  if (!isAuthorized || (user && user.role !== "Employer")) {
    navigateTo("/");
  }

  return (
    <section className="postJobPage">
      <div className="postJobContainer">
        <div className="formHeader">
          <h1>
            <FaBriefcase style={{ marginRight: "12px" }} />
            Post a New Job
          </h1>
          <p>Fill in the details below to create a new job posting</p>
        </div>

        <form className="jobForm" onSubmit={handleJobPost}>
          {/* Job Information Section */}
          <section className="formSection">
            <h2 className="sectionTitle">Job Information</h2>
            <div className="formGroup">
              <label htmlFor="jobTitle">Job Title *</label>
              <input
                id="jobTitle"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter job title"
              />
            </div>

            <div className="formGroup">
              <label htmlFor="companyName">Company Name *</label>
              <input
                id="companyName"
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter company name"
              />
            </div>

            <div className="formGroup">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="Graphics & Design">Graphics & Design</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Frontend Web Development">Frontend Web Development</option>
                <option value="Business Development Executive">Business Development Executive</option>
                <option value="Account & Finance">Account & Finance</option>
                <option value="Artificial Intelligence">Artificial Intelligence</option>
                <option value="Video Animation">Video Animation</option>
                <option value="MEAN Stack Development">MEAN STACK Development</option>
                <option value="MERN Stack Development">MERN STACK Development</option>
                <option value="Data Entry Operator">Data Entry Operator</option>
              </select>
            </div>
          </section>

          {/* Location Details Section */}
          <section className="formSection">
            <h2 className="sectionTitle">Location Details</h2>
            <div className="formRow">
              <div className="formGroup">
                <label htmlFor="country">Country *</label>
                <input
                  id="country"
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Enter country"
                />
              </div>
              <div className="formGroup">
                <label htmlFor="city">City *</label>
                <input
                  id="city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter city"
                />
              </div>
            </div>

            <div className="formGroup">
              <label htmlFor="location">Location Address</label>
              <input
                id="location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location address"
              />
            </div>
          </section>

          {/* Salary Information Section */}
          <section className="formSection">
            <h2 className="sectionTitle">Salary Information</h2>
            <div className="formGroup">
              <label htmlFor="salaryType">Salary Type *</label>
              <select
                id="salaryType"
                value={salaryType}
                onChange={(e) => setSalaryType(e.target.value)}
              >
                <option value="default">Select Salary Type</option>
                <option value="Fixed Salary">Fixed Salary</option>
                <option value="Ranged Salary">Ranged Salary</option>
              </select>
            </div>

            <div className="formGroup">
              {salaryType === "default" ? (
                <p className="salaryWarning">Please select a salary type *</p>
              ) : salaryType === "Fixed Salary" ? (
                <div>
                  <label htmlFor="fixedSalary">Fixed Salary *</label>
                  <input
                    id="fixedSalary"
                    type="number"
                    placeholder="Enter fixed salary"
                    value={fixedSalary}
                    onChange={(e) => setFixedSalary(e.target.value)}
                  />
                </div>
              ) : (
                <div className="formRow">
                  <div>
                    <label htmlFor="salaryFrom">Salary From *</label>
                    <input
                      id="salaryFrom"
                      type="number"
                      placeholder="Minimum salary"
                      value={salaryFrom}
                      onChange={(e) => setSalaryFrom(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="salaryTo">Salary To *</label>
                    <input
                      id="salaryTo"
                      type="number"
                      placeholder="Maximum salary"
                      value={salaryTo}
                      onChange={(e) => setSalaryTo(e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Job Description Section */}
          <section className="formSection">
            <h2 className="sectionTitle">Job Description</h2>
            <div className="formGroup">
              <label htmlFor="description">Description *</label>
              <ReactQuill
                theme="snow"
                value={description}
                onChange={setDescription}
                placeholder="Enter detailed job description, responsibilities, and requirements..."
                modules={{
                  toolbar: [
                    [{ header: [1, 2, 3, false] }],
                    ["bold", "italic", "underline", "strike"],
                    ["blockquote", "code-block"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    [{ indent: "-1" }, { indent: "+1" }],
                    ["link"],
                    ["clean"],
                  ],
                }}
                formats={[
                  "header",
                  "bold",
                  "italic",
                  "underline",
                  "strike",
                  "blockquote",
                  "code-block",
                  "list",
                  "bullet",
                  "indent",
                  "link",
                ]}
              />
            </div>
          </section>

          <button type="submit" className="submitBtn">
            Create Job Posting
          </button>
        </form>
      </div>
    </section>
  );
};

export default PostJob;
