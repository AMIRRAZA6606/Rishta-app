import React, { useState } from 'react';
import homeImg from "../../assets/images/homeImg.png";
import "./home.css";
import CommonSelect from '../../components/CommonSelect';
import CommonInput from '../../components/CommonInput';
import bestMatches from "../../assets/images/best-matches.png"
import privacy from "../../assets/images/privacy.png"
import verifiedProfile from "../../assets/images/verified-profile.png"
const genderOpts = [
    { value: '', label: 'Select' },

    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
];

const ageOpts = [
    { value: '', label: 'Select' },

    { value: 18, label: 18 },
    { value: 19, label: 19 },
    { value: 20, label: 20 },
];
const religionOpts = [
    { value: '', label: 'Select' },
    { value: 'hindu', label: 'Hindu' },
    { value: 'muslim', label: 'Muslim' },
    { value: 'christian', label: 'Christian' },
    { value: 'sikh', label: 'Sikh' },
    { value: 'jain', label: 'Jain' },
    { value: 'buddhist', label: 'Buddhist' },
    { value: 'parsi', label: 'Parsi' },
    { value: 'other', label: 'Other' },

];
const toungeOpts = [
    { value: '', label: 'Select' },
    { value: 'punjabi', label: 'Punjabi' },
    { value: "sindhi", label: "Singhi" },
    { value: 'hindi', label: 'Hindi' },
    { value: 'english', label: 'English' },
    { value: 'bengali', label: 'Bengali' },
    { value: 'gujarati', label: 'Gujarati' },
    { value: 'tamil', label: 'Tamil' },
    { value: 'telugu', label: 'Telugu' },
    { value: 'malayalam', label: 'Malayalam' },
    { value: 'marathi', label: 'Marathi' },
    { value: 'kannada', label: 'Kannada' },
];
const heightOpts = [
    { value: '', label: 'Select' },
    { value: "5'6", label: "5'6" },
    { value: "5'7", label: "5'7" },
    { value: "5'8", label: "5'8" },
    { value: "5'9", label: "5'9" },
    { value: "5'10", label: "5'10" },
    { value: "5'11", label: "5'11" },
];

const livingOpts = [
    { value: '', label: 'Select' },
    { value: "pakistan", label: "Pakistan" },
    { value: "india", label: "India" },
    { value: "china", label: "China" },
    { value: "bangladesh", label: "Bangladesh" },
    { value: "nepal", label: "Nepal" },

];



const Home = () => {

    const [selectedGender, setSelectedGender] = useState(null);

    const [selectedAgeStart, setSelectedAgeStart] = useState(null);

    const [selectedAgeEnd, setSelectedAgeEnd] = useState(null);

    return (
        <div className='home-main-con'>
            <img className='main-bg-img' src={homeImg} alt="" />
            <div className='sub-con'>

                <div className='heading-con'>
                    <span className='child-1'>Trusted Matrimony</span>
                    <span className='child-2'>&</span>
                    <br />
                    <span className='child-3'>Matchmaking Service</span>
                </div>
                <div className='looking-for-div'>
                    <span className='ch-1'>I’M LOOKING FOR A</span>
                    <span className='ch-2'>aged</span>
                </div>
                <div className='select-con'>


                    <CommonSelect options={genderOpts} handleChange={setSelectedGender}
                        className="gender-select"
                    />
                    <CommonInput options={ageOpts} handleChange={setSelectedAgeStart}
                        className="age-select"
                    />

                    <CommonInput options={ageOpts} handleChange={setSelectedAgeEnd}
                        className="age-select"
                    />
                </div>
                <div className='select-con-1'>

                    <div className="select-1">
                        <span className='input-label' >Religion</span>
                        <CommonSelect options={religionOpts}
                            handleChange={setSelectedGender}
                            className="religion-select"
                        />
                    </div>

                    <div className="select-2">
                        <span className='input-label'>And living in</span>
                        <CommonSelect options={livingOpts} handleChange={setSelectedAgeEnd}
                            className="living-select"
                        />
                    </div>

                    <div className="select-3">
                        <span className='input-label'>Tounge</span>
                        <CommonSelect options={toungeOpts} handleChange={setSelectedGender}
                            className="tounge-select"
                        />
                    </div>
                </div>

                <div className='select-con-1'>

                    <div className="select-1">
                        <span className='input-label' >Cast</span>
                        <CommonSelect options={religionOpts}
                            handleChange={setSelectedGender}
                            className="religion-select"
                        />
                    </div>

                    <div className="select-2">
                        <span className='input-label'>Coummunity</span>
                        <CommonSelect options={livingOpts} handleChange={setSelectedAgeEnd}
                            className="living-select"
                        />
                    </div>

                    <div className="select-3">
                        <span className='input-label'>Height</span>
                        <CommonSelect options={heightOpts} handleChange={setSelectedGender}
                            className="height-select"
                        />
                    </div>
                </div>
            </div>
            <button className='lets-begin-btn'>Let's Begin
            </button>
            <div className='trust-by-million-con'>
                <div className='heading'>
                    Trust By Millions

                </div>
                <div className='facility-con'>
                    <div className='best-match'>
                        <img src={bestMatches} alt="" />
                        <span>Best Matches</span>
                    </div>
                    <div className='best-match'>
                        <img src={verifiedProfile} alt="" />
                        <span>Verified Profile</span>
                    </div>
                    <div className='best-match'>
                        <img src={privacy} alt="" />
                        <span>100% Privacy</span>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home