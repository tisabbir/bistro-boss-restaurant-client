import SubBanner from "../../../Components/SubBanner/SubBanner";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Menu from "../Menu/Menu";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <SubBanner heading={'Bistro Boss'} />
            <Menu />
            <CallUs />
            <Featured />
            <Testimonial />
        </div>
    );
};

export default Home;