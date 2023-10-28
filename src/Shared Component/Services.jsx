import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    let [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-20'>
            <div className="text-center space-y-4 my-5">
                <p className="text-red-600 font-bold text-lg">Service</p>
                <h1 className="text-4xl font-bold">Our Service Area</h1>
                <p className="max-w-xl mx-auto">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5">
                {
                    services.map(service => <ServiceCard
                        key={service.service_id}
                        service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;