import React from "react";
import { useSelector } from "react-redux";
import { animated, useSpring } from "@react-spring/web";
import "../styles/profile.css"

const AProfile = () => {
    const { userDetails } = useSelector((state) => state.master);

    const profileAnimation = useSpring({
        from: { opacity: 0, transform: "translateY(-20px)" },
        to: { opacity: 1, transform: "translateY(0)" },
        config: { duration: 1000 },
    });

    console.log(userDetails);

    return (
        <div>
        <h1 className="profile-title">Your Profile</h1>
        <div className="profile-fixed-container"> 
          <animated.div className="profile-card-content" style={profileAnimation}>
            <div style={{ display: "flex", margin: "0 auto" }}>
                <div style={{ display: "flex", justifyContent: "center", width: "50%" }}>
                    <div className="profile-card-content">
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gridGap: "20px",
                                margin: "20px",
                            }}>
                            <div>
                                <h2 className="profile-field">First Name</h2>
                            </div>
                            <div className="profile-value">
                                <h2>{userDetails.firstName}</h2>
                            </div>
                            <div>
                                <h2 className="profile-field">Last Name</h2>
                            </div>
                            <div className="profile-value">
                                <h2>{userDetails.lastName}</h2>
                            </div>
                            <div>
                                <h2 className="profile-field">Username</h2>
                            </div>
                            <div className="profile-value">
                                <h2>{userDetails.username}</h2>
                            </div>
                            <div>
                                <h2 className="profile-field">Date Of Birth</h2>
                            </div>
                            <div className="profile-value">
                                <h2>{userDetails.dob}</h2>
                            </div>
                            <div >
                                <h2 className="profile-field">Email ID</h2>
                            </div>
                            <div className="profile-value">
                                <h2>{userDetails.email}</h2>
                            </div>
                            <div>
                                <h2 className="profile-field">Phone Number</h2>
                            </div>
                            <div className="profile-value">
                                <h2>{userDetails.phoneNumber}</h2>
                            </div>
                            <div >
                                <h2 className="profile-field">Qualification</h2>
                            </div>
                            <div className="profile-value">
                                <h2>{userDetails.qualification}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </animated.div>
        </div>
        </div>
    );
};

export default AProfile;
