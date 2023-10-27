import img2 from '../../public/assets/images/banner/2.jpg'
import img4 from '../../public/assets/images/banner/4.jpg'
import img5 from '../../public/assets/images/banner/5.jpg'
import img6 from '../../public/assets/images/banner/6.jpg'

const Banner = () => {

    return (
        <div className="h-[550px]">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img5} className="w-full h-[550px] rounded-xl" />
                    <div className="absolute flex md:items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 top-0 rounded-xl">
                        <div className="space-y-5 w-full md:w-8/12 px-5 md:pl-20 text-white">
                            <h1 className="text-4xl md:text-6xl font-bold w-full md:w-8/12">Affordable Price For Car Servicing</h1>
                            <p className="w-10/12">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-5">
                                <button className="btn btn-outline bg-[#FF3811] text-white">Discover More</button>
                                <button className="btn btn-outline text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform bottom-10 right-10 gap-10 -translate-y-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-[#FF3811]">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full h-[550px] rounded-xl" />
                    <div className="absolute flex md:items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 top-0 rounded-xl">
                        <div className="space-y-5 w-full md:w-8/12 px-5 md:pl-20 text-white">
                            <h1 className="text-4xl md:text-6xl font-bold w-full md:w-8/12">Affordable Price For Car Servicing</h1>
                            <p className="w-10/12">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-5">
                                <button className="btn btn-outline bg-[#FF3811] text-white">Discover More</button>
                                <button className="btn btn-outline text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform bottom-10 right-10 gap-10 -translate-y-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-[#FF3811]">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img4} className="w-full h-[550px] rounded-xl" />
                    <div className="absolute flex md:items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 top-0 rounded-xl">
                        <div className="space-y-5 w-full md:w-8/12 px-5 md:pl-20 text-white">
                            <h1 className="text-4xl md:text-6xl font-bold w-full md:w-8/12">Affordable Price For Car Servicing</h1>
                            <p className="w-10/12">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-5">
                                <button className="btn btn-outline bg-[#FF3811] text-white">Discover More</button>
                                <button className="btn btn-outline text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform bottom-10 right-10 gap-10 -translate-y-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-[#FF3811]">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img6} className="w-full h-[550px] rounded-xl" />
                    <div className="absolute flex md:items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 top-0 rounded-xl">
                        <div className="space-y-5 w-full md:w-8/12 px-5 md:pl-20 text-white">
                            <h1 className="text-4xl md:text-6xl font-bold w-full md:w-8/12">Affordable Price For Car Servicing</h1>
                            <p className="w-10/12">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-5">
                                <button className="btn btn-outline bg-[#FF3811] text-white">Discover More</button>
                                <button className="btn btn-outline text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform bottom-10 right-10 gap-10 -translate-y-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-[#FF3811]">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;