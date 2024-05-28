import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import homeImg from "../../assets/images/homeImg.png";
import "./home.css";
import CommonSelect from "../../components/CommonSelect";


const genderOpts = [
  { value: "", label: "Select" },
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const startAgeOpts = [
  { value: "", label: "Select" },
  { value: 20, label: 20 },
  { value: 21, label: 21 },
  { value: 22, label: 22 },
  { value: 23, label: 23 },
  { value: 24, label: 24 },
  { value: 25, label: 25 },
  { value: 26, label: 26 },
  { value: 27, label: 27 },
  { value: 28, label: 28 },
  { value: 29, label: 29 },
  { value: 30, label: 30 },
  { value: 31, label: 31 },
  { value: 32, label: 32 },
  { value: 33, label: 33 },
  { value: 34, label: 34 },
  { value: 35, label: 35 },
  { value: 36, label: 36 },
  { value: 37, label: 37 },
  { value: 38, label: 38 },
  { value: 39, label: 39 },
  { value: 40, label: 40 },
];

const endAgeOpts = [
  { value: "", label: "Select" },
  { value: 20, label: 20 },
  { value: 21, label: 21 },
  { value: 22, label: 22 },
  { value: 23, label: 23 },
  { value: 24, label: 24 },
  { value: 25, label: 25 },
  { value: 26, label: 26 },
  { value: 27, label: 27 },
  { value: 28, label: 28 },
  { value: 29, label: 29 },
  { value: 30, label: 30 },
  { value: 31, label: 31 },
  { value: 32, label: 32 },
  { value: 33, label: 33 },
  { value: 34, label: 34 },
  { value: 35, label: 35 },
  { value: 36, label: 36 },
  { value: 37, label: 37 },
  { value: 38, label: 38 },
  { value: 39, label: 39 },
  { value: 40, label: 40 },
];

const religionOpts = [
  { value: "", label: "Select" },
  { value: "islam", label: "Islam" },
  { value: "hinduism", label: "Hinduism" },
  { value: "christianity", label: "Christianity" },
  { value: "sikhism", label: "Sikhism" },
  { value: "jainism", label: "Jainism" },
  { value: "buddhist", label: "Buddhist" },
];

const tongueOpts = [
  { value: "", label: "Select" },
  { value: "punjabi", label: "Punjabi" },
  { value: "sindhi", label: "Sindhi" },
  { value: "hindi", label: "Hindi" },
  { value: "urdu", label: "Urdu" },
  { value: "english", label: "English" },
];

const heightOpts = [
  { value: "", label: "Select" },
  { value: "5'6", label: "5'6" },
  { value: "5'7", label: "5'7" },
  { value: "5'8", label: "5'8" },
  { value: "5'9", label: "5'9" },
  { value: "5'10", label: "5'10" },
  { value: "5'11", label: "5'11" },
  { value: "6'0", label: "6'0" },
  { value: "6'1", label: "6'1" },
  { value: "6'2", label: "6'2" },
  { value: "6'3", label: "6'3" },
  { value: "6'4", label: "6'4" },
  { value: "6'5", label: "6'5" },
  { value: "6'6", label: "6'6" },
  { value: "6'7", label: "6'7" },
  { value: "6'8", label: "6'8" },
  { value: "6'9", label: "6'9" },
  { value: "7'0", label: "7'0" },
];

const countryOpts = [
  { value: "", label: "Select" },
  { value: "pakistan", label: "Pakistan" },
  { value: "india", label: "India" },
  { value: "china", label: "China" },
  { value: "bangladesh", label: "Bangladesh" },
  { value: "nepal", label: "Nepal" },
];

const castOpts = [
  { value: "", label: "Select" },
  { value: "sayyid", label: "Sayyid" },
  { value: "rajput", label: "Rajput" },
  { value: "sheikh", label: "Sheikh" },
  { value: "pathan", label: "Pathan" },
  { value: "moguls", label: "Moguls" },
];

const sectOpts = [
  { value: "", label: "Select" },
  { value: "sunni", label: "Sunni" },
  { value: "wahabi", label: "Wahabi" },
  { value: "deobandi", label: "Deoandi" },
  { value: "shia", label: "Shia" },
];

const Home = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedAgeStart, setSelectedAgeStart] = useState("");
  const [selectedAgeEnd, setSelectedAgeEnd] = useState("");
  const [selectedReligion, setSelectedReligion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedTongue, setSelectedTongue] = useState("");
  const [selectedCast, setSelectedCast] = useState("");
  const [selectedSect, setSelectedSect] = useState("");
  const [selectedHeight, setSelectedHeight] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!selectedGender) newErrors.gender = "Gender is required";
    if (!selectedAgeStart) newErrors.ageStart = "Start Age is required";
    if (!selectedAgeEnd) newErrors.ageEnd = "End Age is required";
    if (!selectedReligion) newErrors.religion = "Religion is required";
    if (!selectedCountry) newErrors.country = "Country is required";
    if (!selectedTongue) newErrors.tongue = "Tongue is required";
    if (!selectedCast) newErrors.cast = "Cast is required";
    if (!selectedSect) newErrors.sect = "Sect is required";
    if (!selectedHeight) newErrors.height = "Height is required";
    return newErrors;
  };

  useEffect(() => {
    localStorage.removeItem("filters");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        const data = {
          gender: selectedGender,
          startAge: selectedAgeStart,
          endAge: selectedAgeEnd,
          religion: selectedReligion,
          country: selectedCountry,
          tongue: selectedTongue,
          cast: selectedCast,
          sect: selectedSect,
          height: selectedHeight,
          page: 1,
          pageSize: 7,
        };

        localStorage.setItem("filters", JSON.stringify(data));
        navigate("/profiles");
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  return (
    <div className="home-main-con">
      <img className="main-bg-img" src={homeImg} alt="" />
      <div className="sub-con">
        <div className="heading-con">
          <span className="child-1">Trusted Matrimony</span>
          <span className="child-2">&</span>
          <br />
          <span className="child-3">Matchmaking Service</span>
        </div>
        <div className="looking-for-div">
          <span className="ch-1">I’M LOOKING FOR A</span>
          <span className="ch-2">aged</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="select-con">
            <div className="select-1">
              <span className="input-label">Gender</span>
              <CommonSelect
                options={genderOpts}
                handleChange={setSelectedGender}
                className="gender-select"
              />
              {errors.gender && <div className="error">{errors.gender}</div>}
            </div>
            <div className="select-1">
              <span className="input-label">Start Age</span>
              <CommonSelect
                options={startAgeOpts}
                handleChange={setSelectedAgeStart}
                className="age-select"
              />
              {errors.ageStart && (
                <div className="error">{errors.ageStart}</div>
              )}
            </div>
            <div className="select-1">
              <span className="input-label">End Age</span>
              <CommonSelect
                options={endAgeOpts}
                handleChange={setSelectedAgeEnd}
                className="age-select"
              />
              {errors.ageEnd && <div className="error">{errors.ageEnd}</div>}
            </div>
          </div>
          <div className="select-con-1">
            <div className="select-1">
              <span className="input-label">Religion</span>
              <CommonSelect
                options={religionOpts}
                handleChange={setSelectedReligion}
                className="religion-select"
              />
              {errors.religion && (
                <div className="error">{errors.religion}</div>
              )}
            </div>
            <div className="select-2">
              <span className="input-label">Country</span>
              <CommonSelect
                options={countryOpts}
                handleChange={setSelectedCountry}
                className="living-select"
              />
              {errors.country && <div className="error">{errors.country}</div>}
            </div>
            <div className="select-3">
              <span className="input-label">Tongue</span>
              <CommonSelect
                options={tongueOpts}
                handleChange={setSelectedTongue}
                className="tongue-select"
              />
              {errors.tongue && <div className="error">{errors.tongue}</div>}
            </div>
          </div>
          <div className="select-con-1">
            <div className="select-1">
              <span className="input-label">Cast</span>
              <CommonSelect
                options={castOpts}
                handleChange={setSelectedCast}
                className="cast-select"
              />
              {errors.cast && <div className="error">{errors.cast}</div>}
            </div>
            <div className="select-2">
              <span className="input-label">Sect</span>
              <CommonSelect
                options={sectOpts}
                handleChange={setSelectedSect}
                className="sect-select"
              />
              {errors.sect && <div className="error">{errors.sect}</div>}
            </div>
            <div className="select-3">
              <span className="input-label">Height</span>
              <CommonSelect
                options={heightOpts}
                handleChange={setSelectedHeight}
                className="height-select"
              />
              {errors.height && <div className="error">{errors.height}</div>}
            </div>
          </div>
          <button type="submit" className="lets-begin-btn">
            Let's Begin
          </button>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Home;
