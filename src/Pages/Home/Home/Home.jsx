import SubBanner from "../../../Components/SubBanner/SubBanner";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Menu from "../Menu/Menu";
import Testimonial from "../Testimonial/Testimonial";

import { Helmet} from 'react-helmet-async';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Home
                </title>
            </Helmet>
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