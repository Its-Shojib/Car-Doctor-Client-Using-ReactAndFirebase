import img1 from '../../public/assets/images/about_us/person.jpg'
import img2 from '../../public/assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className='flex justify-center flex-col md:flex-row gap-20 md:gap-5 my-10'>
            <div className='relative h-full flex-1 px-4'>
                <img className='w-11/12 md:w-10/12 h-full rounded-xl shadow-xl' src={img1} alt="" />
                <img className='absolute h-5/6 md:h-64 -bottom-16 right-5 w-1/3 md:w-[270px] border-gray-400 border-8 rounded-lg' src={img2} alt="" />
            </div>
            <div className='space-y-7 flex-1 px-2'>
                <p className='text-red-600 font-bold text-center md:text-left'>About Us</p>
                <h1 className='text-4xl font-bold md:w-3/6'>We are qualified & of experience in this field</h1>
                <p className=' md:w-5/6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <p className=' md:w-5/6'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <button className='bg-[#FF3811] text-white px-4 py-2 rounded-lg'>Get More Info</button>

            </div>
            
        </div>
    );
};

export default AboutUs;