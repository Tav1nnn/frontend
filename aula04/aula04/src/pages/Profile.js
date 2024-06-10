import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const profileInfo = {
    name: "John Doe",
    email: "john@example.com",
    profilePicture: "https://example.com/johndoe.jpg",
    bio: "Software Engineer at ABC Corp",
    followers: 100
}


const Profile = () => {

    const [info, setInfo] = useState()

    useEffect(() => {
        setTimeout(() => {
            setInfo(profileInfo)
        }, 1000)
    }, [])

    return (
        
        <div>
            <Link to="/">
            IR PARA TODO LIST
            </Link>
            {
                info ? <div>
                    <h1>{info.name}</h1>
                    <img src={info.profilePicture} alt="Profile Picture"/>
                    <p>{info.email}</p>
                    <p>{info.bio}</p>
                    <p>Followers: {info.followers}</p>
                </div> : <div>Carregando</div>
            }
            
        </div>        
    );
}

export default Profile;