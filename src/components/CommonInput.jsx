import React from 'react'

import inputIcon from "../assets/icons/inputIcon.png"


const iconStyle = {
    width: "25px",
    height: "10px",
    position: "absolute",
    top: "24px",
    right: "36px",
    zIndex: "1"
}
const CommonInput = (props) => {
    const { handleChange, className } = props
    return (
        <div style={{ position: "relative" }}>
            <input className={className} type="number" onChange={(e) => {
                e.preventDefault()
                handleChange(e.target.value)
            }}
                placeholder='20'
            />
            <img src={inputIcon} alt=""
                style={iconStyle} />
        </div>
    )
}

export default CommonInput