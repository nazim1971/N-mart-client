import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {  useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import LoadingSpinner from "../Hooks/LoadingSpiner";
import toast from "react-hot-toast";



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
             <div className="flex items-center gap-5">
                
                {/* search */}
                <div>
                    <label className="font-bold">
                        Search
                    </label>
                <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} 
                type="text" placeholder="Search" className="input l input-primary" />
                </div>
               <div className="grid grid-cols-3">
                 {/* sort */}
                 <div className="border p-2">
                    <h2 className="font-bold">Sort </h2>
                    <select name="Sort" id=""
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
                <div className="border p-2">
                    <h2 className="font-bold">Brand </h2>
                    <select name="Brand" 
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
                <div className="border p-2">
                    <h2 className="font-bold">Category Name</h2>
                    <select name="Category"
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
                {/* price */}
                <div>
                <form  onSubmit={ handleSubmit(onSubmit)}>
                    <h1>Price</h1>
                    <div className="flex gap-3">
                    <input
                   {...register("minPrice")}
                  id="LoggingEmailAddress" className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="number" placeholder="BDT 10" />
                   <input
                  {...register("maxPrice")}
                  id="LoggingEmailAddress" className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="number" placeholder="BDT 1000" />
             
             <button type="submit" className=" btn h- btn-primary px-6 py-3 text-sm font-medium tracking-wide  capitalize transition-colors duration-300 transform  rounded-lg  focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                     Submit
                  </button>
                    </div>
             
              </form>
                </div>
             </div>

            { isFetching ? <LoadingSpinner /> :
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 shadow-xl mt-10 rounded-xl">
             {
                 transHis.products.map((i)=> 
                 <div key={i._id} className="border p-2 space-y-2  h-[400px] ">
                     <div className="h-[200px] ">
                     <img src={i.image} className=" h-full mx-auto" alt="" />
                     </div>
                     <hr />
                     <h1 className='font-bold'>{i.name} </h1> 
                     <div className="flex justify-between">
                         <p>Price: {i.price} </p>
                         <p> Rating: {i.ratings}  </p>
                         </div>  

                         <div className="flex justify-between">
                         <p>Brand: {i.brand} </p>
                         <p> Category: {i.category}  </p>
                         </div>
                         <p>{i.description} </p>
                 </div>
                 )
             }
          </div>
            }
             <div className="flex gap-10 justify-center mt-5">
                <button
                    onClick={handlePrevPage}
                    disabled={page === 1}
                    className="btn bg-green-500"
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={page === transHis.totalPages}
                    className="btn bg-green-500"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Home;