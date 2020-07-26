import React, { useState } from "react"
import {FaStar} from "react-icons/fa"

const StarIcon :React.FC = () =>{

    const [checked,setChecked] = useState(false)

    return(
        <div className="mystar">
            <label>
            <input type="checkbox" name="rating" checked={checked} onChange={()=>setChecked(!checked)}/>
            <FaStar className="star" color={checked? "yellow" : "grey"}/>
            </label>
        </div>
    )

}

export default StarIcon