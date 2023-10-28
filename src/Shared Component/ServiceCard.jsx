import PropTypes from 'prop-types';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    let { _id, title, img, price } = service;

    return (
        <div>
            <div className="card bg-gray-200 shadow-xl">
                <figure className="px-5 pt-5 ">
                    <img src={img} alt="" className="rounded-xl h-52" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className='flex justify-around items-center text-orange-700 font-bold'>
                        <p>Price: ${price}</p>
                        <Link to={`/checkout/${_id}`}><AiOutlineArrowRight className='text-xl cursor-pointer'></AiOutlineArrowRight></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
ServiceCard.propTypes = {
    service: PropTypes.object
}
export default ServiceCard;