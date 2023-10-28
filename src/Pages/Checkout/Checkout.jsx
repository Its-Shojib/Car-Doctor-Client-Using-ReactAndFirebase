import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from './../../AuthProvider/AuthProvier';
import swal from "sweetalert";


const Checkout = () => {
    let { user } = useContext(AuthContext)
    let service = useLoaderData();
    let { title, _id, price, img } = service;


    let handleCheckout = e => {
        e.preventDefault();
        let form = e.target;
        let name = form.name.value;
        let email = form.email.value;
        let price = form.price.value;
        let date = form.date.value;

        let bookings = {
            customerName: name,
            email,
            date,
            price,
            img,
            service_id: _id,
            service: title,
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                swal("Good job!", "Data inserted Successfuly!", "success");
            }
        })

    }
    return (
        <div>
            <h1 className="text-center text-2xl font-bold">Checkout: {title}</h1>

            <div className="my-10 bg-gray-300 p-10 rounded-lg">
                <form onSubmit={handleCheckout}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
                        <div>
                            <p className="text-left text-lg font-semibold">User Name</p>
                            <input className="w-full p-2 pl-7 text-black rounded-lg my-1"
                                type="text"
                                name="name"
                                defaultValue={user?.displayName}
                                placeholder="Type your name"
                                required />
                        </div>
                        <div >
                            <p className="text-left text-lg font-semibold">User Email</p>
                            <input className="w-full p-2 pl-6 text-black rounded-lg my-1"
                                type='email'
                                name="email"
                                defaultValue={user?.email}
                            />
                        </div>
                        <div>
                            <p className="text-left text-lg font-semibold">Confirm Date</p>
                            <input className="w-full p-2 pl-7 text-black rounded-lg my-1"
                                type="date"
                                name="date"
                                required />
                        </div>
                        <div >
                            <p className="text-left text-lg font-semibold">Due Amount</p>
                            <input className="w-full p-2 pl-6 text-black rounded-lg my-1"
                                type='number'
                                name="price"
                                defaultValue={price}
                            />
                        </div>
                    </div>
                    <button type="submit" className="bg-orange-600 text-white btn-block mx-auto my-5 py-2 font-bold">Confirm Order</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;