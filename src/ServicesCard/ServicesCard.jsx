import { AiFillEdit, AiFillDelete } from "react-icons/ai"

const ServicesCard = ({ data }) => {
    const { photoURL, serviceName, servicePrice , _id ,deleteService } = data || {}
    const handleDelete=(_id)=>{
        console.log('delete done',_id);
        fetch(`http://localhost:3000/service/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            deleteService(_id)
        })
    }
    return (
        <div>

            {/* services card */}
            <div className="shadow-lg p-4 rounded-md space-y-2">

                <div>
                    <img className="w-full h-60 rounded-md" src={photoURL} />
                </div>

                <div className="flex justify-between " >
                <div>
                    <h2 className="text-lg" >Service Name: {serviceName}</h2>
                    <p className="text-lg" >Price: ${servicePrice}</p>
                </div>

                <div className="flex gap-2 mt-2" >
                    <div className="text-xl" >
                        <AiFillEdit />
                    </div>

                    <div onClick={()=>handleDelete(_id)} className="text-xl" >
                        <AiFillDelete />
                    </div>
                </div>
                </div>

            </div>
        </div>
    );
};

export default ServicesCard;