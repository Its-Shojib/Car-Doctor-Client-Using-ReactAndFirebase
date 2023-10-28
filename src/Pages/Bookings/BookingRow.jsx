
import PropTypes from 'prop-types';

const BookingRow = ({ booking,handleDelete,handleConfirm }) => {
    let {_id, img, customerName, email, price, service, date,status } = booking;



    return (
        <tr>
            <th>
                <label>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service}</div>
                    </div>
                </div>
            </td>
            <td>
                {customerName}
            </td>
            <td>{email}</td>
            <td>{price}</td>
            <td>{date}</td>

            <th>
                {
                    status ==='confirm' ? <span className='font-bold text-red-600'>Confirmed</span> :<button onClick={()=>handleConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                }
            </th>
        </tr>
    );
};
BookingRow.propTypes = {
    booking: PropTypes.object,
    handleDelete: PropTypes.func,
    handleConfirm: PropTypes.func
}
export default BookingRow;