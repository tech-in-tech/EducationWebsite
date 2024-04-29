import React from 'react'
import "./Programs.css"
import pg1 from "../../assets/program-1.png"
import pg2 from "../../assets/program-2.png"
import pg3 from "../../assets/program-3.png"

const Programs = () => {
  return (
    <div className='programs'>
      
      <div className="program">
        <img src={pg1} alt="" />
      </div>

      <div className="program">
        <img src={pg2} alt="" />
      </div>

      <div className="program">
        <img src={pg3} alt="" />
      </div>

    </div>
  )
}

export default Programs
