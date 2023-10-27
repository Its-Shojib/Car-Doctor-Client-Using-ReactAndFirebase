import { Outlet } from "react-router-dom";
import Header from "../Shared Component/Header";
import Footer from "../Shared Component/Footer";


const MainLayout = () => {
    return (
        <>
            <div className="max-w-screen-xl mx-auto">
                <Header></Header>
            </div>
            <div className="max-w-screen-xl mx-auto my-5">
                <Outlet></Outlet>
            </div>
            <div className="max-w-screen-xl mx-auto px-4">
                <Footer></Footer>
            </div>

        </>
    );
};

export default MainLayout;