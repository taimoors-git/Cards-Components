import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = () => {
  return (
<div className="card">
    <div className="parent">
        <div className="top">
            <img src="https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg" alt="" />
            <button>Save<Bookmark size={15}/></button>

        </div>
        <div className="center">
            <h3>Company <span>~Days ago</span></h3>
            <h2>ROLE</h2>
            <div className="tag">
                <h4>Tag1asdas</h4>
                <h4>Tag2</h4>
            </div>
        </div>

        <div className="bottom">
            <div>
                <h3>$120/hr</h3>
                <p>Lahore, Pakistan</p>
            </div>
            <button>Apply Now</button>
        </div>
    </div>
</div>
  )
}

export default Card
