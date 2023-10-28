import p1 from '../../public/assets/images/products/1.png'
import p2 from '../../public/assets/images/products/2.png'
import p3 from '../../public/assets/images/products/3.png'
import p4 from '../../public/assets/images/products/4.png'
import p5 from '../../public/assets/images/products/5.png'
import p6 from '../../public/assets/images/products/6.png'


const Products = () => {

    return (
        <div className='my-10'>
            <div className='text-center space-y-3'>
                <p className='text-red-600 font-bold'>Popular Products</p>
                <h1 className='text-4xl font-bold'>Browse Our Products</h1>
                <p className='text-sm md:w-[600px] mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
                {/* card-1 */}
                <div className="card shadow-xl">
                    <figure className="px-5 m-4 pt-5 bg-gray-200">
                        <img src={p1} alt="" className="rounded-xl h-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p className='text-sm'>
                            <div className="rating ">
                                <input type="radio" name="rating-9" className="rating-hidden" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" checked />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                            </div>
                        </p>
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p className='text-red-600'>$ 20.00</p>
                    </div>
                </div>
                {/* card-2 */}
                <div className="card shadow-xl">
                    <figure className="px-5 m-4 pt-5 bg-gray-200">
                        <img src={p2} alt="" className="rounded-xl h-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p>
                            <div className="rating ">
                                <input type="radio" name="rating-9" className="rating-hidden" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" checked />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                            </div>
                        </p>
                        <h2 className="card-title">Car Air Filter</h2>
                        <p className='text-red-600'>$ 20.00</p>
                    </div>
                </div>
                {/* card-3 */}
                <div className="card shadow-xl">
                    <figure className="px-5 m-4 pt-5 bg-gray-200">
                        <img src={p3} alt="" className="rounded-xl h-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p>
                            <div className="rating ">
                                <input type="radio" name="rating-9" className="rating-hidden" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" checked />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                            </div>
                        </p>
                        <h2 className="card-title">Cools Led Light</h2>
                        <p className='text-red-600'>$ 20.00</p>
                    </div>
                </div>
                {/* card-4 */}
                <div className="card  shadow-xl">
                    <figure className="px-5 m-4 pt-5 bg-gray-200">
                        <img src={p4} alt="" className="rounded-xl h-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p>
                            <div className="rating ">
                                <input type="radio" name="rating-9" className="rating-hidden" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" checked />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                            </div>
                        </p>
                        <h2 className="card-title">Battery Charge</h2>
                        <p className='text-red-600'>$ 20.00</p>
                    </div>
                </div>
                {/* card-5 */}
                <div className="card  shadow-xl">
                    <figure className="px-5 m-4 pt-5 bg-gray-200">
                        <img src={p5} alt="" className="rounded-xl h-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p>
                            <div className="rating ">
                                <input type="radio" name="rating-9" className="rating-hidden" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" checked />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                            </div>
                        </p>
                        <h2 className="card-title">Cools Led Light</h2>
                        <p className='text-red-600'>$ 20.00</p>
                    </div>
                </div>
                {/* card-6 */}
                <div className="card shadow-xl">
                    <figure className="px-5 m-4 pt-5 bg-gray-200">
                        <img src={p6} alt="" className="rounded-xl h-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p>
                            <div className="rating ">
                                <input type="radio" name="rating-9" className="rating-hidden" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" checked />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                            </div>
                        </p>
                        <h2 className="card-title">Cools Led Light</h2>
                        <p className='text-red-600'>$ 20.00</p>
                    </div>
                </div>

            </div>

            <button className='px-4 py-2 rounded hover:bg-red-600 hover:text-white font-semibold block mx-auto border border-red-600 text-red-700'>More Products</button>
        </div>
    );
};

export default Products;

