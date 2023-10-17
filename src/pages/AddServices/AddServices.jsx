
const AddServices = () => {
    const handleSubmit=(event)=>{
        event.preventDefault()
        const form=event.target 
        const serviceName=form.serviceName.value 
        const servicePrice=form.servicePrice.value
        const photoURL=form.photoURL.value 
        const serviceType=form.serviceType.value 
        const productDescription=form.productDescription.value 
        const addService={serviceName,servicePrice,photoURL,serviceType,productDescription}
        console.log(addService)

        fetch("http://localhost:3000/service",{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addService)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })

    }
    return (
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 my-10" >
            {/* <h2>Add Services</h2> */}

            {/* main div */}
            <div className="bg-[#F3F3F3] p-6 rounded-md" >

                <form onSubmit={handleSubmit} >
                    {/* service name and service price */}
                    <div className="flex gap-5 my-5 " >
                        <div className="flex-1" >
                            <input className="bg-white p-2 rounded-md w-full outline-none" type="text" name="serviceName" placeholder="Service Name" />
                        </div>

                        <div className="flex-1" >
                            <input className="bg-white w-full p-2 rounded-md outline-none" type="number" name="servicePrice" placeholder="Service Price" />
                        </div>
                    </div>

                    {/* photoURL and service type */}
                    <div className="flex gap-5 my-5" >
                        <div className="flex-1" >
                            <input className="bg-white p-2 rounded-md w-full outline-none" type="text" name="photoURL" placeholder="Photo URL" />
                        </div>

                        <div className="flex-1" >
                            <input className="bg-white w-full p-2 rounded-md outline-none" type="text" name="serviceType" placeholder="Service Type" />
                        </div>
                    </div>

                    {/* product description */}
                    <div className="my-5" >
                        <textarea className="w-full rounded-md resize-none p-2 outline-none" name="productDescription" rows="10" placeholder="Product Description"></textarea>
                    </div>

                    {/* submit button */}
                    <div className="my-5" >
                        <input className="bg-[#FF3811] w-full rounded-md p-2 text-white font-simibold text-xl" type="submit" value="Submit" />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddServices;