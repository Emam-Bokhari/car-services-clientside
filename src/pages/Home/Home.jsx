import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServicesCard from "../../ServicesCard/ServicesCard";

const Home = () => {
    const servicesData=useLoaderData()
    const [service,setService]=useState(servicesData)
    console.log(servicesData);
    return (
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 my-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2" >
                {service?.map((item)=><ServicesCard key={item._id} data={item} />)}
            </div>
        </div>
    );
};

export default Home;