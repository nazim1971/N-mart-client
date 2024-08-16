import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {  useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import LoadingSpinner from "../Hooks/LoadingSpiner";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";



const Home = () => {

    const [category, setCategory] = useState('');
    const [sort, setSort] = useState('');
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });
    const [searchQuery, setSearchQuery] = useState('');
    const [brand, setBrand] = useState('');
    const [page, setPage] = useState(1); // Current page
    

    

    const { data: transHis = {products:[] , totalPages:1 ,brands: [], categories: []} , isError, isFetching, refetch} = useQuery({
        queryKey: ['allTransHistory', category, sort, priceRange, searchQuery, brand, page],
        queryFn: async () => {
          const { data } = await axios.get(`https://n-mart-server.vercel.app/v1/allProducts`, {
            params: {
              category,
              sort,
              minPrice: priceRange.min,
              maxPrice: priceRange.max,
              search: searchQuery,
              brand, 
              page
            },
          });
          return data;
        },
        keepPreviousData: true,
      });

      const {
        register,
        handleSubmit
      } = useForm()
      const onSubmit = (data) => {
        setPriceRange({ min: data.minPrice, max: data.maxPrice });
        setPage(1);
        }

        const handleNextPage = () => {
            if (transHis && page < transHis.totalPages) {
                setPage((prev) => prev + 1);
            }
        };
        const handlePrevPage = () => {
            if (page > 1) {
                setPage((prev) => prev - 1);
            }
        };
        useEffect(() => {
            refetch();
          }, [category, brand, searchQuery, sort, priceRange, page, refetch]);
    
    
        if (isError) {
            return toast.error(`${isError.message}`);
        }

    return (
        <div className="max-w-[1290px] mb-16 mx-auto min-h-screen">
             <div className=" gap-5">
                
              <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 mt-5">
                  {/* search */}
                  <div className="flex flex-col ">
                    <label className="font-bold">
                        Search
                    </label>
                <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} 
                type="text" placeholder="Search" className=" h-12 rounded-xl pl-3 border " />
                </div>

               <div className=" md:col-span-2 col-span-1 flex items-center text-sm lg:text-base lg:col-span-2 mx-auto">
               <div className="flex text-sm  space-x-2 ">
                 {/* sort */}
                 <div className="border p-2 rounded-xl">
                    <h2 className="font-bold">Sort </h2>
                    <select name="Sort" className="w-full"
                     onChange={(e) => {setSort(e.target.value) ;setPage(1)}}
                    >
                        <option value="">Select</option>
                        <option value="LowToHigh">Low to High</option>
                        <option value="HignToLow">Hign to Low</option>
                        <option value="OldtoNew">Old to New</option>
                        <option value="NewtoOld">New to Old</option>
                    </select>
                </div>
                {/* Brand */}
                <div className="border p-2 rounded-xl">
                    <h2 className="font-bold">Brand </h2>
                    <select 
                    className="w-full"
                    value={brand}
                        onChange={(e) => {setBrand(e.target.value) ;setPage(1)}}
                    >
                        <option value="">Select</option>
                        {transHis.brands.map((brand, index) => (
                            <option key={index} value={brand}>{brand}</option>
                        ))}
                    </select>
                </div>
                {/* category */}
                <div className="border  p-2 rounded-xl">
                    <h2 className="font-bold">Category</h2>
                    <select  className="w-full"
                    value={category}
                        onChange={(e) => {setCategory(e.target.value) ; setPage(1)}}
                    >
                        <option value="">Select</option>
                        {transHis.categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

               </div>
               </div>
                 {/* price */}
                 <div className="md:col-span-2  lg:col-span-1">
                <form  onSubmit={ handleSubmit(onSubmit)}>
                    <h1 className="font-bold">Price</h1>
                    <div className="flex gap-3">
                    <input
                   {...register("minPrice")}
                  id="LoggingEmailAddress" className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="number" placeholder="10" />
                   <input
                  {...register("maxPrice")}
                  id="LoggingEmailAddress" className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="number" placeholder="1000" />
             
             <button type="submit" className=" btn bg-green-500 text-white   text-sm font-medium    duration-300 transform  rounded-lg  btnJoin before:bg-[#F4B826] active:before:bg-[#F4B826]">
                     Submit
                  </button>
                    </div>
             
              </form>
                </div>

              </div>
              
             </div>

            { isFetching ? <LoadingSpinner /> :
             <div className="flex gap-8  flex-wrap  my-10 rounded-xl">
             {
                 transHis.products.map((i)=> 
                    <div key={i._id} className="h-[450px] mx-auto hover:border-green-500 hover:shadow-xl hover:-mt-5 w-[350px] border-[#1118271A] border transition-all duration-300 transform ease-in-out rounded-2xl bg-white p-5 ">

                 <div className=" bg-cover rounded-xl  relative w-full h-[220px] mb-6 bg-no-repeat" style={{backgroundImage: `url(${i.image})`, backgroundPosition: 'center'}}>
                   <p className="text-[15px] w-fit absolute top-5 left-5 font-medium bg-green-500 text-white px-3 py-1 text-center rounded-[50px] btnJoin before:bg-[#F4B826] active:before:bg-[#F4B826]  "> {i.category} </p>
                 </div>
                 <div className="flex justify-between mb-[14px] ">
                   <p className="text-[15px] text-[#111827aa] px-3 py-1 border font-medium rounded-[50px]"> {i.brand} </p>
                   <p className="text-primaryC text-2xl font-bold flex  items-center "> ${i.price}
                   </p>
                 </div>
                 <p className=" font-bold   ">{i.name} </p>
                
                 <div className="mb-3 text-sm">
                    {i.description}
                 </div>

                 <div className="text-[#111827b0] border-t  pt-2 text-sm font-semibold flex gap-4">
                   <p className="flex items-center gap-[6px] "> <IoMdTime  className=" text-lg" /> <span> {new Date(i.creationDate).toISOString().split('T')[0]}  </span> </p>
                   <p className="flex items-center gap-[6px] "> <FaStar className="text-yellow-500" />
                   <span> {i.ratings} </span> </p>
                 </div>
               </div>
                 )
             }
          </div>
            }
             <div className="flex gap-10 justify-center mt-5">
                <button
                    onClick={handlePrevPage}
                    disabled={page === 1}
                    className="btn bg-green-500 btnJoin before:bg-[#F4B826] active:before:bg-[#F4B826] text-white"
                >
                    Previous-{page-1}
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={page === transHis.totalPages}
                    className="btn text-white bg-green-500 btnJoin before:bg-[#F4B826] active:before:bg-[#F4B826]"
                >
                    Next-{page}
                </button>
            </div>
        </div>
    );
};

export default Home;

