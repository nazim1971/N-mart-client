import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoTwitter } from "react-icons/io";


const Footer = () => {
    return (
        <div className=" bg-no-repeat bg-cover " style={{backgroundImage: 'url(footerBg.png)'}}>

            <div className="max-w-[1290px] mx-auto px-5 flex items-center  h-full ">

   <div className=" flex flex-col justify-end  mx-auto  h-full ">
   <div className="grid lg:grid-cols-6 md:grid-cols-4 gap-8 grid-cols-2  my-20 w-full ">
    <div className="col-span-2">
    <a href="#home" className="flex items-center space-x-2">
                  <div className="h-11 w-11">
                  <img  className="h-full w-full" src="https://i.ibb.co/C2Rx4rg/website-logo-removebg-preview.png" alt="" />
                  </div>
                <p className="font-cali text-2xl text-white ">N-mart</p>
             </a>
             <p className="text-lg font-medium text-[#FFFFFFB2] mb-5 mt-2 leading-[28px] ">Contrary to popular belief, Lorem Ipsum is <br /> not simply random text. It has roots.</p>
    <div className="text-white flex gap-5 ">
            <a href="#home" className="bg-[#cdc9c934] p-[5px] transition-colors ease-in duration-300 h-10 w-10 flex items-center text-xl justify-center rounded-full hover:bg-green-500">
            <IoLogoTwitter  />
            </a>
            <a href="#home" className="bg-[#cdc9c934] p-[5px] transition-colors ease-in duration-300 h-10 w-10 flex items-center text-xl justify-center rounded-full hover:bg-green-500">
            <FaFacebookF  />
            </a>
            <a href="#home" className="bg-[#cdc9c934] p-[5px] transition-colors ease-in duration-300 h-10 w-10 flex items-center text-xl justify-center rounded-full hover:bg-green-500">
            <FaInstagram  />
            </a>
            <a href="#home" className="bg-[#cdc9c934] p-[5px] transition-colors ease-in duration-300 h-10 w-10 flex items-center text-xl justify-center rounded-full hover:bg-green-500">
            <FaGithub  />
            </a>
    </div>
    </div>
    <div>
        <h3 className="font-bold text-[22px] text-white mb-[22px] "> Support</h3>
        <div className="text-[#ffffffa1] flex flex-col font-medium space-y-[20px] ">
            <a href="#home">Forum Support</a>
            <a href="#home">Help & FAQ</a>
            <a href="#home">Contact Us</a>
            <a href="#home">Pricing & Plans</a>
        </div>
    </div>
    <div>
        <h3 className="font-bold text-[22px] text-white mb-[22px] "> Company</h3>
        <div className="text-[#ffffffa1] flex flex-col font-medium space-y-[20px] ">
            <a href="#home">About Us</a>
            <a href="#home">Courses</a>
            <a href="#home">Help Centre</a>
            <a href="#home">News</a>
        </div>
    </div>
    <div className="col-span-2 " >
        <h2 className="font-bold text-[22px] text-white mb-9 ">Subscribe to Newsletter</h2>
        <div className="flex  relative">
            <HiOutlineMail  className="absolute top-4 text-lg left-5 text-[#17171769]"/>
            <input className="h-[50px]  w-[266px] pl-[50px] rounded-l-[50px] " type="text" placeholder="Enter email address" />
            <a href="#home"  className="text-white bg-green-500 btnJoin before:bg-[#F4B826] active:before:bg-[#F4B826] hover:text-secondaryC font-bold h-[50px]  w-[120px] rounded-r-[50px]  flex justify-center items-center">Join Now</a>
        </div>
    </div>
    </div>
    <div className="bg-[#FFFFFF0F] rounded-t-[10px] py-5 ">
        <h1 className="font-medium text-[#ffffff96] text-sm text-center ">© 2024 N-mart All Rights Reserved by site</h1>
    </div>
   </div>

    
            </div>
        </div>
    );
};

export default Footer;