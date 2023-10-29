import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvier";
import BookingRow from "./BookingRow";
import swal from 'sweetalert';
import axios from "axios";

const Bookings = () => {
    let { user } = useContext(AuthContext);
    let [bookings, setBookings] = useState([])

    let url = `http://localhost:5000/bookings/?email=${user.email}`

    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setBookings(res.data)
            })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [url])

    let handleDelete = id => {
        let proceed = confirm("Are you wanna delete?");
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        swal('Deleted Succefully');
                        let remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining)
                    }
                })
        }
    }
    let handleConfirm = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    let remaining = bookings.filter(booking => booking._id !== id);
                    let updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm';
                    let newBooking = [updated, ...remaining];
                    setBookings(newBooking);
                }
            })
    }
    return (
        <div>
            <h2 className="text-center text-3xl my-5">Your Bookings: {bookings.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    Action
                                </label>
                            </th>
                            <th>Service</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleConfirm={handleConfirm}
                            ></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;