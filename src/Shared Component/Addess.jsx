import { FcCalendar } from 'react-icons/fc';
import { PiPhoneCallFill } from 'react-icons/pi';
import { FaSearchLocation } from 'react-icons/fa';

const Addess = () => {
    return (
        <div className="flex justify-center items-center flex-col md:flex-row gap-20 bg-black text-white md:h-52 py-5 my-10">
            <div>
                <div className="flex gap-3 justify-center items-center">
                    <FcCalendar className='text-4xl'></FcCalendar>
                    <div>
                        <p>We are open monday-friday</p>
                        <p>7:00 am - 9:00 pm</p>
                    </div>
                </div>
            </div>
            <div>
            <div className="flex gap-3 justify-center items-center">
                    <PiPhoneCallFill className='text-4xl'></PiPhoneCallFill>
                    <div>
                        <p>Have a question?</p>
                        <p>+2546 251 2658</p>
                    </div>
                </div>
            </div>
            
            <div>
            <div className="flex gap-3 justify-center items-center">
                    <FaSearchLocation className='text-4xl'></FaSearchLocation>
                    <div>
                        <p>Need a repair? our address</p>
                        <p>Liza Street, New York</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Addess;