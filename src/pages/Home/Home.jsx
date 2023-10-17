import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServicesCard from "../../ServicesCard/ServicesCard";

const Home = () => {
    const servicesData = useLoaderData()
    const [carService, setCarService] = useState(servicesData)

    const handleDeleteSevices = (serviceId) => {
        const updatedServices = carService.filter(service => service._id !== serviceId)
        setCarService(updatedServices)
    }

    return (
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 my-10">

            <div className="grid grid-cols-1 md:grid-cols-2" >
                {carService?.map((item) => <ServicesCard key={item._id} data={item} deleteService={handleDeleteSevices} />)}
            </div>
        </div>
    );
};

export default Home;