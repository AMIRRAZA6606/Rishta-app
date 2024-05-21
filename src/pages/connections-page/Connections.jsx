import React from 'react'
import connectionImg from "../../assets/images/connectionImg.png"
import connectionImg2 from "../../assets/images/connectionImg2.png"
import connectSticker from "../../assets/images/connectSticker.png"
import paginationIcon from "../../assets/icons/paginationIcon.png"
const connections = [

    {
        id: 1,
        img: connectionImg,
        language: 'Urdu',
        name: "Hifsa R",
        address: "Lahore,Punjab",
        status: "Online",
        lastSeen: "1h",
        age: "23",
        height: "5'3",
        marriedStatus: "Never Married",
        education: "Bachelor's Degree in Software Enineering",
        occupation: "Software Engineer",
        religion: "Muslim",
        caste: "Sunni",
        desc: "I am here to marry a financially stable man. Who directly asks for marriage and do efforts. Gives princess treatment. A man who communicate... more"

    },
    {
        id: 2,
        img: connectionImg2,
        name: "Hifsa R",
        language: 'Urdu',

        address: "Lahore,Punjab",
        status: "Online",
        lastSeen: "12h",
        age: "23",
        height: "5'3",
        marriedStatus: "Never Married",
        education: "Bachelor's Degree in Software Enineering",
        occupation: "Not Working",
        religion: "Muslim",
        caste: "Sunni",
        desc: "I am here to marry a financially stable man. Who directly asks for marriage and do efforts. Gives princess treatment. A man who communicate... more",

    }, {
        id: 3,
        img: connectionImg2,
        name: "Hifsa R",
        language: 'Urdu',

        address: "Lahore,Punjab",
        status: "Online",
        lastSeen: "12h",
        age: "23",
        height: "5'3",
        marriedStatus: "Never Married",
        education: "Bachelor's Degree in Software Enineering",
        occupation: "Not Working",
        religion: "Muslim",
        caste: "Sunni",
        desc: "I am here to marry a financially stable man. Who directly asks for marriage and do efforts. Gives princess treatment. A man who communicate... more",

    }, {
        id: 4,
        img: connectionImg2,
        name: "Hifsa R",
        language: 'Urdu',

        address: "Lahore,Punjab",
        status: "Online",
        lastSeen: "12h",
        age: "23",
        height: "5'3",
        marriedStatus: "Never Married",
        education: "Bachelor's Degree in Software Enineering",
        occupation: "Not Working",
        religion: "Muslim",
        caste: "Sunni",
        desc: "I am here to marry a financially stable man. Who directly asks for marriage and do efforts. Gives princess treatment. A man who communicate... more",

    },
]
const Connections = () => {

    return (
        <>
            <div className='connection-main-con'>
                <div className="connection-list-con">

                    {
                        connections?.map((connection) => {
                            return (
                                <div className="connection-con">
                                    <div className="connection-img">
                                        <img src={connection.img} alt="" />
                                    </div>
                                    <div className="connection-info">
                                        <p>{connection.name}</p>
                                        <div className='lastseen-con'>
                                            <p>Online {connection.lastSeen} ago</p>
                                            <p>You & Her</p>
                                        </div>
                                        <div className='border-1'></div>
                                        <div className='desc-con-wrapper'>
                                            <div className='info-con'>
                                                <p>{connection.age} yrs, {connection.height}"</p>
                                                <p>{connection.marriedStatus}</p>

                                            </div>
                                            <div className='info-con'>
                                                <p>{connection.language}</p>
                                                <p>{connection.address}</p>

                                            </div>
                                            <div className='info-con'>
                                                <p>{connection.religion}, {connection.caste}</p>
                                                <p>{connection.occupation}</p>
                                            </div>
                                            <p>{connection.education}</p>

                                        </div>
                                        <div className="desc-con">
                                            <p>{connection.desc}</p>

                                        </div>

                                    </div>
                                    <div className='connection-status-con'>
                                        <p>Like this profile?</p>
                                        <img src={connectSticker} alt="" />
                                        <p>Connect Now</p>
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>

            </div>
            <div className='pagination'>
                <div className='active'>1</div>
                <div>2</div>
                <div>3</div>
                <div><img src={paginationIcon} alt="" /></div>
            </div>
        </>


    )
}

export default Connections