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
const CommonSelect = (props) => {
    const { options, handleChange, className } = props

    return (
        <div style={{ position: "relative" }}>
            <select name="" id="" className={className}
                onChange={(e) => {
                    handleChange(e.target.value)
                }}
            >

                {options?.map((opt) => {
                    return (
                        <option value={opt?.value}>
                            {opt?.label}
                        </option>)
                })}

            </select>
            <img src={inputIcon} alt=""
                style={iconStyle} />

        </div>
    )
}

export default CommonSelect