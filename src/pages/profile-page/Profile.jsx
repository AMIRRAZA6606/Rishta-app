import React from 'react'
import profilePicture from "../../assets/images/profile-picture.png"
const Profile = () => {
    return (
        <div className='profile-main-con'>
            <div className='profile-bg'>
            </div>
            <div className='profile-info'>
                <div className='profile-img'>
                    <img src={profilePicture} alt="" />

                </div>
                <div className='info-con'>

                    <div className='profile-name'>
                        <div className='name'>Alizay shah</div>
                        <div className='age'>23 years</div>
                    </div>
                    <button>Request +</button>
                </div>

            </div>
            <div className='details-con'>

                <div className='profile-detail-1'>
                    <h1>Profile</h1>
                    <p>Alizay Shah is a Pakistani actress. Her performance as Palwasha in Ishq Tamasha earned her the Hum Award for Best Television Sensation. Shah has played the role of Dua in Ehd-e-Wafa. She has played the main roles in Hoor Pari, Jo Tu Chahey, Mera Dil Mera Dushman. and Taana Baana. </p>

                </div>
                <div className='profile-detail-2'>
                    <div className='detail-list'>
                        <span className='title'>Cast :</span>
                        <span>Rajpoot</span>
                    </div>
                    <div className='detail-list'>
                        <span className='title'>Religion :</span>
                        <span>Islam, Sunni</span>
                    </div>
                    <div className='detail-list'>
                        <span className='title'>Height :</span>
                        <span>5.4 ft</span>
                    </div>
                    <div className='detail-list'>
                        <span className='title'>Education :</span>
                        <span>Graduated in media and Communication</span>
                    </div>
                    <div className='detail-list'>
                        <span className='title'>Profession :</span>
                        <span>model and Actress</span>
                    </div>
                    <div className='detail-list'>
                        <span className='title'>mother tounge :</span>
                        <span>Urdu</span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Profile