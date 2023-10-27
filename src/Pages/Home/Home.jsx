import AboutUs from '../../Shared Component/AboutUs';
import Addess from '../../Shared Component/Addess';
import Banner from '../../Shared Component/Banner';
import Products from '../../Shared Component/Products';
import Services from '../../Shared Component/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <Addess></Addess>
            <Products></Products>
        </div>
    );
};

export default Home;