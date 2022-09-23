import React from "react"
import ProfileSide from "../../components/profileSide/ProfileSide"
import './Home.css'

const Home = () => {
    return (
        <div className="Home">
            <ProfileSide />
            <div className="postSide">Post</div>
            <div className="rightSide">Rigth</div>
        </div>
    )
}

export default Home