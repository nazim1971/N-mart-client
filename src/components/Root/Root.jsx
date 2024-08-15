import { Outlet } from "react-router-dom";
import Footer from "../Home/Footer";
import Navber from "../Navber/Navber";
import { useState, useEffect } from "react";
import LoadingSpinner from "../Hooks/LoadingSpiner";

const Root = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Simulate a delay for loading
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Adjust the delay as needed

        // Cleanup timeout if component unmounts
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <LoadingSpinner />;
    }
    return (
        <div className="max-w-[1920px] mx-auto" >
            <div className=" w-[94%] mx-auto ">
            <Navber/>
            <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default Root;