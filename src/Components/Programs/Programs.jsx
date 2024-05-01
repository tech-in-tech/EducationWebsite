import React from 'react'
import "./Programs.css"
import pg1 from "../../assets/program-1.png"
import pg2 from "../../assets/program-2.png"
import pg3 from "../../assets/program-3.png"
import pgIcon1 from "../../assets/program-icon-1.png"
import pgIcon2 from "../../assets/program-icon-2.png"
import pgIcon3 from "../../assets/program-icon-3.png"

const Programs = () => {
  return (
    <div className='programs'>

      <div className="program">
        <img src={pg1} alt="" />
        <div className='caption'>
          <img src={pgIcon1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>

      <div className="program">
        <img src={pg2} alt="" />
        <div className='caption'>
          <img src={pgIcon2} alt="" />
          <p>Master Degree</p>
        </div>
      </div>

      <div className="program">
        <img src={pg3} alt="" />
        <div className='caption'>
          <img src={pgIcon3} alt="" />
          <p>Post Graduation</p>
        </div>
      </div>

    </div>
  )
}

export default Programs
