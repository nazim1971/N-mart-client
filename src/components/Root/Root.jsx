import { Outlet } from "react-router-dom";
import Footer from "../Home/Footer";
import Navber from "../Navber/Navber";

const Root = () => {
    return (
        <div className="max-w-[1920px] mx-auto" >
            <div className=" w-[94%] mx-auto ">
            <Navber/>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;