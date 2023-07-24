import React from "react";
import Hero from "./Hero";
import AOS from 'aos';
import { useEffect } from "react";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import '../Styles/homepage.css';
import Footer from "./Footer";
import UserService from '../services/userService'
import { addUserDetails } from '../Components/Stores/MasterSlice';
import { motion } from "framer-motion";
import randomColor from "randomcolor";

const Home = () => {

    const dispatch = useDispatch();
    const { Emails } = useSelector((state) => state.master);
    const {Token} = useSelector((state) => state.master );
    const {color} = randomColor();
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try{
            const response = await UserService.getUserByEmail(Emails,Token);
            console.log("response", " ", response.data);
            dispatch(addUserDetails(response.data));
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <motion.div
            initial={{ opasity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration:1}}
        >
            <Hero/>
            <div style={{ display: "flex", minHeight: "100vh" }}>
                <div className="homepage" data-aos="zoom-in" data-aos-duration="2000">
                    <div style={{ margin: "50px" }}>
                        <div className="pg1">
                            <div id="rightpic1">
                                <img id="pic" src="/images/home2.png" alt="img" width="100%" />
                            </div>
                            <div id="leftpic1">
                                <div style={{ display: "flex", justifyContent: "start" }}>

                                    <img src="/images/lemfresh.png" alt="img" width="20%" />

                                    <div style={{ marginTop: "30px" }}>
                                        <span style={{ fontSize: "45px" }}>L e m F r e s h</span>
                                    </div>
                                </div>
                                <h3 style={{ textAlign: "justify", lineHeight: "35px",fontFamily: "'Titillium Web', sans-serif" }}>Welcome to our online marketplace for local services!
                                    We are thrilled to present a platform
                                    that connects you with talented professionals
                                    right in your own community. Whether you need a plumber,
                                    electrician, personal trainer, photographer, or any
                                    other service provider, our marketplace is designed
                                    to make your search effortless and efficient.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </motion.div>


    );
}

export default Home;
