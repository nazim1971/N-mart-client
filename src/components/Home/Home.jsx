import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";



const Home = () => {

    const { data: transHis = [] } = useQuery({
        queryKey: ['allTransHistory'],
        queryFn: async () => {
          const { data } = await axios.get(`http://localhost:5000/v1/allProducts`);
          return data;
        },
      });
      const {
        register,
        handleSubmit
      } = useForm()
      const onSubmit = (data) => {
        const {email,password} = data }

    return (
        <div>
             <div className="flex gap-5">
                <input type="text" placeholder="Search" className="input input-primary" />
                <div className="border p-2">
                    <h2 className="font-bold">Sort </h2>
                    <select name="Sort" id="">
                        <option value="Low to High">Low to High</option>
                        <option value="Hign to Low">Hign to Low</option>
                        <option value="Old to New">Old to New</option>
                        <option value="New to Old">New to Old</option>
                    </select>
                </div>
                <div className="border p-2">
                    <h2 className="font-bold">Category Name</h2>
                    <select name="Category" id="">
                        <option value="Fitness">Fitness</option>
                        <option value="Health">Health</option>
                        <option value="Home Appliances">Home Appliances</option>
                        <option value="Electronics">Electronics</option>
                    </select>
                </div>
                <div>
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <h1>Price</h1>
                    <div className="flex gap-3">
                    <input
                  {...register("email",{required: true})}
                  id="LoggingEmailAddress" className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="BDT" />
                   <input
                  {...register("email",{required: true})}
                  id="LoggingEmailAddress" className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="BDT" />
             
             <button type="submit" className=" btn btn-primary px-6 py-3 text-sm font-medium tracking-wide  capitalize transition-colors duration-300 transform  rounded-lg  focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                     ok
                  </button>
                    </div>
             
              </form>
                </div>
             </div>

             <div className="grid grid-cols-3 gap-5 shadow-xl mt-10 rounded-xl">
                {
                    transHis.map((i)=> 
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
        </div>
    );
};

export default Home;